import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
function App() {
  const [isStart, setStart] = useState(false);
  const [isPause, setPause] = useState(false);
  const [isSave, setSave] = useState(false);
  const [calTime, setCalTime] = useState(0);

  useEffect(() => {
    let cal_interval = 0;
    if (isStart && isPause === false) {
      cal_interval = setInterval(() => {
        setCalTime((calTime) => calTime + 1);
      }, 1000);
    } else {
      clearInterval(cal_interval);
    }
    return () => {
      clearInterval(cal_interval);
    };
  }, [isStart, isPause, isSave]);

  const manageStart = () => {
    setStart(true);
    setPause(false);
    setSave(false);
  };
  const managePause = () => {
    if (isStart) {
      setStart(!isStart);
    }
    setPause(!isPause);
  };
  const manageSave = () => {
    setSave(!isSave);
    if (isStart) {
      setStart(!isStart);
    }
    setPause(!isPause);
  };
  const clearList = () => {
    localStorage.removeItem("arrayList");
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="outer">
        <div className="inner_flex">
          <div>
            <h1 className="texting">
              {Math.floor(Math.floor(calTime / 60) / 60)
                ? Math.floor(Math.floor(calTime / 60) / 60)
                : "00"}
            </h1>
            <span>HOURS</span>
          </div>{" "}
          <div>
            <h1 className="texting">
              {Math.floor(calTime / 60) ? Math.floor(calTime / 60) : "00"}
            </h1>
            <span>MINUTES</span>
          </div>{" "}
          <div>
            <h1 className="texting">{calTime ? calTime % 60 : "00"}</h1>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
      <div className="inner_flex">
        <button
          className="btn_style"
          onClick={manageStart}
          disabled={isStart ? true : false}
        >
          Start
        </button>
        <button
          className="btn_style"
          onClick={managePause}
          disabled={isPause ? true : false}
        >
          Pause
        </button>
        <button className="btn_style" onClick={manageSave}>
          Save
        </button>
        {localStorage.getItem("arrayList") ? (
          <button className="btn_style" onClick={clearList}>
            Clear List
          </button>
        ) : null}
      </div>
      <div className="outer_task ">
        <div className="inner_flex">
          <span>Title</span>
          <span> Time Tracked</span>
        </div>
        {localStorage.getItem("arrayList") ? (
          <TaskList />
        ) : (
          <span className="no_data">No Data Found !</span>
        )}
      </div>
      {isSave ? <Modal calTime={calTime} /> : null}
    </div>
  );
}

export default App;
