const { User } = require('../models/User');
const { Exercise } = require('../models/Exercise');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {

    Query:{
        exercises: async () => {
            return Exercise.find();
        },
        exercise: async (parent, {exerciseId}) => {
            return Exercise.findOne({_id: exerciseId})
        },
        me: async(parent, args, context) =>{
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
              }
        },
    },

    Mutation: {
        addUser: async (parent,{ username, firstName, lastName, password }) =>{
            const user = await User.create({username, firstName, lastName, password});
            const token = signToken(user);
            return { token, user};
        },
        login: async (parent, {username, password}) => {
            const user = await User.findone({username});
            if(!user) {
                throw new AuthenticationError('username not found');
            }
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword){
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveExercise: async (parent, {name, description, totalDays, url, notes }) =>{
            const exercise = await Exercise.create({name, description, totalDays, url, notes });
            return {exercise}; 
        }
    }


}

module.exports = resolvers;
