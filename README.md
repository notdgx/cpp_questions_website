```

  ██████╗ ██████╗  ██████╗     ██████╗ ██╗   ██╗███████╗███████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
 ██╔════╝ ██╔══██╗ ██╔══██╗   ██╔═══██╗██║   ██║██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
 ██║      ██████╔╝ ██████╔╝   ██║   ██║██║   ██║█████╗  ███████╗   ██║   ██║██║   ██║██╔██╗ ██║███████╗
 ██║      ██╔═══╝  ██╔═══╝    ██║▄▄ ██║██║   ██║██╔══╝  ╚════██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
 ╚██████╗ ██║      ██║        ╚██████╔╝╚██████╔╝███████╗███████║   ██║   ██║╚██████╔╝██║ ╚████║███████║
  ╚═════╝ ╚═╝      ╚═╝         ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

```
A student assignment repository of C++ problem-solving solutions, presented through a rapid-prototyped frontend viewer.

## Live Demo (GitHub Pages)

- https://notdgx.github.io/cpp_questions_website/

## About the Project

- This project is primarily an assignment-focused C++ problem-solving collection 
- The frontend is built to present questions and solutions in a structured, browsable format.
- The UI is vibe coded (rapid prototyping with modern tooling) to prioritize speed of iteration and visual clarity.

## Key Features

- Topic-wise question organization (11 topic groups).
- Slide-based navigation across topics and an intro overview.
- Question cards with detailed solution modal (problem statement, C++ code, console output).
- Syntax highlighting for C++ snippets.
- Keyboard and touch navigation support.
- Animated transitions and glass/blur visual themes.
- Responsive layout behavior for desktop, tablet, and mobile.
- source code zip also provided

## Tech Stack

- **Languages:** C++, JavaScript (React), CSS
- **Frontend:** React 18
- **Styling:** Tailwind CSS v4 + custom CSS
- **Animation:** Motion (`motion/react`)
- **Code Highlighting:** highlight.js
- **Video Support:** hls.js
- **Build Tool:** Vite
- **Hosting/Deployment:** GitHub Pages (with GitHub Actions workflow)

## Project Structure (Brief)

```text
.
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ data/manifest.js
│  └─ components/
│     ├─ animated/
│     ├─ shared/
│     └─ slides/
├─ 01-Single_Dimension_Arrays_43/
├─ 02-Functions_7/
├─ ...
├─ 11-File_Handling_16/
├─ index.html
├─ package.json
├─ vite.config.js
└─ .github/workflows/deploy.yml
```

## How to Run Locally

- Install dependencies:
  - `npm install`
- Start development server:
  - `npm run dev`
- Create production build:
  - `npm run build`
- Preview production build locally:
  - `npm run preview`

## Deployment (GitHub Pages)

- In GitHub Actions builds, Vite derives Pages base from `GITHUB_REPOSITORY` (e.g. `/cpp_questions_website/`).
- If repository metadata is unavailable in CI, Vite falls back to `/`.
- In local builds, Vite uses `base: './'`.
- Deployment options in this repo:
  - Script: `npm run deploy` (uses `gh-pages -d dist`)
  - CI: GitHub Actions workflow publishes `dist` on pushes to `main`.

## Notes on Implementation

- C++ assignment/problem-solving logic is implemented in the topic folders as `.cpp` files.
- Frontend content is displayed from a generated manifest (`src/data/manifest.js`) used by React slides/components.
- The project separates:
  - **Logic/content source:** C++ solution files and question lists
  - **Presentation layer:** React slide deck viewer and modal UI
- Frontend was vibe coded for fast UI development and iteration.

## Limitations / Scope

- This is a learning/assignment project, not a production platform.
- Scope is focused on storing and presenting assignment solutions.
- Some parts of the UI are optimized for visual presentation over strict minimal runtime cost.
- Backend/API/database integration is not evident from the codebase.

## License

- No license 
