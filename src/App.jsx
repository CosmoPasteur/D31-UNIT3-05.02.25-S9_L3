import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      {/* <AllTheBooks />
      <SingleBook /> */}
      <MyFooter />
    </>
  );
}

export default App;
