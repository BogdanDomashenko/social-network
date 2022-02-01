import React from 'react';

import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostBodyCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} name={post.name} likeCount={post.likeCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                New Post
                <div className={s.post__add}>
                    <textarea onChange={onPostChange} className={`textarea ${s.post__textarea}`} ref={newPostElement} value={props.newPostText} />
                    <button onClick={ onAddPost } className={`button button--primary ${s.post__button}`}>Add post</button>
                </div>
                <div>
                    Posts
                </div>
            </div>
            <div className='posts'>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;