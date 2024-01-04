import React from 'react'

interface PoliciesDataProps {
  heading: string;
  para: Para[];
}

interface Para{
  point: boolean;
  content: string;
}

const PoliciesData: React.FC<PoliciesDataProps> = ({heading, para}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-[#FE6601] font-semibold text-lg'>{heading}</h1>
        <div className='mb-5'>
        {para.map((e, index)=>{
          return e.point ? <div key={index} className='flex flex-row gap-2 items-center'>
            <i style={{fontSize:'6px'}} className="fa fa-circle" aria-hidden="true"></i>
          <span className='text-sm text-gray-500'>{e.content}</span>
          </div> : <div key={index} className='my-3'>
          <span className='text-normal text-gray-700 ' >{e.content}</span>
          </div>
        })}
        </div>
    </div>
  )
}

export default PoliciesData
