import React from 'react'
import{ Image }from 'cloudinary-react'
import { CloudinaryContext } from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Main(props) {

  const [returnedMedia, setReturnedMedia] = useState('')

  const mediaData = {
    userMedia: returnedMedia,
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', props.media)
    formData.append('upload_preset', 'eerkoz7s')

    axios.post('https://api.cloudinary.com/v1_1/rep-powerlifting/image/upload', formData).then((response) => {
      console.log(response.data.public_id);
      setReturnedMedia(response.data.public_id);
    })
  }

  useEffect(() => {
    axios.post('http://localhost:3001/media', mediaData)
  
      console.log(returnedMedia);
  
  }, [returnedMedia])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => {props.setMedia(e.target.files[0])}}/>
        <button>Submit</button>
        <CloudinaryContext cloudName="rep-powerlifting">
          <div>
            <Image publicId="ktfeh7spfpsj24hnl4zh" width="50" />
          </div>
        </CloudinaryContext>
      </form>
    </div>
  )
}

export default Main
