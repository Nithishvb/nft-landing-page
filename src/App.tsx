import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import Features from "./components/Features/Features";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import FreeTrail from "./components/FreeTrail/FreeTrail";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";

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
      <div>
        <Pricing />
      </div>
      <div>
        <FreeTrail />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
