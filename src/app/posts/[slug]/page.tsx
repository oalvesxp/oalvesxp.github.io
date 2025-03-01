import { getPostContent } from '@/functions/get-post-content'
import { getPostMetaData } from '@/functions/get-post-meta-data'
import Markdown from 'markdown-to-jsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'post | Blog @oalvesxp',
}

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const { posts } = getPostMetaData()
  return posts.map(item => ({ slug: item.slug }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const { content } = getPostContent({ slug })

  return (
    <>
      <div>
        <h1>{slug}</h1>
        <Markdown>{content}</Markdown>
      </div>
    </>
  )
}
