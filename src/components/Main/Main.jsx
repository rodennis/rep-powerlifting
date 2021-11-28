import React from 'react'
import{ Image }from 'cloudinary-react'
import { CloudinaryContext } from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import '../Main/Main.css'

function Main(props) {

  const [returnedData, setReturnedData] = useState([])
  const [media, setMedia] = useState('')
  const [toggle, setToggle] = useState(false)

  const mediaData = {
    media: media,
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', props.userMedia)
    formData.append('upload_preset', 'eerkoz7s')

    axios.post('https://api.cloudinary.com/v1_1/rep-powerlifting/image/upload', formData).then((response) => {
      console.log(response.data.public_id);
      setMedia(response.data.public_id);
    })
    setToggle(prevToggle => !prevToggle)
  }
  console.log(media);

  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    axios.post('http://localhost:3001/media', mediaData)  
  }, [media])
  
  useEffect(() => {
  const apiDataReturned = async () => {
    await axios.get('http://localhost:3001/returnedmedia').then((res) => {
      setReturnedData(res.data)
    })
  }
    apiDataReturned()
  }, [toggle])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => {props.setUserMedia(e.target.files[0])}}/>
        <button>Submit</button>

        {returnedData.map((data) => (
          <div className='user-post'>
          <CloudinaryContext cloudName="rep-powerlifting">
          <div>
            <Image publicId={data.media} width="600" height='600' />
          </div>
            </CloudinaryContext>
            <div className='comments-div'>
              
              <div className="comments">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem, magnam velit sit quo delectus illum accusantium suscipit distinctio quidem. Magni harum vel veritatis numquam aut cumque dolorem neque laborum.
            </div>
              <div className='leave-comment'>
                <textarea className='enter-comment' rows="3" placeholder='Leave a Comment'></textarea>
              </div>
            </div>
          
        </div>
        ))}
      </form>
    </div>
  )
}

export default Main
