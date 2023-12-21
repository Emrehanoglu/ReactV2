import React from 'react'
import {connect} from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
    <ul>
        {props.blogs.map((blog,index) => {
          return <BlogListItem key={index} {...blog}/>
        })}
    </ul>
  )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
        /* state.blogs redux içerisinden geliyor 
        blogs ise props 'a atanacak değer*/
    }
}

export default connect(mapStateToProps)(BlogList)