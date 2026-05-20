## Goal
Add Banz's avatar to the Hero section with circular shape, purple glow ring, glassmorphism frame, and responsive design.

## Context
- Next.js 16 portfolio with Tailwind CSS v4 and Framer Motion
- Hero component at `src/components/Hero.tsx` currently has no avatar - only headline, subtext, and CTA buttons
- Image file `jR1dtgqJ_400x400.jpg` (27KB) needs to move to `public/avatar.jpg`
- Project uses shadcn/ui design system with light/dark mode support

## Acceptance Criteria
- AC-1: Image file moved from root to `public/avatar.jpg`
  - Verify file exists at `public/avatar.jpg`
- AC-2: Avatar displayed in Hero section
  - File: `src/components/Hero.tsx`
  - Uses `/avatar.jpg` path
- AC-3: Circular image shape
  - Tailwind: `rounded-full`
- AC-4: Purple glow ring around avatar
  - Tailwind: `shadow-[0_0_20px_rgba(168,85,247,0.5)]` or similar purple shadow
- AC-5: Glassmorphism frame effect
  - Tailwind: `backdrop-blur`, `bg-white/10` or similar glass effect with border
- AC-6: Responsive layout
  - Mobile: stacked or appropriately sized avatar
  - Desktop: positioned alongside text content
- AC-7: Build passes
  - Run `npm run build`
- AC-8: Lint passes
  - Run `npm run lint`
- AC-9: Changes committed and pushed to main
  - Single commit with clear message

## Implementation Notes
1. **Move image**: `mv jR1dtgqJ_400x400.jpg public/avatar.jpg`
2. **Update Hero component**:
   - Import the Image component from Next.js
   - Add avatar section alongside text content (likely a two-column layout on desktop)
   - Use `motion.div` for entrance animation
   - Apply circular shape via `rounded-full`
   - Apply purple glow via `shadow-[0_0_30px_rgba(147,51,234,0.6)]` (purple-600 glow)
   - Apply glassmorphism via `backdrop-blur-md bg-white/10 border border-white/20`
   - Responsive: stack on mobile, side-by-side on lg screens
3. **Build**: Run `npm run build`
4. **Lint**: Run `npm run lint`
5. **Commit**: Create commit with message about adding avatar to Hero section

## Out of Scope
- Adding dark mode variant styles (not required, but shouldn't break existing)
- Modifying any other sections or components
- Changing existing content or text in Hero section