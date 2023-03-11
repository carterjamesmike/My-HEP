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
                return User.findOne({ _id: context.user._id })
                .populate({ path: 'exercises', select: '-__v' });
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

        saveExercise: async (parent,{name, description, totalDays, url, notes}) => {
            const exercise = await Exercise.create({name, description, totalDays, url, notes});
            return exercise;
        },
        

        // saveExercise: async (parent, args) =>{
        //     const exercise = await Exercise.create(args.input);
        //     return exercise; 
        // },

        //Assigns an exercise to a user
        addExercise: async (parent ,{userId, exercise}) => {
           const exerciseData = await Exercise.findById(exercise);
           console.log(exerciseData, "line64");
           console.log(exercise);
            return await User.findByIdAndUpdate(
                userId,
                {$addToSet:{exercises: exerciseData }},
                {
                            new: true,
                            runValidators: true,
                        }
            );
        },

}
};

module.exports = resolvers;
