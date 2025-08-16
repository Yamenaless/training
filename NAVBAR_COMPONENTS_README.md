# Sticky Navbar Components Documentation

This document describes the new sticky navbar components created for the Euro Training Next.js project.

## Overview

Two new sticky navbar components have been created to complement the existing design system:

1. **TopNavbar** - A thin, sticky navbar with golden background and contact information
2. **MainNavbar** - The main sticky navigation with logo, menu items, and services dropdown (no animations)
3. **CombinedNavbar** - A wrapper component that combines both sticky navbars seamlessly

## Components

### TopNavbar

A thin, sticky horizontal navbar positioned at the very top of the page with a golden background.

**Features:**
- **Sticky positioning** - Always visible at the top (`sticky top-0 z-50`)
- **Golden background** - Uses `bg-yellow-500` for distinctive appearance
- **White text** - All text elements in white for optimal contrast
- Company phone number on the left side
- Company email and download button on the right side
- Responsive design for all screen sizes
- Hover effects with subtle gray transitions
- Download button with white background and golden text

**Usage:**
```tsx
import { TopNavbar } from "@/components/top-navbar"

export default function Layout() {
  return (
    <div>
      <TopNavbar />
      {/* Other content */}
    </div>
  )
}
```

### MainNavbar

The main sticky navigation bar with logo, menu items, and a services dropdown. **No animations or transitions.**

**Features:**
- **Sticky positioning** - Always visible below the top navbar (`sticky top-8 z-40`)
- **No space between navbars** - Seamless connection with top navbar
- **No animations** - Static, clean appearance without motion
- Company logo on the left side
- Navigation menu with **4 items**:
  - **HOME** - New addition for easy navigation
  - Cities
  - Courses
  - Services (dropdown)
- Services dropdown with 5 menu items:
  - Workshops
  - In-House Training
  - Customize Your Course
  - Consulting
  - Self Learning
- Consistent blue background (no transparency changes)
- Mobile-responsive sheet menu
- Proper positioning below the top navbar

**Usage:**
```tsx
import { MainNavbar } from "@/components/main-navbar"

export default function Layout() {
  return (
    <div>
      <MainNavbar />
      {/* Other content */}
    </div>
  )
}
```

### CombinedNavbar

A wrapper component that renders both sticky navbars in the correct order and positioning with no gaps.

**Usage:**
```tsx
import { CombinedNavbar } from "@/components/combined-navbar"

export default function Layout() {
  return (
    <div>
      <CombinedNavbar />
      {/* Other content */}
    </div>
  )
}
```

## Design System Integration

### Colors
- **Top Navbar**: `bg-yellow-500` (golden) with white text
- **Main Navbar**: `#002677` (dark blue) - matches existing design
- **Secondary**: `#4AE290` (green) - matches existing design
- **White**: Used for text and backgrounds
- **Gray variants**: Used for dropdown menus and hover states

### Typography
- Uses existing font family (Neue Montreal)
- Consistent font weights and sizes
- Proper text hierarchy

### Spacing
- Follows existing spacing patterns
- Consistent padding and margins
- **No space between navbars** - Seamless connection
- Proper component spacing

### Animations
- **Top Navbar**: Subtle hover effects with gray transitions
- **Main Navbar**: **No animations or transitions** - Static appearance
- Clean, motionless design for main navigation

## Sticky Behavior

### Positioning
- **Top Navbar**: `sticky top-0 z-50` - Always at the very top
- **Main Navbar**: `sticky top-8 z-40` - Always below the top navbar
- Both navbars remain visible while scrolling
- **No gaps or spaces** between the two navbars
- Proper z-index layering ensures correct stacking

### Benefits
- Users can always access navigation
- No need to scroll back to top
- Improved user experience on long pages
- Consistent navigation access across all content
- **Seamless visual connection** between navbars

## Responsive Behavior

### Desktop
- Full navigation menu visible
- Services dropdown on hover
- Contact information displayed inline
- Sticky behavior works on all screen sizes
- **No animations** - Clean, static appearance

### Mobile
- Hamburger menu for main navigation
- Sheet component for mobile menu
- Stacked layout for contact information
- Touch-friendly interactions
- Sticky behavior maintained on mobile devices
- **Consistent static behavior** across all devices

## Accessibility Features

- Proper ARIA labels for screen readers
- Semantic HTML structure
- Keyboard navigation support
- Focus management for dropdown menus
- Screen reader friendly content
- High contrast with golden background and white text
- **No motion** for users sensitive to animations

## Technical Implementation

### Dependencies
- Next.js App Router
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

### Components Used
- `Button` - For interactive elements
- `Sheet` - For mobile navigation
- `DropdownMenu` - For services menu
- `Image` - For logo display

### State Management
- Scroll position detection
- Mobile menu open/close state
- Responsive breakpoint handling
- Sticky positioning management
- **No animation state management**

### CSS Classes
```css
/* Top Navbar */
sticky top-0 z-50 bg-yellow-500 text-white

/* Main Navbar */
sticky top-8 z-40 bg-[#002677] (consistent background)
```

## File Structure

```
components/
├── top-navbar.tsx          # Sticky top navbar component
├── main-navbar.tsx         # Sticky main navbar component (no animations)
├── combined-navbar.tsx     # Combined wrapper component
└── ui/                     # shadcn/ui components
    ├── button.tsx
    ├── sheet.tsx
    └── dropdown-menu.tsx
```

## Demo Page

A demo page has been created at `/navbar-demo` to showcase the sticky components:

- Demonstrates both sticky navbars working together
- Shows sticky behavior while scrolling
- Displays golden background and white text
- **Shows seamless connection** between navbars
- **Demonstrates static, no-animation behavior**
- Provides usage examples and technical details

## Integration with Existing Code

These components are designed to work alongside existing components:

- **No conflicts** with existing design system
- **Preserves** all current styling and functionality
- **Maintains** existing color schemes and spacing (except specified changes)
- **Uses** existing Tailwind classes and design tokens
- **Adds** sticky behavior without breaking existing layout
- **Creates seamless connection** between navbars

## Customization

### Modifying Sticky Positioning
To change the sticky positioning, update the CSS classes:

```tsx
// Top Navbar - change top-0 to desired offset
className="sticky top-0 z-50 bg-yellow-500"

// Main Navbar - change top-8 to match top navbar height
className="sticky top-8 z-40"
```

### Adding New Menu Items
To add new navigation items, modify the `MainNavbar` component:

```tsx
<nav className="hidden lg:flex items-center space-x-8">
  <Link href="/new-page" className="text-white hover:text-secondary font-medium">
    New Page
  </Link>
  {/* Existing items */}
</nav>
```

### Modifying the Services Dropdown
To change the services menu, update the dropdown items in `MainNavbar`:

```tsx
<DropdownMenuItem asChild>
  <Link href="/services/new-service" className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer">
    New Service
  </Link>
</DropdownMenuItem>
```

### Changing Background Colors
To modify the golden background:

```tsx
// Change from bg-yellow-500 to other options
className="sticky top-0 z-50 bg-amber-500 text-white"  // Amber
className="sticky top-0 z-50 bg-orange-500 text-white" // Orange
className="sticky top-0 z-50 bg-yellow-600 text-white" // Darker yellow
```

### Adding Animations (if desired)
To add animations back to the main navbar:

```tsx
// Add transition classes
className="sticky top-8 z-40 w-full transition-all duration-300"

// Add hover transitions
className="text-white hover:text-secondary font-medium transition-colors duration-200"
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes
- Progressive enhancement approach
- Sticky positioning support in all modern browsers
- **Consistent behavior** across all devices

## Performance Considerations

- Minimal JavaScript for state management
- Efficient scroll event handling
- Optimized re-renders
- Lazy loading of mobile menu content
- CSS-based sticky positioning for optimal performance
- **No animation overhead** - Clean, fast performance

## Troubleshooting

### Common Issues

1. **Navbars not sticking**: Check sticky CSS classes and z-index values
2. **Overlapping issues**: Verify z-index layering (z-50 for top, z-40 for main)
3. **Gaps between navbars**: Ensure top-8 positioning matches top navbar height
4. **Mobile sticky problems**: Test on various mobile devices and browsers
5. **Background color not showing**: Ensure Tailwind CSS is properly configured
6. **Responsive issues**: Check breakpoint classes and mobile-first approach

### Debug Steps

1. Check browser console for errors
2. Verify component imports and CSS classes
3. Test responsive breakpoints
4. Validate Tailwind CSS configuration
5. Check z-index layering and positioning
6. Test sticky behavior on different devices
7. **Verify no gaps** between navbars
8. **Check for unwanted animations**

## Future Enhancements

Potential improvements for future versions:

- Search functionality integration
- User authentication menu
- Language switcher
- Dark mode support
- **Optional animation toggle** for users who prefer motion
- Breadcrumb navigation
- Mega menu support
- Customizable sticky behavior
- **Configurable spacing** between navbars

## Support

For questions or issues with these sticky navbar components:

1. Check this documentation
2. Review the demo page at `/navbar-demo`
3. Examine component source code
4. Test in different browsers and devices
5. Verify Tailwind CSS configuration
6. Check sticky positioning support in target browsers
7. **Verify seamless connection** between navbars
8. **Test static, no-animation behavior**
