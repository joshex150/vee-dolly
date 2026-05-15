"use client";
import "./books.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useTransitionRouter } from "next-view-transitions";

const booksData = [
  {
    id: 1,
    title: "When You Come Back",
    status: "Upcoming",
    description:
      "A romance about two people who keep finding each other at the wrong time, until finally the time is right. A love story about patience, pride, and the courage to try again.",
    themes: ["Romance", "Love", "Second Chances"],
  },
  {
    id: 2,
    title: "What Lives Here",
    status: "Upcoming",
    description:
      "A horror novel about a woman who moves into a house that seems to know things it should not. The doors close softly. The walls remember. And something is learning her name.",
    themes: ["Horror", "Psychological", "Supernatural"],
  },
  {
    id: 3,
    title: "Thirty Days of Saying Yes to Myself",
    status: "Available",
    description:
      "A practical and personal guide to rebuilding a life after a long season of playing small. Written from inside a real transformation, for the reader who is ready to begin.",
    themes: ["Self-Help", "Growth", "Mindset"],
  },
];

const Page = () => {
  const router = useTransitionRouter();

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
    <ReactLenis root>
      <div className="page">
        <section className="books-hero">
          <div className="container">
            <AnimatedH1 delay={1}>Books &amp; Longer Works</AnimatedH1>
            <AnimatedCopy delay={1.2} animateOnScroll={false}>
              Romance, horror, and self-help books from Victory Christian,
              writing as Vee Dolly.
            </AnimatedCopy>
          </div>
        </section>

        <section className="books-list">
          <div className="container">
            {booksData.map((book) => (
              <div className="book-item" key={book.id}>
                <div className="book-header">
                  <div className="book-status">
                    <AnimatedCopy>{book.status}</AnimatedCopy>
                  </div>
                  <div className="book-themes">
                    {book.themes.map((theme, i) => (
                      <span key={i} className="book-theme-tag">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="book-title">
                  <AnimatedH1 animateOnScroll={true}>{book.title}</AnimatedH1>
                </div>
                <div className="book-description">
                  <AnimatedCopy>{book.description}</AnimatedCopy>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="books-cta">
          <div className="container">
            <AnimatedH1 animateOnScroll={true}>
              The next book is almost ready.
            </AnimatedH1>
            <AnimatedCopy>
              Join the letter to be among the first to know about new releases,
              sample chapters, and subscriber-only previews.
            </AnimatedCopy>
            <div className="books-cta-form">
              {/* TODO: wire to newsletter provider */}
              <input type="email" placeholder="Enter your email" />
              <button>Join the Letter</button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Page;
