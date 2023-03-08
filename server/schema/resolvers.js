const { User } = require('../models');
const { Exercise } = require('../models');
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
                return User.findOne({ _id: context.user._id })
                
              }
        },
        users: async () => {
            return User.find()
            .populate({ path: 'exercises', select: '-__v' }); 
        },
        user: async (parent, {userId}) => {
            return User.findOne({_id: userId})
            .populate({ path: 'exercises', select: '-__v' }); 
        }
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
        },
        addExercise: async (parent ,{userId, exercise}) => {
           const exerciseData = await Exercise.findById(exercise);
           console.log(exerciseData);
            return await User.findByIdAndUpdate(
                userId,
                {$addToSet:{exercises: exerciseData }},
                {
                            new: true,
                            runValidators: true,
                        }
            );
            // // return User.findOneAndUpdate(
            //     {_id: userId },
            //     {$addToSet: {exercises: Exercise.findById(exercise)}},
            //     {
            //         new: true,
            //         runValidators: true
            //     }
          //  );
        },
        addExerciseToUser: async (parent, {userId, exerciseId}) => {
            const user = await User.findOneAndUpdate(
                {_id: userId},
                {$addToSet: {exercises: exerciseId}},
                {
                    new: true,
                    runValidators: true
                }
            );
            return user;

    },



}
};

module.exports = resolvers;
