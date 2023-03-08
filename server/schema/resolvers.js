const { User, Exercise } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query:{
        exercises: async () => {
            const exercises = await Exercise.find({});
            return exercises
        },
        exercise: async (parent, {exerciseId}) => {
            return Exercise.findOne({_id: exerciseId})
        },
        me: async(parent, args, context) =>{
            if (context.user) {
                return User.findOne({ _id: context.user._id });
              }
        },
        users: async () => {
            return User.find().populate('exercises');
        },
        user: async (parent, {username}) => {
            return User.findOne({username}).populate('exercises');
        }
    },

    Mutation: {
        //Creates a user
        addUser: async (parent,{ username, firstName, lastName, password }) =>{
            const user = await User.create({username, firstName, lastName, password});
            const token = signToken(user);
            return { token, user};
        },
        //Logs in a user
        login: async (parent, {username, password}) => {
            const user = await User.findOne({username});
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

        //Creates an exercise
        saveExercise: async (parent, {name, description, totalDays, url, notes }) =>{
            const exercise = await Exercise.create({name, description, totalDays, url, notes });
            return {exercise}; 
        },

        //Assigns an exercise to a user
        addExercise: async (parent ,{userId, exercise}) => {
           const exerciseData = await Exercise.findById(exercise);
            return await User.findByIdAndUpdate(
                userId,
                {$addToSet:{exercises: exerciseData }},
                {
                            new: true,
                            runValidators: true,
                        }
            )
        }
    }


}

module.exports = resolvers;
