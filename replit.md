# Overview

This is a band website for Deer Creek Sharp Shooters (DCSS), a Colorado bluegrass band. The application is built as a full-stack web application showcasing the band's music, upcoming shows, press materials, and providing ways for fans to connect. The site features a modern, responsive design that reflects the band's high-energy bluegrass aesthetic with a custom color scheme of dark charcoal, bright orange, and warm neutrals.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **Routing**: Wouter for client-side routing with pages for Home, Shows, About, Music, Videos, Merch, EPK (Electronic Press Kit), and Contact
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management with Bandsintown API integration
- **Styling**: Custom CSS variables defining brand colors (DCSS dark, orange, light, warm, accent) and typography (Oswald for headings, Merriweather for body text)
- **External APIs**: Bandsintown API for live show data, YouTube embeds for video content

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Development Setup**: Vite middleware integration for hot module replacement in development
- **API Structure**: RESTful API with routes prefixed under `/api` (currently minimal implementation)
- **Storage Layer**: Abstracted storage interface with in-memory implementation for user management

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: Basic user table with ID, username, and password fields
- **Migrations**: Drizzle Kit for schema migrations stored in `/migrations` directory

## Component Architecture
- **Design System**: Comprehensive UI component library following shadcn/ui patterns
- **Layout**: Fixed navigation header, main content area, and footer
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Asset Management**: Static assets stored in `/attached_assets` with Vite alias configuration

## Build and Development
- **TypeScript**: Strict type checking across client, server, and shared code
- **Module Resolution**: ESM modules with path aliases for clean imports
- **Development**: Hot reload with Vite dev server and Express backend proxy
- **Production**: Vite build for frontend, esbuild for server bundling

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **Drizzle Kit**: CLI tools for database migrations and introspection

## UI and Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Google Fonts**: Oswald and Merriweather font families
- **Font Awesome**: Icon library for social media and UI icons
- **Lucide React**: Additional icon components

## Development Tools
- **Replit Integration**: Development environment with runtime error overlay and cartographer plugin
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Static type checking and IntelliSense
- **ESLint/Prettier**: Code formatting and linting (implied by project structure)

## Third-party Services (Planned)
- **Spotify**: Music streaming integration with embedded player
- **YouTube**: Video content embedding
- **Social Media**: Links to Instagram, Facebook, YouTube, and Spotify profiles
- **Mailing List**: Contact form and newsletter subscription (implementation pending)
- **Bandsintown**: Potential integration for show listings (structure prepared)

## Runtime Dependencies
- **React Ecosystem**: React Query for data fetching, React Hook Form for form handling
- **Utility Libraries**: Date-fns for date formatting, clsx for conditional CSS classes
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions (configured but not actively used)