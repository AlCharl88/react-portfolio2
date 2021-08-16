import statbadger from '../pictures/statbadger.jpg';
import weather from '../pictures/weather.png';
import downtime from '../pictures/downtime.png';
import budget from '../pictures/budget.png';

const projects = [
    {
        "id": 1,
        "projectName": "SportsBets",
        "picture" : statbadger,
        "summary": "Sports Bets app is intended to be used for individuals interested in gambling. This is a safe application, free that allows users to practice live Gambling using “fake” money.",
        "techUsed": "Moment.js, Bootstrap, Javascript, HTML, CSS, JQueryUI, Rapid API, API-sport.",
        "githubLink": "https://github.com/greggd1991/SportsBets",
        "deployedLink": "https://greggd1991.github.io/SportsBets"
    },
    {
        "id": 2,
        "projectName": "Weather-Dashboard",
        "picture" : weather,
        "summary": "The application consist on using a weather dashboard in order to consult weather forecast in any city in the world. When an user search for a city, then it is presented with current and furture conditions for that city and that city is added to the search history",
        "techUsed": "Moment.js, Bootstrap, Javascript, HTML, CSS.",
        "githubLink": "https://github.com/AlCharl88/Weather_Dashboard",
        "deployedLink": "https://alcharl88.github.io/Weather_Dashboard"
    },
    {
        "id": 3,
        "projectName": "Downtime",
        "picture" : downtime,
        "summary": "Downtime is a full stack web application where a user can register, browse in a book, music and movies database, select medias and add them to a purchasing cart, keep track of purchase history",
        "techUsed": "Node.js, npm, Javascript, inquirer, mysql, express-session, axios, bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, google-books, mysql2, sequelize, spotify-web-api-node..",
        "githubLink": "https://github.com/ConnorCleveland2002/Downtime",
        "deployedLink": "https://morning-eyrie-12199.herokuapp.com/"
    },
    {
        "id": 4,
        "projectName": "BudgetTracker",
        "picture" : budget,
        "summary": "The BudgetTracker give users a fast and easy way to track their money by allowing them to access the information anytime even without any internet connection.",
        "techUsed": "Node.js, npm, Javascript, MongoDB Atlas, Express, Mongoose. Compression, Morgan, IndexedDB.",
        "githubLink": "https://github.com/AlCharl88/BudgetTracker",
        "deployedLink": "https://warm-lake-26156.herokuapp.com/"
    }

]

    export default projects;