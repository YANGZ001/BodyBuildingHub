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

// Initialise DB for Tracker Logs
db.logs.remove({});

const initialLogsDB = [
  {
    id: 1,
    type: "Barbell Deadleft",
    reps: 10,
    number: 10,
    unit: "lb",
    note: "I feel good",
    created: new Date("2018-08-15"),
  },
  {
    id: 2,
    type: "Pushup",
    reps: 10,
    number: 15,
    unit: "",
    note: "I can do more",
    created: new Date("2022-04-01"),
  },
  {
    id: 3,
    type: "Pushup",
    reps: 15,
    number: 20,
    unit: "",
    note: "Enough for today",
    created: new Date("2022-04-01"),
  },
];

db.logs.insertMany(initialLogsDB);
const count = db.logs.count();
print("Inserted", count, "train logs");

db.counters.remove({ _id: "logs" });
db.counters.insert({ _id: "logs", current: count });

db.logs.createIndex({ id: 1 }, { unique: true });
db.logs.createIndex({ type: 1 });
db.logs.createIndex({ note: 1 });
db.logs.createIndex({ created: 1 });

// Initialise DB for Train Video List

db.trainVids.remove({});

const initialtrainVidsDB = [
  {
    id: 1,
    vId: "lXwm62SiLQ8",
    vName: "Bicep Workout (SORE IN 6 MINUTES!)",
    added: new Date("2022-03-24"),
    vComments: [
      {
        cId: 1,
        body: "1st Great video!",
        username: "Jack",
        userId: 1,
        parentId: null,
        created: new Date(2022, 03, 24, 12, 35, 08),
      },
      {
        cId: 2,
        body: "2nd I love it!",
        username: "Susan",
        userId: 2,
        parentId: null,
        created: new Date(2022, 03, 25, 22, 35, 08),
      },
    ],
  },
  {
    id: 2,
    vId: "jyFMBf-SrHs",
    vName: "Trap Workout (SORE IN 6 MINUTES!)",
    added: new Date("2022-03-24"),
    vComments: [],
  },
  {
    id: 3,
    vId: "x0f2sfsh7ns",
    vName: "Shoulder Workout (SORE IN 6 MINUTES!)",
    added: new Date("2022-03-24"),
    vComments: [],
  },
  {
    id: 4,
    vId: "nK3BNozPEx4",
    vName: "Back Workout (SORE IN 6 MINUTES!)",
    added: new Date("2022-03-24"),
    vComments: [],
  },
  {
    id: 5,
    vId: "P01H0XpNpk0",
    vName: "Brutal Triceps Workout (SORE IN 6 MINUTES!)",
    added: new Date("2022-03-24"),
    vComments: [],
  },
];

db.trainVids.insertMany(initialtrainVidsDB);
const tcount = db.trainVids.count();
print("Inserted", tcount, "train videos");

db.counters.remove({ _id: "trainVids" });
db.counters.insert({ _id: "trainVids", current: tcount });

db.trainVids.createIndex({ id: 1 }, { unique: true });
db.trainVids.createIndex({ type: 1 });
db.trainVids.createIndex({ note: 1 });
db.trainVids.createIndex({ created: 1 });

// Initialise DB for Motivation Video List

db.motiVids.remove({});

const initialmotiVidsDB = [
  {
    id: 1,
    vId: "mgmVOuLgFB0",
    vName: "Why Do We Fall - Motivational Video",
    added: new Date("2022-03-25"),
    vComments: [
      {
        cId: 1,
        body: "1st Great video!",
        username: "Henry",
        userId: 3,
        parentId: null,
        created: new Date(2022, 02, 24, 12, 35, 08),
      },
      {
        cId: 2,
        body: "2nd I love it!",
        username: "Susan",
        userId: 2,
        parentId: null,
        created: new Date(2022, 03, 25, 22, 35, 08),
      },
    ],
  },
  {
    id: 2,
    vId: "g-jwWYX7Jlo",
    vName: "Dream - Motivational Video",
    added: new Date("2022-03-25"),
    vComments: [],
  },
  {
    id: 3,
    vId: "26U_seo0a1g",
    vName: "Unbroken - Motivational Video",
    added: new Date("2022-03-25"),
    vComments: [],
  },
];

db.motiVids.insertMany(initialmotiVidsDB);
const mcount = db.motiVids.count();
print("Inserted", mcount, "motivation videos");

db.counters.remove({ _id: "motiVids" });
db.counters.insert({ _id: "motiVids", current: mcount });

db.motiVids.createIndex({ id: 1 }, { unique: true });
db.motiVids.createIndex({ type: 1 });
db.motiVids.createIndex({ note: 1 });
db.motiVids.createIndex({ created: 1 });

// Initialise DB for Motivation Video List

db.dietVids.remove({});

const initialdietVidsDB = [
  {
    id: 1,
    vId: "Q89St6BTxIQ",
    vName: "How to Start a Keto Diet",
    added: new Date("2022-04-24"),
    vComments: [
      {
        cId: 1,
        body: "1st Great diet!",
        username: "Jack",
        userId: 1,
        parentId: null,
        created: new Date(2022, 03, 24, 12, 35, 08),
      },
      {
        cId: 2,
        body: "2nd I love it!",
        username: "Susan",
        userId: 2,
        parentId: null,
        created: new Date(2022, 03, 25, 22, 35, 08),
      },
    ],
  },
  {
    id: 2,
    vId: "YOPs3zUIMwU",
    vName:
      "Beginner's Meal Prep Guide (All Calories & Macros) Easy Healthy Bodybuilding Recipes!",
    added: new Date("2022-04-24"),
    vComments: [],
  },
  {
    id: 3,
    vId: "LEycWmb-99M",
    vName:
      "Budget Grocery Shopping w/ Pro Bodybuilders | Fouad Abiad's OG Grocery Hauls",
    added: new Date("2022-04-24"),
    vComments: [],
  },
  {
    id: 4,
    vId: "LCyECbA3pUw",
    vName: "The Best Meal Plan To Lose Fat Faster (EAT LIKE THIS!)",
    added: new Date("2022-04-24"),
    vComments: [],
  },
];

db.dietVids.insertMany(initialdietVidsDB);
const dcount = db.dietVids.count();
print("Inserted", dcount, "diet videos");

db.counters.remove({ _id: "dietVids" });
db.counters.insert({ _id: "dietVids", current: dcount });

db.dietVids.createIndex({ id: 1 }, { unique: true });
db.dietVids.createIndex({ type: 1 });
db.dietVids.createIndex({ note: 1 });
db.dietVids.createIndex({ created: 1 });

db.dietVids.createIndex( { vName: "text" } );
db.motiVids.createIndex( { vName: "text" } );
db.trainVids.createIndex( { vName: "text" } );
