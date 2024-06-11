import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header";
import LoginPage from "./page/LoginPage";
import LoginSearchPage from "./page/LoginSearchPage";
import Nav1Page from "./page/Nav1Page";
import Nav2Page from "./page/Nav2Page";
import Nav3Page from "./page/Nav3Page";
import CarListSelectBox1 from "./components/gnb/nav3/CarListSelectBox1";
import CarListSelectBox2 from "./components/gnb/nav3/CarListSelectBox2";
import Nav5Page from "./page/Nav5Page";
import "./App.css";
import Nav6Page from "./page/Nav6Page";
import Nav7Page from "./page/Nav7Page";
import MainPage from "./page/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/idsearch" element={<LoginSearchPage />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/nav1" element={<Nav1Page />}></Route>
          <Route path="/nav2" element={<Nav2Page />}></Route>
          <Route path="/nav3" element={<Nav3Page />}></Route>
          <Route path="/nav5" element={<Nav5Page />}></Route>
          <Route path="/nav6" element={<Nav6Page />}></Route>
          <Route path="/nav7" element={<Nav7Page />}></Route>
          <Route path="/nav10" element={<CarListSelectBox1 />}></Route>
          <Route path="/nav11" element={<CarListSelectBox2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
