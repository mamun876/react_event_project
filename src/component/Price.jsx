import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Price() {
  useEffect(() => {
    allPackage();
  }, []);

  const [ispackage, setPackage] = useState([]);

  const allPackage = async () => {
    axios.get(`http://localhost/React/react_event_project/api/package.php`)
    .then(result => {
      console.log(result.data.packagelist)
      setPackage(result.data.packagelist);
    })
  }

  if (ispackage) {
    return (
      <div>

        {/* BreadCrumb Starts */}
        <section className="breadcrumb-main" style={{ backgroundImage: 'url(assets/images//pexels-wendy-wei-1190297.jpg)' }}>php
          <div className="breadcrumb-outer">
            <div className="container">
              <div className="breadcrumb-content text-center pt-14 pb-2">
                <h5 className="theme mb-0">Eventiz</h5>
                <h1 className="mb-0 white">Our Pricing</h1>
              </div>
            </div>
          </div>
          <div className="bread-overlay" />
        </section>
        {/* BreadCrumb Ends */}
        {/* event-pricing starts */}
        <section className="event-pricing bg-grey pb-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4">
                <div className="section-title text-lg-start text-center mb-5">
                  <h3 className="h-title">Pricing</h3>
                  <h4 className="theme">Pricing Tablen</h4>
                  <div className="selector4" style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 className="ah-headline mb-0">
                      <span>Explore Flexible Our Pricing</span>
                      <span className="ah-words-wrapper white theme">
                        <b className="is-visible textcap">Plans</b>
                        <b>Plans</b>
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-main">
              <div className="row">
                {
                  ispackage.map(item => (
                    <div className="col-lg-4 mb-6">
                    <div className="pricing-item text-center p-5 bg-white position-relative">
                      <div className="pricing-top" />
                      <h3 className="mb-0">{item.title}</h3>
                      <p className="mb-0">{item.sub_title}</p>
                      <div className="pricing-price py-4">
                        <h2 className="mb-0 theme d-flex align-items-start justify-content-center lh-1">
                          <span className="pricing-currency theme">$</span> {item.price} </h2>
                        <p className="mb-0">Person</p>
                      </div>
                      <ul className="pricing-features-list mb-4">
                        <li className="d-block border-b pb-2 mb-2">{item.service_include} </li>
                        <li className="d-block border-b pb-2 mb-2">Snack &amp; Softdrink</li>
                        <li className="d-block border-b pb-2 mb-2">Certificates</li>
                        <li className="d-block">Private Access</li>
                      </ul>
                      <div className="pricing-btn mb-1">
                        <a href="#" className="nir-btn">Purchase</a>
                      </div>
                      <small>*Please read our term and condition before order ticket</small>
                    </div>
                  </div>
                 )) 
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
