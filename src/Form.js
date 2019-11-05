import React from 'react';
import { Jumbotron} from 'reactstrap';
const Form=({getValue})=>{
  const [input,setInput]=React.useState()
  const [input1,setInput1]=React.useState()
  const [input2,setInput2]=React.useState()
 
//   const[page,setpage]=React.useState("view")
  
  const getName=(event)=>
  {
    setInput(event.target.value)
  
  }
const getEmail=(event1)=>
{
  setInput1(event1.target.value)
}
const getPhone=(event2)=>
{
  setInput2(event2.target.value)
}
const handleSubmit=(e)=>{
    getValue(input,input1,input2);
}

return(<div>
 <Jumbotron>
  <h2><center>CONTACT MANAGER</center></h2>
  {"ENTER YOUR NAME:"}  <input type="text" onChange={getName} value={input}></input><br></br><br></br>
  {"ENTER YOUR EMAIL:"} <input type="email" onChange={getEmail} value={input1}></input><br></br><br></br>
  {"ENTER YOUR NUMBER:"}<input type="text" onChange={getPhone} value={input2}></input><br></br><br></br>
  <button onClick={()=>{
    handleSubmit();
  }}>Add</button>

  </Jumbotron>
  
 </div>)
}
export default Form;
