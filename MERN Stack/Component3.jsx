import React, {useState} from 'react'

const Component3 = () => {
  const[val1, setval1] = useState(0);
  const[res, setres] = useState(0);

  const storeval1 = (e)=>{
    setval1(parseFloat(e.target.value))
    console.log(val1);
  }

  const kmstomile = (e) => {
    var a = val1 * 0.621371;
    setres(a);
  }
  const degtofar = (e) => {
    var b = (val1 * (9/5)) + 32;
    setres(b);
  }
  const kilotopound = (e) => {
    var c = val1 * 2.20462;
    setres(c);
  }

  return (
    <>
    <div>
      <h1>
      Converter
      </h1> <br /><br />
    <form action="">
      <input type="number" value={val1} onChange={storeval1} /> <br /> <br />
      <input type="button" value="Kms to Miles" onClick={kmstomile}/>
      <input type="button" value="Degree to Fahrenheit" onClick={degtofar} />
      <input type="button" value="Kg to Pound" onClick={kilotopound} />
    </form> <br /><br />
    <h1>
      Result : {res}
    </h1>
    </div>
    </>
  )
}

export default Component3