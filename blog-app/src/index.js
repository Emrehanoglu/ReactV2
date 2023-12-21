import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./App.css"
import configureStore from './store/configurStore'
import {addBlog, removeBlog, editBlog} from './actions/blogs'
import { Provider } from 'react-redux'

const store = configureStore()

/* store.subscribe(() => {
    console.log(store.getState())
}) */

/* add */
//const blog1 = store.dispatch(addBlog({title:'blog title 1', description:'blog description 1'}))
//const blog2 = store.dispatch(addBlog({title:'blog title 2', description:'blog description 2'}))
store.dispatch(addBlog({title:'blog title 3', description:'blog description 3'}))
store.dispatch(addBlog({title:'blog title 4', description:'blog description 4'}))

/* remove */
//store.dispatch(removeBlog({ id: blog1.blog.id }))

/* edit */
//store.dispatch(editBlog({ id: blog2.blog.id , updates:{title:"update blog title 2"}}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store }>
        <AppRouter />
    </Provider>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();