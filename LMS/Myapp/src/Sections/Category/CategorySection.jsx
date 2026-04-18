import React, { useEffect, useState } from 'react'
import Category from '../../Components/Category/Category'
import './CategorySection.css'
import axios from 'axios'
import { CategoryApi } from '../../assets/Api'
function CategorySection() {
    const [categories, setCategories] = useState([])
    const getCategorys = async () => {
        try {
            const response = await axios.get(`${CategoryApi}?populate=*`)
            console.log(response.data);
            return {
                status: true,
                categories: response.data.data
            }
        } catch (error) {
            console.error(error.response.data || error.message);

            return {
                status: false,
                error: error.response.data
            }
            
        }
    }
    const Categorys = {
        "Web Development": <i class="bi bi-code-slash"></i>,
        "Data Science": <i class="bi bi-bar-chart-steps"></i>,
        "Design": <i class="bi bi-palette"></i>,
        "Business": <i class="bi bi-briefcase"></i>,
        "Mobile Development": <i class="bi bi-phone"></i>,
        "Cloud Computing": <i class="bi bi-cloud-fill"></i>,
        "Cybersecurity": <i class="bi bi-fingerprint"></i>,
        "Photography": <i class="bi bi-camera"></i>
    }

    useEffect(() => {
        Promise.all([getCategorys()]).then((result) => {
            console.log('categories');
            console.log(result);
            
            
            if (result[0].status) {
                setCategories(result[0].categories)
            }
        })
    }, [])

    return (
        <div className="CategorySection">
            <h2>Browse by Category</h2>
            <p>Explore our diverse range of courses across popular categories</p>
            <div className="Categorys row col-12">
                {
                    categories && categories.map(category=>{
                        console.log(category);
                        
                        return <Category Title={category.Title} Count={category.courses.length} Icon={Categorys[category.Title]} />
                    })
                }
                
            </div>
        </div>
    )
}

export default CategorySection