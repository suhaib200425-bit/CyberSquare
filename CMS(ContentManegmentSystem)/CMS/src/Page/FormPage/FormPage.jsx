import React from 'react'
import './FormPage.css'
import PostForm from '../../components/PostForm/PostForm'
import PageForm from '../../components/PageForm/PageForm'
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import MenuForm from '../../components/MenuForm/MenuForm';
import UserForm from '../../components/UserFrom/UserForm';
function FormPage({formname,setForm,update}) {

  // const { formname } = useParams();
  const forms={
    'menu':<MenuForm setFormClose={setForm} update={update}/>,
    'post':<PostForm  setFormClose={setForm} update={update} />,
    'page':<PageForm setFormClose={setForm} update={update} />,
    'category':<CategoryForm setFormClose={setForm} update={update} />,
    'user':<UserForm setFormClose={setForm} update={update} />
  }
  return (
    <div className="FormPage">
      {
        forms[formname]
      }
    </div>
  )
}

export default FormPage