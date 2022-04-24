/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.logs.remove({});

const initialLogsDB = [
{
id: 1, type: "Barbell Deadleft", 
reps: "10", unit: "lb", 
note: "I feel good", 
created: new Date("2018-08-15"),
},
{
id: 2, type: "Pushup", 
reps: "10", unit: "",
note: "I can do more", 
created: new Date("2022-04-01"),
},
{
id: 3, type: "Pushup",
reps: "15", unit: "",
note: "Enough for today", 
created: new Date("2022-04-01"),
},
];

db.logs.insertMany(initialLogsDB);
const count = db.logs.count();
print('Inserted', count, 'train logs');

db.counters.remove({ _id: 'logs' });
db.counters.insert({ _id: 'logs', current: count });

db.logs.createIndex({ id: 1 }, { unique: true });
db.logs.createIndex({ type: 1 });
db.logs.createIndex({ note: 1 });
db.logs.createIndex({ created: 1 });

