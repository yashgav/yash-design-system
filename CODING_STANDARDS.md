Web Component Library – Coding Standards Rulebook
=================================================

1\. General Principles
----------------------

*   This is a **framework-agnostic Web Component library**
    
*   Components must work in **any framework or plain HTML**
    
*   Prefer **predictability over cleverness**
    
*   No breaking changes without explicit justification
    

2\. Technology Stack (Do Not Deviate)
-------------------------------------

*   Language: **TypeScript**
    
*   Base class: **LitElement**
    
*   Styling: **Scoped CSS via css template literals**
    
*   Build: **Vite (ESM + CJS)**
    
*   Types: **tsc – declarations only**
    
*   Docs/Demo: **Storybook**
    
*   Tests: **Web Test Runner / Vitest**
    
*   Linting: **ESLint + Prettier**
    

No alternative tools unless explicitly approved.

3\. Component Folder Structure (Mandatory)
------------------------------------------

Each component must live in its own folder:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   component-name/   ├─ component-name.ts   ├─ component-name.test.ts   ├─ component-name.stories.ts   └─ component-name.theme.stories.ts (if theming exists)   `

*   Do not split files into global folders
    
*   Do not mix component logic across folders
    

4\. Component Implementation Rules
----------------------------------

*   Each file defines **exactly one custom element**
    
*   customElements.define must be inside the component file
    
*   No global side effects
    
*   No shared mutable state between components
    
*   Shadow DOM **must be enabled**
    
*   Use native HTML semantics whenever possible
    

5\. Styling Rules
-----------------

*   All component styles live inside the component .ts file
    
*   Use **design tokens only**, never raw colors or spacing
    
*   Tokens must come from semantic variables, not palette variables
    
*   No CSS frameworks (Tailwind, Bootstrap, etc.) inside components
    
*   No global styles
    

Consumers control layout. Components control internals.

6\. Design Tokens
-----------------

*   Palette tokens define raw colors
    
*   Semantic tokens define meaning (primary, danger, surface, etc.)
    
*   Components consume **semantic tokens only**
    
*   Tokens must be overridable via CSS custom properties
    

7\. Accessibility Rules (Non-Negotiable)
----------------------------------------

*   Components must be keyboard accessible
    
*   Use native ARIA roles only when required
    
*   Forward relevant ARIA attributes to internal elements
    
*   Never block accessibility due to Shadow DOM
    
*   Test keyboard navigation in Storybook
    

If accessibility is unclear, stop and fix it.

8\. Events & API Design
-----------------------

*   Prefer native DOM events
    
*   Custom events must:
    
    *   Be documented
        
    *   Bubble
        
    *   Be composed
        
*   Public API must be minimal and intentional
    
*   No undocumented props or events
    

9\. Testing Requirements
------------------------

*   Every component must have tests
    
*   Tests must cover:
    
    *   Rendering
        
    *   Props/attributes
        
    *   Events
        
    *   Accessibility basics
        
*   Tests must pass before merge
    

10\. Build & Packaging Rules
----------------------------

*   Output formats: **ESM + CJS**
    
*   No UMD unless explicitly required
    
*   lit must be a **peer dependency only**
    
*   Per-component imports must work
    
*   Tree-shaking must not be broken by barrel exports
    

11\. What NOT to Do
-------------------

*   No barrel files that auto-register all components
    
*   No framework-specific code
    
*   No inline styles from JS
    
*   No hidden magic behavior
    
*   No skipping tests “for now”