import React from "react";
import { toast } from 'react-toastify';

import logo from "./logo.jpg";
import back from "./back.png";
import axios from "axios";
import about from "./about.jpg";


function Index() {
  const [data, setData] = React.useState({
    fname: "",
    lname: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = React.useState("");
  const [open, setOpen] = React.useState(false);
  

  const [queryBtn, setQueryBtn] = React.useState("Query");
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setError("");
    if (data.fname.length<3) {
      setError("Please enter your name");
      return;
    }
    if (!data.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setError("Please enter valid email");
      return;
    }
    if (!data.number.match(/^\d{10}$/)) {
      setError("Please enter valid phone number");
      return;
    }
    
    if (data.subject.length<5) {
      setError("Please enter subject");
      return;
    }
    if (data.message.length<5) {
      setError("Please enter query");
      return;
    }
    setQueryBtn("Submiting...")
    axios
      .post("https://legalcivic.com/query", data)
      // .post("http://localhost:3001/query", data)

      .then((res) => {
        console.log("res", res);
        setQueryBtn("Query")
        //alert("Query Submitted");
        toast.success("Query Submited")
      })
      .catch((err) => {
        console.log("err", err);
        setQueryBtn("Query")
        toast.error("Unable to submit your query! Please try again ")

      });
  };
  return (
    <>
      <div className="back-to-top"></div>
      <div className="logo-top">
        <div className="clogo">
          LegalCivic & Co.
        </div>
        <div  className="csocal">
          <i class="fas fa-phone-alt"></i> CallUs : +91 8882487336{" "}
          <i class="fas fa-envelope"></i> <i class="fab fa-facebook-square"></i>{" "}
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white sticky"
          data-offset="500">
          <div className="container">
            <img
              src={logo}
              alt="logo"
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            {/* <a className="navbar-brand">LegalCivic</a> */}

            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setOpen(!open)}
              >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarContent" style={{display:open?"block":"none"}}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="page-banner home-banner">
            <div className="row align-items-center flex-wrap-reverse h-100">
              <div className="col-md-6 py-5 wow fadeInLeft">
                <h1 className="mb-4">
                  Dream Your Business with LegalCivic. Your local partner for
                  global dream.
                </h1>
                <p className="text-lg text-grey mb-5">
                  To be a leader in excellencing corporate legal and regulatory
                  practices providing cost-effective services.{" "}
                </p>
                {/* <a href="#" className="btn btn-primary btn-split">Watch Video <div className="fab"><span className="mai-play"></span></div></a> */}
              </div>
              <div className="col-md-6 py-5 wow zoomIn">
                <div className="img-fluid text-center">
                  <img src={back} alt="" style={{ width: 350 }} />
                </div>
              </div>
            </div>
            <a href="#about" className="btn-scroll" data-role="smoothscroll">
              <span className="mai-arrow-down"></span>
            </a>
          </div>
        </div>
      </header>

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="../assets/img/services/service-1.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">
                  Registration Services
                  </h5>
                  <p>
                  Register your business with ease from the comfort of your location with LegalCivic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="../assets/img/services/service-2.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Compliance Services </h5>
                  <p>
                  We help you for timely completion of regular and event-based compliances under the different laws.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="../assets/img/services/service-3.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Litigation Services</h5>
                  <p>
                  Resolve your disputes with our expert team of lawyers and attorneys in efficient and cost-effective manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**about */}
      <div className="page-section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <span className="subhead">About us</span>
              {/* <h2 className="title-section"> Service Company</h2> */}
              <div className="divider"></div>

              <p>
                LegalCivic & Company is a passionate and dynamic team of legal
                and finance professionals established in the year 2016 with its
                head office at New Delhi. The firm currently has an experienced
                team led by its partners having total professional experience of
                about two decades in their respective fields. Apart from our
                head office at New Delhi, the firm has a pan India presence
                through a network of associates. Our clients include
                diversified, large and medium businesses & multinational
                enterprises in different industries.
                <br />
                <br />
                We believe in mastery and building strong relationships with
                clients and associates. Ever since our inception, we have been
                guided by the code of conduct and ethics of our profession
                ensuring at all times highest professional standards to our
                clients. Our range of services includes Startup Registration,
                Company & LLP Registration, NGO Registration, NBFCs
                Registration, GST Registration, GST Return Filing & Cases,
                Income Tax Returns (ITR) filing, Book-keeping and Accounting,
                Trademark Registration, Copyright Registration, Import-Export
                Code (IEC Code), FSSAI License, MSME Registration, Business
                Loan, Partnership Firm Registration, Civil and Criminal Cases,
                PASARA License, Cheque Bouncing cases, RERA Registration and
                Cases and many more…
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren.
              </p>
              {/* <a href="about.html" className="btn btn-primary mt-3">Read More</a> */}
            </div>
            <div className="col-lg-6 py-3 wow fadeInRight">
              <div className="img-fluid py-3 text-center">
                <center><img src={about} alt="" width={450} /></center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section bg-light" id="services">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our services</div>
            {/* <h2 className="title-section">How SEO Team Can Help</h2> */}
            <div className="divider mx-auto"></div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fab fa-galactic-senate"></i>
                  </span>
                </div>
                <h5>Startup Registration</h5>
                {/* <p>We analyse your website's structure, internal architecture & other key</p> */}
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-building"></i>
                  </span>
                </div>
                <h5>Company & LLP Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-hands-helping"></i>
                  </span>
                </div>
                <h5>Partnership Firm Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-people-arrows"></i>
                  </span>
                </div>
                <h5>NGO Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-university"></i>
                  </span>
                </div>
                <h5>NBFCs Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-calculator"></i>
                  </span>
                </div>
                <h5>GST Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-divide"></i>
                  </span>
                </div>
                <h5>GST Return Filing & Cases</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-square-root-alt"></i>
                  </span>
                </div>
                <h5>Income Tax Returns (ITR) filing</h5>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-user-edit"></i>
                  </span>
                </div>
                <h5>Book-keeping and Accounting</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-trademark"></i>
                  </span>
                </div>
                <h5>Trademark Registration</h5>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="far fa-copyright"></i>
                  </span>
                </div>
                <h5>Copyright Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-ship"></i>
                  </span>
                </div>
                <h5>Import-Export Code (IEC Code)</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-cheese"></i>
                  </span>
                </div>
                <h5>FSSAI License</h5>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-user-shield"></i>
                  </span>
                </div>
                <h5>PASARA License</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-industry"></i>
                  </span>
                </div>
                <h5>Udyam/MSME Registration</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-coins"></i>
                  </span>
                </div>
                <h5>Business Loan</h5>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-balance-scale-left"></i>
                  </span>
                </div>
                <h5>Civil and Criminal Cases</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-restroom"></i>
                  </span>
                </div>
                <h5>Family and Matrimonial Disputes</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-house-user"></i>
                  </span>
                </div>
                <h5>Property Disputes</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-money-check"></i>
                  </span>
                </div>
                <h5>Cheque Bouncing cases</h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business">
                    <i class="fas fa-city"></i>
                  </span>
                </div>
                <h5>RERA Registration & cases</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section" id="contact">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-lg-4 py-3">
              <div className="display-4 text-center text-primary">
                <span className="mai-pin"></span>
              </div>
              <p
                className="mb-3 font-weight-medium text-lg"
                style={{
                  color: "black",
                  fontWeight: "600",
                }}>
                Address
              </p>
              <p className="mb-0 text-secondary">
                LegalCivic & Company
                <br /> T-136/1, 2nd Floor, Baljit Nagar, Patel Nagar <br />
                New Delhi – 110008
              </p>
            </div>
            <div className="col-lg-4 py-3">
              <div className="display-4 text-center text-primary">
                <span className="mai-call"></span>
              </div>
              <p
                className="mb-3 font-weight-medium text-lg"
                style={{
                  color: "black",
                  fontWeight: "600",
                }}>
                Phone
              </p>
              <p className="mb-0">
                <a href="#" className="text-secondary">
                <i class="fas fa-phone-alt"></i> +91 8882487336
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-secondary"></a>
              </p>
            </div>
            <div className="col-lg-4 py-3">
              <div className="display-4 text-center text-primary">
                <span className="mai-mail"></span>
              </div>
              <p
                className="mb-3 font-weight-medium text-lg"
                style={{
                  color: "black",
                  fontWeight: "600",
                }}>
                Email Address
              </p>
              <p className="mb-0">
                <a href="#" className="text-secondary">
                <i class="fas fa-envelope"></i>  support@legalcivic.com
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-secondary"></a>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form action="#" className="contact-form py-5 px-lg-5">
                <h2 className="mb-4 font-weight-medium text-secondary">
                  Get in touch
                </h2>
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" for="fname">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" for="lname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" for="fname">
                      Email
                    </label>
                    <input
                      type="email"
                      id="fname"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" for="lname">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="number"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      onChange={handleChange}
                      cols="30"
                      rows="8"
                      className="form-control"
                      placeholder="Write your notes or questions here..."></textarea>
                    <div class="invalid-feedback" style={{display:error==""?"none":"block"}}>{error}</div>
                  </div>
                </div>

                <div className="row form-group mt-4">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}>
                      {queryBtn}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 px-0"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}>
              {/* <div className="maps-container"><div id="google-maps"></div></div> */}
              <div
                className="row text-center align-items-center"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}>
                <div className="col-lg-4 py-3">
                  <div className="display-4 text-center text-primary">
                    <span className="mai-pin"></span>
                  </div>
                  <p
                    className="mb-3 font-weight-medium text-lg"
                    style={{ fontSize: 23, color: "black", fontWeight: "600" }}>
                    Associate Offices
                  </p>
                  <p className="mb-0 text-secondary" style={{ fontSize: 20 }}>
                    Mumbai, Kolkata, Bengaluru, Hyderabad, Chandigarh, Patna,
                    Agra, Vadodara, Ranchi, Shimla, Lucknow, Ahmedabad,
                    Allahabad, Surat, Darbhanga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section" style={{height:"unset !important"}}>
        <div className="container">
          <div className="text-center wow fadeInUp"></div>

          <div className="row mt-5" style={{height:"unset !important"}}>
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog" >
              <ins class="adsbygoogle"
               
                data-ad-client="ca-pub-4888538539035804"
                data-ad-slot="2335516543"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
              <ins class="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-4888538539035804"
                data-ad-slot="7038066937"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
              <ins class="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-4888538539035804"
                data-ad-slot="6083189867"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 50 }}>
      <center>
      LegalCivic & Co. &copy;{new Date().getFullYear()}
      </center>
       
      </div>
      {/* <footer className="page-footer bg-image" style="background-image: url(../assets/img/world_pattern.svg);">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 py-3">
            <h3>SEOGram</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>
  
            <div className="social-media-button">
              <a href="#"><span className="mai-logo-facebook-f"></span></a>
              <a href="#"><span className="mai-logo-twitter"></span></a>
              <a href="#"><span className="mai-logo-google-plus-g"></span></a>
              <a href="#"><span className="mai-logo-instagram"></span></a>
              <a href="#"><span className="mai-logo-youtube"></span></a>
            </div>
          </div>
          <div className="col-lg-3 py-3">
            <h5>Company</h5>
            <ul className="footer-menu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>
          <div className="col-lg-3 py-3">
            <h5>Contact Us</h5>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <a href="#" className="footer-link">+00 1122 3344 5566</a>
            <a href="#" className="footer-link">seogram@temporary.com</a>
          </div>
          <div className="col-lg-3 py-3">
            <h5>Newsletter</h5>
            <p>Get updates, news or events on your mail.</p>
            <form action="#">
              <input type="text" className="form-control" placeholder="Enter your email.." />
              <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
            </form>
          </div>
        </div>
  
        <p className="text-center" id="copyright">Copyright &copy; 2020. This template design and develop by <a href="https://macodeid.com/" target="_blank">MACode ID</a></p>
      </div>
    </footer> */}
    </>
  );
}

export default Index;
