import React from 'react'

function PortfolioItem({ image, title, stack, link, description }) {
  return (
    // <div
    //   className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden relative'
    // >
    //   <img src={image} className=''></img>
    //   <div className='w-full p-4'>
        
    //     <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>{title}</h3>
    //     <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white'>
    //       {stack.map((item) => (
    //         <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>{item}</span>
    //       ))}
    //     </p>
    //     <p className='mt-2 mb-12'>{description}</p>
    //     <a href={link} target='_blank' rel='noreferrer' className='inline-block px-2 py-1 font-semibold border-2 border-amber-500 dark:border-amber-500 rounded-md absolute bottom-0 mt-3 mb-3 hover:bg-amber-500'>
    //     Source
    //   </a>
    //   </div>
    // </div>

    <div class="max-w-sm rounded overflow-hidden shadow-xl dark:shadow-[#000] relative mb-8">
    <img class="w-full h-48" src={image} alt="image" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {title} <br></br>
          {stack.map((item) => (
            <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 text-sm dark:border-white rounded-md mr-1 mt-2'>{item}</span>
          ))}
          
        </div>
        <p class="text-gray-700 text-base dark:text-stone-200">
          {description}
        </p>
      </div>
    <div class="px-6 pt-4 pb-4 mt-4">
      <a href={link} target='_blank' rel='noreferrer' className='inline-block px-2 py-1 font-semibold border-2 border-amber-500 dark:border-amber-500 rounded-md absolute bottom-0 mt-3 mb-3 hover:bg-amber-500'>
        Source
      </a>
    </div>
  </div>
  )
}

export default PortfolioItem