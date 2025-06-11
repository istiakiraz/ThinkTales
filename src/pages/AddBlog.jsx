import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';
import logo from '../assets/titleLogo.png'
import write from '../assets/coding-3-24.svg'
import { motion } from "framer-motion";


const AddBlog = () => {

    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: "top-end",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.onmouseenter = Swal.stopTimer;
    //       toast.onmouseleave = Swal.resumeTimer;
    //     },
    //   });


// const navigate = useNavigate()

//   const [dob, setDob] = useState(null);
  const {user, isDark} = use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    console.log(newTask);

    // newTask.budget = parseInt(newTask.budget);
    // newTask.dob = dob ? format(dob, "yyyy-MM-dd") : "";
    // newTask.bid = parseInt(0)
    newTask.userPhoto = user?.photoURL
    // console.log(newTask);

    // send task data to the DB
    // fetch('https://kajero-server.vercel.app/tasks',{
    //   method: 'POST',
    //   headers:{
    //     "content-type" : "application/json"
    //   },
    //   body: JSON.stringify(newTask)
    // }).then(res=> res.json()).then(data=> {
    //   console.log('after add task data ', data);
    //   navigate(`/my-tasks/${user.email}`)
    //    Toast.fire({
    //         icon: "success",
    //         title: "Your add new task successfully!",
    //       });
    // })


  };

  return (
    <div
   className={` pt-18 -mt-18 ${isDark? 'bg-[#D2D0A0]/20 *:text-black  ' : '' }`}
    >
      <div className="lg:w-9/12 w-11/12 py-16 mx-auto">
        <Link to="/">
                <button className="btn mb-5 col-span-full relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  ">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex gap-1 items-center"> <GoArrowLeft size={20} />Back to Home</span>
            </button>
              </Link>

        <div className="bg-[#d6edeb]/50 rounded-xl">
          <div className="lg:w-8/12  lg:px-12 w-11/12 py-12 mx-auto">
            <h1
              className="text-center shadow-[0px_0px_20px_0px_rgba(76,99,124,0.8)] text-gray-600 lg:px-12 text-3xl mb-8 w-fit mx-auto flex flex-col items-center  bg-[#4c637c]/20 p-4 rounded-2xl "
            > <motion.img 
             initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className='w-56 -mb-8' src={write} alt="" />
               Write Your Unwritten Thoughts on <br /> <img className='w-64' src={logo} alt="ThinkTales" />
            </h1>
            <p className="hyphens-auto text-justify font-medium mb-8">
             Every idea starts as a whisper in your mind — a fleeting thought, a quiet observation, a moment of emotion. Here at ThinkTales™, we invite you to give those thoughts a voice. This is your space to reflect, express, and explore.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 items-start justify-center lg:gap-10 lg:grid-cols-2"
            >
              <div>
                <fieldset className="fieldset rounded-box   p-4">
                  {/* title input */}
                  <label className="label font-bold">Task Title</label>
                  <input
                    required
                    name="title"
                    type="text"
                    className="input  mb-2 lg:w-96 w-full"
                    placeholder="Enter task title"
                  />

                  {/* dopdown category */}
                  <label className="label font-bold">Category</label>
                  <select
                    name="category"
                    required
                
                    className="input mb-2 lg:w-96 w-full"
                  >
                    <option disabled={true} value="">Select a category</option>
                    <option value="Web Development"> Web Development</option>
                    <option value=" Design">Design</option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Video Edit">Video Edit</option>
                    <option value="Photo Edit">Photo Edit</option>
                    <option value="Others">Others</option>
                  </select>

                  {/* day pick  */}
                  {/* <label className=" font-bold label">Date of Deadline</label>
                  <DatePicker
                    required
                    selected={dob}
                    onChange={(date) => setDob(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select your task deadline"
                    className="border border-gray-300 placeholder:text-sm bg-white lg:w-96 w-full px-3 py-2 rounded"
                  /> */}

                   {/* Description input */}
                  <label className=" font-bold  label">Description</label>
                  <textarea
                    required
                    name="description"
                    className="textarea textarea-bordered mb-2 h-28 text-start lg:w-96 w-full"
                    placeholder="Enter task description"
                  />

                
                </fieldset>
              </div>

              <div>
                <fieldset className="fieldset -space-y-[2px] -mt-5 md:-mt-0 rounded-box   p-4">
                  
                  {/* name input */}
                  <label className="label font-bold">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input  mb-2 w-full lg:w-96"
                    value={user?.displayName}
                     readOnly
                  />

                  {/* email input */}
                  <label className="label font-bold">Your Email</label>
                  <input
                    required
                    name="email"
                    type="text"
                    className="input  mb-2 w-full lg:w-96"
                    value={user?.email}
                     readOnly
                  />

                    {/* budget input */}
                  <label className=" font-bold label">Budget</label>
                  <input
                    type="number"
                    required
                    name="budget"
                    className="input mb-2 w-full lg:w-96"
                    placeholder="Enter your task budget"
                  />

                  {/* Photo input */}
                  <label className=" font-bold label">Task Photo URL</label>
                  <input
                    required
                    type="text"
                    name="photo"
                    className="input mb-2 w-full lg:w-96"
                    placeholder="Enter the URL of your task photo"
                  />
                </fieldset>
              </div>

              <button
                type="submit"
                className="btn col-span-full flex w-full lg:w-[845px] relative rounded px-5 py-2.5 overflow-hidden group bg-[#49785b]  hover:bg-gradient-to-r hover:from-[#49785b] hover:to-[#49785b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#49785b] transition-all ease-out duration-300  "
              >
                <span className="absolute right-0 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-50 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Add Task</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;