import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-animated'),
    nextui({
      layout: {
        fontSize: {
          tiny: '0.625rem',
          small: '0.75rem',
          medium: '0.875rem',
          large: '1rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
      },
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              100: "#1B6EFF",
              200: "#015EFF",
              300: "#0054E6",
              400: "#004BCC",
              500: "#01255b"
            }
          }
        },
        dark: {
          colors: {
            background: "#161616",
            foreground: "#FFFFFF",
            primary: {
              100: "#1B6EFF",
              200: "#015EFF",
              300: "#0054E6",
              400: "#004BCC",
              500: "#015EFF"
            }
          }
        }
      }
    })],
}