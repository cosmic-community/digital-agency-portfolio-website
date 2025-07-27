# Digital Agency Portfolio Website

![App Preview](https://imgix.cosmicjs.com/c8153020-6afc-11f0-a051-23c10f41277a-photo-1467232004584-a241de8bcf5d-1753629435599.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency portfolio website built with Next.js 15 and Tailwind CSS. Showcases services, team members, case studies, and client testimonials with a modern, responsive design.

## Features

- **Service Portfolio**: Comprehensive service listings with detailed descriptions and pricing
- **Team Showcase**: Professional team member profiles with skills and contact information
- **Case Studies**: Detailed project showcases with challenges, solutions, and results
- **Client Testimonials**: Social proof with ratings, photos, and service associations
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Performance Optimized**: Fast loading with image optimization and clean architecture
- **SEO Ready**: Optimized meta tags and structured data for search engines
- **Dynamic Content**: All content managed through Cosmic CMS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6886421be62f297e7fb604db&clone_repository=68864526e62f297e7fb60504)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency website with services, team members, testimonials, and case studies."

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **React** - Component-based UI library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the digital agency content model

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   COSMIC_BUCKET_SLUG=digital-agency-website-production
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This website integrates with your Cosmic CMS bucket containing:

- **Services**: Service offerings with descriptions, pricing, and features
- **Team Members**: Staff profiles with bios, photos, and skills
- **Case Studies**: Project showcases with challenges, solutions, and results
- **Testimonials**: Client feedback with ratings and service associations

All content is fetched dynamically using the Cosmic SDK with proper error handling and TypeScript definitions.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

Environment variables needed for production:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->