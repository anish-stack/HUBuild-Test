import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import './slider.css'
import vastu from './vastu.png';
import engineer from './engineer.png'
import interior from './interior-design.png'
import support from './support.png'
import axios from "axios";


const Slider = () => {
  const [desktopBanner, setDesktopBanner] = useState([])
  const [mobileBanner, setMobileBanner] = useState([])
  const handleFetchBanner = async () => {
    try {
      const { data } = await axios.get('https://testapi.dessobuild.com/api/v1/get-all-banner')
      const allBanner = data.data
      const filterData = allBanner.filter(item => item.active === true)
      const desktopBanner = filterData.filter(item => item.view === 'Desktop')
      const mobileBanner = filterData.filter(item => item.view === 'Mobile')
      setDesktopBanner(desktopBanner)
      setMobileBanner(mobileBanner)
    } catch (error) {
      console.log("Internal server error in getting banners", error)
      // toast.error(error?.response?.data?.errors?.[0] || error?.response?.data?.message || "Please try again later")
    }
  }
  useEffect(() => {
    handleFetchBanner()
  }, [])
  return (
    <div className="container-fluid new_banner text-center">
      <div id="carouselExampleFade" class="carousel slide carousel-fade fix_height_banner" data-bs-ride="carousel">
        <div class="carousel-inner">
          {
            desktopBanner.map((item, index) => (
              <div key={index} class="carousel-item active">
                <img src={item?.bannerImage?.url} class="d-block w-100" alt="hero-banner" />
              </div>
            ))
          }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ width: "90%" }} className="mx-auto my-4">
        <div className="row">
          {/* Navigation Cards */}
=======
import Skeleton from "react-loading-skeleton";
import "./slider.css";
import vastu from "./vastu.png";
import engineer from "./engineer.png";
import interior from "./interior-design.png";
import support from "./support.png";
import axios from "axios";

const Slider = () => {
  const [desktopBanner, setDesktopBanner] = useState([]);
  const [mobileBanner, setMobileBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchBanner = async () => {
    try {
      const { data } = await axios.get(
        "https://testapi.dessobuild.com/api/v1/get-all-banner"
      );
      const allBanner = data.data;
      const filterData = allBanner.filter((item) => item.active === true);
      const desktopBanner = filterData.filter((item) => item.view === "Desktop");
      const mobileBanner = filterData.filter((item) => item.view === "Mobile");
      setDesktopBanner(desktopBanner);
      setMobileBanner(mobileBanner);
    } catch (error) {
      console.log("Internal server error in getting banners", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchBanner();
  }, []);

  return (
    <div className="container-fluid new_banner text-center">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade fix_height_banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {loading ? (
            // Skeleton placeholder while loading
            <div className="carousel-item active">
              <Skeleton height={400} width="100%" />
            </div>
          ) : (
            desktopBanner.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={item?.bannerImage?.url}
                  className="d-block w-100"
                  alt="hero-banner"
                />
              </div>
            ))
          )}
        </div>
        {!loading && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>

      {/* Navigation Cards */}
      <div style={{ width: "90%" }} className="mx-auto my-4">
        <div className="row">
>>>>>>> ff81937 (new)
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/talk-to-architect" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
<<<<<<< HEAD
                  <img src={engineer} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark">Connect With Architect</h5>
                  {/* <p className="card-text d-none d-md-block text-muted">Learn more about our mission and values.</p> */}
=======
                  <img
                    src={engineer}
                    className="img-fluid icon_chat mb-2"
                    alt="Chat Icon"
                  />
                  <h5 className="card-title fs-6 text-dark">
                    Connect With Architect
                  </h5>
>>>>>>> ff81937 (new)
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/talk-to-interior" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect w-100">
                <div className="card-body forHeight text-center">
<<<<<<< HEAD
                  <img src={interior} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark">Connect With Interior Designer</h5>
                  {/* <p className="card-text d-none d-md-block text-muted">Explore the services we offer to our clients.</p> */}
=======
                  <img
                    src={interior}
                    className="img-fluid icon_chat mb-2"
                    alt="Chat Icon"
                  />
                  <h5 className="card-title fs-6 text-dark">
                    Connect With Interior Designer
                  </h5>
>>>>>>> ff81937 (new)
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/Vastu" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
<<<<<<< HEAD
                  <img src={vastu} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark">Connect With Vastu Expert</h5>
                  {/* <p className="card-text d-none d-md-block  text-muted">Get in touch with us for any inquiries.</p> */}
=======
                  <img
                    src={vastu}
                    className="img-fluid icon_chat mb-2"
                    alt="Chat Icon"
                  />
                  <h5 className="card-title fs-6 text-dark">
                    Connect With Vastu Expert
                  </h5>
>>>>>>> ff81937 (new)
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-6 px-2 mb-3">
            <Link to="/contact" className="text-decoration-none">
              <div className="card bg-light border-light hover-effect">
                <div className="card-body forHeight text-center">
<<<<<<< HEAD
                  <img src={support} className="img-fluid icon_chat mb-2" alt="Chat Icon" />
                  <h5 className="card-title fs-6 text-dark">Support</h5>
                  {/* <p className="card-text d-none d-md-block  text-muted">Get in touch with us for any inquiries.</p> */}
=======
                  <img
                    src={support}
                    className="img-fluid icon_chat mb-2"
                    alt="Chat Icon"
                  />
                  <h5 className="card-title fs-6 text-dark">Support</h5>
>>>>>>> ff81937 (new)
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
