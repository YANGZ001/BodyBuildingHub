const fs = require("fs");
require("dotenv").config();
const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { MongoClient } = require("mongodb");

const url = process.env.DB_URL || "mongodb://localhost/bbh";

let db;

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in GraphQL as a scalar",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return Number.isNaN(dateValue.getTime()) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      return Number.isNaN(value.getTime()) ? undefined : value;
    }
    return undefined;
  },
});

async function logList() {
  const logs = await db.collection("logs").find({}).toArray();
  return logs;
}

async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
}

function idValidate(id) {
  const errors = [];
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

function logValidate(log) {
  const errors = [];
  if (log.reps <= 0) {
    errors.push("Field reps must be a positive number");
  }
  if (log.number <= 0) {
    errors.push("Field number must be a positive number");
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

async function logDelete(_, { id }) {
  idValidate(id);
  const result = await db.collection("logs").deleteOne({ id: id });
  if (result.deletedCount != 1) throw new UserInputError("Invalid input");
  return result.deletedCount;
}

async function logAdd(_, { log }) {
  logValidate(log);
  const newLog = Object.assign({}, log);
  newLog.created = new Date();
  newLog.id = await getNextSequence("logs");

  const result = await db.collection("logs").insertOne(newLog);
  const savedLog = await db
    .collection("logs")
    .findOne({ _id: result.insertedId });
  return savedLog;
}

// functions for Videos List

async function vidList(_, { vType }) {
  const vids = await db.collection(vType).find({}).toArray();
  return vids;
}

async function searchDB(_, { vType, text }) {
  const vids = await db.collection(vType).find({ $text: {$search: text}}).toArray();
  return vids;
}

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("Connected to MongoDB at", url);
  db = client.db();
}

const resolvers = {
  Query: {
    logList,
    vidList,
    searchDB,
  },
  Mutation: {
    logAdd,
    logDelete,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const app = express();

const enableCors = (process.env.ENABLE_CORS || "true") === "true";
console.log("CORS setting:", enableCors);
server.applyMiddleware({ app, path: "/graphql", cors: enableCors });

const port = process.env.API_SERVER_PORT || 3000;

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
})();
