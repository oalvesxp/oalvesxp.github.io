import fs from 'node:fs'
import matter from 'gray-matter'

export function getPostMetaData() {
  const folder = './posts'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(item => item.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const result = matter(fileContents)

    return {
      title: result.data.title,
      date: result.data.date,
      subtitle: result.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  })

  return {
    posts,
  }
}
