import "./App.css";
import logo from "#/Frame.png";
import img1 from "#/img1.png";
import img2 from "#/Frame1.png";
import img3 from "#/Frame2.png";
import img4 from "#/Rectangle.png";
import img5 from "#/Rectangle (1).png";
import img6 from "#/top-rated 1.png";
import img7 from "#/image.png";
import img8 from "#/insurance 1.png";

import num1 from "#/num1.png";
import num2 from "#/num2.png";
import num3 from "#/num3.png";
import for1 from "#/for1.png";
import img9 from "#/confetti 1.png";
import img10 from "#/Frame (4).png";

import img11 from "#/Frame (5).png";
import img12 from "#/Frame (6).png";
import img13 from "#/Rectangle (5).png";
import img14 from "#/Rectangle (6).png";

import imgf from "#/Frame (7).png";
import imgi from "#/Frame (8).png";
import imgy from "#/Frame (9).png";
import imgl from "#/Frame (10).png";
import imgt from "#/Frame (11).png";

function App() {
  return (
    <div>
      <header>
        <div className="div1">
          <img src={logo} alt="" />
          <a href="">Life insurance</a>
          <a style={{ color: "#007188" }} href="">
            Why Bello
          </a>
          <a href="">Help</a>
        </div>

        <div className="div1">
          <a href="">Log in</a>
          <button className="btnGet">Get my price</button>
        </div>
      </header>

      <section>
        <div className="section1">
          <div className="div1sec1">
            <p className="pmeet">MEET BELLO</p>
            <p className="ph1">A new kind of life insurance</p>
            <p className="psecure">
              Secure your family's financial future, in as little as 10 minutes.
            </p>

            <a href="" className="aGet">
              Get my price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <img className="img1" src={img1} alt="" />
          </div>
        </div>

        <div className="section2">
          <div className="div1sec2">
            <img src={img2} alt="" />
            <div>
              <p className="p1">Secure your future</p>
              <p className="p2">
                It’s more affordable <br />
                than you think
              </p>
              <p className="p3">
                Life insurance shouldn’t be confusing or expensive. Bello’s term
                life insurance makes protecting your loved ones easy and
                affordable.
              </p>

              <a className="aGet2" href="">
                Get My Price
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p className="pData">
            {" "}
            <span>*</span> Data for illustrative purposes
          </p>
        </div>

        <div className="section3">
          <div className="div1sec3">
            <p className="p1">Technology meets service</p>
            <p className="p2">We're here to help</p>
            <p className="p3">
              Bella, our smart bot, can guide you to your perfect policy.
              There’s also human help whenever you need it.
            </p>

            <a className="aGet2" href="">
              Get My Price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <img src={img3} alt="" />
        </div>

        <div className="section4">
          <div className="div1sec4">
            <img className="img4" src={img4} alt="" />
            <p className="p1">Top-Rated Term Life Insurance</p>
            <p className="p2">You’re in safe hands</p>
            <p className="p3">
              We've partnered with, [insert underwriter], one of the world’s
              largest, most trusted insurance companies. This means we can
              ensure reliability in paying Claims.
            </p>
          </div>

          <div className="div2sec4">
            <div className="card1">
              <img src={img6} alt="" />
              <p className="pcard">Top-Rated</p>
              <p className="pcard2">
                A+ Financial Strength Rating by A.M. Best.{" "}
                <a href="">What does this mean?</a>
              </p>
            </div>

            <div className="card1">
              <img src={img7} alt="" />
              <p className="pcard">Expert guidance</p>
              <p className="pcard2">
                We've placed millions of dollars in coverage people nationwide.
              </p>
            </div>

            <div className="card1">
              <img style={{ width: "200px" }} src={img8} alt="" />
              <p className="pcard">We care</p>
              <p style={{ fontSize: "16px" }} className="pcard2">
                We care about you. We’re a 5 star insurance company. Well… Close
                enough!
              </p>
            </div>
          </div>

          <img className="img5" src={img5} alt="" />
        </div>

        <div className="section5">
          <p className="p1">How it works</p>
          <p style={{ color: "white" }} className="p2">
            Affordable life insurance in minutes
          </p>
          <p
            style={{ color: "#ACB4BF", width: "60%", margin: "auto" }}
            className="p3"
          >
            We use technology to save you time and money – no pushy sales
            agents, paperwork, or extra fees. Just a few clicks and you’re done.
          </p>

          <div className="div1sec5">
            <img className="img10" src={img10} alt="" />
            <img className="img9" src={img9} alt="" />

            <img className="num1" src={for1} alt="" />
            <img className="num11" src={num1} alt="" />

            <img className="num2" src={for1} alt="" />
            <img className="num22" src={num2} alt="" />

            <img className="num3" src={for1} alt="" />
            <img className="num33" src={num3} alt="" />

            <div className="divcard5">
              <div className="card">
                <p className="pc1">Get My Price</p>
                <p className="pc2">
                  Choose the amount that you would like to be covered for and
                  we’ll give you a quote.
                </p>
              </div>

              <div className="card">
                <p className="pc1">Apply</p>
                <p className="pc2">
                  Answer a few questions and get your final price.
                </p>
              </div>

              <div className="card">
                <p className="pc1">You’re Covered</p>
                <p className="pc2">
                  Congratulations on securing your loved ones financial future!
                </p>
              </div>
            </div>
          </div>
          <a style={{ margin: "auto" }} href="" className="aGet">
            Get my price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

        <div className="section6">
          <div style={{ width: "50%" }}>
            <img className="img11" src={img11} alt="" />
            <img className="img12" src={img12} alt="" />
          </div>

          <div className="div1sec6">
            <p className="p1">You've Got This</p>
            <p className="p2">Everything you need— completely free</p>
            <p style={{ width: "450px" }} className="p3">
              Here’s the latest info, guides, and, helpful tools, from the Bello
              team. Learn about life insurance, finances, health and wellness.
            </p>

            <a style={{ width: "210px" }} className="aGet2" href="">
              Visit Learning Center
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="section7">
          <div className="card2">
            <p className="psec71">Calculator</p>
            <p className="psec72">How much life insurance do I need?</p>

            <a
              style={{ color: "#7CAFDD", width: "200px" }}
              className="aGet2"
              href=""
            >
              Calculate Coverage
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div style={{ backgroundColor: "#FFAE684D" }} className="card2">
            <p style={{ color: "#E79751" }} className="psec71">
              Term vs. perm
            </p>
            <p className="psec72">
              Term vs. whole life insurance. Which is best for you?
            </p>

            <a
              style={{ color: "#E79751", width: "200px" }}
              className="aGet2"
              href=""
            >
              See the winner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div style={{ backgroundColor: "#FA52404D" }} className="card2">
            <p style={{ color: "#FA5240" }} className="psec71">
              Pricing
            </p>
            <p className="psec72">How much does life insurance cost?</p>

            <a
              style={{ color: "#FA5240", width: "200px" }}
              className="aGet2"
              href=""
            >
              Tell me more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div style={{ backgroundColor: "#126F854D" }} className="card2">
            <p style={{ color: "#126F85" }} className="psec71">
              Insurance 101
            </p>
            <p className="psec72">The ultimate guide to life insurance.</p>

            <a
              style={{ color: "#126F85", width: "200px" }}
              className="aGet2"
              href=""
            >
              Become an expert
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="section8" style={{ textAlign: "center" }}>
          <img className="img13" src={img13} alt="" />
          <img className="img14" src={img14} alt="" />

          <p className="p2">Get Started Today.</p>
          <p className="p3">
            Join the Bello community of people who are securing their financial
            future.
          </p>

          <a style={{ margin: "auto" }} className="aGet" href="">
            Get my price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="divf">
            <div style={{ width: "60%" }}>
              <img src={logo} alt="" />
              <p className="pbello">
                Bello is a trading name of Bello Insurance Services LLC. Bello
                policies are issued by [Insert Underwriter here].
              </p>

              <div className="serfoot">
                <input type="text" name="" id="" />
                <button className="btnGo">
                  Go
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>

              <div className="divseti">
                <img src={imgf} alt="" />
                <img src={imgi} alt="" />
                <img src={imgy} alt="" />
                <img src={imgl} alt="" />
                <img src={imgt} alt="" />
              </div>
            </div>
          </div>

          <div className="divf2">
            <div>
              <p className="ph3">Resources</p>
              <p className="ph6">Term life insurance plans</p>
              <p className="ph6">Insurance calculator</p>
              <p className="ph6">Guide to life insurance</p>
              <p className="ph6">Contact</p>
              <p className="ph6">FAQs</p>
            </div>
            <div>
              <p className="ph3">Magazine</p>
              <p className="ph6">Insurance</p>
              <p className="ph6">Finances</p>
              <p className="ph6">Health</p>
              <p className="ph6">Updates</p>
            </div>
            <div>
              <p className="ph3">More</p>
              <p className="ph6">Claims</p>
              <p className="ph6">Terms</p>
              <p className="ph6">Privacy</p>
              <p className="ph6">Licenses</p>
            </div>
          </div>
        </div>

        <div className="lastdiv">
          <p style={{ color: "#5A6482", fontSize: "16px" }}>
            © 2020 Bello insurance Services LLC. All right reserved.
          </p>
          <button style={{fontWeight:'400'}} className="btnGet">Get my price</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
