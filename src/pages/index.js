import React, { useState } from "react";
import {
  Card,
  Col,
  Grid,
  Row,
  NavBarMessage,
  Divider,
  Button,
  CM_TOP_CENTER,
} from "../styles/containerStyles";
import rd from "../images/rd.png";
import desktop from "../images/desktop.png";
import tablet from "../images/tablet.png";
import mobile from "../images/mobile.png";
import drogaraia from "../images/drogaraia.png";
import drogasil from "../images/drogasil.png";
import farmasil from "../images/farmasil.png";
import univers from "../images/univers.png";
import forbio from "../images/4bio.png";
import rdsmall from "../images/rd-small.png";
import Modal from "react-modal";

const LandingPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [down, setDown] = useState(false);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Grid
        style={
          darkTheme == true
            ? {
                backgroundColor: "black",
                minHeight: "100%",
                height: "auto !important",
              }
            : {
                backgroundColor: "#f5f7fa",
                minHeight: "100%",
                height: "auto !important",
              }
        }
      >
        <Row>
          <Col size={3}>
            <img src={rd}></img>
          </Col>
          <Col size={1} style={{ paddingTop: 30 }}>
            <NavBarMessage style={{ paddingRight: 15 }}>HTML5</NavBarMessage>
            <NavBarMessage style={{ paddingRight: 15 }}>CSS3</NavBarMessage>
            <NavBarMessage style={{ paddingRight: 15 }}>
              JAVASCRIPT
            </NavBarMessage>
            <NavBarMessage style={{ paddingRight: 15 }}>REACT</NavBarMessage>
            <NavBarMessage style={{ paddingRight: 15 }}>REDUX</NavBarMessage>
          </Col>
        </Row>
        <Divider />
        <Row style={{ paddingTop: "230px" }}>
          <Col size={1} style={{ textAlign: "center" }}>
            <Card style={{ backgroundColor: "white" }}>
              <img
                src={desktop}
                style={{ backgroundColor: "#FE9481", width: "100%" }}
              ></img>
              {down == true ? (
                <span style={{ color: "#868686" }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </span>
              ) : (
                <span style={{ color: "#868686" }}>
                  Quando pressionado o botão
                  <span
                    style={{
                      fontWeight: 600,
                      paddingLeft: 5,
                      color: "#868686",
                    }}
                  >
                    Leia mais...
                  </span>
                  {"    "}o restante da informação deverá aparecer em scroll
                  down.
                </span>
              )}

              <br />
              <Row>
                <Col size={3}></Col>
                <Col size={1}>
                  <button
                    onClick={() => setDown(!down)}
                    style={{
                      backgroundColor: "#FE9481",
                      borderColor: "#FE9481",
                      color: "white",
                    }}
                  >
                    Leia mais...
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col size={1} style={{ textAlign: "center" }}>
            <Card style={{ backgroundColor: "white" }}>
              {" "}
              <img
                src={tablet}
                style={{ backgroundColor: "#FCDA92", width: "100%" }}
              ></img>
              <span style={{ color: "#868686" }}>
                Quando pressionado o botão
                <span
                  style={{ fontWeight: 600, paddingLeft: 5, color: "#868686" }}
                >
                  Leia mais...
                </span>{" "}
                a informação deverá aparecer completa em um popup na tela.
              </span>
              <Row>
                <Col size={3}></Col>
                <Col size={1}>
                  <button
                    onClick={() => onOpenModal()}
                    style={{
                      backgroundColor: "#FCDA92",
                      borderColor: "#FCDA92",
                      color: "white",
                    }}
                  >
                    Leia mais...
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col size={1} style={{ textAlign: "center" }}>
            <Card style={{ backgroundColor: "white" }}>
              {" "}
              <img
                src={mobile}
                style={{
                  backgroundColor: "#9C8CB9",
                  width: "100%",
                  height: 206,
                }}
              ></img>
              {/*A Imagem não veio com o tamanho correto.*/}
              <span style={{ color: "#868686" }}>
                Quando pressionado o botão
                <span
                  style={{ fontWeight: 600, paddingLeft: 5, color: "#868686" }}
                >
                  alterar tema
                </span>{" "}
                modifique o tema do site para blackfriday a seu gosto.
              </span>
              <Row>
                <Col size={3}></Col>
                <Col size={1}>
                  <button
                    onClick={() => setDarkTheme(!darkTheme)}
                    style={{
                      backgroundColor: "#9C8CB9",
                      borderColor: "#9C8CB9",
                      color: "white",
                    }}
                  >
                    {darkTheme == true ? "Mudar tema" : "Leia Mais..."}
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{ paddingTop: "280px" }}>
          <span style={{ color: "#868686", paddingTop: 15 }}>
            RD 2017 Todos os direitos reservados
          </span>
          <Col size={11} style={{ paddingLeft: 450 }}>
            <img src={drogaraia}></img>
            <img src={drogasil}></img>
            <img src={farmasil}></img>
            <img src={univers}></img>
            <img src={forbio}></img>
          </Col>
          <Col size={1}>
            <img src={rdsmall}></img>
          </Col>
        </Row>
      </Grid>
      <Modal
        isOpen={open}
        onRequestClose={onCloseModal}
        contentLabel="Tablet"
        style={customStyles}
      >
        <h2>
          Este é um modal responsivo para a apresentação central, como se fosse
          um tablet.
        </h2>
      </Modal>
    </>
  );
};

export default LandingPage;
