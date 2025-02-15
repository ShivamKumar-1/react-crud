import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams ,useNavigate } from 'react-router-dom'

function View() {
    const [details,setDetails] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    // console.log(id)

    async function getDetails() {
        try{
            const getData = await axios.get(`http://localhost:3333/students/${id}`)
            setDetails(getData.data)
        }catch(error){
            console.log("view page : ",error)
        }
    }

    useEffect(()=>{
        getDetails()
    },[])

    function handleClick(){
        navigate("/list")
    }
  return (
    <>
    <div className='view-btn-container'>
        <button onClick={()=>handleClick()}>Go to Students List</button>
    </div>
    <div className='view-content-container'>
        <h1>About</h1>
        <p><span>id : </span>{details?.id}</p>
        <p><span>Name : </span>{details?.studentName}</p>
        <p><span>Email : </span>{details?.studentEmail}</p>
        <p><span>About : </span>{details?.studentAbout}</p>
    </div>
    </>
  )
}

export default View