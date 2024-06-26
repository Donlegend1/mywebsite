import React, {useEffect} from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

   useEffect(() => {
     const loadWhatsAppWidget = () => {
       // Replace with your group invite link

       const options = {
         whatsapp: "+2348147122184", // WhatsApp number
         call_to_action: "Chat us now", // Call to action
         position: "left", // Position may be 'right' or 'left'
         pre_filled_message: `Hello, Chat us now`, // WhatsApp pre-filled message
       };

       const proto = document.location.protocol;
       const host = "getbutton.io";
       const url = proto + "//static." + host;

       const script = document.createElement("script");
       script.type = "text/javascript";
       script.async = true;
       script.src = url + "/widget-send-button/js/init.js";

       script.onload = () => {
         window.WhWidgetSendButton.init(host, proto, options);
       };

       document.body.appendChild(script);
     };


     loadWhatsAppWidget();

     // Cleanup function
     return () => {
       // You may want to remove the script when the component unmounts
       // Example: document.body.removeChild(script);
     };
   }, []);

  return (
    <>
      <div>
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <div className="footer-item">
                    <h4 className="text-white mb-4">Newsletter</h4>
                    <p className="mb-3">
                      Dolor amet sit justo amet elitr clita ipsum elitr
                      est.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit consectetur adipiscing elit.
                    </p>
                    <div className="position-relative mx-auto rounded-pill">
                      <input
                        className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <button
                        type="button"
                        className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Explore</h4>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Home
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Services
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> About Us
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Latest Projects
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> testimonial
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Our Team
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <a href>
                    <i className="fa fa-map-marker-alt me-2" /> 123 Street, New
                    York, USA
                  </a>
                  <a href>
                    <i className="fas fa-envelope me-2" /> info@example.com
                  </a>
                  <a href>
                    <i className="fas fa-envelope me-2" /> info@example.com
                  </a>
                  <a href>
                    <i className="fas fa-phone me-2" /> +012 345 67890
                  </a>
                  <a
                    href
                    className="mb-3">
                    <i className="fas fa-print me-2" /> +012 345 67890
                  </a>
                  <div className="d-flex align-items-center">
                    <a
                      className="btn btn-light btn-md-square me-2"
                      href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-light btn-md-square me-2"
                      href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-light btn-md-square me-2"
                      href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-light btn-md-square me-0"
                      href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item-post d-flex flex-column">
                  <h4 className="text-white mb-4">Popular Post</h4>
                  <div className="d-flex flex-column mb-3">
                    <p className="text-uppercase text-primary mb-2">
                      Investment
                    </p>
                    <a
                      href="#"
                      className="text-body">
                      Revisiting Your Investment &amp; Distribution Goals
                    </a>
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <p className="text-uppercase text-primary mb-2">Business</p>
                    <a
                      href="#"
                      className="text-body">
                      Dimensional Fund Advisors Interview with Director
                    </a>
                  </div>
                  <div className="footer-btn text-start">
                    <a
                      href="#"
                      className="btn btn-light rounded-pill px-4">
                      View All Post <i className="fa fa-arrow-right ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                  <a
                    href="#"
                    className="border-bottom text-primary">
                    <i className="fas fa-copyright text-light me-2" />
                    Your Site Name
                  </a>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-body">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By{" "}
                <a
                  className="border-bottom text-primary"
                  href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
