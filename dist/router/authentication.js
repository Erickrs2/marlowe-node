import { login, register } from '../controllers/authentication.js';
export default (router) => {
    router.get('/auth/login', login);
    router.get('/auth/register', register);
};
//# sourceMappingURL=authentication.js.map