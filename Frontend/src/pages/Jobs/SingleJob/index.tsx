
//packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//api 
import { api } from "../../../services/apiService";

//type
import { JobType } from "../../../feauters/JobsSlice/JobType";

//icons
import { MapPin, Briefcase, Clock, User, Check, Calendar, Users, MapPinned, Info, Banknote } from 'lucide-react';


const SingleJob = () => {

  const [singleJob, setSingleJob] = useState<JobType | null>();

  const [educationArray, setEducationArray] = useState<string[]>([]);
  const [skillsArray, setSkillsArray] = useState<string[]>([]);
  const [responsibilitiesArray, setResponsibilitiesArray] = useState<string[]>([]);
  const [experienceArray, setExperienceArray] = useState<string[]>([]);
  const [benefitsArray, setBenefitsArray] = useState<string[]>([]);

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
      if (res.data.payload.singleJobPost.education) {
        const educationList = res.data.payload.singleJobPost.education.split('-').filter(Boolean).map((resp: any) => resp.trim());
        setEducationArray(educationList)
      }

      // make experience string to array
      if (res.data.payload.singleJobPost.experience) {
        const experienceList = res.data.payload.singleJobPost.experience.split('-').filter(Boolean).map((resp: any) => resp.trim());
        setExperienceArray(experienceList)
      }

      if (res.data.payload.singleJobPost.benefits) {
        const benefitsArray = res.data.payload.singleJobPost.benefits.split('-').filter(Boolean).map((resp: any) => resp.trim());
        setBenefitsArray(benefitsArray);
      }

    } catch (error: any) {
      console.log(error);
    }
  }


  useEffect(() => {
    getSingleJob()
  }, [])

  if (!singleJob) return <div>Loading...</div>;

  const { 
     companyName, jobTitle, jobDescription, salary, age, gender, employmentStatus, 
     jobLocation, applicationProcess, locationType, vacancy, deadline, optionalInfo, source
     } = singleJob
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-[60rem] bg-white rounded-xl shadow-lg">

        <div className="p-6">

          {/*header section*/}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-primary-color">{jobTitle}</h2>
            <p className="text-xl text-gray-800 mb-4">{companyName}</p>



            <div className="flex flex-wrap gap-4 text-gray-600">
              {jobLocation && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{jobLocation}</span>
                </div>
              )}
              {employmentStatus && (
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{employmentStatus}</span>
                </div>
              )}
              {salary && (
                <div className="flex items-center">
                  <Banknote className="w-4 h-4 mr-2" />
                  <span>{salary}</span>
                </div>
              )}
            </div>
          </div>


          {jobDescription && <div className="my-6">
            <h2 className="text-lg font-semibold mb-3">About The Role : </h2>
            <p className="leading-relaxed">{jobDescription}</p>
          </div>}

          <div className="my-8 grid md:grid-cols-1 gap-6">
            {educationArray.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Education:</h3>
                <ul className="pl-5 space-y-2 text-gray-600">
                  {educationArray.map((education, index) => (
                    <li key={index} className="flex items-start" >
                      <div className="w-2 h-2 bg-primary-color rounded-full mr-3 mt-2">
                      </div>
                      <span>{education}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}


            {/* Skills Section */}
            {skillsArray.length > 0 && (
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}


            {/* Responsibilities Section */}
            {responsibilitiesArray.length > 0 && (
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {responsibilitiesArray.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}



            {experienceArray.length > 0 && <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Experience:</h3>
              <ul className="pl-5 space-y-2 text-gray-600">
                {experienceArray.map((expereince, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary-color w-2 h-2 rounded-full mr-3 mt-2"></div>
                    <span>{expereince}</span>
                  </li>
                ))}
              </ul>
            </div>}

          </div>


          {/* Benefits Section */}
          {benefitsArray.length > 0 && (
            <div className="my-6">
              <h3 className="text-lg font-semibold mb-3">Basic & Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefitsArray.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Additional Requirements */}
          {(age || gender) && (
            <div className="my-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Additional Requirements</h3>
              <div className="flex flex-wrap gap-4">
                {age && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Age: {age}</span>
                  </div>
                )}
                {gender && (
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Gender: {gender}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Job Details */}
          {
            <div className="my-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Job Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {locationType && (
                  <div className="flex items-center">
                    <MapPinned className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Location Type: {locationType}</span>
                  </div>
                )}
                {vacancy && (
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Vacancy: {vacancy}</span>
                  </div>
                )}
                {deadline && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Deadline: {deadline}</span>
                  </div>
                )}
                {optionalInfo && (
                  <div className="flex items-center">
                    <Info className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Additional Info: {optionalInfo}</span>
                  </div>
                )}
              </div>
            </div>
          }


          {/*Application Process*/}
          <div className="mt-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-1">Application Process: </h3>
              <p className="font-semibold mb-3">{applicationProcess}</p>
            </div>
          </div>


          <div className="flex mt-6 bg-yellow-200 rounded-lg">
            <div className=" p-4 ">
              <p>Note : Please read before apply</p>
              {source !== undefined && <p>source: {source}</p>}
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}


export default SingleJob