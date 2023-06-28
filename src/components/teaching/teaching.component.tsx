import {fetchData} from "../../utils/axios/fetch-data";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blogTileImage from "./assets/volunteer-header-bg-2000.jpg"
import {ContentCardComponent} from "../content-card";
import {useNavigate} from "react-router-dom";

interface IArticle {
  id: string;
  attributes: {
    title: string;
    body: string;
  }
}
const TeachingComponent = () => {
  const [data, setData] = useState<IArticle[]>()
  useEffect(() => {
    fetchData().then(response => {
      const teachings = response.data.data;
      setData(teachings);
      console.log(teachings);
    })
  }, []);

const teachings = data?.map((teaching, pos) => {
  console.log("Position", pos, teaching);
  return (
    <ContentCardComponent
      item={teaching.attributes}
      key={teaching.id.toString()}
      navigateTo={`/teaching/${teaching.id}`}
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
            <h1>Upcoming Events</h1>
          </div>
        </div>
      </section> {/* end page-header */}
      {/* page content
    ================================================== */}
      <section className="page-content">
        <div className="row wide block-large-1-2 block-900-full events-list">
          {teachings}
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

export  default TeachingComponent;
