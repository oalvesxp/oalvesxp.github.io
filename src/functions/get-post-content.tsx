import fs from 'node:fs'

interface GetPostContentProps {
  slug: string
}

export function getPostContent(props: GetPostContentProps) {
  const folder = './posts/'
  const file = `${folder}${props.slug}.md`
  const content = fs.readFileSync(file, 'utf-8')

  return {
    content,
  }
}
