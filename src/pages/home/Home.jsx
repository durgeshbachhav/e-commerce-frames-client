import React, { useEffect, useState } from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

const Home = () => {
  // const [Categories, setCategories ]= useState(null);
  const [topProduct, setTopProduct] = useState(null);
  const categories = useSelector((state) => state.categoryReducer.categories);

  console.log("categories", categories);
  const fetchdata = async () => {
    try {
      // const categoriesResponse = await axiosClient.get(
      //   "/categories?populate=image"
      // );

      const TopProductResponse = await axiosClient.get(
        "/products?filters[isTopPick][$eq]=true&populate=image"
      );
      // setCategories(categoriesResponse.data.data);
      setTopProduct(TopProductResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Explore Categories</h2>
          <p className="subheading">
          Explore Our Premium Frame Selection
          </p>
        </div>
        <div className="content ">
          {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Exceptional Selections</h2>
          <p className="subheading">
          Unveil the extraordinary in every choice.
          </p>
        </div>
        <div className="content ">
          {topProduct?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
