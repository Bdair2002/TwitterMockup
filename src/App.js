import Menu from "./components/Menu/Menu";
import Side from "./components/Side/Side";
import Content from "./components/Content/Content";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Menu />
      <Content />
      <Side />
    </div>
  );
}

export default App;
