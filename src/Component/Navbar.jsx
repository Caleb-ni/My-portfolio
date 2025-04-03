import React from 'react'

const Navbar = () => {
  return (
    <div className='m-0 p-0 box-border overflow-hidden'>
      <div className='flex lg:flex-row sm:flex-col-reverse md:flex-col h-screen w-screen'>
        <div className='bg-[#D7D7D7] w-1/2'>
          <div className='w-12 h-12 pt-6'>
            <img src='/assets/logo.png' alt="logo"/>
          </div>
          <div className='flex items-start h-auto flex-col pt-24'>
            <div className= 'w-screen flex-1 flex flex-col justify-center'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>Hi, I am <br /><br /> <span className='text-5xl'>Caleb ni</span></h2>
              <p className='text-xl font-bold pt-2 pb-24'>Front-end Developer / UI Design</p>
            </div>
            <div className='flex space-x-8 pt-32'>  
              <img src="./assets/icon/email.png" className='p-2 rounded-sm bg-[#c4c4c4]' alt="email" />
              <img src="./assets/icon/github.png" className='p-2 rounded-sm bg-[#c4c4c4]' alt="github" />
              <img src="./assets/icon/linkedIn.png" className='p-2 rounded-sm bg-[#c4c4c4]' alt="linkedin" />
            </div>
          </div>
        </div> 
        <div className='relative bg-black w-full'>
          <nav className=''>
            <div className='text-base font-bold text-white space-x-16 px-8 py-4'>
              <a href="#">About me</a>
              <a href="#">Skills</a>
              <a href="#">Portfolio</a>
              <a href="#" className='p-2 bg-white rounded-full text-black'>CONTACT ME</a>
            </div>
          </nav>
          <div className='absolute w-[80%] h-[83%] bottom-0'>
            <img src="/assets/hero/hero.png" className='w-full h-full' alt=""/>
          </div>
        </div>
      </div>
      <div className='flex  max-w-lg flex-col justify-start items-center'>
        <h2 className='pt-10 text-lg md:text-xl lg:text-2xl font-bold'>IT BERRIES</h2>
        <p className='w-2/3 p-4 md:p-8 lg:p-12'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet eli. </p>
        <div className="px-2 py-1"><a href="#">READ MORE</a></div>
      </div>
    </div>
  ) 
}

export default Navbar