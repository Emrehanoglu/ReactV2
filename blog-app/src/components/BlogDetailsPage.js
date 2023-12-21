import React from 'react'

const BlogDetailsPage = ({match}) => {
  return (
    <div>BlogDetailsPage : {match.params.id}</div>
  )
}

const mapStateToProps = (state,props) => {
  return {
    blog: state.blogs.find((blog)=> {
      return blog.id === state.match.params.id
    })
  }
}

export default BlogDetailsPage