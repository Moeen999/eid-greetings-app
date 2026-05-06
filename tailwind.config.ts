
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				eid: {
					gold: '#D4AF37',
					green: '#0D6832',
					cream: '#FDF5E6',
					lightgold: '#F5DEB3',
					darkgreen: '#054D26'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse': {
					'0%': { opacity: '0.4', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'100%': { opacity: '0.4', transform: 'scale(1)' }
				},
				'ping': {
					'75%, 100%': { transform: 'scale(2)', opacity: '0' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '1' }
				},
				'drift-x': {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(20px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'drift-y': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(20px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3)' }
				},
				'color-shift': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(15deg)' },
					'100%': { filter: 'hue-rotate(0deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				// New RGB animations
				'rainbow-glow': {
					'0%': { filter: 'hue-rotate(0deg) brightness(1)' },
					'25%': { filter: 'hue-rotate(90deg) brightness(1.2)' },
					'50%': { filter: 'hue-rotate(180deg) brightness(1)' },
					'75%': { filter: 'hue-rotate(270deg) brightness(1.2)' },
					'100%': { filter: 'hue-rotate(360deg) brightness(1)' }
				},
				'rgb-shift': {
					'0%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
					'33%': { backgroundColor: 'rgba(0, 255, 0, 0.2)' },
					'66%': { backgroundColor: 'rgba(0, 0, 255, 0.2)' },
					'100%': { backgroundColor: 'rgba(255, 0, 0, 0.2)' }
				},
				'color-pulse': {
					'0%, 100%': { backgroundColor: 'rgba(255, 165, 0, 0.15)' },
					'25%': { backgroundColor: 'rgba(255, 105, 180, 0.15)' },
					'50%': { backgroundColor: 'rgba(75, 0, 130, 0.15)' },
					'75%': { backgroundColor: 'rgba(0, 191, 255, 0.15)' }
				},
				'rgb-border': {
					'0%': { borderColor: 'rgba(255, 0, 0, 0.5)' },
					'33%': { borderColor: 'rgba(0, 255, 0, 0.5)' },
					'66%': { borderColor: 'rgba(0, 0, 255, 0.5)' },
					'100%': { borderColor: 'rgba(255, 0, 0, 0.5)' }
				},
				'rgb-text': {
					'0%': { color: '#ff8a8a' },
					'25%': { color: '#a0ff8a' },
					'50%': { color: '#8aceff' },
					'75%': { color: '#d78aff' },
					'100%': { color: '#ff8a8a' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'fade-in': 'fade-in 1s ease-in-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'spin-slow': 'spin-slow 12s linear infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'drift-x': 'drift-x 6s ease-in-out infinite',
				'drift-y': 'drift-y 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'color-shift': 'color-shift 8s ease-in-out infinite',
				'shimmer': 'shimmer 8s ease-in-out infinite',
				// New RGB animations
				'rainbow-glow': 'rainbow-glow 8s linear infinite',
				'rgb-shift': 'rgb-shift 12s ease-in-out infinite',
				'color-pulse': 'color-pulse 15s ease-in-out infinite',
				'rgb-border': 'rgb-border 10s linear infinite',
				'rgb-text': 'rgb-text 8s ease-in-out infinite'
			},
			backgroundImage: {
				'eid-pattern': "url('/eid-pattern.svg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'shimmer-gradient': 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 20%, transparent 40%)',
				// RGB gradients
				'rainbow-gradient': 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)',
				'aurora-gradient': 'linear-gradient(60deg, rgba(0, 255, 255, 0.3), rgba(0, 255, 0, 0.3), rgba(255, 0, 255, 0.3))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
