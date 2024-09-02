import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import Features from "./components/Features/Features";
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
      <div>
        <Features />
      </div>
      <div>
        <Analytics />
      </div>
    </div>
  );
}

export default App;
