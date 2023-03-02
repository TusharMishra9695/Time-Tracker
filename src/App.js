import "./App.css";
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
function App() {
  const [isStart, setStart] = useState(false);
  const [isPause, setPause] = useState(false);
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
  }, [isStart, isPause]);

  const manageStart = () => {
    setStart(true);
    setPause(false);
  };
  const managePause = () => {
    setPause(!isPause);
  };
  return (
    <div className="App">
      <div className="outer">
        <div className="inner_flex">
          <div>
            <h1 className="texting">{calTime} </h1>
            <span>HOURS</span>
          </div>{" "}
          <div>
            <h1 className="texting"> 00 </h1>
            <span>MINUTES</span>
          </div>{" "}
          <div>
            <h1 className="texting">14</h1>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
      <div className="inner_flex">
        <button className="btn_style" onClick={manageStart}>
          Start
        </button>
        <button className="btn_style" onClick={managePause}>
          Pause
        </button>
        <button className="btn_style">Save</button>
      </div>
      <div className="outer_task ">
        <div className="inner_flex">
          <span>Title</span>
          <span> Time Tracked</span>
        </div>
        {calTime ? (
          <TaskList />
        ) : (
          <span className="no_data">No Data Found !</span>
        )}
      </div>
    </div>
  );
}

export default App;
