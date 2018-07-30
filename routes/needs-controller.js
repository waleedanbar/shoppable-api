// needs.js
const Needs = require('../models/needs-model')
  , _ = require('lodash')
  , dbUtils = require('../neo4j/neo4j-utils');
  //, express = require('express');
;


// list all needs
exports.list = function (req, res, next) {
  var response = Needs.all(dbUtils.getSession(req));
  console.log(response.records);
  res.send(response);
};


exports.add = function (req, res, next) {
  //console.log(req.body);
  //var tags = _.get(req.body('tags'));
  var tags = _.get(req.body, 'tags');

  var response = Needs.add(dbUtils.getSession(req), tags);


  // debug response
  res.send(response);
}
