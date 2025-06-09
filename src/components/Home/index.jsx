import {useState, useEffect} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import BlogItem from '../BlogItem'

import './index.css'

const apiUrl = 'http://localhost:3001/users'

const Home = () => {
  const [blogsData, setBlogsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const b = localStorage.getItem('courses')

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(apiUrl)
      const fetchedData = await response.json()
      const formattedData = fetchedData.map(eachBlog => ({
        uniqueId: eachBlog.id,
        title: eachBlog.title,
        imageUrl: eachBlog.image_url,
        discription: eachBlog.discription,
        category: eachBlog.category,
        staus: eachBlog.status,
      }))

      setBlogsData(formattedData)
      setIsLoading(false)
    }

    getBlogs()
  }, [])

  const renderBlogsData = () => {
    return (
      <ul className="blogs-list">
        {blogsData.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.uniqueId} />
        ))}
      </ul>
    )
  }

  const renderLoader = () => (
    <div className="loading-view-container">
      <BeatLoader />
    </div>
  )

  return <>{isLoading ? renderLoader() : renderBlogsData()}</>
  // return (
  //   <div className="home-container">
  //     <h1 className="home-heading">Latest Blogs</h1>
  //   </div>
  // )
}

export default Home
