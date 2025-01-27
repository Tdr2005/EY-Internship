import React,{ useState } from 'react'
import underw from '../images/underw.jpg'


const Component4 = () => {
    
    const[weight, setweight] = useState(0);
    const[height, setheight] = useState(0);
    const[res, setres] = useState(0);
    const [category, setCategory] = useState(0);

      
    const storeweight = (e)=>{
        setweight(parseFloat(e.target.value))
        console.log(weight);
    }
    const storeheight = (e)=>{
        setheight(parseFloat(e.target.value))
        console.log(height);
    }
    const bmi = (e)=>{
        var b = weight / (height * height)
        setres(b)
    
    if (b < 18.5) {
        setCategory('Underweight');
      } 
    else if (b >= 18.5 && b < 24.9) {
        setCategory('Normal weight');
      } 
    else if (b >= 25 && b < 29.9) {
        setCategory('Overweight');
      }
    else {
        setCategory('Obese');
      }
    };
  return (
    <div>
      <h1>
        BMI Finder
      </h1> <br /><br />
    <form action="">
      <input type="number" placeholder={height} onChange={storeheight} /> <br /> <br />
      <input type="number" placeholder={weight} onChange={storeweight} /> <br /> <br />
      <input type="button" value="Find BMI" onClick={bmi}/>
    </form> <br /><br />
    <h1>
      Result : {res}
      <p>You are classified as: <strong>{category}</strong></p>
    </h1>
    </div>
  )
}

export default Component4
