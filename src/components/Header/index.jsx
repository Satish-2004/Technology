import {Link} from 'react-router'
import {useState} from 'react'

import './index.css'

const Header = () => {
  const a = {
    title: 'React Fundamentals',
    image_url: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
    discription:
      'Learn the basics of React including components, props, state, and event',
    category: 'frontend',
    status: 'progress',
  }
  localStorage.setItem('courses', JSON.stringify([a]))
  const localdata = localStorage.getItem('courses')
  const [courses, setCourses] = useState(localdata)

  const onclick = () => {
    const title = document.getElementById('title').value
    const discription = document.getElementById('discription').value
    const category = document.getElementById('category').value
    const status = document.getElementById('status').value
    const url = document.getElementById('url').value
    const newCourse = {title, discription, category, status, image_url: url}
    const updatedCourses = [...JSON.parse(courses), newCourse]
    localStorage.setItem('courses', JSON.stringify(updatedCourses))
    setCourses(updatedCourses)
  }

  return (
    <nav className="nav-header">
      <h1 className="blog-title">Course Manager</h1>
      <h1 className="blog-title1">Manage your learning journey</h1>
      <form className="search-form" type="submit">
        <label htmlFor="search" className="search-label">
          Courses title
        </label>
        <br />
        <input
          type="text"
          className="search-input"
          placeholder="Search courses..."
          id="title"
        />
        <br />
        <label htmlFor="search-textarea" className="search-label">
          Course Discription
        </label>
        <br />
        <textarea
          className="search-textarea"
          placeholder="Enter course details..."
          id="discription"
        ></textarea>
        <br />
        <label htmlFor="search" className="search-label">
          Image URL
        </label>
        <br />
        <input
          type="text"
          className="search-input"
          placeholder="Search courses..."
          id="url"
        />
        <br />
        <label htmlFor="search-topic" className="search-label">
          Category
        </label>
        <select id="category" className="search-select">
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
          <option value="data">Data</option>
        </select>
        <label htmlFor="search-topic" className="search-label">
          Status
        </label>
        <select id="status" className="search-select">
          <option value="frontend">In progress</option>
          <option value="backend">completed</option>
          <option value="data">Data</option>
        </select>
        <br />
        <button type="submit" className="add-button" onClick={onclick}>
          add course
        </button>
      </form>

      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            ALL
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/to-learn">
            To Learn
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/in-progress">
            In progress
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
