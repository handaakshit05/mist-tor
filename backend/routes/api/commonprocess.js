// this route is for processes that everyone can perform
const express = require('express');
const auth = require('../../middleware/auth');
const clearance = require('../../middleware/clearance');
const Complain = require('../../models/Complain');
const Proposals = require('../../models/Proposals');
const router = express.Router();

// bitch(complain) about someone to the HR head
router.post('/bitch', auth, clearance, async (req, res) => {
  try {
    let complain = new Complain({
      user: req.user.id,
      complain: req.body.heading,
      complaintext: req.body.complain,
      // date: new Date(req.body.date)
    })
    complain.save().then(() => {
      res.status(200).send({ message: "Added complain", success: true })
    }
    ).catch((err) => {
      console.log(err)
      res.status(400).send({ success: false, message: "Error creating complain" })
    })
  } catch (error) {
    res.status(500).send({ success: false, message: "Server error" })
  }
});

// explain your smart ass ideas to the board
router.post('/proposals', auth, clearance, async (req, res) => {
  console.log(req.body)
  try {
    let proposal = new Proposals({
      user: req.user.id,
      heading: req.body.heading,
      proposaltext: req.body.proposal,
      // date: new Date(req.body.date)
    })
    proposal.save().then(() => {
      res.status(200).send({ message: "Added proposal", success: true })
    }
    ).catch((err) => {
      console.log(err)
      res.status(400).send({ success: false, message: "Error creating proposal" })
    })
  } catch (error) {
    res.status(500).send({ success: false, message: "Server error" })
  }
});

module.exports = router;
