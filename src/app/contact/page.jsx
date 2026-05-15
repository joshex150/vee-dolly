"use client";
import "./contact.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";

const Page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="contact-hero">
          <div className="container">
            <AnimatedH1 delay={0.85}>
              For reader letters, book club requests, publishing inquiries,
              press, or just a thoughtful note, she is reachable below.
            </AnimatedH1>
          </div>
        </section>

        <section className="contact-details">
          <div className="container">
            <div className="row">
              <div className="col">
                <AnimatedCopy>Get in Touch</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>General Inquiries</AnimatedCopy>
                  <AnimatedCopy>hello@veedolly.com</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>Press &amp; Publishing</AnimatedCopy>
                  <AnimatedCopy>press@veedolly.com</AnimatedCopy>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <AnimatedCopy>Inquiry Types</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>Speaking invitation</AnimatedCopy>
                  <AnimatedCopy>Interview request</AnimatedCopy>
                  <AnimatedCopy>Book club request</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>Publishing inquiry</AnimatedCopy>
                  <AnimatedCopy>Collaboration</AnimatedCopy>
                  <AnimatedCopy>Rights / licensing</AnimatedCopy>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <AnimatedCopy>Bookings</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>Readings &amp; events</AnimatedCopy>
                  <AnimatedCopy>bookings@veedolly.com</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>Response within 5 business days.</AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-bg">
            <ParallaxImage src="/contact/banner.svg" alt="" speed={0.2} />
          </div>

          <div className="contact-banner-cta">
            <AnimatedH1 animateOnScroll={true}>
              Every letter is read.
            </AnimatedH1>
          </div>
        </section>
      </div>

      <Footer />
    </ReactLenis>
  );
};

export default Page;
