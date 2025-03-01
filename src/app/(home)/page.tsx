import PostPreview from '@/components/post-preview'
import { getPostMetaData } from '@/functions/get-post-meta-data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Blog @oalvesxp',
}

export default function Home() {
  const { posts } = getPostMetaData()

  const post = posts.map(item => <PostPreview key={item.slug} {...item} />)

  return (
    <main>
      <div>{post}</div>
    </main>
  )
}
