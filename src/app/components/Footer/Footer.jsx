"use client";
import "./Footer.css";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const logoRef = useRef(null);

  useGSAP(
    () => {
      if (!logoRef.current) return;

      const text = new SplitType(logoRef.current, {
        types: "chars",
        charClass: "footer-logo-char",
      });

      gsap.set(".footer-logo-char", {
        y: "100%",
        display: "inline-block",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
        .to(".footer-logo-char", {
          y: "0%",
          stagger: 0.04,
          duration: 0.8,
          ease: "power2.out",
        });

      return () => {
        if (text) text.revert();
        ScrollTrigger.getAll()
          .filter((st) => st.vars.trigger === logoRef.current)
          .forEach((st) => st.kill());
      };
    },
    { scope: logoRef }
  );

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="col">
            <h3>Join the letter.</h3>
            <p className="footer-tagline">
              Romance, horror, and self-help. All of it honest.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="footer-socials">
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://x.com/">Twitter</a>
              </div>

              <div className="footer-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/work">Writing</a>
                <a href="/books">Books</a>
                <a href="/letters">Letters</a>
                <a href="/contact">Contact</a>
              </div>
            </div>

            <div className="row">
              <div className="footer-press">
                <p>For press &amp; publishing</p>
                <p>press@veedolly.com</p>
              </div>
              <div className="footer-press">
                <p>For readings &amp; events</p>
                <p>bookings@veedolly.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <h1 ref={logoRef}>Vee Dolly</h1>
        </div>

        <div className="footer-copyright">
          <p>Vee Dolly &copy;2025. All rights reserved.</p>
          <p>Official Writer Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
