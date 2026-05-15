"use client";
import "./ThemeToggle.css";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vd-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vd-theme", "light");
    }
  };

  return (
    <button
      className={`theme-toggle${dark ? " is-dark" : ""}`}
      onClick={toggle}
      aria-label="Toggle dark mode"
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
};

export default ThemeToggle;
