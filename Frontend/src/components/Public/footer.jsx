import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Image } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

function MyFooter() {
  return (
    <footer className="text-center text-lg-start text-light bg-dark pt-5">
      <section className="container text-center text-md-start mt-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <div className="d-flex align-items-center mb-3">
            <h6 className="text-uppercase fw-bold mb-0">
                <i className="bi bi-film"></i>FilmExplorer
              </h6>
              <Image
                src="src/images/my brand.png"
                width="70"
                height="60"
                alt="logo"
                className="me-4"
              />
             
            </div>
            <p>
              Dive into the world of cinema! Discover, review, and share your
              favorite movies with the world.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <p>
              <a href="/" className="text-light text-decoration-none">
                Home
              </a>
            </p>
            <p>
              <a href="/MyFavoriteMovies" className="text-light text-decoration-none">
                Favorites
              </a>
            </p>
            <p>
              <a href="/" className="text-light text-decoration-none">
                Search Movies
              </a>
            </p>
            <p>
              <a href="/about" className="text-light text-decoration-none">
                About
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Popular Genres</h6>
            <p>
              <i className="bi bi-play-btn-fill me-2"></i> Action
            </p>
            <p>
              <i className="bi bi-play-btn-fill me-2"></i> Comedy
            </p>
            <p>
              <i className="bi bi-play-btn-fill me-2"></i> Drama
            </p>
            <p>
              <i className="bi bi-play-btn-fill me-2"></i> Thriller
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
          <h6 className="text-uppercase fw-bold mb-3">Contact</h6>

             <Col>
                        <p><FaInstagram/> <strong></strong><a href="https://www.instagram.com/dhruv_chauhan_275?igsh=MWJyemRtazFsYjBjeA==">Instagram</a></p>
                        <p><FaTwitter /> <strong></strong><a href="https://www.facebook.com/rajpuatdhruvchauhan.chauhan?mibextid=ZbWKwL">Twitter</a></p>
                        <p><FaFacebook /> <strong></strong><a href="https://www.facebook.com/rajpuatdhruvchauhan.chauhan?mibextid=ZbWKwL">Facebook</a></p>
                        <p><FaEnvelope /> <strong>Email:</strong> dhruv03chauhan@gmail.com</p>
                    </Col>
          </div>
        </div>
      </section>

      <div className="text-center p-3 bg-black">
        © 2025 FilmExplorer. All Rights Reserved.
      </div>
    </footer>
  );
}

export default MyFooter;
