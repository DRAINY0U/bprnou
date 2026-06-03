# HW1 - Barul Pe Roți (Mobile Bar)

## Chosen Scenario
**Local Small Business Digital Presence** - This website presents "Barul Pe Roți", a mobile cocktail bar service for events in Romania.

## Implemented Requirements Checklist
- [x] **Core pages**: `index.html`, `despre.html` (content), `pachete.html` (data), `contact.html` (form), and `portfolio.html` (portfolio with validation and dynamic table).
- [x] **Semantic Structure**: All pages use `<header>`, `<nav>`, `<main>`, and `<footer>`.
- [x] **Skip Link**: Each page includes a "Skip to main content" link at the top (e.g., "Salt la conținutul principal" or "Skip to main content").
- [x] **Heading Hierarchy**: Each page has exactly one `<h1>` and a logical flow of `<h2>`.
- [x] **Accessible Form**: The forms in `contact.html` and `portfolio.html` use `fieldset`, `legend`, and explicit `<label>` tags.
- [x] **Data Table**: `pachete.html` and `portfolio.html` include tables with proper headers `<th>` with `scope="col"`, captions, and responsive wrappers.
- [x] **External CSS**: Styling is handled via `style.css`.
- [x] **Navigation**: A consistent menu is present on all pages, linking all core files.
- [x] **HTML5 Shell**: Valid shell with viewport meta tags and proper language declaration.

## Lighthouse Scores
The site has been audited and optimized to meet high performance and accessibility criteria:

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `portfolio.html` | 100 | 100 | 100 | 100 |
| `index.html` | 100 | 100 | 100 | 100 |
| `despre.html` | 100 | 100 | 100 | 100 |
| `pachete.html` | 100 | 100 | 100 | 100 |
| `contact.html` | 100 | 100 | 100 | 100 |

### Accessibility Optimization Details
- **Focus Styles**: High visibility focus ring (`3px solid var(--accent-color)`) with `outline-offset` to guarantee visible keyboard navigation.
- **Skip Links**: Allows keyboard users to bypass navigation lists directly to the main content.
- **Aria Attributes**: Associated input error feedback messages using `aria-describedby` and dynamically toggle `aria-invalid` on submission errors.
- **Semantic Tables**: Screen-reader friendly table elements with `<caption>` and explicit header scope assignments.

## Known Limitations
- The site content is in Romanian while some pages declare `lang="en"`, updated `portfolio.html` uses `lang="ro"`.
- The form submissions store data in client-side `localStorage` to simulate dynamic updates.
