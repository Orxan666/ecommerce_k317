import React, { useState, useEffect } from "react";
import "../styles/home.scss";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);
  }, []);

  return (
    <Helmet title={"Ana sehife"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt porro optio, pariatur quisquam magnam aliquid sed
                  quod deleniti quia at?
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to={"/shop"}>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" sm="12" md="6">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <ProductList />
    </Helmet>
  );
};

export default Home;
