import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from "./redux/slices/appReducer";
import { fetchAuthMe } from "./redux/slices/authReducer";

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.app.initialized);

  const initialApp = () => {
    const authPromise = dispatch(fetchAuthMe());
    Promise.all([authPromise]).then(() => {
      dispatch(initializeApp());
    });
  };

  useEffect(() => {
    initialApp();
  }, []);

  return !initialized ? (
    <></>
  ) : (
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
