import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(10)


  return (
    <div>
      <h3>number is {num}</h3>
      <button className='incrementbutton' onClick={()=> setnum(num+10)} >Increment</button>
      <button className='crementbutton' onClick={()=> setnum(num-10)} >decrement</button>


    </div>
  )
}

export default App