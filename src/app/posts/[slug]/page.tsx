import { getPostContent } from '@/functions/get-post-content'
import Markdown from 'markdown-to-jsx'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage(props: PostPageProps) {
  const { slug } = await props.params
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
