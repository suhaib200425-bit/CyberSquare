import React, { useEffect, useRef, useState } from 'react'
import './CreateCourse.css'
import axios from 'axios';
import { CategoryApi, CourseApi, MeadiApi, PriceApi } from '../../assets/Api';
import { useLMS } from '../../Context/LmsContext';
import { carriculamspost } from './carriculam';
import { createCourse } from './newcoursecreate';
function CreateCourse() {
  const [Page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    category: null,
    level: "",
    price: "",
    originalPrice: "",
    thumbnail: null,
  });
  const forms = [
    <CourseForm formData={formData} setFormData={setFormData} setPage={setPage} />,
    <Curriculum />]

  return (
    <div className='CreateCourse'>
      <h5 className='m-0 mt-2'>Create New Course</h5>
      <p className='m-0'>Step {Page + 1} of {forms.length}</p>
      <div className="indicators">
        {[1, 2].map(elem => (
          <div className={elem <= Page + 1 ? 'Active' : 'UnActive'}></div>
        ))}
      </div>
      <div className="CourseForm col-md-12">
        {/* <CourseForm formData={formData} setFormData={setFormData} /> */}
        {forms[Page]}
      </div>
    </div>
  )
}

export default CreateCourse

function CourseForm({ formData, setFormData, setPage }) {
  const [Categories, setCategories] = useState([])
  const token = localStorage.getItem('token')
  const { User } = useLMS()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.values(formData).every(value => value !== "" && value !== null);

    if (!isValid) {
      alert("All fields are required ❌");
    } else {
      console.log('FORMDATA');
      console.log(formData);
      console.log('FORMDATA END');
      createCourse(formData,User);
    }

  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(CategoryApi)
        return {
          status: true,
          categories: response.data.data
        }
      } catch (error) {
        console.log(error.response.data || error.message);
        return {
          status: false,
          error: error.response.data || error
        }
      }
    }
    Promise.all([getCategories()]).then((result) => {
      console.log('ALL FIELD');
      console.log(result);

      if (result[0].status) {
        setCategories(result[0].categories)
      }
    })
  }, [])

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h4 className="mb-3">Basic Information</h4>

        <form onSubmit={handleSubmit}>
          {/* Course Title */}
          <div className="mb-3">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="e.g. Complete React Developer Bootcamp"
              onChange={handleChange}
            />
          </div>

          {/* Short Description */}
          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <input
              type="text"
              className="form-control"
              name="shortDesc"
              placeholder="Brief summary of your course"
              onChange={handleChange}
            />
          </div>

          {/* Full Description */}
          <div className="mb-3">
            <label className="form-label">Full Description</label>
            <textarea
              className="form-control"
              rows="4"
              name="fullDesc"
              placeholder="Detailed description..."
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Category & Level */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                onChange={handleChange}
              >
                <option value="">Select category</option>
                {
                  Categories && Categories.map(elem => (
                    <option value={elem.id} key={elem.id}>{elem.Title}</option>
                  ))
                }
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Level</label>
              <select
                className="form-select"
                name="level"
                onChange={handleChange}
              >
                <option value="">All Levels</option>

                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Price ($)</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="0 for free"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Original Price ($)</label>
              <input
                type="number"
                className="form-control"
                name="originalPrice"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Thumbnail */}
          <div className="mb-3">
            <label className="form-label">Thumbnail</label>
            <input
              type="file"
              className="form-control"
              name="thumbnail"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">
            Next Curriculum
          </button>
        </form>
      </div>
    </div>
  );
}

function Curriculum() {
  const VideoRefs = useRef([]);
  const PdfRefs = useRef([]);

  const setVideoRef = (el, index) => {
    VideoRefs.current[index] = el;
  };
  const setPdfRef = (el, index) => {
    PdfRefs.current[index] = el;
  };


  const [sections, setSections] = useState([
    {
      title: "Introduction",
      lessons: [
        { title: "Welcome to the Course", type: "Video", videofile: null, pdffile: null },
      ],
    },
  ]);

  // Add Section
  const addSection = () => {

    setSections([
      ...sections,
      {
        title: "New Section", lessons: [
          {
            title: "",
            type: "Video",
            videofile: null,
            pdffile: null,
          }
        ]
      },
    ]);
  };

  // Add Lesson
  const addLesson = (sectionIndex, lessonsIndex) => {
    const updated = [...sections];

    const lesson = updated[sectionIndex].lessons[updated[sectionIndex].lessons.length - 1]

    const isValid = Object.values(lesson).every(value => value !== "" && value !== null);

    if (!isValid) {
      alert("please Complete lesson ❌");
    } else {
      updated[sectionIndex].lessons.push({
        title: "",
        type: "Video",
        videofile: null,
        pdffile: null,
      });
      setSections(updated);
    }


  };

  // Handle Change
  const handleChange = (sectionIndex, lessonIndex, field, value) => {
    const updated = [...sections];
    updated[sectionIndex].lessons[lessonIndex][field] = value;
    setSections(updated);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Course Curriculum</h4>
          <button className="btn btn-outline-primary" onClick={() => { addSection() }}>
            + Add Section
          </button>
        </div>

        {sections.map((section, sIndex) => (
          <div key={sIndex} className="border rounded p-3 mb-3">

            {/* Section Title */}
            <input
              type="text"
              className="form-control mb-3"
              value={section.title}
              onChange={(e) => {
                const updated = [...sections];
                updated[sIndex].title = e.target.value;
                setSections(updated);
              }}
            />

            {/* Lessons */}
            {section.lessons.map((lesson, lIndex) => (
              <div key={lIndex} className="  ms-4 mt-2 mb-2">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Lesson title"
                  value={lesson.title}
                  onChange={(e) =>
                    handleChange(sIndex, lIndex, "title", e.target.value)
                  }

                />
                <div className="fileselecter">
                  {
                    lesson.videofile ?
                      <video onClick={() => {
                        VideoRefs.current[lIndex].click()
                      }} className='' controls width={'100%'} height={'150px'} style={{ borderRadius: '10px' }}>
                        <source src={URL.createObjectURL(lesson.videofile)} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video> :
                      <div onClick={() => {
                        VideoRefs.current[lIndex].click()
                      }} className="videofileselection">
                        <i class="bi bi-camera-reels" style={{ fontSize: '40px' }}></i>
                        <p>Please Selected Video</p>
                      </div>
                  }
                  {
                    lesson.pdffile ?
                      <iframe
                        src={URL.createObjectURL(lesson.pdffile)}
                        width="200px"
                        height="100%"
                        title="PDF Viewer"
                      /> :
                      <div className="pdffileselection" onClick={() => {
                        PdfRefs.current[lIndex].click()
                      }}>
                        <i class="bi bi-file-earmark-pdf-fill" style={{ fontSize: '35px' }}></i>
                        <p> Selected PDF</p>
                      </div>
                  }
                </div>

                {/* PDF SELECTER  */}
                <input
                  type="file"
                  accept="application/pdf"
                  hidden
                  ref={(el) => setPdfRef(el, lIndex)}
                  onChange={(e) =>
                    handleChange(sIndex, lIndex, "pdffile", e.target.files[0])
                  }
                />
                {/* VIDEO SELECTER  */}
                <input
                  type="file"
                  accept="video/*"
                  hidden
                  ref={(el) => setVideoRef(el, lIndex)}
                  onChange={(e) =>
                    handleChange(sIndex, lIndex, "videofile", e.target.files[0])
                  }
                />
                {/* <select
                  className="form-select"
                  value={lesson.type}
                  onChange={(e) =>
                    handleChange(sIndex, lIndex, "type", e.target.value)
                  }
                >
                  <option>Video</option>
                  <option>PDF</option>
                  <option>Quiz</option>
                  <option>Text</option>
                </select> */}
              </div>
            ))}

            {/* Add Lesson */}
            <button
              className="btn btn-sm btn-light mt-2"
              onClick={() => addLesson(sIndex)}
            >
              + Add Lesson
            </button>
          </div>
        ))}

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-secondary">Back</button>
          <button className="btn btn-primary" onClick={async () => {
            console.log(sections);
            const allsections = await carriculamspost(sections)
            
            console.log('ALL SECTIONS');
            console.log(allsections);
            console.log('ALL SECTION END');
          }}>Next: Upload Content</button>
        </div>
      </div>
    </div>
  );
}