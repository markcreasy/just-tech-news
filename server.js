const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
require('dotenv').config();

const hbs = exphbs.create({});
const app = express();

// setup port number
const PORT = process.env.PORT || 3001;

// setup session variables
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// setup session tracking
app.use(session(sess));

// setup intake
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup MVC - handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// allow access to public folder
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
