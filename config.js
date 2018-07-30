'use strict';
const configs = require('nconf');

configs.defaults ({
  'NEO4J_USERNAME': 'neo4j',
  'NEO4J_PASSWORD' : 'gazfUr#gWT3',
  'neo4j': 'local',
  'neo4j-local': 'bolt://localhost:7687',
  //'neo4j-remote': 'bolt:http://162.243.100.222:7687',
  'base_url': 'http://localhost:3000',
  'api_path': '/'
});

module.exports = configs;
