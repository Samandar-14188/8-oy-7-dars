import { IProducts } from "../lib/types";

const baseURL = "your_base_url"; 

const getProducts: () => Promise<IProducts[]> = async () => {
  const res = await fetch(`${baseURL}/products`);
  return res.json(); 
};

const HomeProducts = async () => { 
  const products = await getProducts();
  return (
    <div>
      <article className="product">
  <div className="product-container">
    <img src="./images/main-bcg.jpeg" className="product-img img" alt="" />
    <div className="product-icons">
      <a href="product.html?id=1" className="product-icon">
        <i className="fas fa-search" />
        <button className="product-cart-btn product-icon" data-id={1}>
          <i className="fas fa-shopping-cart" />
        </button>
      </a>
    </div>
  </div>
  <footer>
    <p className="product-name">name</p>
    <h4 className="product-price">$9.99</h4>
  </footer>
</article>

    </div>
  );
};

export default HomeProducts;
