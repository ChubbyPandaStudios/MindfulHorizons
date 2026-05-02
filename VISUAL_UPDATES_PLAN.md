# Visual Updates Implementation Plan: MindfulHorizons

This document outlines the roadmap for enhancing the aesthetic and interactive quality of the MindfulHorizons website. The goal is to create a premium, "alive" feel through subtle animations, expressive components, and measured visual complexity.

---

## 📋 Implementation Checklist

### Phase 1: Foundation & Infrastructure
- [x] **Setup Animation Utilities**: Created `useIntersectionObserver` hook for scroll-triggered effects.
- [x] **Global CSS Definitions**: Added keyframes for shimmer, floating, and ripple effects in `globals.css`.
- [x] **Asset Preparation**: Created `WaveDivider` SVG component and defined brand color tokens.

### Phase 2: Subtle Site-wide Enhancements
- [x] **Scroll Progress Bar**: Implemented in `Header.tsx` using scroll-depth detection.
- [x] **Dynamic Header**: Implemented background transition and blur effect on scroll.
- [x] **Scroll-Triggered Reveals**: Applied `useIntersectionObserver` to sections (`About`, `Benefits`, `Pricing`, `FAQ`).
- [x] **Staggered Entrances**: Added staggered delay logic for cards in Benefits, Testimonials, and Pricing sections.
- [x] **Section Dividers**: Integrated `WaveDivider` between key landing page sections in `app/page.tsx`.
- [x] **Refined Accordion**: Updated FAQ transitions with custom cubic-bezier spring-easing.

### Phase 3: Expressive Component Upgrades
- [x] **Floating Hero Image**: Applied the `animate-float-bob` class to the hero portrait.
- [x] **Hero Section Glow**: Added a soft radial gradient accent (`bg-[radial-gradient(...)]`) behind the hero image.
- [x] **Shimmering CTAs**: Ensured all primary buttons have the `shimmer-sweep` class and appropriate hover states.
- [x] **Premium Pricing Card**: Enhanced the "Recommended" plan with `shadow-2xl` and a subtle inner glow.
- [x] **Marquee Testimonials**: Converted testimonials into a CSS-based auto-scrolling marquee.

### Phase 4: Visual Polish & Micro-interactions
- [x] **Button Ripples**: Implemented the JavaScript logic for the `ripple-effect` class in `RippleEffect.tsx`.
- [x] **Headline Highlights**: Applied a custom gradient underline to key words in the Hero headline.
- [x] **Background Watermarks**: Placed organic leaf/blob SVG accents in the background of the About and FAQ sections.
- [x] **Animated Star Ratings**: Implemented sequential fill animation for testimonial stars.

### Phase 5: Final QA & Optimization
- [x] **Mobile Performance**: Optimized scroll handlers with `requestAnimationFrame` and ensured GPU-accelerated transforms.
- [x] **Accessibility Audit**: Implemented `prefers-reduced-motion` media query to disable intensive animations.
- [x] **Visual Consistency**: Standardized brand colors (Sage: `#5A8D73`) for better contrast and unified spacing.

---

## 🛠️ Detailed Technical Approach

### 1. Scroll-Triggered Animations
We will use the `useIntersectionObserver` hook in each section component.
- **Implementation**: Wrap section content in a `div` that toggles between `opacity-0 translate-y-8` and `opacity-100 translate-y-0` based on the `isIntersecting` state.
- **Files**: `AboutSection.tsx`, `BenefitsSection.tsx`, `PricingSection.tsx`.

### 2. Staggered Entrances
For grids (Benefits, Pricing), we will map through items and apply an `animation-delay`.
```tsx
style={{ animationDelay: `${index * 150}ms` }}
```
This creates a sophisticated "cascade" effect as the user scrolls.

### 3. JavaScript-based Ripple Effect
Since CSS alone cannot handle the click coordinates for a ripple, we will add a global event listener or a reusable hook.
- **Logic**: On click, append a `<span class="ripple">` at the cursor coordinates relative to the button, then remove it after the animation ends.

### 4. Marquee Testimonials
- **Structure**: Create a `Marquee` component that takes an array of children and duplicates them to create a seamless loop.
- **Animation**: Use `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`.

### 5. Organic Dividers
The `WaveDivider` component will be used to transition between sections with different background colors (e.g., Cream to Off-white).
- **Placement**: Usually at the bottom of a section, absolute positioned or within the flow with a negative margin to overlap.

---

## 🎨 Color & Tone Reference
- **Primary Accent (Progress Bar)**: Sage Green (`#6B9E84`)
- **Secondary Tones**: Cream (`#F5F1EC`), Off-white (`#FAFAF7`)
- **Glow Effects**: `rgba(107, 158, 132, 0.15)` (Sage with low opacity)
