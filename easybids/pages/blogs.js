import React from "react";
import Header from '../components/Layout/header/header.jsx';
import Footer from '../components/Layout/footer/footer.jsx';
import  "./blogs.module.scss";
export default function Blog() {
    return ( <div>

<Header />
<body><div> <div className="eb-blog">
            <div className="container">
              <div className="eb-blog__title">
                <h2>Our Blog</h2>
                <hr align="center" width="8%" />
                <p className="text-center">Thoughts, News, Updates & Knowledge base of Home Improvement Services</p>
              </div>
            </div>
            <div className="eb-blog__posts mt-5">
            {/* post : start */}
              <div className="eb-post"><a href="./app.html">
                  <div className="eb-post__img"><img className="img-fluid lozad" data-src="./assets/images/easybids/Easy-Bids-Blog-Post-102.jpg" alt="How to get Google and Yelp ID for Easybids App" /></div></a>
                <div className="eb-post__desc">
                  <div className="eb-post__title">How to get Google and Yelp ID for Easybids App</div>
                  <div className="eb-post__author">BY WHITNEY | OCT 19, 2020 | CUSTOMER</div>
                  <div className="eb-post__content">The last step to becoming an Easybids service provider includes adding your Yelp ID and Google ID’s, which will help prove your authenticity.   Yelp To get your Yelp ID, all you’ve got to do is click on the below link & sign up. This helps customers view your...</div>
                </div>
              </div>
             
                {/* post : End */}
                {/* post : start */}
              <div className="eb-post">
                <div className="eb-post__desc">
                  <div className="eb-post__title">Fall Time? Renovation Time!</div>
                  <div className="eb-post__author">BY WHITNEY | OCT 1, 2020 | UNCATEGORIZED</div>
                  <div className="eb-post__content">The fall is a great time for home renovations. Say goodbye to heat, sweat, and humidity, and let's get ready for some home advancements to show off to your family and friends during the holidays. Need some home renovation ideas? Pick a new color for the front door....</div>
                </div>
              </div>
              {/* post : End */}
                {/* post : start */}
              <div className="eb-post">
                <div className="eb-post__desc">
                  <div className="eb-post__title">What Does the New Normal Look Like for Home Renovation?</div>
                  <div className="eb-post__author">BY WHITNEY | AUG 31, 2020 | UNCATEGORIZED</div>
                  <div className="eb-post__content">
                    Home renovation is changing right before our eyes. “Is the future of homes germ-free? That's
                    absolutely impossible. But how we live inside our current homes, the way we renovate and build
                    new ones will likely reflect our collective fear of another pandemic,” said...
                  </div>
                </div>
              </div>
              {/* post : End */}
                {/* post : start */}
              <div className="eb-post"><a href="./thingsknow.html">
                  <div className="eb-post__img"><img className="img-fluid lozad" data-src="./assets/images/easybids/Easy-Bids-Blog-Post-12.jpg" alt="   5 Things Every Contractor Should Know During the Coronavirus (COVID-19) Pandemic" /></div></a>
                <div className="eb-post__desc">
                  <div className="eb-post__title">5 Things Every Contractor Should Know During the Coronavirus (COVID-19) Pandemic</div>
                  <div className="eb-post__author">BY WHITNEY | JUL 6, 2020 | CUSTOMER</div>
                  <div className="eb-post__content">
                    The year 2020 sure is off to a crazy start! Talk about the Roaring 20’s! Am I right?! The
                    coronavirus (COVID-19) has affected every business around the world in one way or another. I am
                    sure that as a contractor you are doing the best you can to stay informed and keep...
                  </div>
                </div>
              </div>
             {/* post : End */}
                {/* post : start */}
              <div className="eb-post"><a href="./bored.html">
                  <div className="eb-post__img"><img className="img-fluid lozad" data-src="./assets/images/easybids/bored-in-the-House-Same.-Let’s-Renovate-b-400x250.png" alt="Bored in the House?" /></div></a>
                <div className="eb-post__desc">
                  <div className="eb-post__title">Bored in the House? Same. Let’s Renovate!</div>
                  <div className="eb-post__author">BY WHITNEY | JUL 6, 2020 | CUSTOMER</div>
                  <div className="eb-post__content">
                    Out here in California, the land of sunshine, the social distancing policy is still in full
                    effect and I think it is safe to say we are all going a little stir crazy. With all of this time
                    at home has it also made you reflect on...
                  </div>
                </div>
              </div>
             {/* post : End */}
             
              <div className="eb-post"><a href="./newnormal.html">
                  <div className="eb-post__img"><img className="lozad" data-src="./assets/images/easybids/easybids-verified-pro-1024x576.jpg" alt=" What does the “new normal” look like and how will it affect essential workers?" /></div></a>
                <div className="eb-post__desc">
                  <div className="eb-post__title">What does the “new normal” look like and how will it affect essential workers?</div>
                  <div className="eb-post__author">BY WHITNEY | MAY 19, 2020 | SERVICE PROVIDER</div>
                  <div className="eb-post__content">
                    These are trying times for all of us, and we are all doing our part, but what about those on the
                    front lines of society? Those who cannot work from home? Every job is important, but those that
                    require going out everyday deserve an extra round of applause. And yes!...
                  </div>
                </div>
              </div>
            {/* post : End */}
                {/* post : start */}
            </div>
            {/* stay in touch start */}
            <section className="eb-stayin">
              <div className="row">
                <div className="col-lg-4">
                  <h2>Stay in Touch</h2>
                </div>
                <div className="col-lg-4">
                  <form>
                    <div className="form-group">
                      <input className="form-control" type="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                  </form>
                </div>
                <div className="col-lg-4">
                  <h4> Contact</h4>
                  <p>Email us:<span> </span><a href="mailto:info@easybids.com">info@easybids.com</a></p>
                  <p>Customer Service:<span></span><a href="tel:(888)-432-7924">(888)-432-7924</a></p>
                </div>
              </div>
            </section>
          </div></div></body>
<Footer />
    </div> )
}
