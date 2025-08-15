# Overview

This is a modern full-stack web application for Tara Air Conditioning Sales & Service, a local AC repair and installation business serving Mumbai's Western Suburbs. The application functions as a lead generation platform with a marketing-focused landing page designed to convert visitors into customers through multiple call-to-action channels (phone, WhatsApp, and contact forms).

The system is built as a monorepo with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM. It includes comprehensive analytics tracking, lead management, and is optimized for local SEO and conversion optimization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand colors (trust-blue, accent-orange)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture  
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with dedicated endpoints for leads (`/api/leads`) and analytics (`/api/analytics`)
- **Validation**: Zod schemas for request/response validation shared between client and server
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be swapped for database persistence
- **Development Setup**: Vite middleware integration for hot module replacement in development

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**:
  - `leads`: Stores customer inquiries with contact info, service type, location, and source tracking
  - `analytics`: Tracks user interactions and conversion events with IP and user agent data
- **Schema Location**: Shared between client and server in `/shared/schema.ts` for type safety

## Analytics & Tracking
- **Multi-platform Tracking**: Google Analytics 4, Meta Pixel, and Google Tag Manager integration
- **Custom Analytics**: Backend API endpoint for internal event tracking
- **Conversion Tracking**: Dedicated hooks for tracking phone calls, WhatsApp clicks, and form submissions
- **User Journey Analysis**: Page views, interaction events, and conversion funnels

## Development & Build Process
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **TypeScript Configuration**: Strict typing with path mapping for clean imports
- **Build Pipeline**: Vite for frontend builds, esbuild for backend bundling
- **Development Server**: Hot reload for both frontend and backend code

## SEO & Marketing Optimization
- **Local SEO**: Schema.org structured data for local business markup
- **Meta Tags**: Optimized title, description, and Open Graph tags
- **Performance**: Font optimization, image loading strategies, and bundle optimization
- **Mobile-First**: Responsive design with sticky mobile footer for conversions

# External Dependencies

## Database & Storage
- **Neon Database**: PostgreSQL-compatible serverless database (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database ORM with migration support

## Frontend Libraries
- **Radix UI**: Comprehensive set of accessible UI components for modals, forms, navigation
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing solution
- **Tailwind CSS**: Utility-first CSS framework

## Backend Services  
- **Express.js**: Web application framework
- **Connect-PG-Simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Custom plugins for Replit development environment

## Third-Party Integrations
- **Google Fonts**: Inter font family for consistent typography
- **Unsplash**: Stock photography for hero images and customer testimonials
- **Analytics Platforms**: Google Analytics, Meta Pixel, Google Tag Manager for conversion tracking
- **Communication**: WhatsApp Business API integration for customer messaging

The application architecture prioritizes lead conversion optimization, local search visibility, and seamless user experience across desktop and mobile devices while maintaining type safety and developer productivity.