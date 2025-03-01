import { getPostMetaData } from '@/functions/get-post-meta-data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Blog @oalvesxp',
}

export default function Home() {
  const { posts } = getPostMetaData()

  const postPreviews = posts.map(post => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ))

  return (
    <main>
      <div>{postPreviews}</div>
    </main>
  )
}
