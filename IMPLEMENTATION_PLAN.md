# Mindful Horizons Landing Page - Implementation Plan

## Project Overview
A serene, professional landing page for Dr. Elena Voss's mental wellness coaching program. The page emphasizes calm, approachable design with prominent CTAs throughout, featuring an 8-week transformational program with pricing, testimonials, and FAQ sections.

---

## Design System

### Color Palette (5 colors total)
- **Primary Brand**: Sage Green (`#6B9E84`) - CTAs, accents, icons
- **Secondary**: Cream (`#F5F1EC`) - Background, cards
- **Accent**: Navy (`#1A1A2E`) - Headers, text emphasis
- **Neutrals**: 
  - Off-white (`#FAFAF7`)
  - Light Gray (`#E8E4DE`)

### Typography
- **Font Family**: Geist (via Google Fonts)
  - `font-sans` class for body and headings
- **Heading Scale**: 
  - H1: 3.5rem (bold, text-pretty)
  - H2: 2.25rem (semibold)
  - H3: 1.5rem (semibold)
  - Body: 1rem (regular, leading-relaxed)

### Spacing & Layout
- Generous whitespace (gap-8 to gap-12 between sections)
- Flexbox for all layouts
- Mobile-first responsive design
- Section padding: py-16 to py-20

### Animations
- Fade-in on scroll (opacity: 0 → 1)
- Subtle hover states on buttons (scale, shadow)
- Smooth transitions (0.3-0.5s)
- Icon animations on hover

---

## Page Sections & Components

### 1. Header (Sticky)
- Clean navigation bar
- Logo/Branding on left
- CTA button "Enroll Now" on right
- Responsive mobile menu (hamburger)
- Background: Sage green with cream text
- File: `components/Header.tsx`

### 2. Hero Section
- **Background**: Cream with subtle gradient overlay
- **Layout**: Image (left) + Text (right) on desktop, stacked on mobile
- **Image**: Generated portrait of Dr. Elena Voss (warm, professional, approachable)
- **Text Content**:
  - Headline: "Transform Your Life in 8 Weeks"
  - Subheading: Supportive message about mental health
  - **CTA #1**: "Enroll Now – 8-Week Program" (sage green button)
- **Animations**: Image fade-in, text slide-in from left
- File: `components/HeroSection.tsx`

### 3. About Dr. Elena
- Profile section with warmth
- Brief bio highlighting credentials and approach
- Key message: Compassionate, first-generation Latina expert
- Light background with navy text
- File: `components/AboutSection.tsx`

### 4. Program Features (4 Benefit Cards)
- **Card Layout**: Grid (2x2 on desktop, 1x1 on mobile)
- **Icons**: Lucide icons (sage green, 24px)
  - Reduced Anxiety → Shield or Heart
  - Emotional Balance → Scale or Waves
  - Sustainable Habits → Leaf or Target
  - Deeper Well-being → Sparkles or Flower
- **Design**: White cards with light shadow, subtle hover animations
- **Animation**: Stagger fade-in on scroll
- File: `components/BenefitsSection.tsx`

### 5. Pricing Section
- **Layout**: Single centered card or comparison style
- **Price**: $1,297 or 4x $349 (payment plan)
- **Highlights**: 30-day guarantee, what's included
- **CTA #2**: "Enroll Now – 8-Week Program" (sage green button)
- **Animation**: Pulse effect on CTA
- File: `components/PricingSection.tsx`

### 6. Testimonials (3 Clients)
- **Layout**: Carousel or grid (3 columns on desktop, 1 on mobile)
- **Profile Photos**: Generated authentic-looking photos
  - Sarah Chen (34, Asian-American)
  - Michael Torres (42, Latino)
  - Priya Patel (29, South Asian)
- **Content**: Before/after transformation stories, quote, name/title
- **Design**: White/cream background cards, circular profile images
- **Animation**: Fade-in with slight upward movement
- File: `components/TestimonialsSection.tsx`

### 7. FAQ / Objection Handling
- **Layout**: Accordion component (expandable)
- **Questions**: Address common concerns, program details
- **Styling**: Navy text, sage green accents on active items
- **Animation**: Smooth expand/collapse transitions
- File: `components/FAQSection.tsx`

### 8. CTA Modal Form
- **Trigger**: All three "Enroll Now" buttons (hero, pricing, footer)
- **Form Fields**:
  - Name (text input)
  - Email (email input)
  - "Why are you joining?" (textarea)
- **Submit Button**: Sage green, centered
- **Success State**: 
  - Replace form with confirmation message
  - Message: "Thank you! We've received your interest in the 8-Week Program. Dr. Elena's team will reach out within 48 hours to welcome you."
  - Icon: Checkmark or leaf (calming illustration)
  - Close button to dismiss modal
- **Implementation**: React state, no backend
- File: `components/EnrollModal.tsx`

### 9. Footer
- **Layout**: Minimal, clean
- **Content**:
  - Copyright & links (Privacy, Terms, Contact)
  - Social links (optional)
  - Newsletter signup (optional)
- **Background**: Navy with cream text
- **Design**: Simple, uncluttered
- File: `components/Footer.tsx`

---

## CTA Placement Strategy (3+ instances)
1. **Hero Section CTA**: Primary entry point, full-width awareness
2. **Pricing Section CTA**: Decision point before commit
3. **Footer CTA**: Final conversion opportunity
4. **Sticky Header CTA**: Always accessible during scroll

---

## SEO & Metadata

### Layout.tsx Updates
- Title: "8-Week Mental Wellness Coaching Program | Mindful Horizons"
- Meta Description: "Transform your mental health with Dr. Elena Voss's evidence-based 8-week program. Reduce anxiety, build emotional balance, and create lasting change."
- OG Tags: Image (Dr. Elena portrait), title, description
- Theme Color: Sage green (#6B9E84)
- Viewport: Standard mobile-optimized settings

### Page Structure
- Semantic HTML (`<main>`, `<section>`, `<header>`, `<footer>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Schema markup (BreadcrumbList, FAQPage if needed)

---

## Design Tokens (CSS Variables)

### Colors
```css
--color-primary: #6B9E84;       /* Sage Green */
--color-secondary: #F5F1EC;     /* Cream */
--color-accent: #1A1A2E;        /* Navy */
--color-bg-light: #FAFAF7;      /* Off-white */
--color-border: #E8E4DE;        /* Light Gray */
--color-text-primary: #1A1A2E;  /* Navy (dark text) */
--color-text-light: #6B6B6B;    /* Medium gray */
```

### Typography
```css
--font-display: 3.5rem;
--font-h2: 2.25rem;
--font-h3: 1.5rem;
--font-body: 1rem;
--line-height-relaxed: 1.6;
```

### Spacing
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
```

### Animations
```css
--transition-base: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

---

## File Structure

```
/app
  /layout.tsx          (Updated with fonts, SEO metadata)
  /page.tsx            (Main page composition)
  /globals.css         (Design tokens, theme, animations)

/components
  Header.tsx           (Sticky navigation)
  HeroSection.tsx      (Hero with CTA #1)
  AboutSection.tsx     (Dr. Elena profile)
  BenefitsSection.tsx  (4 feature cards)
  PricingSection.tsx   (Pricing + CTA #2)
  TestimonialsSection.tsx (3 testimonial cards)
  FAQSection.tsx       (Accordion)
  EnrollModal.tsx      (Modal form + success state)
  Footer.tsx           (Minimal footer)

/public
  /images
    dr-elena.jpg       (Generated portrait)
    testimonial-1.jpg  (Sarah Chen profile)
    testimonial-2.jpg  (Michael Torres profile)
    testimonial-3.jpg  (Priya Patel profile)
```

---

## Code Quality Standards

- **Max 600 lines per component** (keep files short, avoid refactoring)
- **Lucide React icons** for all UI icons (sage green color)
- **ShadcN/UI components** where appropriate (Button, Card, etc.)
- **No localStorage** - form submission is client-side only (no data saving)
- **Tailwind CSS** for all styling (semantic classes, no arbitrary values)
- **Mobile-first responsive** design
- **Smooth animations** throughout (fade-in, hover effects, transitions)

---

## Image Generation Requirements

1. **Dr. Elena Portrait** (Hero)
   - 41-year-old, first-generation Latina-American
   - Warm smile, shoulder-length dark wavy hair
   - Cream/light sage blouse, natural window light
   - Soft green plants blurred in background
   - Compassionate, professional yet approachable

2. **Sarah Chen Profile** (Testimonial)
   - 34-year-old, Asian-American woman
   - Soft smile, natural light
   - Light blouse, circular crop

3. **Michael Torres Profile** (Testimonial)
   - 42-year-old, Latino man
   - Confident/relaxed expression
   - Soft outdoor lighting, circular crop

4. **Priya Patel Profile** (Testimonial)
   - 29-year-old, South Asian woman
   - Gentle smile, natural indoor light with plants
   - Circular crop

---

## Modal Form Logic Flow

```
[User clicks any "Enroll Now" button]
     ↓
[Modal opens with form]
     ↓
[User fills Name, Email, "Why joining?" fields]
     ↓
[User clicks Submit]
     ↓
[Form state updates to "success"]
     ↓
[Success message displays with icon]
     ↓
[User clicks Close button]
     ↓
[Modal closes, page returns to normal]
```

---

## Performance & Best Practices

- **Code splitting**: Each section in separate component
- **Image optimization**: Use next/image where applicable
- **Lazy loading**: Intersection Observer for animations
- **No external API calls**: Client-side only
- **Accessibility**: ARIA labels, semantic HTML, sufficient contrast
- **Mobile responsive**: Tested at 375px, 768px, 1920px

---

## Next Steps

1. **Setup**: Update layout.tsx with Geist fonts and SEO metadata
2. **Theme**: Create design tokens in globals.css
3. **Images**: Generate all 4 portrait images
4. **Components**: Build in order (Header → Footer)
5. **Modal**: Implement form + state management
6. **Testing**: Review on mobile, tablet, desktop
7. **Animations**: Add subtle effects throughout
8. **Final Review**: Verify all 3+ CTAs functional, SEO complete

---

**Status**: Ready for Implementation  
**Estimated Components**: 9 main components  
**Estimated Completion**: Sequential build with parallel image generation
