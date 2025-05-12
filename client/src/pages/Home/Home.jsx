import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopModal from "../../components/Layout/PopModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openModalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <input type="text" className="form-control" placeholder="Search Task" />
        <h2 className="text-center mb-4">My Task</h2>
        <div className="container-group mb-3">
          <button className="btn btn-primary" onClick={openModalHandler}>
            Add Task
          </button>
        </div>
      </div>
      <h1>
        {title} and {description}
      </h1>
      <PopModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    </>
  );
};

export default Home;
