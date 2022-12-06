# Social-Network-API

## Description
This challenge demonstrates an understanding of NoSQL databases. Using Express.js for routing, a MongoDB database, and the Mongoose ODM this project provides a model for what a social media networking backend database would look like. Databases allow us to store pertinent information with a degree of separation from the user. I structured this MongoDB database to house a list of users, their thoughts, and their friends within the application. Additionally, I provided functionality for those who have access to the database. Using a few simple routes, anyone with access to the database can see all users, all thoughts, singular thoughts, singular users, and all known user data. Through this backend access, an authorized user can also delete or add friends, users, and thoughts. The images below demonstrate the database functionality.

## Installation

In order to run this application, Express.js, mongoose, Node, and MongoDB are required. Insomnia is a secondary application that is not required, but makes it significantly easier to execute terminal commands if you plan on making changes to the database. After cloning the repository, in order to install these applications type the following commands into the integrated terminal.

1) npm i
This command should automatically install all of the necessary packages to run this application. After you successfully run this code, you shoulld see a message that states the number of packages installed.

2) npm run seed
This command seeds the data to the MongoDB database. Right now, the database is empty. This is the command to initate a transfer. After running this command, you should see a message that indicates the seeding is complete.

3) npm start
This command starts the program. After running this command, you should see a message that states that the program is running on port 3001. Now you are free to view or edit the data. Insomnia is a great application to run commands on as well as view the content. However, the content routes may also be viewed in a web browser.

## Usage
![GET request of all the user data](./images/Screen%20Shot%202022-12-05%20at%2011.30.10%20AM.png)

![GET request of one user's data](./images/Screen%20Shot%202022-12-05%20at%2011.30.40%20AM.png)

![GET request of all thoughts](./images/Screen%20Shot%202022-12-05%20at%2011.30.55%20AM.png)

![GET request of one user's thoughts](./images/Screen%20Shot%202022-12-05%20at%2011.31.11%20AM.png)

![DELETE request of one user](./images/Screen%20Shot%202022-12-05%20at%2011.31.49%20AM.png)

## Video Walkthrough

[![Video Walkthrough](https://img.youtube.com/vi/upF5rzdcHRE/0.jpg)](https://www.youtube.com/watch?v=upF5rzdcHRE)

https://www.youtube.com/watch?v=upF5rzdcHRE

## Credits
This challenge was made while in attendance of the University of Texas's Full Stack Coding Bootcamp in conjunction with Trilogy Education.

## License
MIT License