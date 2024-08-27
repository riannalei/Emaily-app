const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// This ensures the Survey model is registered before it's used
require('../models/Survey'); // This line registers the 'surveys' model

// Now you can safely retrieve the model
const Survey = mongoose.model('surveys');


module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })), 
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
