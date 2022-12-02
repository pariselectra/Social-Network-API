const names = [
    'Jason',
    'Amy',
    'Catherine',
    'Mark',
    'Adam',
    'James',
    'Elias',
    'Diana',
    'Sean',
    'Kayla',
    'Bri',
    'Nick',
    'Antonio',
    'Anthony',
    'Bethany',
    'Chaz',
    'Kenneth',
    'Meghan',
    'David',
    'Leah',
    'Zach',
    'Martha',
    'Bradley',
    'Jake',
    'Blake',
    'Ryan',
    'Susan',
    'Kim',
    'Tim',
    'Andy',
    'Carrie',
    'Zyad',
    'Nate',
    'Tiffany',
    'Leslie',
    'Kelsey',
    'Paul',
    'John',
    'Michael',
    'Ben',
    'Miles',
    'Ray',
    'Kat',
    'Lauren',
    'Priya',
    'Arjun',
    'Brad',
    'Chad',
    'Fox',
    'Justin',
    'Mason',
    'Penny',
    'Toby',
    'Pam',
    'Payton',
    'Selly',
    'Kelly',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsy',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.',
    'Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume',
    'Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can\'t get a clear shot of a robber standing still.',
    'If my calculator had a history, it would be more embarrassing than my browser history.',
    'Lawyers hope you get sued, doctors hope you get sick, cops hope you\'re criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.',
    'As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook.',
    'Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it\'d be insulting.',
    'What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we\'re here but they\'ve agreed not to contact us until we figure it out for ourselves.',
    'If I get up 10 minutes earlier than usual, I treat it like 2 extra hours and end up late for work.',
    'If someone offered to pay for my food and rent for the next 18 years, I\'d do anything they ask of me. But I complained every time I took the trash out while living at my parent\'s house.',
    'Aliens invaded the Moon on July 20th, 1969.',
    'Instead of colorizing photos, in 50 years we will be removing filters.',
    'I\'ve woken up over 10,000 times and I\'m still not used to it',
    'Tobacco companies kill their best customers and condom companies kill their future customers.',
  
  ];
  
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
    
  // const getRandomThought = () => {
  //   let thought = '';
  //   for (let i = 0; i < thoughts; i++) {
  //     thought += ` ${genRandomIndex}`;
  //   }
  //   return thought;
  // };


  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random name
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;
  
  const getRandomThought = () => {
    return{thoughtBody: `${getRandomArrItem(thoughts)}`}
    
  }

    // Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
  const getRandomFriends = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        friendName: getRandomArrItem(names)
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = {
    getRandomName,
    getRandomFriends,
    getRandomThought};
  