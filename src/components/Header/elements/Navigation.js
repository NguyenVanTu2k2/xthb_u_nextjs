import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Anchor path="/">
            Trang chủ
          </Anchor>
        </li>
        <li>
          <Anchor
            path="/shop/left-sidebar">
            Tuyển sinh
          </Anchor>
        </li>
        <li className="position-relative">
          <Anchor path="/huongdan/huongdan">
            Hướng dẫn
          </Anchor>
          </li>
        
        <li className="position-relative">
        <a href={process.env.PUBLIC_URL + "/assets/pdf/dtut-kvut.pdf"} target="_blank" rel="noopener noreferrer">
          KV/DT ưu tiên
          </a>
        </li>
        <li className="position-relative">
        <a href={process.env.PUBLIC_URL + "/assets/pdf/doc-truongchuyen.pdf"} target="_blank" rel="noopener noreferrer">
          Danh mục trường chuyên
          </a>
        </li>
       

        
      </ul>
    </nav>
  );
};

export default Navigation;
