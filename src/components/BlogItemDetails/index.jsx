import './index.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import BeatLoader from 'react-spinners/BeatLoader'

const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}

const BlogItemDetails = () => {
  const {id} = useParams()
  const apiUrl = `https://apis.ccbp.in/blogs/${id}`

  const [blogItemDetails, setBlogItemDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBlogItemDetails = async () => {
      const response = await fetch(apiUrl)
      const fetchedData = await response.json()
      const formattedData = {
        title: fetchedData.title,
        imageUrl: fetchedData.image_url,
        content: fetchedData.content,
        avatarUrl: fetchedData.avatar_url,
        author: fetchedData.author,
      }

      setBlogItemDetails(formattedData)
      setIsLoading(false)
    }

    getBlogItemDetails()
  }, [])

  const renderBlogItemDetails = () => {
    const {title, imageUrl, content, avatarUrl, author} = blogItemDetails

    return (
      <div className="blog-item-details-container">
        <h1 className="title">{title}</h1>
        <div className="author-details-container">
          <span className="name">react</span>
        </div>
        <img className="blog-img" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  const renderLoader = () => (
    <div className="loading-view-container">
      <BeatLoader />
    </div>
  )

  return (
    <div className="blog-details-container">
      {isLoading ? renderLoader() : renderBlogItemDetails()}
    </div>
  )
}

export default BlogItemDetails
