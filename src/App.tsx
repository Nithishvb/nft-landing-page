import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="font-customFont w-[100%]">
      <div>
        <Home />
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
}

export default App;
