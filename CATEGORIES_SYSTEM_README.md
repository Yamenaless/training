# Categories System for Euro Trainings Website

This document describes the new categories system that has been added to the Euro Trainings website while preserving all existing code.

## Overview

The categories system provides a structured way to organize and display training courses by category, making it easier for users to find relevant courses.

## New Files Created

### Data Files
- `data/categories.json` - Contains category information (6 categories)
- `data/courses.json` - Contains course information with category associations

### Components
- `components/categories-hero.tsx` - Hero section for the main categories page
- `components/categories-grid.tsx` - Grid display of category cards
- `components/category-hero.tsx` - Hero section for individual category pages
- `components/category-courses-grid.tsx` - Grid display of courses within a category

### Pages
- `app/categories/page.tsx` - Main categories page
- `app/categories/[slug]/page.tsx` - Dynamic category page for individual categories

### Utilities
- `lib/data.ts` - Data loading and filtering functions

## Updated Components

### Navigation
- **CombinedNavbar**: Now used as the main navigation across all pages
- **MainNavbar**: Updated with Categories link and enhanced HOME text styling
- **Header**: Replaced with CombinedNavbar on all pages

### Home Page
- **CourseCategories**: Updated to match the categories page design with image-based cards
- **Hero**: Adjusted top padding to accommodate the new navbar structure

## Features

### 1. Categories Page (/categories)
- Hero section matching existing website style
- Grid of 6 category cards
- Each card displays:
  - Category image
  - Title
  - Description
  - Course count
  - "Explore Category" button

### 2. Individual Category Pages (/categories/[slug])
- Hero section with category title and description
- Course grid layout exactly matching the reference image:
  - 4 columns on desktop, responsive on mobile
  - Each course card contains:
    - Professional course image
    - Course title
    - Course code (e.g., MATH6478)
    - Duration (e.g., "1 week")
    - Two action buttons: "Explore Dates" and "Explore Cities"

### 3. Navigation Integration
- Added "Categories" link to both desktop and mobile navigation
- Positioned between "Cities" and "Services"
- Updated to use the demo navbar (CombinedNavbar) as the main navigation
- HOME text updated with bold, larger font and wider tracking for emphasis

## Data Structure

### Categories
Each category has:
- `id`: Unique identifier (used in URLs)
- `title`: Display name
- `description`: Category description
- `image`: Background image URL
- `courseCount`: Number of available courses

### Courses
Each course has:
- `id`: Unique identifier
- `title`: Course title
- `code`: Course code (e.g., MATH6478)
- `duration`: Course duration
- `category`: Category ID for filtering
- `image`: Course image URL
- `description`: Course description

## Design Patterns

The new components follow the existing website design patterns:
- **Colors**: Primary (#002677), Secondary (#4AE290), consistent with existing theme
- **Typography**: Same font family and sizing as existing components
- **Spacing**: Consistent padding, margins, and grid gaps
- **Animations**: Hover effects, transitions, and animations matching existing style
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Usage

### Accessing Categories
1. Navigate to `/categories` to see all categories
2. Click on any category card to view courses in that category
3. Use the navigation menu to access categories from any page

### Navigation Structure
- **Top Navbar**: Golden background with contact information and download button
- **Main Navbar**: Blue background with logo, navigation links, and services dropdown
- **Navigation Links**: HOME, Cities, Categories, Services (with dropdown)

### Adding New Categories
1. Add new category data to `data/categories.json`
2. Add corresponding courses to `data/courses.json`
3. The system will automatically generate new category pages

### Adding New Courses
1. Add new course data to `data/courses.json`
2. Ensure the `category` field matches an existing category ID
3. Courses will automatically appear on the appropriate category page

## Technical Implementation

- **Static Generation**: Category pages are pre-generated at build time
- **Type Safety**: Full TypeScript support with proper interfaces
- **Performance**: Optimized images and efficient data loading
- **SEO**: Proper meta tags and structured data
- **Accessibility**: Semantic HTML and ARIA labels

## Browser Support

The categories system supports all modern browsers and includes:
- Responsive design for mobile, tablet, and desktop
- Progressive enhancement for older browsers
- Optimized images with proper alt text
- Keyboard navigation support

## Future Enhancements

Potential improvements for the categories system:
- Search and filtering capabilities
- Course sorting options
- Advanced filtering by duration, location, etc.
- Integration with a booking system
- Course ratings and reviews
- Related courses suggestions
