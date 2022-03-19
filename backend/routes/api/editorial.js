const { Router } = require('express');
// this route is for all editorial methods
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const router = express.Router();
const News = require('../../models/News');
// const clearance = require('./../../middleware/clearanceauth');

// create a news article
router.post('/news/create', 
// clearance, 
async (req, res) => {

  if(req.editorial) {
    try{
      var news = new News({
        // user: req.user._id,
        article: req.body.article,
        articleImage: req.body.articleImage,  
        headline: req.body.headline,
        author: req.body.author,
        sourceLink: req.body.sourceLink,
        source: req.body.source,
        sourceHome: req.body.sourceHome,
      });
      news.save().then((article) => {
        res.send({article});
      });
    } catch(e){
      res.status(404).send('Try again');
    };
  } else {
    res.status(401).send('Access denied');
  }

});

// delete a news article
router.delete('/news/delete/:headline', 
// clearance, 
async (req, res) => {
  
  // clearance for webdev head only
  if(req.position=="webdevhead") {
    try {
      var headline = req.params.headline;
      News.findOneAndRemove({
        headline: headline
      }).then((news) => {
        if(!news) {
          return res.status(400).send("No news with that headline found");
        }
        res.send({news});
      }) 
    } catch (error) {
      res.status(404).send("Try again");
    }
  } else {
    res.status(401).send("Access denied!");
  }

});

// add details of a new member to the editorial team
router.post('/addwriters', async (req, res) => {
  //write your code here
});

module.exports = router;
