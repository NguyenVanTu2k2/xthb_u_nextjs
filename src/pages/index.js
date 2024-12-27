import { useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderOne } from "../components/HeroSlider";
import { ProductTab } from "../components/ProductTab";
import { ImageCta } from "../components/Cta";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import imageCtaData from "../data/image-cta/image-cta-one.json";
import Collection from "./home/collection";
import Creative from "./home/creative";
import Essentials from "./home/essentials";
import Trending from "./home/trending";
import Swimsuit from "./home/swimsuit";
import Special from "./home/special";
import SmartDesign from "./home/smart-design";
import Furniture from "./home/furniture";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, "decor", "new", 9);
  const popularProducts = getProducts(products, "decor", "popular", 9);
  const saleProducts = getProducts(products, "decor", "sale", 9);

  return (
   <Furniture/>
  );
};

export default Home;
