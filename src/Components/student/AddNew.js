import axios from 'axios'
import React, { useState } from 'react'

function AddNew() {
    const[data,setData] = useState({
        studentName :"",
        studentEmail : "",
        studentAbout : ""
    })
    

    function onChangeText(e){
        // console.log(e.target.value)
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        // console.log(data)
    }

    async function onFormSubmit(e){
        e.preventDefault()
        try{
            await axios.post('http://localhost:3333/students',data)
            setData({
                studentName:"",
                studentEmail:"",
                studentAbout:""
            })
            // console.log(data)
        }catch(error){
            console.log(error)
        }
    }



  return (
    <>
        <form className='input-container'>
            <input type='text' value={data.studentName} placeholder='Enter Name' name='studentName' onChange={(e)=>onChangeText(e)}/><br/><br/>
            <input type='text' value={data.studentEmail} placeholder='Enter Email' name='studentEmail' onChange={(e)=>onChangeText(e)}/><br/><br/>
            <input type='text' value={data.studentAbout} placeholder='About yourself' name='studentAbout' onChange={(e)=>{onChangeText(e)}}/><br/><br/>
            <button onClick={(e)=>{onFormSubmit(e)}}>Add Data</button>
        </form>
    </>
  )
}

export default AddNew