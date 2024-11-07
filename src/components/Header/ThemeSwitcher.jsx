import React, { useEffect, useState, useRef } from "react";

const ThemeSwitcher = () => {
  const storageKey = "theme-preference";
  const [theme, setTheme] = useState(getColorPreference());
  const themeToggleRef = useRef(null);

  // Function to get the user's color preference from localStorage or system preference
  function getColorPreference() {
    const savedTheme = localStorage.getItem(storageKey);
    console.log("savedTheme", savedTheme);
    if (savedTheme) {
      return savedTheme;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }
  console.log("theme", theme);
  // Set the preference in localStorage and reflect it in the DOM
  const setPreference = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  // Reflect the theme preference in the DOM
  const reflectPreference = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    if (themeToggleRef.current) {
      themeToggleRef.current.setAttribute("aria-label", newTheme);
    }
  };

  // Handle click event to toggle the theme
  const onClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setPreference(newTheme);
  };

  // Sync with system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      setPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Set the initial theme preference on page load
  useEffect(() => {
    reflectPreference(theme);

    if (themeToggleRef.current) {
      themeToggleRef.current.addEventListener("click", onClick);
    }

    return () => {
      if (themeToggleRef.current) {
        themeToggleRef.current.removeEventListener("click", onClick);
      }
    };
  }, [theme]);

  return (
    <button
      ref={themeToggleRef}
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
