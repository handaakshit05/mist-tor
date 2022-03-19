// this route is for querying data every member can see
const express = require('express');
const auth = require('../../middleware/auth');
const Profiles = require('../../models/Profiles');
const router = express.Router();

// accept query as a userid and then send publically available details of that user
router.get('/profile', auth, async (req, res) => {
  //write your code here
  try {
    const profile = await Profiles.findOne({user: req.user.id}).select('-id');
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// send all announcements from the database as a JSON Object
router.get('/announcements', async (req, res) => {
  //write your code here
});

// send all proposals as a JSON object
router.get('/proposals', async (req, res) => {
  //write your code here
});

module.exports = router;
