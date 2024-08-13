import React from 'react'
import CreateJobForm from '../Components/CreateJobForm'
import MediaForm from '../Components/MediaForm'

const CreateJob = () => {
  return (
    <div className='flex w-[100%]'>
        <CreateJobForm/>
        <MediaForm/>
    </div>
  )
}

export default CreateJob