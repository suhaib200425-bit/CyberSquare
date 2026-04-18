import React, { useEffect, useState } from 'react'
import './CourseListPage.css'
import Banner from '../../Components/Banner/Banner'
import CourseCard from '../../Components/CourseCard/CourseCard'
import axios from 'axios'
import { CourseApi } from '../../assets/Api'

function CourseListPage() {

  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [sortBy, setSortBy] = useState("");

  const[Courses,setCourses]=useState([])

  const GetCourses = async () => {
    try {
      const response = await axios.get(`${CourseApi}?populate=*`)
      console.log(response.data);
      return {
        status: true,
        courses: response.data.data
      }
    } catch (error) {
      console.log(error.response.data || error.message);
      return {
        status: false,
        Error: error.response.data
      }
    }

  }
  useEffect(() => {
    window.scrollTo(0,0)
    Promise.all([GetCourses()]).then((result) => {
      console.log('COURSES');
      console.log(result);
      if (result[0].status) {
        setCourses(result[0].courses)
      }
      console.log('COURSES END');
    })
  }, [])
  return (
    <div className='CourseListPage'>
      <Banner Title={'Explore Courses'} Description={'Find the perfect course to advance your skills'} Search />
      <div className="row courses mt-5">
        <div className="col-md-3 col-0">
          11 courses found <br /><br /><br />
          {/* Category */}
          <label className="form-label">Category</label>
          <select
            className="form-select custom-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Photography">Photography</option>
          </select>

          {/* Level */}
          <label className="form-label">Level</label>
          <select
            className="form-select custom-select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="All Levels">All Levels</option>
          </select>

          {/* Price */}
          <label className="form-label">Price</label>
          <select
            className="form-select custom-select"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          {/* Sort By */}
          <label className="form-label">Sort By</label>
          <select
            className="form-select custom-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
            <option value="studentsHighLow">Students: High to Low</option>
          </select>
        </div>

        <div className="col-md-9 col-12 row ">
          {
            Courses && Courses.map(elem => (
              <CourseCard elem={elem} changeCol />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CourseListPage