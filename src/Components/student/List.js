import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function List() {

  const[data,setData] = useState()

    function getApiData(){
        try{
            axios.get('http://localhost:3333/students').then((resp)=>{
              // console.log(resp.data)
              setData(resp.data)
            })
        }catch(error){
          console.log(error)
        }
    }

    useEffect(()=>{
        getApiData()
    },[])


    async function handleDelete(getId){
      await axios.delete(`http://localhost:3333/students/${getId}`)
      getApiData()
    }

  return (
    <>
        <h1 className='list-title'>This is my List</h1>
        <div className='list-container'>
          {
            data?.map((item,index)=>{
              return (
                <div key={index} className='content-container'>
                  <div className='info-container'>
                    <p>{index+1}</p>
                    <div className='info-container-sec'>
                      <p>{item.studentName}</p>
                      <p>{item.studentEmail}</p>
                    </div>
                  </div>
                  <div className='btn-container'>
                    <button><Link to={`/view/${item.id}`}>View</Link></button>
                    <button><Link to={`/edit/${item.id}`}>Edit</Link></button>
                    <button onClick={(e)=>handleDelete(item.id)}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export default List