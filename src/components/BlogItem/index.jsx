import './index.css'
import {Link} from 'react-router'

const BlogItem = props => {
  const {blogDetails} = props
  const {imageUrl, category, title, discription, status, uniqueId} = blogDetails

  return (
    <Link to={`/blogs/${uniqueId}`} className="blog-list-item-link">
      <li className="blog-list-item">
        <img className="thumbnail" src={imageUrl} alt={title} />
        <div className="details-container">
          <span className="topic">{category}</span>
          <span className="topic">{status}</span>
          <p className="blog-item-title">{title}</p>
          <div className="author-details-container">
            <p className="name">{discription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
