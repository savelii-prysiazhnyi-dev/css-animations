# CSS Animations

An interactive, high-performance catalog and visual reference of 96 pure CSS micro-interactions, transforms, keyframes, loaders, and shape-morphing clip paths.

---

## Overview

This project provides an interactive directory of pure CSS visual techniques, ranging from fundamental hover transformations to multi-stage keyframe physics and polygonal clip-path morphing. Built with a minimalist monochrome shell, the interface highlights each animation's authentic geometry, palette, and timing.

All animations run on hardware-accelerated CSS properties (`transform`, `opacity`, `clip-path`), operating without JavaScript execution overhead for animation mechanics.

---

## Feature Matrix

| Category | Count | Highlights |
| :--- | :---: | :--- |
| **Buttons** | 24 | 3D multi-axis flaps, diagonal shutters, glowing cyan edges, expanding border vectors, wave ripple displacement |
| **Images** | 11 | Multi-layer sliding overlays, shutter reveals, expanding caption panels, circular vignette focus |
| **Menus** | 10 | Sniper reticle targeting, prismatic 3D layers, dual-border expansion, synchronized hover transitions |
| **Cards** | 7 | Character pop-out layers, 3D double-faced flips, isometric depth stacks, expandable drawers |
| **Transforms** | 4 | Smoky particle dispersion, liquid water fill text, 3D isometric social media layers |
| **Keyframes** | 19 | Parallax vehicle road scenes, raindrop weather physics, Newton's cradle pendulum, cardiac pulses |
| **Loaders** | 12 | Concentric ring sweeps, rotating hexagonal prisms, harmonic growing lines, geometric spinners |
| **Clip-Path** | 9 | Split dual-tone text, wave morphology, polygonal angle slides, circular iris apertures |

---

## Technical Architecture

```
css-animations/
├── public/
│   └── assets/                  # Preserved textures, vehicle sprites, and backdrops
├── src/
│   ├── components/
│   │   ├── AnimationCard.tsx     # Isolated preview tile with monochrome contrast backing
│   │   └── Header.tsx            # Sticky navigation bar with live category counters
│   ├── data/
│   │   └── animations.ts         # Catalog registry containing HTML templates and scale metrics
│   ├── styles/                  # Scoped, collision-free CSS definitions
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── clip-path.css
│   │   ├── images.css
│   │   ├── keyframes.css
│   │   ├── loaders.css
│   │   ├── menus.css
│   │   └── transforms.css
│   ├── App.tsx                  # Main layout container and real-time category filtering
│   ├── index.css                # Base styling and custom scrollbar configuration
│   ├── main.tsx                 # Application mount entrypoint
│   └── types.ts                 # Domain models and category definitions
├── index.html                   # HTML entrypoint with font definitions
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Style Scoping & Isolation
Each animation is encapsulated under an isolated namespace (`.anim-<id>`), preventing global selector collisions across `a`, `img`, `span`, and `h1-h6` elements. Keyframes are uniquely prefixed (`@keyframes <id>_<name>`), ensuring that timing and coordinate keyframes do not conflict across components.

---

## Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **pnpm**: v9.0.0 or higher (or npm / yarn)

### Installation
Clone the repository and install dependencies:
```bash
pnpm install
```

### Development Server
Start the local Vite development server:
```bash
pnpm run dev
```

### Quality Assurance & Linting
Run the fast Oxlint verification suite:
```bash
pnpm run lint
```

### Production Build
Type-check and compile the production bundle:
```bash
pnpm run build
```

Preview the production build locally:
```bash
pnpm run preview
```

---

## License

MIT License.
