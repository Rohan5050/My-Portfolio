
import './App.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdDocument } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";


function App() {
  const customcolor = 'bg-black'; 

  return (
    <div className={`h-screen ${customcolor}`}>
  <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-start relative">
    {/* Navigation Bar */}
    <ul className="flex w-full max-w-5xl top-0 mt-8 items-center justify-between px-4 sm:px-8">
      {/* Left Section: Navigation Links */}
      <div className="flex space-x-4 sm:space-x-8">
        <li className="flex items-center space-x-2">
        <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <IoHomeOutline className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Home</span>
        </a>
        </li>
        <li className="flex items-center space-x-2">
        <a
        href="https://medium.com/@rohanvohra055"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <IoMdDocument className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Blogs</span>
        </a>
        </li>
      </div>

      {/* Right Section: Social Profiles */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <li className="flex items-center">
        <a
        href="https://www.linkedin.com/in/rohanvohra055/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        </li>
        <li className="flex items-center">
        <a
        href="https://github.com/Rohan5050"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        </li>
        <li className="flex items-center">
        <a
        href="https://x.com/Ron05050"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <RiTwitterXLine className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        </li>
        <li className="flex items-center">
        <a
        href="mailto:rohanvohra055@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
          <MdOutlineMail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        </li>
      </div>
    </ul>

    {/* Main Content */}
    <div className="w-full max-w-5xl mt-12 px-4 sm:px-8">
      <h1 className="text-xl sm:text-2xl font-bold">Hi, I&apos;m Rohan</h1>
      <ul className="flex flex-col mt-4 list-disc list-inside text-slate-300 gap-2">
        <li>A Full Stack Developer from India, Learning About DevOps</li>
        <li>Building <span className='font-bold text-white'>SkillStack</span>&nbsp;(Platform to explore latest Tech Tools in the market)</li>
        <li>Writing Blogs on Medium</li>
        <li>Reach out if you want to find a way to work out together!</li>
      </ul>
    </div>

    {/* Projects Section */}
    <div className="w-full max-w-5xl mt-16 px-4 sm:px-8 space-y-4">
      <h1 className="text-xl sm:text-2xl font-bold">My Projects</h1>
      <ul className="flex flex-col mt-4 list-decimal list-inside text-slate-300 gap-2">
      <a
        href="https://github.com/Rohan5050/Second-Brain"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
        <li className='text-slate-300'><span className='font-bold text-white underline'>Second Brain</span>&nbsp;(Stores Important links,tweets and Information)</li>
        </a>
        <a
        href="https://github.com/Rohan5050/Chat-application"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
        <li className='text-slate-300'><span className='font-bold text-white underline'>Chat Application</span>&nbsp;(Allows users to send and receive messages instant) </li>
        </a>
        <a
        href="https://github.com/Rohan5050/Blog-Application"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
        <li className='text-slate-300'><span className='font-bold text-white underline'>Blog Application</span>&nbsp;(Users can create, read, update, and delete blog posts)</li>
        </a>
        <a
        href="https://github.com/Rohan5050/Software-Company-Website"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
        <li className='text-slate-300'><span className='font-bold text-white underline'>Software-Company-Website</span>&nbsp;(Go-to destination of cutting-edge software solutions for users)</li>
        </a>
      </ul>
    </div>
    <div className="w-full max-w-5xl mt-16 px-4 sm:px-8 space-y-4">
      <h1 className="text-xl sm:text-2xl font-bold">Open Source Contributions</h1>
      <ul className="flex flex-col mt-4 list-disc list-inside text-slate-300 gap-2">
      <a
        href="https://github.com/Rohan5050"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
        >
        <li className='text-slate-300'><span className='font-bold text-white underline'>Kodiva.ai Fintech Application</span>&nbsp;(Pull Request to be Approved)</li>
        </a>
      </ul>
    </div>
  </div>
</div>

  )
}

export default App
