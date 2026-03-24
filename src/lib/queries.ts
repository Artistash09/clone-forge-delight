export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  readTime,
  "author": author->name,
  "authorRole": author->role,
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  readTime,
  body,
  "author": author->name,
  "authorRole": author->role,
}`

export type SanityPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  category: string
  excerpt: string
  readTime: string
  author: string
  authorRole: string
  body?: any
}
