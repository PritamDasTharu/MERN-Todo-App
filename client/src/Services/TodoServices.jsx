import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const createTodo = (data) => {
  const user = JSON.parse(localStorage.getItem("todoapp"));
  return API.post("/todo/create", data, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
};

const getAllTodo = (id) => {
  const user = JSON.parse(localStorage.getItem("todoapp"));
  return API.post(
    `/todo/getAll/${id}`,
    { id },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );
};

const updateTodo = (id, data) => {
  const user = JSON.parse(localStorage.getItem("todoapp"));
  return API.patch(`/todo/update/${id}`, data, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
};

const TodoServices = { createTodo, getAllTodo, updateTodo };
export default TodoServices;
