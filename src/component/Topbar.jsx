
export default function Topbar() {
  return (
    <header className="main_header_area">
      {/* <!-- Navigation Bar --> */}
      <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo-white.png" alt="white logo" />
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
              </div>
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav" id="responsive-menu">
                  <li className="dropdown submenu active">
                    <a href="index.html" className="">Home</a>
                  </li>
                  {/* ... other list items */}
                  <li className="search-main">
                    <a href="#search1" className="mt_search">
                      <i className="fa fa-search fs-5"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.navbar-collapse --> */}
              <div className="register-login">
                <a href="#" className="nir-btn white">
                  Buy Ticket <i className="fa fa-angle-right"></i>
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
  );
}
