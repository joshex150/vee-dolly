"use client";
import "./about.css";
import { useEffect, useRef, useState } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredIn = [
  "Granta",
  "Longreads",
  "The Rumpus",
  "Electric Literature",
  "Catapult",
  "Guernica",
  "The Sun",
  "Ploughshares",
  "Tin House",
  "The Paris Review",
  "Literary Hub",
  "Narrative",
  "Kenyon Review",
  "The Missouri Review",
  "One Story",
  "Epoch",
];

const page = () => {
  const container = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const timeoutId = setTimeout(() => {
        if (windowWidth > 900) {
          const expertiseSection = document.querySelector(".expertise");
          const expertiseHeader = document.querySelector(".expertise-header");
          const services = document.querySelector(".services");

          if (expertiseSection && expertiseHeader && services) {
            ScrollTrigger.refresh();

            scrollTriggerRef.current = ScrollTrigger.create({
              trigger: expertiseSection,
              start: "top top",
              endTrigger: services,
              end: "bottom bottom",
              pin: expertiseHeader,
              pinSpacing: false,
              onEnter: () => {
                gsap.to(expertiseHeader, { duration: 0.1, ease: "power1.out" });
              },
            });
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);

        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { dependencies: [windowWidth], scope: container }
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/about/hero.svg" alt="Vee Dolly" />
          </div>

          <div className="container">
            <AnimatedH1 delay={1}>The Stories You Wanted Someone to Write</AnimatedH1>

            <div className="about-tagline">
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  About the Writer
                </AnimatedCopy>
              </div>
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  Romance, horror, and self-help from Victory Christian, writing
                  as Vee Dolly. For readers who feel things deeply.
                </AnimatedCopy>
              </div>
            </div>
            <AnimatedH1 delay={1.2}>for the Reader Who Feels Everything</AnimatedH1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <AnimatedCopy tag="h2">The Writer</AnimatedCopy>

            <div className="about-copy-wrapper">
              <AnimatedCopy>
                Victory Christian writes as Vee Dolly. She started writing
                because she could not find the books she needed, so she wrote
                them herself. Romance that goes deeper than attraction. Horror
                that is rooted in real fear. Self-help that does not pretend
                healing is clean or quick.
              </AnimatedCopy>

              <AnimatedCopy delay={0.25}>
                Her books live in three sections of the bookstore and speak to
                one kind of reader: the one who feels things intensely. The one
                who has cried over a love story, stayed up too late finishing a
                horror novel, and kept a self-help book on the nightstand not
                because they were struggling, but because they believed in
                getting better.
              </AnimatedCopy>

              <AnimatedCopy delay={0.5}>
                She writes romance that stays honest about how love actually
                works. She writes horror that comes from a real understanding of
                dread. She writes self-help like a conversation between two
                people who both know that change is possible and also genuinely
                hard. If you have read her work and felt seen by it, this is the
                place for you.
              </AnimatedCopy>

              <div className="about-copy-img">
                <div className="about-copy-img-wrapper">
                  <ParallaxImage
                    src="/about/about-copy.svg"
                    alt="Writing desk"
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <AnimatedH1 animateOnScroll={true}>
                  What the <br /> work holds
                </AnimatedH1>

                <div className="expertise-img-1">
                  <img src="/about/expertise-img-1.svg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="expertise-img-2">
                  <img src="/about/expertise-img-2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">Romance</AnimatedCopy>
                <AnimatedCopy>01 Love stories</AnimatedCopy>
                <AnimatedCopy>02 Emotional depth</AnimatedCopy>
                <AnimatedCopy>03 Slow burn and tension</AnimatedCopy>
                <AnimatedCopy>04 Character-led romance</AnimatedCopy>
                <AnimatedCopy>05 Happily ever after</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">Horror</AnimatedCopy>
                <AnimatedCopy>01 Psychological horror</AnimatedCopy>
                <AnimatedCopy>02 Quiet dread</AnimatedCopy>
                <AnimatedCopy>03 Supernatural fiction</AnimatedCopy>
                <AnimatedCopy>04 Short horror stories</AnimatedCopy>
                <AnimatedCopy>05 Long-form horror novels</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">Self-Help</AnimatedCopy>
                <AnimatedCopy>01 Personal growth</AnimatedCopy>
                <AnimatedCopy>02 Honest reflection</AnimatedCopy>
                <AnimatedCopy>03 Life after change</AnimatedCopy>
                <AnimatedCopy>04 Journaling prompts</AnimatedCopy>
                <AnimatedCopy>05 Reader letters</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(04)</AnimatedCopy>
                <AnimatedCopy tag="h2">Books</AnimatedCopy>
                <AnimatedCopy>01 Published novels</AnimatedCopy>
                <AnimatedCopy>02 Upcoming releases</AnimatedCopy>
                <AnimatedCopy>03 Sample chapters</AnimatedCopy>
                <AnimatedCopy>04 Serialized fiction</AnimatedCopy>
                <AnimatedCopy>05 Signed editions</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(05)</AnimatedCopy>
                <AnimatedCopy tag="h2">Appearances</AnimatedCopy>
                <AnimatedCopy>01 Interviews</AnimatedCopy>
                <AnimatedCopy>02 Readings &amp; events</AnimatedCopy>
                <AnimatedCopy>03 Podcasts</AnimatedCopy>
                <AnimatedCopy>04 Book clubs</AnimatedCopy>
                <AnimatedCopy>05 Press features</AnimatedCopy>
              </div>
            </div>
          </div>
        </section>

        <section className="about-outro-banner">
          <div className="about-outro-img">
            <ParallaxImage src="/about/about-outro.svg" alt="" speed={0.2} />
          </div>
        </section>

        <section className="founder-voice">
          <div className="container">
            <AnimatedCopy tag="h2">
              "I write romance because love is complicated and I want to get it
              right. I write horror because fear is honest. I write self-help
              because I believe people can change. I do all three because I am
              one person and I contain all of it."
            </AnimatedCopy>

            <div className="founder-image">
              <img src="/about/founder.svg" alt="Vee Dolly" />
            </div>
            <div className="founter-info">
              <AnimatedCopy>Victory Christian</AnimatedCopy>
              <AnimatedCopy>Writing as Vee Dolly</AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="client-logos">
          <div className="container">
            <div className="logos-grid">
              {featuredIn.map((publication, index) => (
                <div className="logo-item" key={index}>
                  <div className="logo-details">
                    <p>&#9632;</p>
                    <p>{publication}</p>
                  </div>
                  <img
                    src={`/client-logos/${String.fromCharCode(
                      65 + Math.floor(index / 2)
                    )}${(index % 2) + 1}.svg`}
                    alt={`${publication} logo`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
