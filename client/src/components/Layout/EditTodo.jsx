import React, { useState } from "react";
import toast from "react-hot-toast";
import TodoServices from "../../Services/TodoServices";

const EditTodo = ({ task, setShowModal }) => {
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [isCompleted, setIsCompleted] = useState(task?.isCompleted);
  const handleClose = () => {
    setShowModal(false);
  };

  const id = task?._id;
  const handleSubmit = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const createdBy = userData && userData.user.id;
      const data = { title, description, createdBy, isCompleted };

      if (!title || !description) {
        return toast("Please provide title and description");
      }

      await TodoServices.updateTodo(id, data);
      setShowModal(false);
      toast.success("Task Updated Successfully");
      console.log(todo);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleSelectChange = (e) => {
    setIsCompleted(e.target.value);
  };
  return (
    <>
      {task && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update your Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">
                      Task Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      id="taskTitle"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="taskDesc" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="taskDesc"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <select
                      className="form-select"
                      onChange={handleSelectChange}
                    >
                      <option selected>Select Status</option>
                      <option value={true}>Complete</option>
                      <option value={false}>Incomplete</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  <i className="fa-solid fa-plus"></i> &nbsp; Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
