"use client";
import "./index.css";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

import AnimatedH1 from "./components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "./components/AnimatedCopy/AnimatedCopy";
import Footer from "./components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { useTransitionRouter } from "next-view-transitions";

let isInitialLoad = true;

const featuredWritings = [
  {
    title: "The Space Between I Love You",
    type: "Romance",
    description: "A love story about the things you mean but never say.",
  },
  {
    title: "Something in the Walls",
    type: "Horror",
    description: "A house that knows your name before you tell it.",
  },
  {
    title: "Thirty Days of Saying Yes to Myself",
    type: "Self-Help",
    description: "A small promise that became a whole new way of living.",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const nameWordsRef = useRef([]);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const router = useTransitionRouter();

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop-main",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useGSAP(
    () => {
      if (showPreloader) {
        const tl = gsap.timeline({
          onComplete: () => setShowPreloader(false),
        });

        // Progress bar fills over 4s
        tl.to(progressBarRef.current, {
          scaleX: 1,
          duration: 4,
          ease: "power1.inOut",
        }, 0);

        // Name words reveal upward, staggered, 0.3s after start
        tl.set(nameWordsRef.current, { y: "110%" });
        tl.to(nameWordsRef.current, {
          y: "0%",
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.12,
        }, 0.3);

        // Name exits upward one word at a time — total window ~1.3s
        tl.to(nameWordsRef.current, {
          y: "-110%",
          duration: 0.6,
          ease: "power3.in",
          stagger: 0.5,
        }, 3.0);

        // Progress bar retracts
        tl.set(progressBarRef.current, { transformOrigin: "right" }).to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
          }
        );

        // Preloader slides up and away
        tl.to(preloaderRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "hop-main",
        });
      }
    },
    { scope: containerRef, dependencies: [showPreloader] }
  );

  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0.4, transform: "scale(0.5)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (e, path) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(path, { onTransitionReady: slideInOut });
    }, 200);
  };

  return (
    <>
      {showPreloader && (
        <div className="pre-loader" ref={preloaderRef}>
          <div className="progress-bar" ref={progressBarRef}></div>
          <div className="preloader-name">
            <div className="preloader-name-word">
              <span ref={(el) => (nameWordsRef.current[0] = el)}>Vee</span>
            </div>
            <div className="preloader-name-word">
              <span ref={(el) => (nameWordsRef.current[1] = el)}>Dolly</span>
            </div>
          </div>
        </div>
      )}
      <ReactLenis root>
        <div className="page" ref={containerRef}>
          <section className="index-hero">
            <div className="hero-img">
              <img src="/home/hero-img.svg" alt="" />
            </div>

            <div className="hero-header">
              <AnimatedH1 delay={showPreloader ? 5.75 : 0.85}>
                Stories That Feel Like Someone Finally Knew.
              </AnimatedH1>
            </div>

            <div className="hero-footer">
              <div className="site-info">
                <a href="/work" onClick={(e) => handleNavigation(e, "/work")}>
                  Read the Latest
                </a>
              </div>
              <div className="contact-link">
                <a
                  href="/letters"
                  onClick={(e) => handleNavigation(e, "/letters")}
                >
                  Join the Letter
                </a>
              </div>
            </div>
          </section>

          <section className="home-intro">
            <div className="container">
              <AnimatedCopy tag="h2">
                The official home of Vee Dolly. Romance that goes all the way
                in. Horror that gets under your skin. Self-help that sounds like
                a real person talking.
              </AnimatedCopy>
            </div>
          </section>

          <section className="home-writing-preview">
            <div className="container">
              <div className="home-section-header">
                <AnimatedCopy tag="h3">Featured Writing</AnimatedCopy>
              </div>
              <div className="home-writing-list">
                {featuredWritings.map((item, i) => (
                  <div className="home-writing-item" key={i}>
                    <a
                      href="/work"
                      onClick={(e) => handleNavigation(e, "/work")}
                    >
                      <div className="writing-item-meta">
                        <AnimatedCopy>{item.type}</AnimatedCopy>
                      </div>
                      <div className="writing-item-title">
                        <AnimatedH1 animateOnScroll={true}>
                          {item.title}
                        </AnimatedH1>
                      </div>
                      <div className="writing-item-desc">
                        <AnimatedCopy>{item.description}</AnimatedCopy>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="home-writing-cta">
                <a href="/work" onClick={(e) => handleNavigation(e, "/work")}>
                  View All Writing →
                </a>
              </div>
            </div>
          </section>

          <section className="home-about-preview">
            <div className="container">
              <div className="col">
                <AnimatedCopy tag="h3">The Writer</AnimatedCopy>
                <AnimatedCopy>
                  Victory Christian writes as Vee Dolly. She started writing
                  because she could not find the books she needed, so she wrote
                  them herself.
                </AnimatedCopy>
                <AnimatedCopy delay={0.15}>
                  Romance. Horror. Self-help. Three genres, one voice. All of it
                  written honestly, for readers who feel things deeply.
                </AnimatedCopy>
                <div className="home-about-cta">
                  <a
                    href="/about"
                    onClick={(e) => handleNavigation(e, "/about")}
                  >
                    About the Writer →
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="home-about-img">
                  <img src="/about/founder.svg" alt="Vee Dolly" />
                </div>
              </div>
            </div>
          </section>

          <section className="home-quote">
            <div className="container">
              <AnimatedH1 animateOnScroll={true}>
                The bravest thing she ever did was stay soft in a world that
                kept asking her to harden.
              </AnimatedH1>
            </div>
          </section>

          <section className="home-letters-cta">
            <div className="container">
              <AnimatedCopy tag="h3">Letters from Vee Dolly</AnimatedCopy>
              <AnimatedCopy>
                A letter for readers who want more than the finished book. Early
                chapters, honest process notes, and thoughts she only shares
                here.
              </AnimatedCopy>
              <div className="home-letters-form">
                {/* TODO: wire to newsletter provider (Substack / ConvertKit / Mailchimp) */}
                <input type="email" placeholder="Enter your email" />
                <button>Join the Letter</button>
              </div>
            </div>
          </section>

          <section className="home-final-cta">
            <div className="container">
              <AnimatedH1 animateOnScroll={true}>
                Come in. There is something here for you.
              </AnimatedH1>
              <div className="home-final-link">
                <a href="/work" onClick={(e) => handleNavigation(e, "/work")}>
                  Start Reading
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
