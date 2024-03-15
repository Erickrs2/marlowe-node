import express from 'express';

import { getAllUsers, deleteUser } from '../controllers/users.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.get('/users/:id', isAuthenticated, isOwner, deleteUser);  
};