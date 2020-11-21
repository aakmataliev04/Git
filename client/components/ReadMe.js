import React from 'react'
import Markdown from 'markdown-to-jsx'

const ReadMe = ({ readme }) => {
  return <Markdown>{readme}</Markdown>
}
export default ReadMe
