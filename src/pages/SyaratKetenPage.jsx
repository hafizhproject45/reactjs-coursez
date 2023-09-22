import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import { syaratketen } from "../data";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row data-aos="fade-up" data-aos-duration="1000">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus dolore vero veniam fugit itaque, dignissimos tempore
                magnam, beatae quaerat labore officiis officia, pariatur dolor
                facere ut inventore. Eaque quaerat blanditiis quibusdam
                perspiciatis quia voluptates ducimus praesentium, facilis
                nesciunt architecto, cupiditate, odio laboriosam mollitia modi.
                Ipsa iusto consequuntur ea veniam nisi.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              {syaratketen.map((data) => {
                return (
                  <Col
                    key={data.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4 className="fw-bold">{data.title}</h4>
                    <p>{data.desc1}</p>
                    <p>{data.desc2}</p>
                    <p>{data.desc3}</p>
                  </Col>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
