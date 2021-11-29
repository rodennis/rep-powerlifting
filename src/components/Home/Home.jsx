import React from 'react'
import './Home.css'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Post from '../Post/Post'
import Navbar from '../Navbar/Navbar'

function Home() {

  const [userMedia, setUserMedia] = useState([])
  const [returnedData, setReturnedData] = useState([])
  const [media, setMedia] = useState('')
  const [uploading, setuploading] = useState('')

  const mediaData = {
    media: media,
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', userMedia)
    formData.append('upload_preset', 'eerkoz7s')

    axios.post('https://api.cloudinary.com/v1_1/rep-powerlifting/video/upload', formData).then((response) => {
      console.log(response.data.public_id);
      setMedia(response.data.public_id);
    })

    setuploading('Picture is being uploaded...')

    setTimeout(() => {
      // window.location.reload(false)

    }, 10000);
  }

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
  }, [])


  return (
    <div className='home'>
      <Navbar handleSubmit={handleSubmit} setUserMedia={setUserMedia}/>
      <h2>{uploading}</h2>
      <Post returnedData={returnedData}/>
    </div>
  )
}

export default Home
