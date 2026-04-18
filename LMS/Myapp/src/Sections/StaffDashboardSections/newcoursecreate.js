import axios from "axios";
import { CourseApi, PriceApi } from "../../assets/Api";
import { uploadFile } from "./ImageUpload";
import { useLMS } from "../../Context/LmsContext";

export const createCourse = async (coursedata,User) => {
  try {
    
  const token=localStorage.getItem('token')
    let response
    console.log(coursedata);
    response = await axios.post(
      PriceApi,
      {
        data: {
          Original: coursedata.originalPrice,
          Discounted: coursedata.price,
          Currency: "UN"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const priceId = response.data.data.id;

    const CourseImageId = coursedata.thumbnail
      ? await uploadFile(coursedata.thumbnail)
      : null;



    const formDataSent = new FormData();

    // ✅ MUST be stringified JSON
    formDataSent.append("data[Title]", coursedata.title);
    formDataSent.append("data[Description]", coursedata.shortDesc);
    formDataSent.append("data[FullDescription]", coursedata.fullDesc);
    formDataSent.append("data[Level]", coursedata.level);
    formDataSent.append("data[Duration]", "1 month");
    formDataSent.append("data[Lessons]", 0);
    formDataSent.append("data[Rating]", 4.1);
    formDataSent.append("data[Reviews]", 0);
    formDataSent.append("data[Student]", 0);
    formDataSent.append("data[price]", priceId);
    formDataSent.append("data[category]", parseInt(coursedata.category));
    formDataSent.append("data[Auther]", User.id);
    // 🔥 VERY IMPORTANT

    // ✅ add image file
    formDataSent.append("data[Image]",CourseImageId);

    // ✅ send FormData (NOT JSON)
    response = await axios.post(`${CourseApi}?populate=*`, formDataSent, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);

  } catch (error) {
    console.log('response Error');
    console.log(error.response || error.message);

  }
}