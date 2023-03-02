import "./App.css";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner_flex">
          <div>
            <h1 className="texting">06 </h1>
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
        <span className="btn_style">Start</span>
        <span className="btn_style">Pause</span>
        <span className="btn_style">Save</span>
      </div>
      <div className="outer_task ">
        <div className="inner_flex">
          <span>Title</span>
          <span> Time Tracked</span>
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
