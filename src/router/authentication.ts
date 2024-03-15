

import express from 'express';
import { login, register } from '../controllers/authentication.js';

export default (router: express.Router) => {  
  router.get('/auth/login', login);
  router.get('/auth/register', register);
};