import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./App.css"
import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

//action creator - remove
const addBlog = ({title='', description='',dateAdded=0}) => (
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
const removeBlog = ({ id }) => (
    {
        /* burası action bilgisi */
        type: "REMOVE_BLOG",
        id: id
    }
)

const blogState = [] /* başlangıç değeri */

const blogReducer = (state = blogState, action) => {
    switch (action.type){
        case "ADD_BLOG":
            return [
                ...state, /* mevcuttaki blog bilgileri */
                action.blog /* mevcut blog bilgileri + yeni gelen blog  */
            ]
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id; 
            })
        default:
            return state
    }
}

const authState = {} /* başlangıç değeri */

const authReducer = (state = authState, action) => {
    switch (action.type){
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        blogs: blogReducer,
        auth: authReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

const blog1 = store.dispatch(addBlog({title:'blog title 1', description:'blog description 1'}))
const blog2 = store.dispatch(addBlog({title:'blog title 2', description:'blog description 2'}))

store.dispatch(removeBlog({ id: blog1.blog.id }))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();