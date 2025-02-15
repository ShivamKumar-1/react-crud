import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const navigate = useNavigate();
  const {id} = useParams()
  const[data,setData] = useState({
          studentName :"",
          studentEmail : ""
      })

  async function fetchSpecificData(){
    const getPostData = await axios.get(`http://localhost:3333/students/${id}`)
    setData(getPostData.data)
  }

  useEffect(()=>{
    fetchSpecificData()
  },[id])

  function onChangeText(e){
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  async function onFormUpdate(e){
    try{
      e.preventDefault();
      await axios.put(`http://localhost:3333/students/${id}`,data)
      navigate('/list')
    }catch(error){
      console.log(error)
    }
  }

    
  return (
    <>
        <form className='input-container'>
            <input type='text' value={data.studentName} placeholder='Enter Name' name='studentName' onChange={(e)=>onChangeText(e)}/><br/><br/>
            <input type='text' value={data.studentEmail} placeholder='Enter Email' name='studentEmail' onChange={(e)=>onChangeText(e)}/><br/><br/>
            <button onClick={(e)=>{onFormUpdate(e)}}>Add Data</button>
        </form>
    </>
  )
}

export default Edit