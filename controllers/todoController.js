const todoModel = require("../models/todoModel");

const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createdBy = req.body.id; // From authMiddleware

    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide title and description",
      });
    }
    const todo = new todoModel({ title, description, createdBy });
    const result = await todo.save();
    res
      .status(201)
      .send({ success: true, message: "Your task has been created", result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in create todo API", error });
  }
};

const getTodoController = async (req, res) => {
  try {
    const userId = req.body.id; // From authMiddleware

    const todos = await todoModel.find({ createdBy: userId });
    if (!todos) {
      return res
        .status(404)
        .send({ success: true, message: "You have no todos" });
    }
    res.status(200).send({ success: true, message: "Your Todos", todos });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in todo API", error });
  }
};

const deleteTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.id; // From authMiddleware

    if (!id) {
      return res
        .status(404)
        .send({ success: false, message: "No todo found with this id" });
    }

    const todo = await todoModel.findOneAndDelete({
      _id: id,
      createdBy: userId,
    });
    if (!todo) {
      return res
        .status(404)
        .send({ success: false, message: "No task found or unauthorized" });
    }

    res
      .status(200)
      .send({ success: true, message: "Your task has been deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in delete Todo API" });
  }
};

const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.id; // From authMiddleware

    if (!id) {
      return res
        .status(404)
        .send({ success: false, message: "Please provide todo Id" });
    }

    const { title, description, isCompleted } = req.body;
    const updateData = { title, description, isCompleted };

    const todo = await todoModel.findOneAndUpdate(
      { _id: id, createdBy: userId },
      { $set: updateData },
      { returnOriginal: false }
    );

    if (!todo) {
      return res
        .status(404)
        .send({ success: false, message: "No task found or unauthorized" });
    }

    res
      .status(200)
      .send({ success: true, message: "Your task has been updated", todo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in update Todo API" });
  }
};
module.exports = {
  createTodoController,
  getTodoController,
  deleteTodoController,
  updateTodoController,
};
