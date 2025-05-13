import React, { useState } from "react";
import "./Card.css";
import EditTodo from "../Layout/EditTodo";

const Card = ({ allTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  return (
    <>
      <div className="container">
        <div className="row gx-4 gy-4">
          {allTask?.map((task, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              <div className="card h-100">
                <div className="card-header">
                  <div className="chead d-flex justify-content-between">
                    <h5 className="card-title">
                      {task?.title.substring(0, 10)}
                    </h5>
                    <h5 className={task?.isCompleted ? "tsk-cmp" : "tsk-inc"}>
                      {task?.isCompleted ? "Completed" : "Incomplete"}
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <h6>{task?.title}</h6>
                  <p className="card-text">{task?.description}</p>
                  <h6>Date: {task?.createdAt.substring(0, 10)}</h6>
                </div>
                <div className="card-footer bg-transparent border-primary">
                  <button
                    className="btn btn-primary me-2"
                    title="Edit"
                    onClick={() => handleEdit(task)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger" title="Delete">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedTask && (
        <EditTodo task={selectedTask} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Card;
