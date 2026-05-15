"use client";
import "./about.css";
import { useRef } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";

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
          <div className="container">
            <div className="expertise-heading">
              <AnimatedH1 animateOnScroll={true}>What the work holds</AnimatedH1>
              <div className="expertise-img-1">
                <img src="/about/expertise-img-1.svg" alt="" />
              </div>
            </div>

            <div className="expertise-img-2">
              <ParallaxImage src="/about/expertise-img-2.svg" alt="" speed={0.15} />
            </div>

            <div className="services-grid">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">Romance</AnimatedCopy>
                <AnimatedCopy>Love stories</AnimatedCopy>
                <AnimatedCopy>Emotional depth</AnimatedCopy>
                <AnimatedCopy>Slow burn and tension</AnimatedCopy>
                <AnimatedCopy>Character-led romance</AnimatedCopy>
                <AnimatedCopy>Happily ever after</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">Horror</AnimatedCopy>
                <AnimatedCopy>Psychological horror</AnimatedCopy>
                <AnimatedCopy>Quiet dread</AnimatedCopy>
                <AnimatedCopy>Supernatural fiction</AnimatedCopy>
                <AnimatedCopy>Short horror stories</AnimatedCopy>
                <AnimatedCopy>Long-form horror novels</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">Self-Help</AnimatedCopy>
                <AnimatedCopy>Personal growth</AnimatedCopy>
                <AnimatedCopy>Honest reflection</AnimatedCopy>
                <AnimatedCopy>Life after change</AnimatedCopy>
                <AnimatedCopy>Journaling prompts</AnimatedCopy>
                <AnimatedCopy>Reader letters</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(04)</AnimatedCopy>
                <AnimatedCopy tag="h2">Books</AnimatedCopy>
                <AnimatedCopy>Published novels</AnimatedCopy>
                <AnimatedCopy>Upcoming releases</AnimatedCopy>
                <AnimatedCopy>Sample chapters</AnimatedCopy>
                <AnimatedCopy>Serialized fiction</AnimatedCopy>
                <AnimatedCopy>Signed editions</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(05)</AnimatedCopy>
                <AnimatedCopy tag="h2">Appearances</AnimatedCopy>
                <AnimatedCopy>Interviews</AnimatedCopy>
                <AnimatedCopy>Readings &amp; events</AnimatedCopy>
                <AnimatedCopy>Podcasts</AnimatedCopy>
                <AnimatedCopy>Book clubs</AnimatedCopy>
                <AnimatedCopy>Press features</AnimatedCopy>
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
