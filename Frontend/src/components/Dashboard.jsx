import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useCustomContext } from '../context/contextProvider';

const Dashboard=()=> {
  const {user} = useCustomContext();
  const userName = user ?? "";

  return (
    <div className='flex flex-col h-full'>
    <Header/>
    <div className='ml-16'>
    <h1 className='text-3xl font-bold mt-16'>Welcome Back, {user}</h1>
    </div>
    <div className='p-8 m-20'>
    <Outlet/>
    </div>
    </div>
  );
}

export default Dashboard;