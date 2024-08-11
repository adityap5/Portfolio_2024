import React from 'react'

function Footer() {
  return (
    <>
      <hr />

        <h1 className="text-4xl text-center">Follow Me</h1>
        <div className="flex  gap-4 my-4 justify-center align-center mt-12">

          <div className='bg-slate-200 h-14 w-16 rounded-md flex justify-center items-center hover:bg-[#8EC2CD] hover:pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            <a className="w-8"
              href="https://twitter.com" target="_blank">
              <img className=" w-8" src="/web.png" alt="" />
            </a>
          </div>
          <div className='bg-slate-200 h-14 w-16 rounded-md flex justify-center items-center hover:bg-[#8EC2CD] hover:pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            <a
              className="w-8"
              href="https://twitter.com/imaditya_29" target="_blank">
              <img
                className='w-8 self-center '
                src="/x.png" alt="" />
            </a>
          </div>
          <div className='bg-slate-200 h-14 w-16 rounded-md flex justify-center items-center hover:bg-[#8EC2CD] hover:pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            <a
              className='w-8 '
              href="https://github.com/adityap5" target="_blank">
              <img className="w-8" src="/outline.png" alt="" />
            </a>
          </div>
          <div className='bg-slate-200 h-14 w-16 rounded-md flex justify-center items-center hover:bg-[#8EC2CD] hover:pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            <a
              className='w-8 '
              href="https://www.linkedin.com/in/adityapippal/" target="_blank">
              <img className=" w-8" src="/linkedin.png" alt="" />
            </a>
          </div>
          <div className='bg-slate-200 h-14 w-16 rounded-md flex justify-center items-center hover:bg-[#8EC2CD] hover:pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
            <a
              className='w-8 '
              href="https://instagram.com/imaditya_29" target='_blank'>
              <img className=" w-8" src="/instagram.png" alt="" />
            </a>

          </div>

        </div>
      <p className="text-2xl text-center mt-24 mb-12">©2024 React & Tailwind CSS Portfolio.Aditya</p>
    </>
  )
}

export default Footer
