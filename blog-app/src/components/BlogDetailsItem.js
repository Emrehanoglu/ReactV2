import React from 'react'

const BlogDetailsItem = (props) => {
  return (
    <div>
      Blog Details Item Page
        <ul>
            <li>blog id: {props.blog.id}</li>
            <li>blog title: {props.blog.title}</li>
            <li>blog decsription: {props.blog.description}</li>
          </ul>
    </div>
  )
}

export default BlogDetailsItem