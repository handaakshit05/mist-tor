const { Router } = require('express');
// this route is for individual user to change their profile info
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();

// accept user name as registration number and password to authenticate
router.post('/profile', async (req, res) => {
  // write your code here
});

// accept user password to verify along with password and verify password
router.put('/reset', async (req, res) => {
  //write your code here
});

// accept JSON object to write details, and overwrite for editing
router.put('/updateprofile', async (req, res) => {
  //write your code here
});

module.exports = router;
