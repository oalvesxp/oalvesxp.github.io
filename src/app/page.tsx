import { getPostMetaData } from '@/functions/get-post-meta-data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Blog @oalvesxp',
}

export default function Home() {
  const { slugs } = getPostMetaData()
  console.log(slugs)

  const postPreviews = slugs.map(item => (
    <div key={1}>
      <Link href={`/posts/${item}`}>
        <h2>{item}</h2>
      </Link>
    </div>
  ))

  return (
    <main>
      <div>{postPreviews}</div>
    </main>
  )
}
