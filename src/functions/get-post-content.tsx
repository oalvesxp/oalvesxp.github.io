import fs from 'node:fs'
import matter from 'gray-matter'

interface GetPostContentProps {
  slug: string
}

export function getPostContent(props: GetPostContentProps) {
  const folder = './posts/'
  const file = `${folder}${props.slug}.md`
  const readResult = fs.readFileSync(file, 'utf-8')
  const post = matter(readResult)

  return {
    post,
  }
}
