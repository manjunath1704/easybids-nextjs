import React from "react";
import  "./footer.module.scss";
export default function Footer() {
    return (
        <footer className="eb-footer">
        <div className="container">
          <div className="eb-footer__services">
            <div className="eb-footer__title">Service Categories</div>
            <div className="eb-footer__services-inner"><span className="eb-footer__items leading-10">Bathroom Remodelling Services</span><span className="eb-footer__items leading-10">Concrete, Brick & Stone Supply</span><span className="eb-footer__items leading-10">Painting & Staining Services</span><span className="eb-footer__items leading-10">Tile & Stone Services</span><span className="eb-footer__items leading-10">Air Conditioning Services</span><span className="eb-footer__items leading-10">Decking Services</span><span className="eb-footer__items leading-10">Countertops Services</span><span className="eb-footer__items leading-10">Electrical & Solar Services</span><span className="eb-footer__items leading-10">Household chore</span><span className="eb-footer__items leading-10">Walls & Ceilings services</span><span className="eb-footer__items leading-10">Cabinets services</span><span className="eb-footer__items leading-10">Fencing & Retaining Walls Services</span><span className="eb-footer__items leading-10">Heating & Furnaces Services</span><span className="eb-footer__items leading-10">Moving & Storing Services</span><span className="eb-footer__items leading-10">Roofing Services</span><span className="eb-footer__items leading-10">Windows & Doors Services</span><span className="eb-footer__items leading-10">Flooring Services</span><span className="eb-footer__items leading-10">Home Security & Surveillance services</span><span className="eb-footer__items leading-10">Home Construction Services</span><span className="eb-footer__items leading-10">Kitchen Remodelling Services</span><span className="eb-footer__items leading-10">Siding Services</span><span className="eb-footer__items leading-10">Decks, Porches & Patios Services</span><span className="eb-footer__items leading-10">Garage Services</span><span className="eb-footer__items leading-10">Home Theater Services</span><span className="eb-footer__items leading-10">Landscape, Yard & Garden Services</span><span className="eb-footer__items leading-10">Swimming pool Services</span><span className="eb-footer__items leading-10">Gutter Services</span><span className="eb-footer__items leading-10">Backyard Features Services</span><span className="eb-footer__items leading-10">Home Designers</span><span className="eb-footer__items leading-10">Storing Services</span></div>
          </div>
          <div className="eb-footer__available">
            <div className="eb-services__title eb-footer__title">Services Available in</div><span className="eb-footer__items leading-10">San Diego</span><span className="eb-footer__items leading-10">Los Angeles</span><span className="eb-footer__items leading-10">San Francisco</span><span className="eb-footer__items leading-10">San Clemente</span>
          </div>
          <div className="row eb-footer__about">
            <div className="col-lg-3">
              <div className="eb-footer__logo"><a href="./index.html"><img className="lozed" data-src="./assets/images/easybids/easybids-logo@2x.png" height="50px" alt="logo" srcset="./assets/images/easybids/easybids-logo@2x.png 306w,                         ./assets/images/easybids/easybids-logo@2x-300x118.png 300w" sizes="(max-width: 306px) 100vw, 306px" /></a></div>
              <div className="eb-footer__findus d-flex mt-5"><a className="eb-footer__icon" href="https://www.facebook.com/EasyBidsHomeImprovement/" target="_blank"><i className="fab fa-facebook-f"></i></a><a className="eb-footer__icon ml-2" href="https://www.instagram.com/easy.bids/" title="Follow on Instagram" target="_blank"><i className="fab fa-instagram"></i></a></div>
            </div>
            <div className="col-lg-3">
              <div className="eb-footer__customer">
                <div className="eb-footer__title">Customer</div>
                <p className="eb-footer__item eb-footer__item--link"><a href="./terms-and-conditions.html">Terms And Conditions</a></p>
                <p className="eb-footer__item eb-footer__item--link"><a href="./privacy-policy.html"> Privacy Policy </a></p>
                <p className="eb-footer__item eb-footer__item--link"><a href="./consumer-faq.html"> Customer FAQ </a></p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="eb-footer__serviceproviders">
                <div className="eb-footer__title">Service Provider</div>
                <p className="eb-footer__item eb-footer__item--link"><a href="./pro-terms-and-conditions.html">Pro Terms And Conditions</a></p>
                <p className="eb-footer__item eb-footer__item--link"><a href="./pro-privacy-policy.html">Pro Privacy Policy</a></p>
                <p className="eb-footer__item eb-footer__item--link"><a href="./service-provider-faq.html"> Service Provider FAQ </a></p>
              </div>
            </div>
            <div className="col-lg-3 text-left">
              <div className="eb-footer__contact">
                <div className="eb-footer__title">Contact</div>
                <div className="eb-footer__contact">
                  <p>Email us:<a className="eb-footer__item--link" href="info@easybids.com">info@easybids.com</a></p>
                  <p>Customer Service:<a className="eb-footer__item--link" href="tel:(888)-432-7924">(888)-432-7924</a></p>
                </div>
                <div className="eb-footer__btn"><a href="https://www.lightstream.com/?fact=14531&amp;cid=AA|LSL|anything|NB|AFF|homepage_rate_range_text_link|14531&amp;irad=177067&amp;irmp=1445074">
                    <button className="btn leading-9">Get Financing</button></a></div>
              </div>
            </div>
          </div>
          <div className="row eb-footer__copyrights">
            <div className="col-lg-4"><span>Easy Bids Inc.2020</span></div>
          </div>
        </div><a className="eb-footer__gotop" href="#"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
      </footer>
    )
  }