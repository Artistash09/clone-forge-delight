/*
  SANITY CMS SETUP — READ THIS TO ADD BLOG CONTENT

  1. Go to sanity.io → your "Inbound Labs" project → "Studio" tab
  2. Click "Content" → "+" → "Post"
  3. Fill in:
     - Title: the article headline
     - Slug: auto-generated from title (click "Generate")
     - Category: one of: cold-email | prospecting | data | linkedin | templates
     - Excerpt: 1-2 sentence summary shown on the blog index
     - Read time: e.g. "5 min read"
     - Author: create an Author document first (name + role)
     - Published at: the date
     - Body: the full article content using the rich text editor
  4. Click "Publish" — the blog page fetches live from Sanity, so it appears immediately on the site

  TO ADD A NEW AUTHOR:
  - Content → "+" → "Author"
  - Fill in name and role (e.g. "James Hunt · Head of Growth")
  - Publish

  SCHEMA:
  If Sanity asks you to define the schema, create a sanity.config.ts at the root of a
  separate Sanity Studio folder (not inside this Lovable project) with this schema:

  defineType({
    name: 'post',
    type: 'document',
    fields: [
      defineField({ name: 'title', type: 'string' }),
      defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
      defineField({ name: 'category', type: 'string' }),
      defineField({ name: 'excerpt', type: 'text' }),
      defineField({ name: 'readTime', type: 'string' }),
      defineField({ name: 'publishedAt', type: 'datetime' }),
      defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
      defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    ]
  })

  defineType({
    name: 'author',
    type: 'document',
    fields: [
      defineField({ name: 'name', type: 'string' }),
      defineField({ name: 'role', type: 'string' }),
    ]
  })

  QUICK REFERENCE — Page → Route mapping (add all to App.tsx)
  Page | Route
  Blog index | /blog
  Blog post | /blog/:slug
  Email Finder | /email-finder
  Domain Search | /domain-search
  Trust Center | /trust-center
  Affiliate | /affiliate
  Changelog | /changelog
  API Docs | /api-docs
  Case Study — Snyk | /case-studies/snyk
  Case Study — Meritt | /case-studies/meritt
  Case Study — StackOptimise | /case-studies/stackoptimise
  Case Study — Founder Led Sales | /case-studies/founder-led-sales
  Case Study — GreyScout | /case-studies/greyscout
*/

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'nfu91hql',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})
