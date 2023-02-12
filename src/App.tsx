import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { initializeApp } from "./redux/slices/appReducer";
import { fetchAuthMe } from "./redux/slices/authReducer";

const App = () => {
  const dispatch = useAppDispatch();
  const initialized = useAppSelector((state) => state.app.initialized);

  const initialApp = () => {
    const authPromise = dispatch(fetchAuthMe());
    Promise.all([authPromise]).then(() => {
      dispatch(initializeApp());
    });
  };

  initialApp();

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
