import { getPostMetaData } from '@/functions/get-post-meta-data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Blog @oalvesxp',
}

export default function Home() {
  const { posts } = getPostMetaData()

  const postPreviews = posts.map(item => (
    <div key={item.slug}>
      <Link href={`/posts/${item.slug}`}>
        <h2>{item.title}</h2>
      </Link>
    </div>
  ))

  return (
    <main>
      <div>{postPreviews}</div>
    </main>
  )
}
