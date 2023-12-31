/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "1xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsla(var(--card))",
          foreground: "hsla(var(--card-foreground))",
        },
        "shade-blue": "hsla(var(--shade-blue))",
        "gray-md": "hsla(var(--gray-md))",
        "primary-blue": "hsla(var(--primary-blue))",
        "light-gray": "var(--light-gray)",
        "gray-550": "hsla(var(--gray-550))",
        "light-info": "hsla(var(--light-info))",
        "slate-info": "hsla(var(--slate-info))",
        "light-success": "hsla(var(--light-success))",
        "gray-medium-blue-grey": "hsla(var(--gray-medium-blue-grey))",
        error: "#FA896B",
        "light-warning": "#FEF5E5",
        info: "#539BFF",
        warning: "#FFE3E3",
        langing: "#00020D",
        "light-white": "#E1E1E1",
        "white-50": "#F7F7F7",
        "gray-12": "#B0B0B0",
      },
      backgroundImage: {
        hero: "url('/assets/images/hero.png')",
        login_bg: "url('/assets/images/login_bg.png')",
        "gradient-sm": "linear-gradient(96deg, #4B86FC 0%, #75F2F6 26.45%)",
        btn: "linear-gradient(97deg, #4B86FC -71.87%, #75F2F6 91.18%)",
        bulb: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)",
        slider_bg:
          "linear-gradient(144deg, rgba(255, 255, 255, 0.40) -278.56%, rgba(109, 109, 109, 0.40) -78.47%, rgba(17, 16, 29, 0.40) 91.61%)",
        input_dark:
          "linear-gradient(144deg, rgba(255, 255, 255, 0.40) -278.56%, rgba(109, 109, 109, 0.40) -78.47%, rgba(17, 16, 29, 0.40) 91.61%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        12: "12px",
        8: "8px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "spin-slow": "spin 3s linear infinite",
      },
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.874rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        "heading-1": [
          "1.75rem",
          {
            lineHeight: "130%",
            fontWeight: "600",
          },
        ],
        "heading-2": [
          "1.875rem",
          {
            lineHeight: "120%",
            fontWeight: "600",
            letterSpacing: "-0.3px",
          },
        ],
        "heading-5": [
          "1.125rem",
          {
            lineHeight: "130%",
            fontWeight: "600",
          },
        ],
        "heading-3": [
          "1.5rem",
          {
            lineHeight: "120%",
            fontWeight: "600",
          },
        ],
        "heading-4": [
          "1.3125rem",
          {
            lineHeight: "130%",
            fontWeight: "600",
          },
        ],
        "t-22": [
          "1.375rem",
          {
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        "shadow-1":
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
      },
    },
  },
  plugins: [require("tailwindcss-animate", "tailwind-scrollbar")],
};
