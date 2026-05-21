# PersonalSite - Personal Portfolio

## Project Overview

[Add project description]

## Course/Assignment

- **Course**: [Course Name]
- **Instructor**: [Instructor Name]
- **Semester**: [Semester/Term]

## Project Objective

[Add learning objectives and project goals]

## Technologies & Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with Flexbox/Grid
- **JavaScript ES6+**: Module-based architecture
- **Tools**: ESLint, Prettier, HTTP Server
- **Deployment**: GitHub Pages

## Features

- Fully responsive design
- Semantic HTML5 structure
- ES6 module-based JavaScript
- Accessibility-first approach
- No frameworks or libraries (vanilla implementation)
- Clean, maintainable code

## Installation

```bash
npm install
```

## Development Workflow

### Scripts

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without changes
- `npm run validate` - Run lint and format check
- `npm run serve` - Start local HTTP server
- `npm run dev` - Start development server with auto-reload

### Development

```bash
npm run dev
```

Starts development server with hot reload on file changes.

## Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Navigate to repository Settings → Pages
3. Set source to `main` branch
4. Site will be deployed to `https://username.github.io/PersonalSite`

### Deployment Instructions

[Add specific GitHub Pages setup steps]

## File Structure

```
root/
├── index.html
├── projects.html
├── about.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── video/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── utilities.css
├── js/
│   ├── main.js
│   ├── modules/
│   │   ├── dom-utils.js
│   │   └── nav.js
│   ├── utilities/
│   │   └── helpers.js
│   └── components/
├── docs/
│   ├── DESIGN-DOCUMENT.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── AI-USAGE.md
│   ├── design-document/
│   ├── mockups/
│   ├── screenshots/
│   └── ai-usage/
├── package.json
├── eslint.config.js
├── .prettierrc
├── .gitignore
├── LICENSE
└── README.md
```

## Code Quality

### Linting

Uses ESLint with flat config (v9+) for code quality. Configuration includes:

- ES2025 globals support
- Browser and Node.js environments
- Prettier integration

```bash
npm run lint
npm run lint:fix
```

### Formatting

Uses Prettier for consistent code formatting:

- Double quotes
- 2-space indentation
- Unix line endings
- Trailing commas (ES5)

```bash
npm run format
npm run format:check
```

### Validation

Run full validation before commits:

```bash
npm run validate
```

## W3C Compliance & Accessibility

- [W3C HTML Validation](https://validator.w3.org/)
- [WCAG 2.1 Level AA Compliance](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Performance Goals](https://developers.google.com/web/tools/lighthouse)

Current goals:

- Lighthouse Score: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Accessibility

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Image alt text
- Form labels

## Screenshots

[Add project screenshots]

### Homepage

[Placeholder for homepage screenshot]

### Projects Page

[Placeholder for projects screenshot]

### About Page

[Placeholder for about page screenshot]

## AI Usage Disclosure

### Models & Tools Used

- **LLM Model(s)**: [Model name and version]
- **AI Tools**: [Tools used during development]

### AI-Assisted Sections

[Document which parts were AI-assisted vs. manually implemented]

### Prompts Used

See `/docs/ai-usage/prompts/` for detailed prompt history.

## Learning Goals

- [ ] Master semantic HTML5
- [ ] Build responsive layouts with CSS Grid/Flexbox
- [ ] Implement ES6 modules in browser
- [ ] Maintain clean code architecture
- [ ] Achieve accessibility compliance
- [ ] Deploy static site to GitHub Pages

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Author

[Your Name]

## License

MIT - See LICENSE file for details

## Changelog

### v1.0.0 - Initial Release

- [Add release notes]

---

**Repository**: [GitHub Link]  
**Live Site**: [GitHub Pages Link]
