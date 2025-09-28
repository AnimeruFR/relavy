# Copilot Instructions for Relavy

## Architecture Overview

This is an Angular 20 application using standalone components with SCSS styling. The app follows a hierarchical component structure:

- `App` (root) → `Main` → `Header` (component chain in `src/app/`)
- Each component has separate `.ts`, `.html`, `.scss`, and `.spec.ts` files
- Uses the new Angular standalone component pattern (no NgModules)
- Bootstrap configuration in `src/main.ts` with `bootstrapApplication()`

## Key Patterns & Conventions

### Component Structure
- **Naming**: Use PascalCase class names (e.g., `Header`, `Main`) with kebab-case selectors (`app-header`, `app-main`)
- **Imports**: Use direct component imports in the `imports` array (see `src/app/app.ts` and `src/app/main/main.ts`)
- **Selectors**: Prefix all components with `app-` (configured in `angular.json` as `"prefix": "app"`)
- **Protected members**: Use `protected` for template-accessible properties (see `selectedMenu` in `header.ts`)

### File Organization
- Each component gets its own directory with 4 files: `name.ts`, `name.html`, `name.scss`, `name.spec.ts`
- Templates reference styles with `styleUrl` (singular, not `styleUrls`)
- Global styles in `src/styles.scss` (currently empty)

### Event Handling Pattern
See `Header` component's `selectMenu()` method:
```typescript
selectMenu(menu: string, event?: Event): void {
  this.selectedMenu = menu;
  const target = event?.target as HTMLElement | null;
  target?.classList.add('selected');
}
```
- Methods accept optional `Event` parameter for DOM manipulation
- Use optional chaining and type guards for event targets

## Development Workflow

### Available Commands
- `npm start` / `ng serve` - Development server (port 4200)
- `npm test` / `ng test` - Run Karma unit tests
- `npm run build` / `ng build` - Production build
- `npm run watch` - Development build with watch mode

### Testing Setup
- Uses Jasmine + Karma for unit testing
- Test files use standalone component import pattern in `TestBed.configureTestingModule()`
- Default test structure creates component and verifies creation

### TypeScript Configuration
- Strict mode enabled with additional strictness flags
- Target: ES2022
- Angular-specific compiler options include strict templates and injection parameters

## Styling Approach
- SCSS preprocessing configured globally
- Component-scoped styles (see `header.scss` for flexbox + CSS custom properties pattern)
- Uses semantic class names (`.header`, `.selected`)
- Color scheme: Dark header (`#333`) with white text and orange accent (`orangered`)