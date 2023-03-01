const db = require('../config/connection');
const { User } = require('../models');
const {Exercise} = require('../models')
const userSeeds = require('./userSeeds.json');
const exerciseSeeds = require('./exerciseSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Exercise.deleteMany({});
    await User.create(userSeeds);
    await User.create(exerciseSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.log(err); 
    throw err;
  }
});
