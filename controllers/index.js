var express = require('express'),
  router = express.Router(),
  Goal = require('../models/goal')

// Load the router module for goals.
router.use('/goals', require('./goals'))

// Define the home page route.
var articles = { articles :	[
		  { 
		    title : 'Node jest ruchem'
		    ,slug : 'node-movment'
		    ,published : true
		    ,text : "testtttssa   dfadfda"
		  },
		  { 
		    title : 'Node kupa'
		    ,slug : 'node-kupa'
		    ,published : true
		    ,text : "tesdf dfa fdadgha   dfadfda"
		  }
		]}
router.get('/', function(req, res) {
    res.render('index', articles)
})

module.exports = router
