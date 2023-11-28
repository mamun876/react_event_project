
export default function About() {
  return (
    <>
     {/* header starts */}
   
        {/* header ends */}
        {/* BreadCrumb Starts */}  
        <section className="breadcrumb-main" style={{backgroundImage: 'url(assets/images/pexels-wendy-wei-1190297.jpg)'}}>
          <div className="breadcrumb-outer">
            <div className="container">
              <div className="breadcrumb-content text-center pt-14 pb-2">
                <h5 className="theme mb-0">Eventiz</h5>
                <h1 className="mb-0 white">About Us</h1>
              </div>
            </div>
          </div>
          <div className="bread-overlay" />
        </section>
        {/* BreadCrumb Ends */} 
        {/* about-us starts */}
        <section className="about-us about-before pt-12">
          <div className="container">
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-5 pe-4">
                  <div className="about-content section-title text-lg-start text-center mb-4">
                    <h3 className="h-title">About</h3>
                    <h4 className="theme"> Conference Organisation</h4>
                    <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                      <h2 className="ah-headline">
                        <span>Conference, Seminars &amp;</span>
                        <span className="ah-words-wrapper white theme">
                          <b className="is-visible textcap">Events</b>
                          <b>Events</b>
                        </span>
                      </h2>
                    </div>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Quis ip suspendisse ultrices gravida. Risus commodo</p>
                    <a href="about.html" className="nir-btn">Discover Now <i className="fa fa-angle-right " /></a>
                  </div>
                </div>
                <div className="col-lg-7 ps-4">
                  <div className="about-features" style={{backgroundImage: 'url(assets/images/contentbg.png)'}}>
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4">
                        <img src="assets/images/about/busi-3.jpg" alt="" />
                      </div>
                      <div className="col-lg-6">
                        <img src="assets/images/about/busi-1.jpg" alt="" className="mb-4" />
                        <img src="assets/images/about/busi-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-us ends */}
        {/* about-us starts */}
        <section className="about-us about-features pt-12 pb-8" style={{backgroundImage: 'url(assets/images/testimonial-1.png)'}}>
          <div className="container">
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6 pe-lg-4">
                  <div className="about-features">
                    <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white mb-4">
                      <div className="infobox-icon me-3">
                        <i className="fas fa-lightbulb fs-1 theme" />
                      </div>
                      <div className="box-body">
                        <h4 className="infobox-title mb-1">Our Vision </h4>
                        <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </div>
                    <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white mb-4">
                      <div className="infobox-icon me-3">
                        <i className="fas fa-users fs-1 theme" />
                      </div>
                      <div className="box-body">
                        <h4 className="infobox-title mb-1">Community Sharing</h4>
                        <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </div>
                    <div className="features-infobox border-all d-flex align-items-center p-4 box-shadow bg-white">
                      <div className="infobox-icon me-3">
                        <i className="fas fa-gear fs-1 theme" />
                      </div>
                      <div className="box-body">
                        <h4 className="infobox-title mb-1">Exchange the Idea </h4>
                        <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-4">
                  <div className="about-content text-center text-lg-start mb-4">
                    <h3 className="h-title">Culture</h3>
                    <h4 className="theme">Our Culture</h4>
                    <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                      <h2 className="ah-headline">
                        <span>Learn More About Our</span>
                        <span className="ah-words-wrapper white theme">
                          <b className="is-visible textcap">Values</b>
                          <b>Values</b>
                        </span>
                      </h2>
                    </div>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Quis ip suspendisse ultrices gravida. Risus commodo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-us ends */}
    </>
  )
}
