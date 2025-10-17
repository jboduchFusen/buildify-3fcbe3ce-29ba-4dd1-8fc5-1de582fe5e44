
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
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
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores temáticos de plantas
        forest: {
          DEFAULT: "hsl(var(--forest))",
          foreground: "hsl(var(--forest-foreground))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          foreground: "hsl(var(--sage-foreground))",
        },
        mint: {
          DEFAULT: "hsl(var(--mint))",
          foreground: "hsl(var(--mint-foreground))",
        },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          foreground: "hsl(var(--emerald-foreground))",
        },
        earth: {
          DEFAULT: "hsl(var(--earth))",
          foreground: "hsl(var(--earth-foreground))",
        },
        sky: {
          DEFAULT: "hsl(var(--sky))",
          foreground: "hsl(var(--sky-foreground))",
        },
        sunset: {
          DEFAULT: "hsl(var(--sunset))",
          foreground: "hsl(var(--sunset-foreground))",
        },
        bark: {
          DEFAULT: "hsl(var(--bark))",
          foreground: "hsl(var(--bark-foreground))",
        },
        // Estados contextuales
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        growth: {
          DEFAULT: "hsl(var(--growth))",
          foreground: "hsl(var(--growth-foreground))",
        },
        vitality: {
          DEFAULT: "hsl(var(--vitality))",
          foreground: "hsl(var(--vitality-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        organic: "1rem 0.5rem 1rem 0.5rem",
        leaf: "50% 0 50% 0",
        petal: "100% 0 100% 0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        grow: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        bloom: {
          "0%": {
            transform: "scale(0.3) rotate(-5deg)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.1) rotate(2deg)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1",
          },
        },
        sway: {
          "0%, 100%": {
            transform: "translateX(0) rotate(0deg)",
          },
          "25%": {
            transform: "translateX(-2px) rotate(-1deg)",
          },
          "75%": {
            transform: "translateX(2px) rotate(1deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "var(--shadow-soft)",
          },
          "50%": {
            boxShadow: "var(--shadow-glow)",
          },
        },
        "leaf-fall": {
          "0%": {
            transform: "translateY(-20px) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100vh) rotate(360deg)",
            opacity: "0",
          },
        },
        sprout: {
          "0%": {
            transform: "translateY(20px) scaleY(0)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(10px) scaleY(0.5)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(0) scaleY(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        grow: "grow 0.6s ease-out",
        bloom: "bloom 1.2s ease-out",
        sway: "sway 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "leaf-fall": "leaf-fall 8s linear infinite",
        sprout: "sprout 1s ease-out",
      },
      backgroundImage: {
        "gradient-leaf": "var(--gradient-leaf)",
        "gradient-forest": "var(--gradient-forest)",
        "gradient-sunrise": "var(--gradient-sunrise)",
        "gradient-organic": "var(--gradient-organic)",
        "gradient-earth": "var(--gradient-earth)",
        "gradient-growth": "var(--gradient-growth)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
        glow: "var(--shadow-glow)",
        "depth-1": "var(--depth-1)",
        "depth-2": "var(--depth-2)",
        "depth-3": "var(--depth-3)",
      },
      transitionTimingFunction: {
        organic: "cubic-bezier(0.4, 0, 0.2, 1)",
        grow: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config