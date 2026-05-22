## Goal
Add "Mr.Banz" text below the avatar in the Hero section with elegant purple gradient typography.

## Context
The portfolio is a Next.js 16 project with Tailwind CSS v4 and Framer Motion. The Hero component is at `src/components/Hero.tsx`, with the avatar image currently standing alone. The existing design already uses purple gradients (line 53-54), so the new text should match that aesthetic.

## Acceptance Criteria
- **AC-1:** "Mr.Banz" text appears directly below the avatar image in the Hero section.
- **AC-2:** Text is horizontally centered relative to the avatar (verified visually).
- **AC-3:** Text uses purple gradient styling matching existing design language (e.g., `bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent`).
- **AC-4:** Typography is elegant with appropriate font size and weight.
- **AC-5:** Spacing between avatar and text is balanced (considering existing gap/padding).
- **AC-6:** No other sections are modified.
- **AC-7:** `npm run build` completes without errors.
- **AC-8:** `npm run lint` completes without errors.
- **AC-9:** Changes are committed and pushed to main branch.

## Implementation Notes
1. **File touchpoint:** `src/components/Hero.tsx` - modify the avatar section (lines 23-41).
2. **Approach:** Add a motion.h2 or styled div immediately after the Image component, inside the same container, with centered text styling.
3. **Styling approach:** Use existing purple gradient classes from line 53 (`bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent`), add appropriate font styling (e.g., `font-serif` or elegant sans-serif), and use `text-center` for centering.
4. **Spacing:** Add a small margin-top (`mt-3` or `mt-4`) to create balanced spacing between avatar and name.
5. **Run verification:** After editing, run `npm run build` and `npm run lint` to verify no issues.

## Out of Scope
- Modifying any other component or section
- Changing the avatar image or its container styling
- Adding new dependencies