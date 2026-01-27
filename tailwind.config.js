/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl15: "1408px", //  1.5xl breakpoint (between xl and 2xl)
      },

      colors: {
        goldenrod: {
          100: "#f2c438",
          200: "#f2c338",
        },
        white: "#fff",
        darkslateblue: "#162766",
        gray: {
          100: "#808080",
          200: "rgba(255, 255, 255, 0.3)",
        },
        lavender: "#dde6ff",
        gainsboro: "#dee1e8",
        lightslategray: "#858eae",
        whitesmoke: "#f4f6f7",
      },

      spacing: {
        "num-91": "91px",
        "num-86": "86px",
        "num-643": "643px",
        "num-111": "111px",
        "num-1": "0.8px solid #dde6ff",
      },

      fontFamily: {
        "noto-serif": "Noto Serif",
        urbanist: "Urbanist",
        "font-awesome-5-free": "Font Awesome 5 Free",
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        merriweather: ["var(--font-merriweather)", "Merriweather", "serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
      },

      borderRadius: {
        "num-12_1": "12.1px",
        "num-7_56": "7.56px",
        "num-0": "0px",
      },

      padding: {
        "num-10": "10px",
      },

      fontSize: {
        "num-15": "15px",
        "num-9_08": "9.08px",
        "num-14": "14px",
      },

      animation: {
        marquee: "marquee 20s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
