const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomFriends, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  // const thoughts = [];
  // for (let i = 0; i < thoughts.length; i++) {
  //   // Get some random assignment objects using a helper function that we imported from ./data
  //   const userThoughts = getRandomThought()

  //   thoughts.push({
  //     userThoughts
  //   });
  // }

  const users = [];

  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const friends = getRandomFriends(20);

    const fullName = getRandomName();

    const userSideThoughts = getRandomThought(4);

    users.push({
      fullName,
      friends,
      userSideThoughts
    });
  }

  const thoughts = [];

  for (let i = 0; i < 20; i++) {

    thoughts.push(getRandomThought());
  }

  await Thought.collection.insertMany(thoughts);

  await Thought.collection.insertOne({
    userThoughts: [...thoughts]
  })

  await User.collection.insertMany(users);

  await User.collection.insertOne({
    fullName: 'Jason',
    friends: [...users],
    userSideThoughts: [...thoughts]
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});