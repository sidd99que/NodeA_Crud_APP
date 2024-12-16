// routes/route.js
import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/userControllers.js';

const router = express.Router();

// Create user route
router.post('/create', createUser);

// Get all users route
router.get('/users', getUsers);
  
// Update user route
router.put('/update/:id', updateUser);

// Delete user route
router.delete('/delete/:id', deleteUser);

export default router;
