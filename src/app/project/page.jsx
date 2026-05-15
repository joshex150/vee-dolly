"use client";
import "./project.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import ReactLenis from "@studio-freight/react-lenis";

const page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <div className="project-hero-img-wrapper">
                <ParallaxImage
                  src="/project/project-img-1.svg"
                  alt=""
                  speed={0.2}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <AnimatedH1 delay={1}>Come Back to Me</AnimatedH1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Type
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    Romance
                  </AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Theme
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    Love · Distance · Longing
                  </AnimatedCopy>
                </div>
              </div>
              <div className="row">
                <div className="sub-col">
                  <AnimatedCopy delay={1.375} animateOnScroll={false}>
                    Reading Time
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.5} tag="h3" animateOnScroll={false}>
                    9 min
                  </AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.5}>
                    An excerpt from a romance novel about the year she stopped
                    waiting and what happened the day he called anyway.
                  </AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Opening</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                She had deleted his number three times. She remembered it
                anyway. That is the thing nobody tells you about loving someone
                for long enough. Their number does not live in your phone. It
                lives somewhere softer.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                It was a Tuesday when he called. She knew it was him before she
                looked. There was a particular quality to those calls, even
                years later, a held-breath feeling, like the moment before a
                song starts and you already know it is going to do something to
                you. She stood in her kitchen and let it ring twice. Then she
                picked up.
              </AnimatedCopy>

              <AnimatedCopy delay={0.3}>
                She had spent a long time preparing for a version of him she
                could be calm around. She had rehearsed the detachment in
                mirrors and in journal entries and in the careful way she spoke
                about him to friends who asked. None of it mattered. His voice
                was the same. That was the problem with people you have loved
                deeply. They do not change enough. They stay just recognizable
                enough to undo you.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <div className="project-info-img-1">
                <div className="project-info-img-1-wrapper">
                  <ParallaxImage
                    src="/project/project-img-2.svg"
                    alt=""
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Writer's Note</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                This piece started as a single image I could not shake: a woman
                standing in a kitchen, letting a phone ring. It became a story
                about what it means to be ready, and whether readiness is
                something you arrive at or something that arrives at you. It
                went through many drafts before I understood what it was really
                about. It was not about him. It was about her finally trusting
                herself.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Reader Response</AnimatedCopy>
            </div>
            <div className="col">
              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  Romance
                </AnimatedH1>
                <p>Type</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  9 min
                </AnimatedH1>
                <p>Reading Time</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  2025
                </AnimatedH1>
                <p>Selected Archive</p>
              </div>

              <div className="stat">
                <AnimatedH1 animateOnScroll={true} direction="top">
                  3
                </AnimatedH1>
                <p>Featured Lines</p>
              </div>
            </div>
          </div>
        </section>

        <section className="project-preview-img">
          <div className="project-preview-img-wrapper">
            <ParallaxImage
              src="/project/project-img-3.svg"
              alt=""
              speed={0.2}
            />
          </div>
        </section>

        <section className="project-info project-info-outro">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">The Story</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                She said hello. He said her name. Just her name, nothing after
                it, the way he always used to, as if her name were a full
                sentence that contained everything he had meant to say. She
                pressed her free hand flat against the counter and breathed
                through it. This was fine. She was fine. She had done the work.
                She was someone who had done the work.
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
                He asked how she was and she told him well, which was true now,
                in the way that true things take years to become true. He told
                her he was in the city. Just passing through, he said, as if
                cities were things you passed through, as if he had not once
                made her believe that wherever she was could be a place worth
                staying. She looked at the window. It was early still. The
                light was the kind she used to photograph to send to him when
                they were apart.
              </AnimatedCopy>

              <AnimatedCopy delay={0.3}>
                She did not ask why he was calling. She knew why he was calling.
                She had known the moment she heard the ringtone that she had
                never actually changed back, that somewhere in herself she had
                kept a small quiet door open to exactly this, to him, to his
                voice saying her name. That was the thing about love that
                nobody warned you about. It did not go away when the person did.
                It just learned to wait somewhere dark and patient until you
                were ready to look at it again.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info writing-cta-section">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <AnimatedCopy tag="h3">Continue Reading</AnimatedCopy>
              <AnimatedCopy>
                Join the letter to receive new essays, fiction, and reflections
                before they go public.
              </AnimatedCopy>
              <div className="writing-cta-form">
                {/* TODO: wire to newsletter provider */}
                <input type="email" placeholder="Enter your email" />
                <button>Join the Letter</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
