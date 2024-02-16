import Link from "next/link";


export default function Home() {
  return (
    <main>
<>

  {/* navbar */}
  <nav className="navbar">
    <div className="nav-center">
  
      <div>
        <button className="toggle-nav">
          <i className="fas fa-bars" />
        </button>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">
              home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/products">
              products
            </a>
          </li>
          <li>
            <a className="nav-link" href="/about">
              about
            </a>
          </li>
        </ul>
      </div>
      {/* logo */}
      <img src="./logo-white.svg" className="nav-logo" alt="logo" />
      {/* cart icon */}
      <div className="toggle-container">
        <button className="toggle-cart">
          <i className="fas fa-shopping-cart" />
        </button>
        <span className="cart-item-count">8 </span>
      </div>
    </div>
  </nav>
  {/* hero */}
  <section className="hero">
    <div className="hero-container">
      <h1 className="text-slanted">rest, relax, unwind</h1>
      <h3>Embrace your choices - we do</h3>
      
     <Link className="hero-btn" href={"/products"}>
  
        shop now
        </Link>
    
    </div>
  </section>
  {/* sidebar */}
  <div className="sidebar-overlay">
    <aside className="sidebar">
      {/* close */}
      <button className="sidebar-close">
        <i className="fas fa-times" />
      </button>
      {/* links */}
      <ul className="sidebar-links">
        <li>
          <a className="sidebar-link" href="/">
            <i className="fas fa-home fa-fw" />
            home
          </a>
        </li>
        <li>
          <a className="sidebar-link" href="/product">
            <i className="fas fa-couch fa-fw" />
            products
          </a>
        </li>
        <li>
          <a className="sidebar-link" href="/about">
            <i className="fas fa-book fa-fw" />
            about
          </a>
        </li>
      </ul>
    </aside>
  </div>
  {/* cart */}
  <div className="cart-overlay">
    <aside className="cart">
      <button className="cart-close">
        <i className="fas fa-times" />
      </button>
      <header>
        <h3 className="text-slanted">your bag</h3>
      </header>
      {/* cart items */}
      <div className="cart-items" />
      {/* footer */}
      <footer>
        <h3 className="cart-total text-slanted">total : $12.99</h3>
        <button className="cart-checkout btn">checkout</button>
      </footer>
    </aside>
  </div>
  {/* featured products */}
  <section className="section featured">
    <div className="title">
      <h2>
        <span>/</span>featured
      </h2>
    </div>
    <div className="featured-center section-center">
      <h2 className="section-loading">loading...</h2>
      {/* single product */}
 
      {/* end of single product */}
    </div>
   
     <Link className="btn" href={"/products"} >
      all product
      </Link>
    
  </section>
</>
    </main>
  );
}