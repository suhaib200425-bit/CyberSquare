import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import './Home.css'
import { useState } from "react";
const fetchCourses = async () => {
    const resone = await axios.get("http://localhost:1337/api/courses");
    console.log(resone.data.data);
    return resone.data.data
};

const fetchCategories = async () => {
    const restwo = await axios.get("http://localhost:1337/api/categories");
    console.log(restwo.data.data);
    return restwo.data.data
}

const postCategory = async (newCategory) => {
    const res = await axios.post(
        "http://localhost:1337/api/categories",
        {
            data: newCategory
        }
    );
    return res.data.data;
}
function Home() {

    const queryClient = useQueryClient(); // ✅ THIS LINE IS REQUIRED
    const [Title, setTitle] = useState("");
    const [Symbol, setSymbol] = useState("");

    const { data: Courses, isLoading: CoursesLoading, error: CoursesError } = useQuery({
        queryKey: ["Courses"],
        queryFn: fetchCourses,
    });

    const { data: Categories, isLoading:CategoriesLoading, error: CategoriesError } = useQuery({
        queryKey: ["Categories"],
        queryFn: fetchCategories,
    });

    // Mutations
    const mutation = useMutation({
        mutationFn: postCategory,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["Categories"] })
            setSymbol('')
            setTitle('')
        },
        onError: (error) => {
            console.log("Error:", error);
        },
    })


    if (CoursesLoading || CategoriesLoading) return <div className="Home">
        <h1>Loading...</h1>
    </div>;


    if (CoursesError || CategoriesError) return <div className="Home">
        <h1>Error!</h1>
    </div>;

    return (
        <div className="Home">
            <h1 onClick={() => {
                console.log("Courses")
                console.log(Courses);

                console.log("Categories")
                console.log(Categories);

            }}>Hello Page</h1>
            <h2>courses</h2>
            {Courses?.map((Course) => (
                <p key={Course.id}>{Course.Title}</p>
            ))}
            <h2>categories</h2>
            {Categories?.map((Course) => (
                <p key={Course.id}>{Course.Title}</p>
            ))}

            <br /><br />
            <div className="inputfield">

                <input value={Title} type="text" placeholder="Category" onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <input value={Symbol} type="text" placeholder="Symbol" onChange={(e) => {
                    setSymbol(e.target.value)
                }} />
                <button className="btn" onClick={() => {
                    if (Title.trim() != '' && Symbol.trim() != '') {
                        mutation.mutate({ Title: Title, Symbol: Symbol });
                    } else {
                        alert('enter all field')
                    }
                }}>Create</button>
            </div>
        </div>
    );
}

export default Home