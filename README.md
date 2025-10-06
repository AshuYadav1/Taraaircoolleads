# Tara Cool Leads - AC Service Lead Generation Platform

A high-conversion, SEO-optimized, mobile-first landing page for Tara Air Conditioning Sales & Service, a local AC repair and installation business serving Mumbai's Western Suburbs. This is a comprehensive lead generation funnel with advanced conversion optimization, local SEO targeting, and multi-channel lead capture.

## 🚀 Features

- **High-Conversion Landing Page**: Optimized for lead generation with multiple conversion points
- **Mobile-First Design**: Responsive design with sticky mobile footer for conversions
- **Local SEO Optimization**: Schema.org structured data, local business markup, and geo-targeting
- **Multi-Channel Lead Capture**: Contact forms, phone tracking, WhatsApp integration
- **Analytics & Tracking**: Google Analytics 4, Meta Pixel, and custom event tracking
- **Professional UI**: Modern design with Shadcn/UI components and Tailwind CSS
- **Real-time Chat**: Live chat widget for instant customer support
- **Urgency Marketing**: Exit-intent modals, countdown timers, and special offers

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Shadcn/UI** components built on Radix UI primitives
- **Tailwind CSS** for styling
- **Wouter** for lightweight client-side routing
- **TanStack React Query** for server state management
- **React Hook Form** with Zod validation

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** with PostgreSQL
- **Zod** for schema validation
- **Express Session** for session management

### Database
- **PostgreSQL** (Neon Database for serverless deployment)
- **Drizzle ORM** for type-safe database operations

### Development Tools
- **TypeScript** for type safety
- **ESBuild** for fast production builds
- **PostCSS** and **Autoprefixer** for CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TaraCoolLeads
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_postgresql_connection_string
   
   # Server
   PORT=3000
   HOST=0.0.0.0
   NODE_ENV=development
   
   # Analytics (optional)
   GTM_ID=GTM-XXXXXXX
   FB_PIXEL_ID=XXXXXXXXXX
   
   # Session Secret
   SESSION_SECRET=your_session_secret_here
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```

This will start both the frontend and backend servers:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/api

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📁 Project Structure

```
TaraCoolLeads/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── ui/            # Shadcn/UI components
│   └── index.html         # HTML template
├── server/                # Backend Express.js application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── vite.ts            # Vite integration
├── shared/                # Shared code between client and server
│   └── schema.ts          # Database schemas and validation
├── dist/                  # Production build output
└── attached_assets/       # Static assets and documentation
```

## 🎯 Key Components

### Lead Generation Features
- **Contact Forms**: Multiple contact forms with validation
- **Phone Tracking**: Analytics for phone call conversions
- **WhatsApp Integration**: Direct messaging to business
- **Exit-Intent Modals**: Capture leaving visitors
- **Urgency Banners**: Time-sensitive offers and promotions

### SEO & Marketing
- **Local SEO**: Optimized for Mumbai Western Suburbs
- **Schema Markup**: Rich snippets for search results
- **Meta Tags**: Comprehensive meta tag optimization
- **Performance**: Optimized loading and Core Web Vitals

### User Experience
- **Mobile-First**: Responsive design optimized for mobile
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant components
- **Progressive Enhancement**: Works without JavaScript

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `HOST` | Server host | `0.0.0.0` |
| `NODE_ENV` | Environment mode | `development` |
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `SESSION_SECRET` | Session encryption secret | Required |
| `GTM_ID` | Google Tag Manager ID | Optional |
| `FB_PIXEL_ID` | Facebook Pixel ID | Optional |

### Database Schema

The application uses two main tables:

1. **leads**: Stores customer inquiries and contact information
2. **analytics**: Tracks user interactions and conversion events

## 📊 Analytics & Tracking

The platform includes comprehensive analytics:

- **Google Analytics 4**: Page views and user behavior
- **Meta Pixel**: Facebook conversion tracking
- **Custom Events**: Internal conversion tracking
- **Phone Call Tracking**: Analytics for phone conversions
- **Form Submissions**: Lead form conversion tracking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Railway
1. Connect your GitHub repository to Railway
2. Add PostgreSQL database service
3. Set environment variables
4. Deploy

### Manual Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Use a process manager like PM2 for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run check`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@taraacservice.com
- Phone: +91-98765-43210
- WhatsApp: +91-98765-43210

## 🔄 Updates

This project is actively maintained and updated with:
- Security patches
- Performance improvements
- New features and components
- SEO optimizations
- Analytics enhancements
