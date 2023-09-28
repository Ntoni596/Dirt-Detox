import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
