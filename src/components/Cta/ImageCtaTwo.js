import { Container, Row, Col } from "react-bootstrap";
import { IoIosCart } from "react-icons/io";
import clsx from "clsx";
import Anchor from "../anchor";

const ImageCtaTwo = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("image-cta-two", spaceBottomClass)}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">Mùa tuyển sinh đã tới</h3>
              <p className="text space-mb--30">
                Bạn muốn trở thành tân sinh viên của trường
              </p>
              <Anchor path="/other/login-register" className="lezada-button lezada-button--medium lezada-button--icon--left">
                 Đăng kí ngay
              </Anchor>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cta/cabinet2.png"}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaTwo;
