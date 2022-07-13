import html from 'remark-html'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).use(remarkMath)
  // .use(remarkRehype)
  //   .use(rehypeKatex).use(rehypeHighlight)
    .process(markdown)
  return result.toString()
}
