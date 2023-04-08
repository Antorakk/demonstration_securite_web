const {connectTodB} = require('./services/db/connexion')
const express = require('express');
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const app = express();

app = require("./routes/index.js")
require('dotenv').config();


const createServer = () => {
  connectTodB()
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
  console.log(`Ecoute le port ${PORT}`);
}

createServer()

const userProfileChangesLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new DailyRotateFile({
      filename: './logs/user-profile-changes-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});

app.use(express.json());

// définir les routes pour le contrôleur userProfile
const userProfileRoutes = require('./routes/userProfileRoutes');
app.use('/user-profile', userProfileRoutes);

module.exports = app;


