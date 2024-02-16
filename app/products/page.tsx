import Link from "next/link";

export default function Products() {
  return (
    <>
      <nav className="navbar page">
        <div className="nav-center"> 
          <div>
            <button className="toggle-nav">
              <i className="fas fa-bars" />
            </button>
            <ul className="nav-links">
              <li>
                <a className="nav-link" href="/">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>uy</font>
                  </font>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/products">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      mahsulotlar
                    </font>
                  </font>
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>haqida</font>
                  </font>
                </a>
              </li>
            </ul>
          </div>

          <img
            src="https://your-comfy-store.netlify.app/images/logo-black.svg"
            className="nav-logo"
            alt="logotip"
          />

          <div className="toggle-container">
            <button className="toggle-cart">
              <i className="fas fa-shopping-cart" />
            </button>
            <span className="cart-item-count">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>0</font>
              </font>
            </span>
          </div>
        </div>
      </nav>

      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Uy / Mahsulotlar</font>
            </font>
          </h3>
        </div>
      </section>

      <div className="sidebar-overlay">
        <aside className="sidebar">
          <button className="sidebar-close">
            <i className="fas fa-times" />
          </button>

          <ul className="sidebar-links">
            <li>
              <a className="sidebar-link" href="/">
                <i className="fas fa-home fa-fw" />
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>uy</font>
                </font>
              </a>
            </li>
            <li>
              <a className="sidebar-link" href="/product">
                <i className="fas fa-couch fa-fw" />
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>mahsulotlar</font>
                </font>
              </a>
            </li>
            <li>
              <a className="sidebar-link" href="/about">
                <i className="fas fa-book fa-fw" />
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>haqida</font>
                </font>
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div className="cart-overlay">
        <aside className="cart">
          <button className="cart-close">
            <i className="fas fa-times" />
          </button>
          <header>
            <h3 className="text-slanted">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  sizning sumkangiz
                </font>
              </font>
            </h3>
          </header>

          <div className="cart-items" />

          <footer>
            <h3 className="cart-total text-slanted">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Jami: $0,00</font>
              </font>
            </h3>
            <button className="cart-checkout btn">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Ro'yxatdan o'chirilish
                </font>
              </font>
            </button>
          </footer>
        </aside>
      </div>
      {/* products */}
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="qidirmoq..."
              />
            </form>
            {/* categories */}
            <h4>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Kompaniya</font>
              </font>
            </h4>
            <article className="companies">
              <button className="company-btn">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>hammasi</font>
                </font>
              </button>
              <button className="company-btn">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>ikea</font>
                </font>
              </button>
              <button className="company-btn">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Markos</font>
                </font>
              </button>
              <button className="company-btn">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>caressa</font>
                </font>
              </button>
              <button className="company-btn">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>qovoqli</font>
                </font>
              </button>
            </article>
            {/* price */}
            <h4>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>narx</font>
              </font>
            </h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min={0}
                defaultValue={50}
                max={80}
              />
            </form>
            <p className="price-value">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Narxi: $80</font>
              </font>
            </p>
          </div>
        </div>
        {/* products */}
        <div className="products-container">
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-1.jpeg"
                className="product-img img"
                alt="baland orqa skameyka"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=rec43w3ipXvP28vog"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="rec43w3ipXvP28vog"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    baland orqa skameyka
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>9,99 dollar</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-2.jpeg"
                className="product-img img"
                alt="alban stoli"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=rec4f2RIftFCb7aHh"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="rec4f2RIftFCb7aHh"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>alban stoli</font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$79,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-3.jpeg"
                className="product-img img"
                alt="aksent kreslo"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=rec8kkCmSiMkbkiko"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="rec8kkCmSiMkbkiko"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    aksent kreslo
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$25,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-4.jpeg"
                className="product-img img"
                alt="yog'och stol"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recBohCqQsot4Q4II"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recBohCqQsot4Q4II"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>yog'och stol</font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>45,99 dollar</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-5.jpeg"
                className="product-img img"
                alt="ovqatlanish stoli"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recDG1JRZnbpRHpoy"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recDG1JRZnbpRHpoy"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    ovqatlanish stoli
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$6,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-6.jpeg"
                className="product-img img"
                alt="divan to'plami"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recNWGyP7kjFhSqw3"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recNWGyP7kjFhSqw3"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    divan to'plami
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$69,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-7.jpeg"
                className="product-img img"
                alt="zamonaviy kitob javoni"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recZEougL5bbY4AEx"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recZEougL5bbY4AEx"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    zamonaviy kitob javoni
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$8,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-8.jpeg"
                className="product-img img"
                alt="imperator to'shagi"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recjMK1jgTb2ld7sv"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recjMK1jgTb2ld7sv"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    imperator to'shagi
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$21,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-9.jpeg"
                className="product-img img"
                alt="utopiya divan"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recmg2a1ctaEJNZhu"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recmg2a1ctaEJNZhu"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    utopiya divan
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>39,95 dollar</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-10.jpeg"
                className="product-img img"
                alt="ko'ngilochar markaz"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recvKMNR3YFw0bEt3"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recvKMNR3YFw0bEt3"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    ko'ngilochar markaz
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>29,98 dollar</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-11.jpeg"
                className="product-img img"
                alt="albaniya bo'limi"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recxaXFy5IW539sgM"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recxaXFy5IW539sgM"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    albaniya bo'limi
                  </font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>$10,99</font>
                </font>
              </h4>
            </footer>
          </article>
          <article className="product">
            <div className="product-container">
              <img
                src="https://course-api.com/images/store/product-12.jpeg"
                className="product-img img"
                alt="teri divan"
              />
              <div className="product-icons">
                <a
                  href="product.html?id=recyqtRglGNGtO4Q5"
                  className="product-icon"
                >
                  <i className="fas fa-search" />
                </a>
                <button
                  className="product-cart-btn product-icon"
                  data-id="recyqtRglGNGtO4Q5"
                >
                  <i className="fas fa-shopping-cart" />
                </button>
              </div>
            </div>
            <footer>
              <p className="product-name">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>teri divan</font>
                </font>
              </p>
              <h4 className="product-price">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>9,99 dollar</font>
                </font>
              </h4>
            </footer>
          </article>
        </div>
      </section>

      <div className="page-loading" style={{ display: "none" }}>
        <h2>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Yuklanmoqda...</font>
          </font>
        </h2>
      </div>
    </>
  );
}
