import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import images from "../utility/index";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import { useCustomContext } from '../context/contextProvider';


const LogIn = () => {

    const [show, setShow] = useState(false);
    const navigation = useNavigate();
    const {setUser} = useCustomContext();


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm();

    const logIn = async (data) => {
        try {
            const response = await fetch("https://syoft.dev/Api/userlogin/api/userlogin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });

            const result = await response.json();

            console.log("Success:", result);

            if (result.status) {
                setValue("user_email","");
                setValue("user_password","");

                setUser(result.user_data[0].user_firstname);

                localStorage.setItem("authToken","ygdywd823y283ehbdbedhbwudwudhweudhwedhwd");
                navigation("/dashboard",{replace:true});
            }

        } catch (error) {
            console.log("Error : ",error.message);
        }

    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen border-8 p-8 bg-gray-300">


        {/* Left Section */}
           
            <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center rounded-l-2xl ">
            {isSubmitting && <div className="text-center mt-3 text-3xl text-red-700 font-bold">Submiting...</div>}
                <h2 className="text-3xl font-bold mb-6">We are excited to see you back.</h2>
                <h2 className="text-2xl font-medium mb-6 text-gray-600">Log In</h2>
                <form className='space-y-5' onSubmit={handleSubmit(logIn)}>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register("user_email", { required: { value: true, message: "Email is required." }, pattern: { value: /^\S+@\S+$/i, message: "Please provide proper email address." } })}
                        />
                        {errors.user_email && <div className='text-red-700 text-md mb-2'>{errors.user_email.message}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                {...register("user_password", { required: { value: true, message: "Password is required." }, minLength: { value: 8, message: "Min length is 8" }, maxLength: { value: 20, message: "Max length is 20" } })}
                            />
                            {errors.user_password && <div className='text-red-700 text-md mb-2'>{errors.user_password.message}</div>}
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                            >
                                {show ? <LuEye /> : <LuEyeOff />}
                            </span>
                        </div>
                    </div>



                    <div className="flex-col items-center justify-between lg:flex-row lg:space-x-7">
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/5 cursor-pointer"
                            type="submit"
                            disabled={isSubmitting}
                            value={"Sign In"}
                        />
                        <Link
                            className="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800 lg:ml-48 text-xsm"
                            to="/"
                        >
                            Want to create an account? <span className='underline'>Sign up</span>
                        </Link>
                    </div>
                </form>
            </div>

             {/* Right Section */}
            <div className="w-full lg:w-1/2 bg-gray-800 text-white p-10 flex flex-col justify-center rounded-r-2xl">
                <h1 className="text-4xl font-bold mb-4">Welcome to our community</h1>
                <p className="mb-6">Join us and start building your application today. Our community is full of beautiful and well-coded dashboards.</p>
                <div className="flex items-center">
                    {/* Avatars */}
                    <div className="flex -space-x-2">
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={images.boy1} alt="Avatar 1" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={images.ashadulImage} alt="Avatar 2" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={images.boy2} alt="Avatar 3" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={images.boy3} alt="Avatar 4" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src={images.girl1} alt="Avatar 5" />
                    </div>
                    <div>
                        <span className="ml-4 ">10k+ people joined</span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default LogIn;