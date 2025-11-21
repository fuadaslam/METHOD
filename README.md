# Methord by Binshad - The Apex of Training

A premium, high-end gym and training facility website with a modern, minimalist design inspired by Micropolis.ai. Built with Next.js 14, React, Framer Motion, and GSAP.

## Features

- **Modern, Minimalist Design**: High-contrast black and white theme with vibrant accent colors
- **Smooth Animations**: Scroll-triggered reveals and liquid scroll effects using Lenis
- **Responsive Layout**: Fully responsive design that works on all devices
- **Premium UI/UX**: Clean navigation, full-screen hero, and split-screen content sections
- **Performance Optimized**: Built with Next.js 14 for optimal performance

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lenis**: Smooth scrolling library
- **GSAP**: Advanced animation library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
methord-by-binshad/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header with hamburger menu
│   ├── Hero.tsx         # Full-screen hero section
│   ├── Methodology.tsx  # Methodology section (M-Platform)
│   ├── Coaching.tsx     # Coaching section (M-Patrol)
│   ├── Facilities.tsx   # Facilities section (Microspot)
│   ├── JoinUs.tsx       # Contact/Join Us section
│   ├── Footer.tsx       # Footer component
│   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Design Specifications

### Color Palette
- **Primary Black**: `#0A0A0A`
- **Primary White**: `#FAFAFA`
- **Accent Red**: `#FF3333`
- **Accent Orange**: `#FF6B35`

### Typography
- **Headings**: Montserrat Black (900 weight), uppercase, wide letter-spacing
- **Body**: Inter (medium weight), clean and legible

### Sections
1. **Hero**: Full-screen section with bold headline and CTA
2. **Methodology**: Split-screen layout explaining the training system
3. **Coaching**: Split-screen layout showcasing coaching services
4. **Facilities**: Grid layout displaying facility features
5. **Join Us**: Contact form and application section

## Customization

### Images
Replace placeholder images in components with your own high-contrast, professional fitness photography. Update image URLs in:
- `Hero.tsx`
- `Methodology.tsx`
- `Coaching.tsx`
- `Facilities.tsx`

### Colors
Modify colors in `tailwind.config.js` and `app/globals.css` to match your brand.

### Content
Update text content in each component file to reflect your specific messaging.

## License

This project is private and proprietary.

