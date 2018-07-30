// needs model
const dbUtils = require('../neo4j/neo4j-utils');
const _ = require('lodash');


var getAllNeeds = function (session) {

  return session
    .run (
      'MATCH (n:Need) \
      RETURN n.description as description'
    )
    .then ( result => {
      session.close();

      if (_.isEmpty(result.records))
        return null;

      return result.records.map ( record => {
        console.log(record.get('description'));

      });
    })
    .catch (error => {
        throw error;
      });
};

var addNeed = function (session, tags) {

  return session.run (
    'CREATE (n:Need { description: {tags}})',
    {
      tags: tags
    }
  )
  .catch(error => {
      throw error;
    });
};


module.exports =
  {
    all: getAllNeeds,
    add: addNeed
  }
