import React from 'react'
import  "./header.module.scss";
export default function Header() {
    return (
    <header className="eb-header">
        <nav className="navbar navbar-expand-lg navbar-light eb-navbar"><a className="navbar-brand eb-navbar__brand ml-5 py-2" href="./index.html"><img className="lozad" data-src="./assets/images/easybids/easybids-logo@2x.png" height="50px" alt="logo" srcset="./assets/images/easybids/easybids-logo@2x.png 306w,             ./assets/images/easybids/easybids-logo@2x-300x118.png 300w" sizes="(max-width: 306px) 100vw, 306px" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i></button>
          <div className="collapse navbar-collapse mr-lg-5 mr-sm-0" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto eb-navbar__nav">
              <li className="nav-item eb-navbar__item mt-1"><a className="nav-link" href="./consumer-faq.html">FAQs</a></li>
              <li className="nav-item eb-navbar__item mt-1"><a className="nav-link" href="./blogs.html">
                   In the News</a></li>
              <li className="nav-item eb-navbar__item mt-1"><a className="nav-link" href="https://www.lightstream.com/"> Get Financing</a></li>
              <li className="nav-item eb-navbar__item mt-1 eb-navbar__item--tablet"><a className="nav-link" href="./service-provider.html">Are you a Service Provider?</a></li>
              <li className="nav-item eb-navbar__item mt-1 eb-navbar__item--tablet"><a className="nav-link" href="./easybids-pro-faq.html">Service Provider FAQs</a></li>
              <li className="nav-item eb-navbar__item eb-navbar__cta ml-3">
                <div className="btn-group"><a className="btn btn-primary font-weight-bold servicebtn" type="button " href="./service-provider.html"> Are you a Service Provider?</a>
                  <button className="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-angle-down" aria-hidden="true"></i></button>
                  <div className="dropdown-menu p-3">
                    <div className="dropdown-item">
                      <div className="eb-spbtn">
                        <div className="eb-spbtn__wrapper"><a href="./easybids-pro-faq.html">Service Provider FAQs</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    
    )
  }