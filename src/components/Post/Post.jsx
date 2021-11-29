import React from 'react'
import { CloudinaryContext, Transformation } from 'cloudinary-react'
import heart from '../photos/heart2.png'
import { Video } from 'cloudinary-react'
import '../Post/Post.css'

function Post(props) {

  return (
    <div className='posts'>
      {props.returnedData.map((data) => (
          <div className='user-post'>
          <CloudinaryContext cloudName="rep-powerlifting">
          <div>
              <Video onClick={ event => event.target.play() } onScroll={ event => event.target.pause() }publicId={data.media} width="600" height='600' />
          </div>
            </CloudinaryContext>
            <div className='comments-div'>
            <div className='action-buttons'>
              <button><img src={heart} alt="" /></button>
              </div>
              <div className="comments">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem, magnam velit sit quo delectus illum accusantium suscipit distinctio quidem. Magni harum vel veritatis numquam aut cumque dolorem neque laborum.
            </div>
              <div className='leave-comment'>
                <form>
                <textarea className='enter-comment' rows="3"></textarea>
                <button className='post-comment'>Post</button>
                </form>
              </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Post
