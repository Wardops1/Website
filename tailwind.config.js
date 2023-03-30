/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        fancy: "url(hand.cur), pointer",
      },
    },
  },
  plugins: [],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      wardSilver: "#DFDFDF",
      wardGreen: "#5EBBA8",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    theme: {
      extend: {
        animation: {
          "pulse-bg-ward":
            "pulse-bg-once 10s cubic-bezier(0.6, 0, 0.6, 1) forwards",
        },
        keyframes: {
          "pulse-bg-once": {
            from: { opacity: 1 },
            to: { opacity: 0 },
          },
        },
      },
    },
    theme: {
      extend: {
        backgroundImage: {
          "business-grow": "url('img/big-block/block_2.png')",
        },
      },
    },
  },
};
