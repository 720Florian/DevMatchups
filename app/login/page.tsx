"use client"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Lottie from "lottie-react";
import Footer from '../Footer/Footer'
import LoginForm from './LoginForm'
import LoginAnimation from "@/app/assets/Login.json"

const page = () => {
  return (
    <div className='relative min-h-screen text-text  dark:text-text flex flex-col justify-between '>
        <Navbar/>
        <div className="absolute dark:hidden inset-0 -z-10 h-full w-full bg-backgrou bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="dark:absolute hidden dark:block top-0 z-[-2] h-full w-full dark:bg-background  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='grid place-items-center'>
        {/* <div className='left-image bg-background hidden md:block p-10 ' >

          <h1 className=' w-full text-3xl lg:text-5xl mt-5 font-extrabold text-center '>
            Welcome back!
          </h1>
          <div className=' w-full grid place-items-center p-5 mt-5 '> <Lottie animationData={LoginAnimation} loop={true} /> </div>
        </div> */}
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}

export default page
