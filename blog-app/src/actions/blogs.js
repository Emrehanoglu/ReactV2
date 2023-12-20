import {v4 as uuid} from 'uuid';

//action creator - remove
export const addBlog = ({title='', description='',dateAdded=0}) => (
    {
        /* burası action bilgisi */
        type: "ADD_BLOG",
        blog: {
            id: uuid(),
            title: title,
            description: description,
            dateAdded: dateAdded
    }
})
//action creator - remove
export const removeBlog = ({ id }) => (
    {
        /* burası action bilgisi */
        type: "REMOVE_BLOG",
        id: id
    }
)
//action creator - edit
export const editBlog = ({ id, updates }) => (
    {
        /* burası action bilgisi */
        type: "EDIT_BLOG",
        id: id,
        updates: updates
    }
)