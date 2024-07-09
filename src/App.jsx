import "./App.css";
// import component
import Introduction from "./Components/Introduction/Introduction";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Magazine from "./Components/Magazine/Magazine";
import Btn from "./Components/Btn/Btn";

function App() {
  return (
    <div className="App">
      <Menu />
      <Introduction />
      <Products />
      <Magazine />
      <Footer />

      <Btn />
    </div>
  );
}

export default App;
