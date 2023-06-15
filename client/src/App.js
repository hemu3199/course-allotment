import logo from "./logo.svg";
import "./App.css";
import Header1 from "./components/headers/Header1";
import Header2 from "./components/headers/Header2";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div id="PageOuterWrapper">
        <Header1 />
        <Header2 />
        <div id="PageInnerWrapper">
          <Breadcrumb />
          <div role="main" className="grid_container MainContent">
            <Sidebar />
            <div className="grid_threefourths Page">
              <div className="grid_inner">
                {/* <Routes>
                  <Route path="" element={""} />
                  <Route path="scholarships" element={""} />
                  <Route path="scholarships/create" element={""} />
                  <Route path="scholarships/:id" element={""} />
                </Routes> */}
                {/* <HomePageTouts /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
