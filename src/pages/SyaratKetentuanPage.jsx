import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../component/FaqComponent";

const SyaratKetentuanPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                assumenda maiores accusamus iste tempora quidem beatae dolorum
                reiciendis dolorem atque quo cupiditate rerum odit, quae magni
                eum quod alias aliquam.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam minima in atque ratione voluptas tempore veniam
                suscipit, omnis architecto quasi magni rem corrupti quisquam
                officia itaque tenetur? Sequi, alias doloremque.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus fugiat optio veniam dicta numquam, asperiores
                eligendi. Voluptatem delectus laboriosam suscipit, aspernatur
                possimus ullam quo, odit repellat quidem dolorum, eligendi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis sequi aliquid voluptates recusandae sunt delectus
                commodi. Nulla explicabo ea quod? Sint, quae sequi! Tempora esse
                soluta deleniti, maxime vel fugit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate a repudiandae quasi natus illo sit aut delectus
                inventore tempora, earum ipsum sapiente velit amet mollitia
                dignissimos labore fugiat impedit. Quae!
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, aperiam incidunt. Numquam blanditiis officiis
                exercitationem. Iusto id eos odio molestiae temporibus sunt ab,
                fugit sit labore earum blanditiis, nostrum nulla!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti nostrum odit sequi soluta omnis quod culpa explicabo
                consequuntur. Alias officia deleniti optio fugit doloribus eos
                eius vitae ducimus repellendus enim.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                aperiam magnam corrupti architecto voluptatibus similique vitae
                magni libero, ab ex, aliquid dignissimos quaerat illum veniam
                quis, vel perspiciatis nihil a!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, natus! Optio illum earum quidem quod adipisci dolorem
                distinctio natus mollitia, alias ad doloribus voluptatum modi
                deserunt animi inventore temporibus blanditiis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                sint, exercitationem deleniti ipsa earum sunt suscipit
                cupiditate facilis neque, eveniet ipsum saepe obcaecati
                assumenda labore quod praesentium repellat dolor accusamus?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  );
};

export default SyaratKetentuanPage;
