import type { PostMetaData } from '@/@types/post-meta-dada'
import Link from 'next/link'

export default function PostPreview(props: PostMetaData) {
  return (
    <>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </>
  )
}
