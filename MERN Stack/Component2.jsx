import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'

const Component2 = () => {
    const getmovie = async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:3000/getmovie');
            console.log(response.data);
        }
        catch(erro){
            console.log('Post Data Failed')
        }
    }
  return (
    <>
    <div className="p-3 mb-2 bg-danger-subtle text-danger-emphasis">
        <h1>Get Movie Data</h1>
        <button type="button" className="btn btn-primary" onClick={getmovie}>Get Movie Data</button>
    </div>
    </>
  )
}

export default Component2
