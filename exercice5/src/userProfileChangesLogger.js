const express = require('express');
const userProfileService = require('../services/userProfileService');
const userProfileChangesLogger = require('../userProfileChangesLogger');
const { userProfileChangesLogger } = require('./app');


const router = express.Router();

router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  const updatedProfile = req.body;

  userProfileService.updateUserProfile(userId, updatedProfile)
    .then(() => {
      userProfileChangesLogger.info({
        message: `Le profil de l'utilisateur ${userId} a été modifié`,
        userId: userId,
        updatedProfile: updatedProfile
      });
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
userProfileChangesLogger.info(`Le profil de l'utilisateur ${userId} a été modifié. Nouvelles informations : ${JSON.stringify(userProfileChanges)}`);