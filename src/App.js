import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

import UpdateResume from "./components/UpdateResume";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Header resumeData={resumeData} />
                <About resumeData={resumeData} />
                <Resume resumeData={resumeData} />
                <Portfolio resumeData={resumeData} />
                <Testimonials resumeData={resumeData} />
                <ContactUs resumeData={resumeData} />
                <Footer resumeData={resumeData} />
              </div>
            }
          />
          <Route path="/update-resume" element={
            <div className="App">
              <UpdateResume />
            </div>
          } />
        </Routes>
      </Router>
    );
  }
}

export default App;
