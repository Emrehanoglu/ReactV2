import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import {editBlog, removeBlog} from '../actions/blogs'

const EditBlogPage = (props) => {
  return (
    <div>
        <h1>Edit page</h1>
        <BlogForm 
            blog={props.blog}
            onSubmit={(blog) => {
            props.dispatch(editBlog({id:props.blog.id, updates: blog}))
            props.history.push('/blogs')
        }}/>
        <button onClick={() => {
            props.dispatch(removeBlog({id: props.blog.id}))
            props.history.push('/blogs')
        }}>Delete</button>
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