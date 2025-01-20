import React from 'react'
import { EXPERIENCES } from '../constants'
import Technologies from './Technologies'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <div className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{experience.role} - {" "}
                        <span className='text-sm text-purple-100'>{experience.company}</span>
                    </h6>
                    <p className="mb-4 text-neutral-400 text-justify">
                        {experience.description}
                    </p>
                    {experience.technologies.map((tech, index)=> (
                        <span className='rounded mt-4 mr-2 bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800' key={index}>{tech}</span>
                    ))}
                    </div>
                </div>
            ))}
        </div>
        <Technologies/>
    </div>
  )
}

export default Experience