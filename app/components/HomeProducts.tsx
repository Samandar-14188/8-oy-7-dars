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
      {products && products.map((product) => (
        <article key={product.id} className="product">
          <div className="product-container">
            <img src={product.images[0]} className="product-img img" alt="" />
            <div className="product-icons">
              <a href={`product.html?id=${product.id}`} className="product-icon">
                <i className="fas fa-search" />
                <button className="product-cart-btn product-icon" data-id={product.id}>
                  <i className="fas fa-shopping-cart" />
                </button>
              </a>
            </div>
          </div>
          <footer>
            <p className="product-name">{product.title}</p>
            <h4 className="product-price">${product.price}</h4>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default HomeProducts;
