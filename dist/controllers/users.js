export const getAllUsers = async (req, res) => {
    try {
        const response = { res: "getAllUsers6" };
        return res.status(200).json(response).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const response = { res: "deleteUser" };
        return res.status(200).json(response).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
//# sourceMappingURL=users.js.map