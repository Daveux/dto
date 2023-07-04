import {fetchSingleData} from "../../../utils/axios/fetch-data";
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

interface IArticle {
  id: string;
  attributes: {
    title: string;
    body: string;
  }
}
const DetailsComponent = () => {
  const [data, setData] = useState<IArticle>()
  const {id} = useParams()
  useEffect(() => {
    fetchSingleData(`http://localhost:1337/api/articles/${id}`).then(response => {
      const teaching = response.data.data;
      setData(teaching);
      console.log(teaching);
    })
  }, [id]);

  return (
    <div>
      {/* page header
    ================================================== */}
      <section className="page-header page-header--about">
        <div className="gradient-overlay" />
        <div className="row page-header__content">
          <div className="column">
            <h1>{data?.attributes.title}</h1>
          </div>
        </div>
      </section> {/* end page-header */}
      {/* page content
    ================================================== */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              {data?.attributes.body}
            </p>
          </div>
        </div>
      </section> {/* end page content */}
      {/* Social
    ================================================== */}
      <section className="s-social">
        <div className="row social-content">
          <div className="column">
            <ul className="social-list">
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--facebook" />
                  <span className="social-list__text">Facebook</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--twitter" />
                  <span className="social-list__text">Twitter</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--instagram" />
                  <span className="social-list__text">Instagram</span>
                </a>
              </li>
              <li className="social-list__item">
                <a href="#0">
                  <span className="social-list__icon social-list__icon--email" />
                  <span className="social-list__text">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div> {/* end social-content */}
      </section> {/* end s-social */}
    </div>
  );
}

export  default DetailsComponent;
