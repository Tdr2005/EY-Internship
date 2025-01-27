import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'

const Component1 = () => {

    const [moviename,setmoviename] = useState(0);
    const [hero,sethero] = useState(0);
    const [heroine,setheroine] = useState(0);
    const [year,setyear] = useState(0);
    const [rating,setrating] = useState(0);
    const [genre,setgenre] = useState(0);

    const apipostdata = async ()=>{
        try{
            const response = await axios.post('http://127.0.0.1:3000/addmovie', {moviename,hero,heroine,year,rating,genre});
            alert('data saved successfully')
            console.log(response.data);
        }
        catch(erro){
            console.log('Post Data Failed')
        }
        console.log(moviename+hero+heroine+year+rating+genre)
    }


  return (
    <>
    <h1>
        Post movie data
    </h1>
    {/* <form action="">
        <input type="text" placeholder='Enter Movie name : ' /> <br /> 
        <input type="text" placeholder='Enter hero name : ' /> <br />
        <input type="text" placeholder='Enter heroien name : ' /> <br />
        <input type="number" placeholder="Enter Release Year : " id="" /> <br />
        <input type="number" placeholder="Enter Movie Rating : " id="" /> <br />
        <input type="text" placeholder='Enter Movie Genre : '/> <br /> <br />
        <input type="button" value="Add Movie" />
    </form> */}

    <br /><br />
    <div className="p-3 mb-2 bg-info-subtle text-info-emphasis">
    <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Movie Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Movie Name" onChange={(e)=>setmoviename(e.target.value)} />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Hero Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Hero Name" onChange={(e)=>sethero(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Heroien Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Heroien Name" onChange={(e)=>setheroine(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Release Year</label>
  <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Enter Release Year" onChange={(e)=>setyear(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Rating</label>
  <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Enter Rating" onChange={(e)=>setrating(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Genre</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Genre" onChange={(e)=>setgenre(e.target.value)}/>
</div> <br />
</div>
<div>
<input className="btn btn-primary" type="button" value="Add Movie" onClick={apipostdata}></input>
</div>
    </>
  )
}

export default Component1