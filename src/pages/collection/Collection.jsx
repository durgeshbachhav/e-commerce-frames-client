import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";

const Collection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setcategoryId] = useState("");
  const [products, setProducts] = useState([]);
  const categories = useSelector((state) => state.categoryReducer.categories);

  console.log("params :", params);
  console.log("categoryId :", categoryId);
  console.log("product :", products);

  const sortOptions = [
    {
      value: "Price - Low To High",
      sort: "price",
    },
    {
      value: "newest-first",
      sort: "createdAt",
    },
  ];

  const [sortby, setSortBy] = useState(sortOptions[0].sort);

  async function fetchProduct() {
    try {
      const url = params.categoryId
        ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortby}`
        : `/products?populate=image&sort=${sortby}`;
      const response = await axiosClient.get(url);

      setProducts(response.data.data);
      console.log("products:", products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setcategoryId(params.categoryId);
    fetchProduct();
  }, [params, sortby]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }

  return (
    <div className="categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore Our Stunning Collection</h2>
            <p>
              Discover a world of exquisite products curated just for you. From
              timeless classics to modern marvels, our collection has it all.
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">sortby</h3>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option className="option" key={item.sort} value={item.sort}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>category</h3>
              {categories.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    value={item.attributes.key}
                    id={item.id}
                    onChange={updateCategory}
                    checked={item.attributes.key === categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
