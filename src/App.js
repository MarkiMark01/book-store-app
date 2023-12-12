import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";

import { current } from "./components/redux/auth/auth-operations";
import UserRoutes from "./components/page/UserRoutes";
import Footer from "./components/page/Footer/Footer";
import Header from "./components/page/Header/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <UserRoutes />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
