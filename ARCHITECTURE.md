# Architecture Overview

## 1. Project Overview
- This project is a fully static React single-page slide deck for a DSA/C++ portfolio.
- It presents 12 slides total: 1 intro slide + 11 topic slides.
- Topic slides display question cards; opening a card shows a full-screen solution modal with problem statement, C++ code, and console output.
- Content appears to be sourced from local C++ topic folders and compiled into `src/data/manifest.js`.

## 2. Tech Stack
- **Framework:** React 18
- **Language:** JavaScript (JSX), CSS
- **UI/Styling:** Tailwind CSS v4 + custom CSS (`src/index.css`)
- **Animation:** `motion` (`motion/react`)
- **Code Highlighting:** `highlight.js` (C++ language registered in `src/hljs.js`)
- **Video Playback:** `hls.js` for `.m3u8` support in `SlideBackgroundVideo`
- **Build Tooling:** Vite 5 (`@vitejs/plugin-react`, `@tailwindcss/vite`)
- **Deployment Tools:** `gh-pages` script + GitHub Actions workflow (`peaceiris/actions-gh-pages`)
- **Backend/API/DB:** No backend, database, or API layer is evident from the codebase.

## 3. Folder / Tree Structure
```text
.
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ hljs.js
│  ├─ data/
│  │  └─ manifest.js
│  └─ components/
│     ├─ animated/ (BlurReveal, SlideUpLine, WordByWordReveal, WaterBubbleTransition)
│     ├─ shared/ (NavArrows, NavDots, SolutionModal, QuestionCard, Logo, GithubLink, etc.)
│     └─ slides/ (Slide00Intro, Slide01..Slide11, TopicSlide)
├─ 01-Single_Dimension_Arrays_43/
├─ 02-Functions_7/
├─ ...
├─ 11-File_Handling_16/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ .github/workflows/deploy.yml
```

## 4. Main Elements / Components
- **`App.jsx`**: Root orchestration (slide index, keyboard/touch navigation, modal open/close state, blur theme toggle).
- **`Slide00Intro.jsx`**: Intro hero slide with metadata row, GitHub link, and blur-theme toggle button.
- **`TopicSlide.jsx`**: Reusable layout for topic slides; renders title/description and question grid from manifest data.
- **`QuestionCard.jsx`**: Clickable card for each question; captures click origin for transition.
- **`SolutionModal.jsx`**: Full-screen modal showing statement, highlighted source code, console output, copy button, and prev/next controls.
- **`WaterBubbleTransition.jsx`**: Bubble-based open/close transition layer for modal entry/exit.
- **`SlideBackgroundVideo.jsx`**: Background media player supporting HLS and MP4.
- **`NavDots.jsx` / `NavArrows.jsx`**: Global slide navigation controls.

## 5. Visual Style / Design System
- **Color system:** CSS variables in `src/index.css` (dark base, Apple-like secondary grays, blue/purple accents).
- **Typography:** SF Pro Display/Text stack applied at root; monospace reserved for code/output blocks.
- **Spacing:** Slides use percent-based paddings (`px-[5%]`, `pt-[3.5%]`) and responsive utility classes.
- **Effects:** Heavy glassmorphism via `.liquid-glass` (blur, saturation, translucency, border highlights, shadows).
- **Blur themes:** Runtime theme classes (`blur-theme-smooth`, `blur-theme-frosted`, `blur-theme-liquid`) adjust blur intensity/behavior.
- **Animations:** Opacity slide transitions, word/line reveal animations, and modal bubble expansion transition.

## 6. Features and Properties
- Keyboard slide navigation (arrows/space) when modal is closed.
- Touch swipe navigation for slides.
- Question modal open/close with animated transition.
- Keyboard modal controls:
  - `Escape` closes modal
  - `ArrowLeft` / `ArrowRight` navigates previous/next question
- C++ syntax highlighting and copy-to-clipboard for code.
- Responsive behavior:
  - Nav arrows hidden on small screens
  - Dot nav remains fixed at bottom center
  - Modal and top intro meta row adapt for smaller viewports

## 7. Data / Flow / State
- Primary content source at runtime: `src/data/manifest.js` (`topics` array).
- `App.jsx` stores UI state (`active`, `modalOpen`, selected topic/question, click origin, blur theme index).
- Data flow:
  - `App.jsx` passes topic content to slide components.
  - `TopicSlide` maps questions to `QuestionCard`.
  - `QuestionCard` click sets selected question and opens modal.
  - `SolutionModal` renders code/output and handles local `copied` state.
- No network data fetching for questions is evident; videos are loaded from external URLs defined in `App.jsx`.

## 8. Assets and Media
- **Code/content assets:** Topic folders `01-...` to `11-...` containing `00-Questions.md` and many `.cpp` files (plus local `.exe` artifacts in folders).
- **Runtime media:** Remote background video URLs (`.m3u8` and `.mp4`) declared in `App.jsx`.
- **Icons:** Inline SVGs (GitHub, arrows, close, clipboard).
- **Fonts:** Uses system/SF Pro stack; no bundled custom font files are evident.

## 9. Build / Run / Deployment Notes
- **Scripts (`package.json`):**
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run deploy` (build + `gh-pages -d dist`)
- **Vite config:** `base: './'` for relative-path static hosting (GitHub Pages friendly).
- **GitHub Actions:** `.github/workflows/deploy.yml` builds on push to `main` and publishes `dist`.
- **Environment files:** No `.env` usage is evident from inspected files.

## 10. Summary
- The codebase is a static, data-driven React presentation app with rich glassmorphism styling and animation.
- `App.jsx` is the central coordinator for navigation, modal transitions, and runtime visual theme switching.
- Content is precompiled into a manifest and rendered through a reusable topic-slide/component system.
- Deployment is optimized for GitHub Pages using Vite relative base paths and an automated workflow.
- No backend or persistence layer is present; behavior is entirely client-side.
