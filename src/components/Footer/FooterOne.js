import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tippy";

const FooterOne = () => {
  return (
    <footer className="space-pt--100 space-pb--100 bg-color--grey">
      <Container>
        <Row>
          <Col lg={9} md={12} className="space-mb-mobile-only--50">
            {/*=======  footer navigation  =======*/}
            <nav className="footer-nav-container footer-nav-container--horizontal space-mb--20">
              <ul>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">STORE LOCATION</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
                <li>
                  <a href="#">SUPPORT</a>
                </li>
                <li>
                  <a href="#">POLICY</a>
                </li>
                <li>
                  <a href="#">FAQS</a>
                </li>
              </ul>
            </nav>

            {/*=======  copyright text  =======*/}
            <div className="footer-copyright-text">
              &copy; {new Date().getFullYear() + " "}
              <a href="https://www.hasthemes.com" target="_blank">
                University
              </a>
              . All Rights Reserved | <span>(+00) 123 567990</span> |
              contact@lezada.com
            </div>
          </Col>
          <Col lg={3} md={12} className="text-start text-lg-end">
            {/*=======  social icons  =======*/}
            <div className="footer-social-icons space-mb--20">
              <ul>
                <li>
                  <Tooltip
                    title="Twitter"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Facebook"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.facebook.com" target="_blank">
                      <FaFacebookF />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Instagram"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <FaInstagram />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Youtube"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.youtube.com" target="_blank">
                      <FaYoutube />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>

            {/*=======  payment icon  =======*/}
            <div className="payment-icon">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/icon/pay.png"}
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterOne;
