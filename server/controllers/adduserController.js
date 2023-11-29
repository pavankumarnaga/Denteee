
const UserModel = require('../models/adduserModels');

const UserController = {
  create: async (req, res) => {
    try {
      const user = new UserModel(req.body);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

delete: async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},
};


module.exports = UserController;
