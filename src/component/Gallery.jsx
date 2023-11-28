

export default function Gallery() {
  return (
    <div>

         {/* BreadCrumb Starts */}  
         <section className="breadcrumb-main" style={{backgroundImage: 'url(assets/images//pexels-wendy-wei-1190297.jpg)'}}>
          <div className="breadcrumb-outer">
            <div className="container">
              <div className="breadcrumb-content text-center pt-14 pb-2">
                <h5 className="theme mb-0">Eventiz</h5>
                <h1 className="mb-0 white">Our Gallery</h1>
              </div>
            </div>
          </div>
          <div className="bread-overlay" />
        </section>
        {/* BreadCrumb Ends */} 
        {/* event-gallery starts */}
        <section className="event-gallery" style={{backgroundImage: 'url(assets/images//speaker_bg.png)'}}>
          <div className="container">
            <div className="section-title mb-5 w-75 mx-auto text-center">
              <h3 className="h-title">Gallery</h3>
              <h4 className="theme">Event Gallery</h4>
              <div className="selector4" style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className="ah-headline mb-0">
                  <span>Beautiful Snapshot Of Recent </span>
                  <span className="ah-words-wrapper white theme">
                    <b className="is-visible textcap">Events</b>
                    <b>Events</b>
                  </span>
                </h2>
              </div>
            </div>
            <div className="event-gallerystart">
              <div className="row gallery-main">
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog1.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog1.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog2.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog2.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog3.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog3.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog4.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog4.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog3.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog3.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mansonry-item p-2">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <a href="assets/images//blog/blog4.jpg" data-lightbox="gallery" data-title="Title">
                        <img src="assets/images//blog/blog4.jpg" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>
    </div>
  )
}
