const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

const User = require('../models/userModel');

// @desc Get all goals
// @route GET /api/goals
// @access Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });


  res.status(200).json(goals);
});

// @desc Create a new goal
// @route POST /api/goals
// @access Public
const setGoals = asyncHandler(async (req, res) => {
  // console.log('Request body:', req.body); // Add this line
  // console.log('Request headers:', req.headers); // Also helpful for debugging
  // console.log('Request method:', req.method); // Check the request method
  // console.log("req.body.text:", req.body.text); // Log the text field specifically

  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })
  res.status(200).json(goal);
});

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Public
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401);
    throw new Error("User Not Found")
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized")
  }


  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    {
      new: true
    }
  );

  res.status(200).json(updatedGoal);
});

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Public
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401);
    throw new Error("User Not Found")
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized")
  }

  await goal.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}