import React from 'react'
import {NavLink} from "react-router-dom"

const BlogListPage = () => {
  return (
    <div>
      BlogListPage
      <p>
        <NavLink to="/blogs/1">Blog 1</NavLink>
        <NavLink to="/blogs/2">Blog 2</NavLink>
      </p>  
    </div>
  )
}

export default BlogListPage