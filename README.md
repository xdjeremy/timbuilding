## Icon Implementation Guide

### 1. Icon Library Setup
```markdown
- All SVG assets stored in `/src/assets/icons/`
- Each SVG converted to React component format
- Central exports in `/src/constants/icons.ts`:
```typescript
// Example export from icons.ts
export { ReactComponent as PinkStar } from '@/assets/icons/PinkStar.svg';
export { ReactComponent as BlueStar2 } from '@/assets/icons/BlueStar2.svg';
```

### 2. Component Usage
```markdown
```tsx
// Example from Hero slice
import { PinkStar, BlueStar2 } from '@/constants/icons';

<PinkStar className="h-[55px] w-[52px] animate-pulse" />
<BlueStar2 className="h-[43px] w-10 animate-pulse delay-200" />
```

### 3. CMS Integration Strategy
```markdown
1. Create custom Icon Select field in Prismic
2. Map icon names to component exports:
```typescript
const iconComponents = {
  pinkStar: PinkStar,
  blueStar2: BlueStar2
};
```

3. Dynamic rendering:
```tsx
const Icon = iconComponents[slice.primary.iconName];
return <Icon className="..." />;
```

### 4. Best Practices
- Use `currentColor` in SVGs for theme compatibility
- Animate with Tailwind's `animate-` classes
- Maintain icon size consistency using viewBox attributes

## PrismicRichText Implementation

### 1. Component Architecture
```tsx
// Core serializer configuration
const defaultComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  // Additional element handlers...
};

export function PrismicRichText({ components, ...props }) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
```

### 2. Key Features
- Type-safe content handling via @prismicio/react
- Responsive design through Tailwind utility classes
- Semantic HTML output with accessibility considerations
- Customizable link handling with PrismicNextLink integration

### 3. CMS Integration
- Direct mapping to Prismic rich text fields
- Supports content relationship linking
- Handles complex text formatting patterns

### 4. Slice Implementation Examples

#### Hero Section Usage
```tsx
// Custom rich text components for title
import { components } from './HeroRichText';

// Title with custom styling
<PrismicRichText 
  field={title} 
  components={components} // Custom overrides
/>

// Subtitle with default styling
<PrismicRichText field={subtitle} />
```

### 5. Custom Component Extension
The Hero slice demonstrates how to extend base functionality:
- Local `components` prop overrides default serializers
- Maintains core typography system through Heading component
- Enables slice-specific rich text configurations
