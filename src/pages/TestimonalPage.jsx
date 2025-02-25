import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import FaqComponent from "../component/FaqComponent";
const TestimonalPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Semua Testiomonial </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
                nam, quod officiis quo tempora voluptatum doloribus cupiditate
                maxime officia reprehenderit atque nihil numquam, excepturi illo
                quae repellat! Distinctio, doloremque inventore?
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
          {testimonial.map((data) => {
                return (
                  <Col key={data.id} className="mb-5 shadow-sm">
                    <p className="desc shadow-sm">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  );
};

export default TestimonalPage;
