import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post
                
                profilePic='https://media-exp1.licdn.com/dms/image/C4D03AQGjvTYmUKLGPw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=TB3q8hzXcvN_dOaH-7Vf3c4cCQHEKNWz_KXwkBDsbZY'
                message='Wow this works'
                timestamp='this is a timestamp'
                username='marcos'
                image='https://s27389.pcdn.co/wp-content/uploads/2017/04/AdobeStock_112185177-3-1024x683.jpeg'
/>
            <Post />

            <Post />

        </div>
    )
}

export default Feed
