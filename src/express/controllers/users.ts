import express from "express";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const response = { res: "getAllUsers343" };
    return res.status(200).json(response).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const response = { res: "deleteUser" };
    return res.status(200).json(response).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
