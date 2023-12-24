import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="main_header_area">
        {/* <!-- Navigation Bar --> */}
        <div className="header_menu" id="header_menu">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/images/logo-white.png" alt="image" />
                    <img src="assets/images/logo.png" alt="image" />
                  </Link>
                </div>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div
                  className="navbar-collapse1 d-flex align-items-center"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav" id="responsive-menu">
                    <li className="dropdown submenu active">
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="about" className="">
                        About Us
                      </Link>
                    </li>

                    <li className="submenu dropdown">
                      <li>
                        <Link to="gallery" className="">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link to="price" className="">
                          Package
                        </Link>
                      </li>
                      <ul className="dropdown-menu"></ul>
                    </li>
                    {/* <li className="submenu dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <i className="fas fa-caret-down ms-1" aria-hidden="true"></i></a> 
                                    <ul className="dropdown-menu">
                                        <li><a href="products.html">Product Lists</a></li>
                                        <li><a href="product-detail.html">Product Detail</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="myaccount.html">My Account</a></li>
                                    </ul>
                                </li> */}
                    {/* <li className="submenu dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News <i className="fas fa-caret-down ms-1" aria-hidden="true"></i></a> 
                                    <ul className="dropdown-menu">
                                        <li><a href="post-grid-1.html">All Posts</a></li>
                                        <li><a href="detail-1.html">Single Post</a></li>
                                    </ul>
                                </li> */}
                    <li>
                      <Link to="contact" className="">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="registration" className="">
                        User_registration
                      </Link>
                    </li>
                    <li className="cart-main">
                      <a href="#cart" className="mt-cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                    <li className="search-main">
                      <a href="#search1" className="mt_search">
                        <i className="fa fa-search fs-5"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.navbar-collapse -->   */}
                <div className="register-login">
                  <a href="#" className="nir-btn white">
                    Buy Ticket <i className="fa fa-angle-right "></i>
                  </a>
                </div>

                <div id="slicknav-mobile"></div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </nav>
        </div>
        {/* <!-- Navigation Bar Ends --> */}
      </header>
    </div>
  );
};

export default Header;
