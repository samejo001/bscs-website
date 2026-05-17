# BSCS — Bachelor of Science in Computer Science

A premium, world-class website for the Bachelor of Science in Computer Science program. Built with modern web technologies, featuring interactive data visualization, dark/light mode, responsive design, and a comprehensive curriculum explorer.

![BSCS Preview](assets/images/preview.png)

## Features

### Sections
- **Premium Navbar** — Sticky with scroll effects, mobile hamburger menu, active link highlighting
- **Hero Section** — Animated typing effect, gradient orbs, floating cards, code window mockup, animated counters
- **About BSCS** — Bento grid cards, timeline, program pillars
- **Subjects** — 12 core subjects with search/filter, interactive cards
- **Semester Roadmap** — 8-semester tabbed interface with course listings
- **Skills Matrix** — Animated progress bars, circular charts, soft skill tags
- **Career Opportunities** — 8 career cards with salary and growth stats
- **Programming Languages** — 7 languages with mini donut charts
- **Technology Stack** — 6 categories with hoverable tech tags
- **Project Showcase** — 6 projects with category filter system
- **Statistics Dashboard** — Counter animations, line chart, doughnut chart, bar chart
- **Resources** — Download cards and recommended books
- **FAQ** — Smooth accordion system
- **Testimonials** — Slider with navigation controls
- **Contact** — Form with validation, contact cards, social links
- **Premium Footer** — Newsletter, quick links, social icons

### Special Features
- **Dark/Light Mode** — Persistent theme toggle with CSS custom properties
- **Smooth Scrolling** — Native smooth scroll to all sections
- **Scroll Progress Bar** — Top-of-page progress indicator
- **Scroll Reveal** — Intersection Observer-based entrance animations
- **Loading Screen** — Branded loader on initial page load
- **Back to Top** — Floating button with scroll visibility
- **Interactive Charts** — Chart.js integration (line, bar, doughnut)
- **Search & Filter** — Real-time subject search, project category filter
- **Responsive Design** — Mobile-first, tablet, and desktop optimized

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | HTML5 Semantic Elements |
| CSS | CSS3, CSS Grid, Flexbox, Custom Properties |
| JavaScript | Vanilla ES6+, Intersection Observer API |
| Icons | Lucide Icons (CDN) |
| Charts | Chart.js 4.x (CDN) |
| Fonts | Inter, JetBrains Mono (Google Fonts) |

## Project Structure

```
BSCS-Website/
├── index.html              # Main HTML file (all sections)
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet (design system, animations)
│   │   └── responsive.css  # Responsive breakpoints
│   ├── js/
│   │   └── script.js       # All interactivity, charts, animations
│   ├── data/
│   │   └── data.json       # BSCS curriculum & resources data
│   ├── images/             # Image assets (add your own)
│   └── icons/              # Icon assets (add your own)
└── README.md               # This file
```

## Setup Instructions

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/bscs-website.git
cd bscs-website
```

Or simply download the ZIP and extract.

### 2. Open Locally
No build step required. Open `index.html` directly in your browser:

```bash
# On macOS/Linux
open index.html

# On Windows
start index.html
```

Or use a local server for the best experience:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code Live Server extension
```

Then visit `http://localhost:8080`.

### 3. Customize

#### Change Colors
Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --accent-primary: #3b82f6;    /* Primary brand color */
  --accent-secondary: #6366f1;  /* Secondary accent */
  --accent-tertiary: #0ea5e9;   /* Tertiary accent */
}
```

#### Add Images
Place images in `assets/images/` and update the `src` attributes in `index.html`.

#### Update Content
Modify `assets/data/data.json` for curriculum data, or edit `index.html` directly for section content.

## Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| 1024px | Tablets and small laptops |
| 768px | Mobile landscape / tablets portrait |
| 480px | Mobile portrait |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Zero external CSS frameworks (custom lightweight CSS)
- CDN-loaded libraries (Chart.js, Lucide) with deferred loading
- Intersection Observer for efficient scroll animations
- CSS transitions over JavaScript animations where possible

## License

MIT License — Free for personal and commercial use.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [Lucide](https://lucide.dev)
- Charts: [Chart.js](https://www.chartjs.org)

---

Built with care for the next generation of computer scientists.
