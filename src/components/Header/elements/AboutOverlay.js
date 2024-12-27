import { Tooltip } from "react-tippy";
import clsx from "clsx";
import { IoIosClose } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={clsx("about-overlay", activeStatus && "active")}>
      <div
        className="about-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="about-overlay__content">
        <button
          className="about-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="about-overlay__content-container d-flex flex-column justify-content-between h-100">
          <div className="about-overlay__widget-wrapper">
            <div className="about-widget">
              <h2 className="about-widget__title">About me </h2>
              <p>
                Chào mừng đến với trang web của (NVT)! Web cung cấp
                giải pháp xét tuyển đại học bằng học bạ, giúp các thí sinh dễ
                dàng quản lý và nộp hồ sơ xét tuyển trực tuyến. Với sự tự động
                hóa trong xử lý hồ sơ, chúng tôi cam kết mang đến trải nghiệm
                đơn giản, nhanh chóng và hiệu quả cho mọi người.
              </p>
            </div>
          </div>
          <div className="about-overlay__contact-widget">
            <p className="email">
              <a href="mailto:contact@lezada.com">nguyenvantu29032002@gmail.com</a>
            </p>
            <p className="phone">(+84) 037879*** </p>
            <div className="social-icons">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
