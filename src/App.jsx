import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <SingleBook />
      <MyFooter />
    </>
  );
}

export default App;
