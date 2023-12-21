import React from 'react'

const BlogDetailsItem = ({id,title,description}) => {
  return (
    <div>
        <p>
            blog id: {id}
            blog title: {title}
            blog decsription: {description}
        </p>
    </div>
  )
}

export default BlogDetailsItem