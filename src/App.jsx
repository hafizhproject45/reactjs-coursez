// import { useState } from "react";
//? Import Other
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//? Import Page
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
        <Route
          path="/*"
          Component={() => {
            return (
              <div className="notfound-page">
                <div className="notfound min-vh-100">
                  <Container>
                    <Row>
                      <Col>
                        <h1 className="text-center">404</h1>
                        <p className="text-center">Page no found</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          }}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
