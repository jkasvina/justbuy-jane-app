import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row style={{marginLeft: '1px', marginBottom: '5px'}}>
        <h1 style={{ marginLeft: "15px" }}>{device.name}</h1>
      </Row>
      <Row style={{ justifyContent: "space-between" }}>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <Row style={{ marginLeft: 0 }}>
              <h4>Рейтинг:</h4>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  background: `url(${bigStar}) no-repeat center center`,
                  width: 32,
                  height: 32,
                  backgroundSize: "cover",
                  fontSize: 15,
                  fontWeight: "bolder",
                  marginLeft: "10px",
                }}
              >
                {device.rating}
              </div>
            </Row>
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
      <br />
    </Container>
  );
};

export default DevicePage;
