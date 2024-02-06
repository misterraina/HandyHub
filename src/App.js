import "./index.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
      <Footer/>
    </div>
  );
}