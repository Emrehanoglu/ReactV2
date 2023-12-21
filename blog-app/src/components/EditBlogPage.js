import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import {editBlog} from '../actions/blogs'

const EditBlogPage = (props) => {
  return (
    <div>
        <h1>Edit page</h1>
        <BlogForm 
            blog={props.blog}
            onSubmit={(blog) => {
                console.log(props.blog.id)
                console.log(blog)
            props.dispatch(editBlog({id:props.blog.id, updates: blog}))
            props.history.push('/blogs')
        }}/>
    </div>
  )
}

const mapStateToProps = (state,props) => {
    return {
        blog : state.blogs.find((blog) => {
            return blog.id === props.match.params.id
    })}
}

export default connect(mapStateToProps)(EditBlogPage)