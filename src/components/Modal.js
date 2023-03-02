import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [closeModal, setcloseModal] = useState(false);

  function setData() {
    let arrayList = [
      {
        title: title,
        calTime: props.calTime,
      },
    ];
    let objList = {
      title: title,
      calTime: props.calTime,
    };
    if (localStorage.getItem("arrayList")) {
      let localContent = JSON.parse(localStorage.getItem("arrayList"));
      localContent.push(objList);
      localStorage.setItem("arrayList", JSON.stringify(localContent));
    } else {
      localStorage.setItem("arrayList", JSON.stringify(arrayList));
    }
    setcloseModal(true);
    window.location.reload();
  }
  return (
    <div className={closeModal ? "modal_outer close " : "modal_outer "}>
      <div className="modal">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="set_inp"
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="set_des"
        />
        <br />
        <button className="modal_btn" onClick={setData}>
          Save
        </button>
        <button className="modal_btn" onClick={() => setcloseModal(true)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
