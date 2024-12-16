// controllers/userController.js

// Example: Create a user
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    // Logic to create user (e.g., inserting into a database)
    // You can replace this with actual MongoDB or any DB interaction
    const newUser = { name, email, age };
    res.status(201).json(newUser); // Return newly created user
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Example: Get all users
export const getUsers = async (req, res) => {
  try {
    // Fetch users from the database
    // Replace with actual DB logic
    const users = [{ name: 'John Doe', email: 'john@example.com' }];
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Example: Update a user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    // Logic to update user by ID in the database
    // Replace with actual DB logic
    const updatedUser = { id, name, email, age }; // Example update
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Example: Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    // Logic to delete a user by ID from the database
    // Replace with actual DB logic
    res.status(200).json({ message: 'User deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
