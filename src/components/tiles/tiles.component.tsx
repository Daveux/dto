import {fetchData} from "../../utils/axios/fetch-data";
import React, { useState, useEffect } from 'react';
import {ContentCardComponent} from "../content-card";

interface IArticle {
  id: string;
  attributes: {
    title: string;
    body: string;
  }
}

interface TilesProps {
  pageName: string;
  dataLink: string;
}
const TilesComponent = (props: TilesProps) => {
  const [data, setData] = useState<IArticle[]>()
  useEffect(() => {
    fetchData(props.dataLink).then(response => {
      const fetchedData = response?.data?.data;
      setData(fetchedData);
      console.log(fetchedData);
    })
  }, [props.dataLink]);

const mappedData = data?.map((datum, pos) => {
  console.log("Position", pos, datum);
  return (
    <ContentCardComponent
      item={datum.attributes}
      key={datum.id.toString()}
      navigateTo={`/teaching/${datum.id}`}
    />
  )
})
  return (
    <div>
      {/* page header
    ================================================== */}
      <section className="page-header page-header--events">
        <div className="gradient-overlay" />
        <div className="row page-header__content">
          <div className="column">
            <h1>{props.pageName}</h1>
          </div>
        </div>
      </section> {/* end page-header */}
      {/* page content
    ================================================== */}
      <section className="page-content">
        <div className="row wide block-large-1-2 block-900-full events-list">
          {mappedData || <h1>No data</h1>}
        </div> {/* end events-list */}
        <div className="row">
          <div className="column large-full">
            <nav className="pgn">
              <ul>
                <li><a className="pgn__prev" href="#0">Prev</a></li>
                <li><a className="pgn__num" href="#0">1</a></li>
                <li><span className="pgn__num current">2</span></li>
                <li><a className="pgn__num" href="#0">3</a></li>
                <li><a className="pgn__num" href="#0">4</a></li>
                <li><a className="pgn__num" href="#0">5</a></li>
                <li><span className="pgn__num dots">…</span></li>
                <li><a className="pgn__num" href="#0">8</a></li>
                <li><a className="pgn__next" href="#0">Next</a></li>
              </ul>
            </nav> {/* end pgn */}
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

export  default TilesComponent;
