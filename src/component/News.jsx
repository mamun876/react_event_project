import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  useEffect(() => {
    allNews();
  }, []);

  const [isnews, setNews] = useState([]);

  const allNews = async () => {
    axios
      .get(`http://localhost/React/react_event_project/api/news.php`)
      .then((result) => {
        console.log(result.data.newslist);
        setNews(result.data.newslist);
      });
  };

  if (isnews) {
    return (
      <section className="event-articles pb-8">
        <div className="container">
          <div className="section-title mb-5 w-75 mx-auto text-center">
            <h3 className="h-title">News</h3>
            <h4 className="theme">Our News &amp; Articles</h4>
            <div
              className="selector4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2 className="ah-headline mb-0">
                <span>Our News &amp; </span>
                <span className="ah-words-wrapper white theme">
                  <b className="is-visible textcap">Articles</b>
                  <b>Articles</b>
                </span>
              </h2>
            </div>
          </div>
          <div className="recent-articles-inner">
            <div className="row">
              {isnews.map((item) => (
                <div className="col-lg-4 mb-4">
                  <div className="articles-item border-all bg-white overflow-hidden position-relative">
                    <div className="articles-image">
                      <img src="assets/images/blog/blog1.jpg" alt="image" />
                      <div className="articles-cats position-absolute top-0 end-0 bg-theme p-1 px-2 white mt-2 me-3">
                      {item.category}
                      </div>
                    </div>
                    <div className="articles-content-main">
                      <div className="articles-content p-4 pb-2">
                        <h4>
                          <a href="#">{item.title}</a>
                        </h4>
                        <a href="#" className="theme textupper small">
                          Continue Reading
                        </a>
                      </div>
                      <ul className="border-top d-block w-100 p-4 py-2">
                        <li>{item.date_create}</li> |<li> No Comments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default News;
