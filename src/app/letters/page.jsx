"use client";
import "./letters.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";

const sampleLetters = [
  {
    id: 1,
    title: "On the Days You Feel Unfinished",
    date: "March 2025",
    visibility: "Free",
    excerpt:
      "A gentle note about patience and progress. On the difference between being unfinished and being behind.",
  },
  {
    id: 2,
    title: "The First Draft Is Usually a Confession",
    date: "February 2025",
    visibility: "Free",
    excerpt:
      "On what happens when you write something true before you are ready for it to be true.",
  },
  {
    id: 3,
    title: "What I'm Reading This Month",
    date: "January 2025",
    visibility: "Subscribers",
    excerpt:
      "A reading list from the genre corners I live in. Romance, horror, and self-help, with notes on what each one taught me.",
  },
  {
    id: 4,
    title: "The Night I Stopped Pretending",
    date: "December 2024",
    visibility: "Subscribers",
    excerpt:
      "A personal note on the year everything changed. On choosing yourself when you do not know what that looks like yet.",
  },
];

const Page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="letters-hero">
          <div className="container">
            <AnimatedH1 delay={1}>Letters from Vee Dolly</AnimatedH1>
            <AnimatedCopy delay={1.2} animateOnScroll={false}>
              A private note for readers. New essays, behind-the-scenes
              reflections, early chapters, and thoughts that do not always
              belong on social media.
            </AnimatedCopy>
          </div>
        </section>

        <section className="letters-signup">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Join the Letter</AnimatedCopy>
              <AnimatedCopy>
                Subscribers receive a letter when something new is ready — not
                on a schedule, but when the work asks for it. That is the only
                frequency that makes sense here.
              </AnimatedCopy>
              <ul className="letters-benefits">
                <li>
                  <AnimatedCopy>New essays before public release</AnimatedCopy>
                </li>
                <li>
                  <AnimatedCopy>
                    Chapter previews and serialized fiction
                  </AnimatedCopy>
                </li>
                <li>
                  <AnimatedCopy>Behind-the-scenes writing notes</AnimatedCopy>
                </li>
                <li>
                  <AnimatedCopy>
                    Private reflections from the process
                  </AnimatedCopy>
                </li>
                <li>
                  <AnimatedCopy>Monthly reading recommendations</AnimatedCopy>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="letters-form-wrapper">
                <AnimatedCopy tag="h3">Subscribe</AnimatedCopy>
                <div className="letters-form">
                  {/* TODO: wire to newsletter provider (Substack / ConvertKit / Mailchimp) */}
                  <input type="email" placeholder="Enter your email" />
                  <button>Join the Letter</button>
                </div>
                <AnimatedCopy>
                  Free to subscribe. Unsubscribe any time.
                </AnimatedCopy>
              </div>
            </div>
          </div>
        </section>

        <section className="letters-archive">
          <div className="container">
            <div className="letters-archive-header">
              <AnimatedCopy tag="h3">Archive</AnimatedCopy>
              <AnimatedCopy>Selected notes from the past.</AnimatedCopy>
            </div>

            <div className="letters-list">
              {sampleLetters.map((letter) => (
                <div className="letter-item" key={letter.id}>
                  <div className="letter-meta">
                    <AnimatedCopy>{letter.date}</AnimatedCopy>
                    <span className="letter-visibility">{letter.visibility}</span>
                  </div>
                  <div className="letter-title">
                    <AnimatedH1 animateOnScroll={true}>
                      {letter.title}
                    </AnimatedH1>
                  </div>
                  <div className="letter-excerpt">
                    <AnimatedCopy>{letter.excerpt}</AnimatedCopy>
                  </div>
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

export default Page;
