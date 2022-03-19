const { Router } = require('express');
// this route is for all logs of the website
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();

// view login time and date details
router.get('/loginlog', async (req, res) => {
  //write your code here
});

// time and date of password resets
router.get('/resetlog', async (req, res) => {
  //write your code here
});

// profile details change logs
router.get('/profilechangelog', async (req, res) => {
  //write your code here
});

// time and date of proposals created logs, and by whom
router.get('/proposalslog', async (req, res) => {
  //write your code here
});

module.exports = router;
