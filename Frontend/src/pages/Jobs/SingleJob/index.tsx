
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { api } from "../../../services/apiService";
import { JobType } from "../../../feauters/JobsSlice/JobType";

const SingleJob = () => {

    const [singleJob, setSingleJob] = useState<JobType | null>();

    const [educationArray, setEducationArray] = useState<string[]>([]);
    const [skillsArray, setSkillsArray] = useState<string[]>([]);
    const [responsibilitiesArray, setResponsibilitiesArray] = useState<string[]>([]);
    const [experienceArray, setExperienceArray] = useState<string[]>([]);

    const params = useParams();

    const { id } = params;


    const getSingleJob = async () => {
        try {
            const res = await api.get(`/job/${id}`);

            if (res.status === 200) setSingleJob(res.data.payload.singleJobPost);

            // make skills string to array
            if (res.data.payload.singleJobPost.skills) {
                const skillsList = res.data.payload.singleJobPost.skills.split('-').filter(Boolean).map((skill: any) => skill.trim());
                setSkillsArray(skillsList);
            }

            // make responsibilities string to array
            if (res.data.payload.singleJobPost.responsibilities) {
                const responsibilitiesList = res.data.payload.singleJobPost.responsibilities.split('-').filter(Boolean).map((resp: any) => resp.trim());
                setResponsibilitiesArray(responsibilitiesList);
            }

            // make education string to array
            if(res.data.payload.singleJobPost.education) {
                const educationList = res.data.payload.singleJobPost.education.split('-').filter(Boolean).map((resp : any) => resp.trim());
                setEducationArray(educationList)
            }

            // make experience string to array
            if(res.data.payload.singleJobPost.experience) {
                const experienceList = res.data.payload.singleJobPost.education.split('-').filter(Boolean).map((resp : any)=> resp.trim());
                setExperienceArray(experienceList)
            }

        } catch (error: any) {
            console.log(error);
        }
    }


    useEffect(() => {
        getSingleJob()
    }, [])

    if (!singleJob) return <div>Loading...</div>;

    const { companyName, jobTitle, jobDescription, salary, age, gender, employmentStatus, jobLocation, applicationProcess } = singleJob

    return (
        <div className="my-8 mx-4">
            <div className="container xl:mx-auto ">

                <h1 className="font-bold text-[1.6rem]">{jobTitle}</h1>
                <div className="">
                    <h1 className="font-medium text-[1.2rem]">{companyName}</h1>
                </div>

                {jobDescription && <div className="my-5">
                    <div className="mb-1">
                        <h2 className="font-medium">Description : </h2>
                        <p>{jobDescription}</p>
                    </div>

                </div>}

                {educationArray.length > 0 && <div className="my-5">
                    <h2 className="font-medium mb-1 ">Education : </h2>
                    <ul className="list-disc ms-7">
                    {educationArray.map((education, index)=> (
                      <li key={index}>{education}</li>
                    ))}
                    </ul>
                 
                </div>}  


                {skillsArray.length > 0 && <div className="my-5">
                    <h2 className="font-medium mb-2">Skills</h2>
                    <ul className="flex ms-2">
                        {skillsArray.map((skill, index) => (
                            <li className="p-2 border rounded-lg mx-1" key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>}


                {responsibilitiesArray.length > 0 && <div className="my-5">
                    <h2 className="font-medium mb-1">Responsibilities : </h2>
                    <ul className="list-disc ms-7">
                        {responsibilitiesArray.map((responsibility, index) => (
                            <li key={index} className="">{responsibility}</li>
                        ))}
                    </ul>
                </div>} 


                {experienceArray.length > 0  && <div className="my-5">
                        <h2 className="font-medium mb-1">Experience :</h2>
                        <ul className="list-disc ms-7">
                           {experienceArray.map((expereince , index)=>(
                             <li key={index} className="index">{expereince}</li>
                           ))}
                        </ul>
                </div>}


            
                <div className="flex">
                    <h2 className="font-medium">Salary: </h2>
                    <p className="ms-1">{salary}</p>
                </div>

                <div className="flex mb-5">
                    <h2 className="font-medium">Employment Status:</h2>
                    <p className="ms-2"> {employmentStatus}</p>
                </div>


                {age && <div className="flex">
                    <h2 className="font-medium">Age: </h2>
                    <p className="ms-1">{age}</p>
                </div>}

                {gender && <div className="flex mb-5">
                    <h2 className="font-medium">Gender: </h2>
                    <p className="capitalize ms-1">{gender}</p>
                </div> }

                {jobLocation && <div className="flex mb-2">
                    <h2 className="font-medium">Location:</h2>
                    <p className="ms-1">{jobLocation}</p>
                </div>}


                <div className="my-4">
                    <h2 className="font-medium">Application Process: </h2>
                    <p>{applicationProcess}</p>
                </div>

            </div>
        </div>
    )
}


export default SingleJob