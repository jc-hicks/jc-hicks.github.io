# Architecture Documentation

## Project Architecture Overview

This is a vanilla HTML5, CSS3, and JavaScript (ES6+ modules) personal portfolio website with no frameworks or build tools.

## Directory Structure

```
PersonalSite/
├── index.html                 # Homepage
├── projects.html              # Projects showcase
├── about.html                 # About/bio page
│
├── assets/
│   ├── images/               # Project images, screenshots
│   ├── icons/                # SVG icons, favicon
│   └── video/                # Video assets
│
├── css/
│   ├── base.css              # Reset, variables, typography
│   ├── layout.css            # Grid, flexbox, containers
│   ├── components.css        # Reusable component styles
│   └── utilities.css         # Utility classes
│
├── js/
│   ├── main.js               # Application entry point
│   ├── modules/              # Reusable modules
│   │   ├── dom-utils.js      # DOM manipulation helpers
│   │   └── nav.js            # Navigation logic
│   ├── utilities/            # Utility functions
│   │   └── helpers.js        # Common helpers
│   └── components/           # Feature components
│       └── (feature modules)
│
├── docs/
│   ├── DESIGN-DOCUMENT.md    # Project design & specs
│   ├── ARCHITECTURE.md       # This file
│   ├── DEPLOYMENT.md         # Deployment instructions
│   ├── AI-USAGE.md           # AI tools disclosure
│   ├── design-document/      # Design assets
│   ├── mockups/              # Wireframes & mockups
│   ├── screenshots/          # Site screenshots
│   └── ai-usage/             # AI prompts & logs
│
├── package.json              # Dependencies & scripts
├── eslint.config.js          # ESLint configuration (flat config)
├── .prettierrc                # Prettier configuration
├── .gitignore                # Git ignore rules
├── LICENSE                   # MIT License
└── README.md                 # Project README
```

## JavaScript Module Architecture

### Entry Point: main.js

```javascript
// Imports modules
// Initializes the application
// Sets up event listeners
```

### Module Organization

#### DOM Utilities (modules/dom-utils.js)

Common DOM manipulation functions:

- `select(selector)` - Query single element
- `selectAll(selector)` - Query multiple elements
- `createElement(tag, class, content)` - Create elements
- `addClass()`, `removeClass()`, `toggleClass()`
- `addEventListener()`, `removeEventListener()`
- Style manipulation, attribute management
- Utility functions (scrollIntoView, isInViewport)

#### Navigation Module (modules/nav.js)

Handles site navigation:

- Active link highlighting
- Smooth scroll behavior
- Navigation initialization

#### Utilities (utilities/helpers.js)

General utility functions:

- `debounce()`, `throttle()`
- `isMobile()`, `supportsModules()`
- `getQueryParam()`, `formatDate()`
- `fetchWithTimeout()`
- Object utilities: `deepClone()`, `mergeObjects()`

#### Components (components/)

Feature-specific modules (to be created as needed):

- Each feature is a separate module
- Modules export initialization and public API
- Self-contained and reusable

## CSS Architecture

### CSS File Organization

#### base.css

- CSS custom properties (variables)
- Reset and normalization
- Base element styles
- Typography hierarchy
- Form element defaults
- Accessibility utilities

#### layout.css

- Container and grid systems
- Flexbox utilities
- Section padding and spacing
- Responsive breakpoints
- Layout-specific adjustments

#### components.css

- Reusable component styles
- Header, navigation, footer
- Buttons, cards, forms
- Page-specific layouts
- Interactive states

#### utilities.css

- Single-purpose classes
- Spacing helpers
- Text utilities
- Display utilities
- Responsive utilities
- Accessibility classes

### CSS Naming Conventions

- BEM-inspired for components: `.component__element--modifier`
- Utility classes: `.text-center`, `.mt-lg`, `.flex-between`
- Custom properties for theming: `--color-primary`, `--spacing-lg`
- No inline styles
- No !important usage

## JavaScript Patterns

### Module Pattern

```javascript
// Each module exports functions/objects
export const functionName = () => {};
export const anotherFunction = () => {};
```

### Initialization Pattern

```javascript
// Modules have init functions
export const initModule = () => {
  // Set up event listeners
  // Initialize state
};

// Called from main.js
import { initModule } from "./modules/module.js";
initModule();
```

### DOM Utilities Pattern

```javascript
// Utilities are exported as pure functions
import { select, addClass, addEventListener } from "./modules/dom-utils.js";

const element = select(".selector");
addEventListener(element, "click", handler);
```

## Styling Approach

### Mobile-First

- Base styles for mobile
- Media queries for larger screens
- Breakpoints: 480px, 768px, 1200px

### CSS Variables

All design tokens as custom properties:

```css
:root {
  --color-primary: #0066cc;
  --spacing-md: 16px;
  --font-size-lg: 18px;
}
```

### Component-Based

Styles organized by component:

- `.btn` - Button styles
- `.card` - Card component
- `.nav` - Navigation component
- Variants with modifiers: `.btn-primary`, `.btn-secondary`

## HTML Structure

### Semantic Markup

- `<header>` - Site header
- `<nav>` - Navigation
- `<main>` - Main content
- `<section>` - Content sections
- `<article>` - Article content
- `<aside>` - Sidebar content
- `<footer>` - Site footer

### Accessibility

- Semantic HTML for structure
- ARIA labels where needed
- alt text on images
- Focus indicators
- Skip links (if applicable)
- Form labels and descriptions

## Performance Considerations

- No render-blocking scripts (async/defer where applicable)
- Images optimized and lazy-loaded
- CSS kept minimal and modular
- JavaScript modules loaded as-is (no bundling needed)
- Static site for fast deployment

## Deployment

- Static site on GitHub Pages
- No build process required
- Direct file serving
- CDN-backed through GitHub

## Development Workflow

### Local Development

```bash
npm run dev    # Start with hot reload
npm run lint   # Check code quality
npm run format # Auto-format code
npm run serve  # Serve static files
```

### Pre-Deployment

```bash
npm run validate  # Lint + format check
npm run lint:fix  # Auto-fix issues
```

## Browser Compatibility

- Modern browsers supporting ES6 modules
- No transpilation required
- Progressive enhancement for older browsers
- Feature detection for unsupported APIs

## Accessibility Standards

- WCAG 2.1 Level AA target
- Semantic HTML foundation
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader optimization

## Future Architecture Considerations

- Component library expansion
- State management (if needed)
- Routing system (if needed)
- Animation framework
- Testing framework (if needed)
- Build tooling (if needed)

---

**Last Updated**: [Date]
**Author**: [Your Name]
