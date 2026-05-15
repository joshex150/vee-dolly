"use client";
import "./work.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useTransitionRouter } from "next-view-transitions";

const Page = () => {
  const router = useTransitionRouter();

  const writingsData = [
    {
      id: 1,
      title: "Come Back to Me",
      type: "Romance",
      imageUrl: "/projects/project-banner-1.svg",
    },
    {
      id: 2,
      title: "The One She Left Behind",
      type: "Romance",
      imageUrl: "/projects/project-banner-2.svg",
    },
    {
      id: 3,
      title: "Something in the Walls",
      type: "Horror",
      imageUrl: "/projects/project-banner-3.svg",
    },
    {
      id: 4,
      title: "What the Dark Brings In",
      type: "Horror",
      imageUrl: "/projects/project-banner-4.svg",
    },
    {
      id: 5,
      title: "Thirty Days of Saying Yes to Myself",
      type: "Self-Help",
      imageUrl: "/projects/project-banner-5.svg",
    },
    {
      id: 6,
      title: "The Version of You That Survived",
      type: "Self-Help",
      imageUrl: "/projects/project-banner-6.svg",
    },
    {
      id: 7,
      title: "Tell Me What You Meant",
      type: "Romance",
      imageUrl: "/projects/project-banner-7.svg",
    },
  ];

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0.4,
          transform: "scale(0.5)",
        },
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
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
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
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

  return (
    <ReactLenis root>
      <div className="page">
        <section className="work-hero">
          <div className="container">
            <AnimatedH1 delay={1}>Selected Writings</AnimatedH1>
            <AnimatedCopy delay={1.2} animateOnScroll={false}>
              Romance, horror, and self-help from Victory Christian.
            </AnimatedCopy>
          </div>
        </section>

        <section className="projects">
          {writingsData.map((writing) => (
            <div className="project" key={writing.id}>
              <div className="project-banner-img">
                <ParallaxImage src={writing.imageUrl} alt={writing.title} />
                <div className="project-title">
                  <a
                    href="/project"
                    onClick={(e) => handleNavigation(e, "/project")}
                  >
                    <div className="writing-type-tag">
                      <p>{writing.type}</p>
                    </div>
                    <AnimatedH1 animateOnScroll={true}>
                      {writing.title}
                    </AnimatedH1>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Page;
