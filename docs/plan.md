## Goal
Add a new premium "X Analytics" section to the Banz portfolio website after the Impact section, featuring a luxury Web3 analytics dashboard with dark futuristic aesthetic, glassmorphism cards, and Framer Motion animations.

## Context
- Next.js portfolio using Tailwind CSS, Framer Motion, and lucide-react
- Current dark premium theme with purple neon accents and glassmorphism
- Existing sections in order: Hero, Stats, About, Services, Experience, WhyMe, Impact, Contact
- Impact section uses id="impact" and is positioned after WhyMe
- Uploaded screenshot: `Screenshot-2026-05-21-020754.png`

## Acceptance Criteria
- AC-1: Screenshot moved/renamed to `public/x-analytics.png`
- AC-2: New `XAnalytics.tsx` component created in `src/components/`
- AC-3: Component added to `src/app/page.tsx` after Impact section, before Contact
- AC-4: Navbar updated to include "X Analytics" link
- AC-5: Desktop layout shows analytics screenshot on one side, metric cards on the other
- AC-6: Mobile layout stacks vertically with clean spacing
- AC-7: All 11 metrics displayed: Verified followers (1.3K/6.1K), Active followers (2.6K/6.1K), Impressions (2.1M), Engagement rate (6.2%), Engagements (74.8K), Profile visits (6.9K), Replies (29.8K), Likes (34.8K), Reposts (2.5K), Bookmarks (507), Shares (165)
- AC-8: Visual elements: dark futuristic Web3 aesthetic, purple neon glow accents, premium glassmorphism cards, glowing rounded dashboard frame for screenshot, animated purple gradient orbs in background, lucide-react icons, Framer Motion reveal animations with stagger effects
- AC-9: `npm run build` completes without errors
- AC-10: `npm run lint` passes with no errors
- AC-11: Changes committed and pushed to main

## Implementation Notes
1. **Move screenshot**: `mv /home/harness/cyops_data/workspace/por/Screenshot-2026-05-21-020754.png /home/harness/cyops_data/workspace/por/public/x-analytics.png`

2. **Create XAnalytics.tsx component** - Key files:
   - New file: `src/components/XAnalytics.tsx`
   - Use similar patterns from `Impact.tsx` for animations and styling
   - Section id should be `id="x-analytics"`
   - Import lucide-react icons: TrendingUp, Users, Heart, MessageCircle, Bookmark, Share2, Eye, Activity, Zap, Award, Star
   - Create glassmorphism cards with `bg-white/10 backdrop-blur-md border border-white/20`
   - Add animated gradient orbs using CSS/Framer Motion
   - Layout: two-column grid on desktop (`md:grid-cols-2`), single column on mobile
   - Screenshot container with purple glow effect: `rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)]`

3. **Update page.tsx**:
   - Import XAnalytics component
   - Add `<XAnalytics />` after `<Impact />` and before `<Contact />`

4. **Update Navbar.tsx**:
   - Add `{ label: "X Analytics", href: "#x-analytics" }` to navItems array after Impact

5. **Build and lint**:
   - Run `npm run build` to verify no errors
   - Run `npm run lint` and fix any issues

6. **Commit and push**:
   - Commit with descriptive message
   - Push to main branch

## Out of Scope
- Removing or modifying any existing sections
- Adding new pages or routes
- Modifying the color theme (keep existing dark theme)
- Adding new dependencies