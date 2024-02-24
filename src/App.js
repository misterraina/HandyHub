import "./index.css";
import TopBar from "./components/topbars/topbar/TopBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Post from "./components/post/Post";

export default function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
      
      <Footer/>
    </div>
  );
}