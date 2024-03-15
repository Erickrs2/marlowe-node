export const login = async (req, res) => {
    try {
        const response = { res: "Logged in" };
        return res.status(200).json(response).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const register = async (req, res) => {
    try {
        const response = { res: "Register" };
        return res.status(200).json(response).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
//# sourceMappingURL=authentication.js.map