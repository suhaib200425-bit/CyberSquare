import axios from "axios";
import { LessonApi, MeadiApi, SectionApi } from "../../assets/Api";
import { uploadFile } from "./ImageUpload";




export const carriculamspost = async (sections) => {
    try {

        const allsections = [];
        for (let [index, section] of sections.entries()) {

            const alllessons = [];
            for (let [index, lesson] of section.lessons.entries()) {
                const videoId = lesson.videofile
                    ? await uploadFile(lesson.videofile)
                    : null;

                const pdfId = lesson.pdffile
                    ? await uploadFile(lesson.pdffile)
                    : null;


                console.log(lesson);

                const lessonresponse = await axios.post(
                    LessonApi,
                    {
                        "data": {
                            Title: lesson.title,
                            Order: index + 1,
                            Video: videoId,
                            Pdf: pdfId,
                        }
                    }
                )
                console.log(lessonresponse.data.data);
                alllessons.push(
                    lessonresponse.data.data.documentId     // 👈 ID
                );
            }
            console.log('alllessons');
            console.log(alllessons);


            const sectionresponse = await axios.post(
                `${SectionApi}`, {
                "data": {
                    "Title": section.title,
                    "course": 1,
                    "Order": index + 1,
                    "lessons": alllessons
                }
            })
            allsections.push({
                "section": sectionresponse.data.data     // 👈 ID
            })
        }

        return allsections

    } catch (error) {
        console.log(
            error.lessonresponse?.data ||
            error.sectionresponse?.data ||
            error.response?.data ||
            error.message
        );
        return []
    }


}

// const reponse = await axios.post(
//     "http://localhost:1337/api/courses",
//     {
//         data: {
//             Title: coursedata.title,
//             Description: coursedata.shortDesc,
//             sections: sections, // 👈 full structured data
//         }
//     },
//     {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     }
// );