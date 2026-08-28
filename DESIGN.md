---
name: Kinetic Elite
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a4136'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#8e7164'
  outline-variant: '#e3bfb1'
  surface-tint: '#a33e00'
  primary: '#a33e00'
  on-primary: '#ffffff'
  primary-container: '#ff6600'
  on-primary-container: '#561d00'
  inverse-primary: '#ffb596'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#969797'
  on-tertiary-container: '#2e3030'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system is engineered to embody the vigor of a high-performance sports club while maintaining the prestige required for luxury residential management. The brand personality is **authoritative, energetic, and premium**. It avoids the clutter of traditional fitness apps in favor of a sophisticated, editorial approach that feels like a private athletic membership.

The visual direction follows a **Modern / High-Contrast** style. It leverages deep blacks to ground the interface, vibrant orange to signal action and heat, and generous white space to ensure clarity and a "breathable" premium feel. The use of diagonal structural elements and "speed-line" motifs creates a sense of forward momentum and physical dynamism.

**Target Audience:**
*   **Property Managers:** Seeking professional, reliable, and data-driven management tools.
*   **Residents:** Seeking a high-end, exclusive, and motivating sports experience within their home.

## Colors

The palette is built on high-contrast tension. **Vibrant Orange** is the primary driver of attention, used exclusively for interactive elements, status indicators, and brand-defining accents. **Deep Charcoal** provides a sophisticated architectural foundation, often used for header backgrounds and heavy text.

*   **Primary (Action):** #FF6600 — To be used for CTAs, active states, and highlights.
*   **Secondary (Depth):** #1A1A1A — Used for dark-mode containers, primary text, and high-impact backgrounds.
*   **Tertiary (Pure):** #FFFFFF — The base for the light mode interface, providing a clean, "fresh towel" aesthetic.
*   **Neutral (Surface):** #F4F4F4 — Subtle fills for input fields and background sections to differentiate content from the pure white base.

## Typography

The typography strategy pairs the geometric power of **Montserrat** for headlines with the utilitarian precision of **Inter** for functional text. 

Headlines should utilize "Tight" leading and negative letter-spacing at larger sizes to mimic the condensed, impactful look of sports journalism. Body text favors legibility with generous line heights. Use `label-bold` for navigation items and small headers to maintain an organized, systematic feel across the management platform.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px base unit governs all spatial relationships.

**Layout Philosophy:**
*   **Athletic Asymmetry:** Use diagonal section dividers (approx. 3-5 degree leans) to break the horizontal monotony.
*   **Breathing Room:** High-end sports clubs feel premium because they aren't crowded. Maintain a minimum of 64px vertical spacing between major sections.
*   **Content Reflow:** On mobile, complex card grids collapse into single-column vertical stacks. Gutters should tighten to 16px to maximize screen real estate for data-heavy management views.

## Elevation & Depth

To maintain a "Professional & Premium" feel, this design system avoids heavy, muddy shadows. Instead, it uses **High-Contrast Layering** and **Architectural Shadows**.

*   **Tonal Layering:** Use the #1A1A1A charcoal as a backdrop with #FFFFFF cards on top. The contrast itself creates the "lift" without needing traditional drop shadows.
*   **The "Impact" Shadow:** When shadows are required for floating elements (like modals or primary cards), use a crisp, directional shadow: `offset-y: 8px, blur: 24px, color: rgba(26, 26, 26, 0.08)`. 
*   **Orange Glow:** Active elements may use a subtle orange outer glow (`#FF6600` at 10% opacity) to indicate focus or "energy" states.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding maintains the "Modern & Professional" look—sharp enough to feel disciplined and technical, but soft enough to be approachable for a residential setting.

*   **Buttons:** Small radii only; avoid fully rounded pills to keep the look structured.
*   **Images:** Use 45-degree corner clips on decorative imagery to reinforce the "movement" pattern mentioned in the brand narrative.
*   **Cards:** Use a consistent `rounded-lg` (0.5rem) for main dashboard containers.

## Components

**Buttons:**
*   *Primary:* Solid Orange (#FF6600) with White text. Bold Montserrat font.
*   *Secondary:* Solid Charcoal (#1A1A1A) with Orange text.
*   *Ghost:* Transparent background with a 2px Charcoal border and Black text.

**Cards:**
*   Main feature cards should have a white background, a 1px #E0E0E0 border, and the "Impact" shadow.
*   Interactive cards (like booking a court) should transition to a Charcoal background with Orange accents on hover.

**Input Fields:**
*   Minimalist style: A bottom-border only or a light neutral (#F4F4F4) fill. Labels should use the `label-bold` style for a technical, disciplined look.

**Chips / Status:**
*   For "Live" classes or "Available" courts, use a small orange dot pulse animation next to `caption` text.

**Movement Patterns:**
*   Implement 10% opacity diagonal stripe patterns (`linear-gradient(45deg, ...)`) as background overlays for header sections to suggest speed and texture.