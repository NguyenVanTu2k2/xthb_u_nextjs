import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "../../store/slices/compare-slice";
import ProductModal from "./ProductModal";
import Anchor from "../anchor";

const ProductGrid = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  column
}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Col
        lg={column && column === 4 ? 3 : 4}
        md={6}
        className={clsx(bottomSpace)}
      >
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
                <img
                  src={process.env.PUBLIC_URL + product.thumbImage[0]}
                  className="img-fluid"
                  alt={product.name}
                />
            
           
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
              {product.name}
              </h3>
              {/* add to cart */}
          
            </div>
          
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </Fragment>
  );
};

export default ProductGrid;
