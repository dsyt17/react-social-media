import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
