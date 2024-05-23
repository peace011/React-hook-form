import React, { useEffect } from 'react'
import './Image.css'

const ImageLoading = () => {

   useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                // console.log("Image is intersecting",entry.target);
               entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
                
            }
        })
    },{
        threshold:1,   
    }  
    );
    const images=document.querySelectorAll('.image img');
    images.forEach((img)=>
    observer.observe(img));

    return()=>observer.disconnect();
        },[])
 
  return (
    <div className='image'>
                 <img className='w-22 h-[15rem] m-4 border border-black' src='https://plus.unsplash.com/premium_photo-1716303829458-8b7469ac20a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716277522326-9d9f154c63bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716091975692-d40296327f4a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://plus.unsplash.com/premium_photo-1716303829458-8b7469ac20a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716277522326-9d9f154c63bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716091975692-d40296327f4a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://plus.unsplash.com/premium_photo-1716303829458-8b7469ac20a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716277522326-9d9f154c63bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716091975692-d40296327f4a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://plus.unsplash.com/premium_photo-1716303829458-8b7469ac20a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716277522326-9d9f154c63bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <img className='w-22 h-[15rem] m-4 border border-black' src='https://images.unsplash.com/photo-1716091975692-d40296327f4a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                
    </div>
  )
}

export default ImageLoading