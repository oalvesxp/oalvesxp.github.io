import { getPostContent } from '@/functions/get-post-content'
import Markdown from 'markdown-to-jsx'

interface PostsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage(props: PostsPageProps) {
  const { slug: id } = await props.params
  const { content } = getPostContent({ slug: id })
  return (
    <>
      <div>
        <h1>Post page!</h1>
      </div>
      <div>
        <h2>{id}</h2>
        <Markdown>{content}</Markdown>
      </div>
    </>
  )
}
