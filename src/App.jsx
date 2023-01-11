import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
