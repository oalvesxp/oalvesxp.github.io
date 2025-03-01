import fs from 'node:fs'

export function getPostMetaData() {
  const folder = './posts'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(item => item.endsWith('.md'))
  const slugs = markdownPosts.map(item => item.replace('.md', ''))

  return {
    slugs,
  }
}
