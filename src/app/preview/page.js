import React from 'react'
import MultiselectWrapper from './components/MultiselectWrapper'
import PreviewPage from './components/Preview'
export default function page() {
  return (
    <div className='mb-5'>
      <h1 className='text-4xl pt-3 font-semibold pb-6 pl-4'>Add Business</h1>
      <MultiselectWrapper/>
      {/* <PreviewPage/> */}
    </div>
  )
}
