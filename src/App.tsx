import "./App.css";
import tvShows from "./assets/tv-shows.json";
import logo from "./assets/img/M6.png";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Header logoPath={logo} title="M6" />
      <Main tvShows={tvShows} />
    </>
  );
}

export default App;
