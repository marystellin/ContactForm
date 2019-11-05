
import React from 'react';
import Axios from'axios';
import View from  './View';
import Form from './Form';
const App=()=>{
  const [list,setlist]=React.useState([])
  const[page,setpage]=React.useState("view")
  const getting=()=>{
    Axios.get("http://localhost:4000/value").then(res=>{
      setlist(res.data);
    });
  }
  React.useEffect(()=>{
    getting()
  },[]);
  const getValue=(input,input1,input2)=>
{
  Axios.post("http://localhost:4000/add",{Name:input,Email:input1,Phone:input2})
  .then(success=>{
    setlist([...list,success.data])
   getting();
   setpage("view")

   
  })
}
  
  return(
    <div>
      {
      page==="view"?(<View List={list} setList={setlist} getting={getting} setpage={setpage} />):(<Form getValue={getValue}/>)
      }
       <button onClick={
        ()=>{
          setpage("form")
      }}>AddContact</button>
    </div>
  )
}
export default App;

































// import React from 'react';
// import Axios from 'axios';
// import View from  './View' ;
// import { Jumbotron} from 'reactstrap';
// function App(){
//   const [input,setInput]=React.useState()
//   const [input1,setInput1]=React.useState()
//   const [input2,setInput2]=React.useState()
//   const [list,setlist]=React.useState([])
//   const[page,setpage]=React.useState("view")
//   const getting=()=>{
//     Axios.get("http://localhost:4000/value").then(res=>{
//       setlist(res.data);
//     });
//   }
//   React.useEffect(()=>{
//     getting()
//   },[]);
  
//   const getName=(event)=>
//   {
//     setInput(event.target.value)
//   }
// const getEmail=(event1)=>
// {
//   setInput1(event1.target.value)
// }
// const getPhone=(event2)=>
// {
//   setInput2(event2.target.value)
// }
// const getValue=(input,input1,input2)=>
// {
//   Axios.post("http://localhost:4000/add",{Name:input,Email:input1,Phone:input2})
//   .then(success=>{
//     setlist([...list,success.data])
//    getting();

//     setInput("");
//     setInput1("");
//     setInput2("");
//   })
// }
// return(<div>
//   {
//     page==="view"?(<View List={list} setList={setlist} getting={getting} />):(<App/>)
//   }
//    <Jumbotron>
//   <h2>CONTACT MANAGER</h2>
//   {"ENTER YOUR NAME:"}<input type="text" onChange={getName} value={input}></input>
//   {"ENTER YOUR EMAIL:"}<input type="text" onChange={getEmail} value={input1}></input>
//   {"ENTER YOUR NUMBER:"}<input type="text" onChange={getPhone} value={input2}></input>
// {/* <button onClick={getValue}>SUBMIT</button> */}
//   <button onClick={()=>{
//     setpage("app")
//     getValue(input,input1,input2);
//   }}>submit</button>
//   {/* <span>{input}{input1}{intput2}</span> */}
//   </Jumbotron>
  
//  </div>)
// }
// export default App;



// import React,{ Component } from "react";
// import { Jumbotron} from 'reactstrap';
// import axios from 'axios';
// class App extends Component{
//   constructor(props){
//     super(props);
//       this.state={
//         title:"CONTACT MANAGER",
//         count:0,
//         index:" ",
//         list:[]
//       }
//   }
  
//   //fsumbit=(event)=>{
//   componentDidMount(){
//     axios.get("http://localhost:8000/value").then(result=>{
//       this.setState({
//         list:result.data
//       })
//     })
//   }
 
//   fsumbit=(event)=>{
//     event.preventDefault();
//     //console.log('try');

//     let list=this.state.list;
//     let name=this.refs.name.value;
//     let Email=this.refs.Email.value;
//     let PhoneNumber=this.refs.PhoneNumber.value;    
//     //if(this.state.act===0){
//   //   let val={
//   //     name,Email,PhoneNumber
//   //   }
//   //   list.push(val);
//   // }
//   // else{
//   //   let index=this.state.index;
//   //   list[index].name=name;
//   //   list[index].Email=Email;
//   //   list[index].PhoneNumber=PhoneNumber;
//   // }
//     this.setState({
//       list,
//       act:0,
//         name:"",
//         Email:"",
//         PhoneNumber:""
      
//     });
//     // this.refs.myFrom.reset();
//     // this.refs.name.focus();
//   }
//   fremove=(i)=>
//   {
//     let list=this.state.list;
//     list.splice(i,1);
//     this.setState({
//       list
//     });
//   }
//   fEdit=(i)=>
//   {
//     let val=this.state.list[i];
//     this.refs.name.value=val.name;
//     this.refs.Email.value=val.Email;
//     this.refs.PhoneNumber.value=val.PhoneNumber;
//     this.setState({
//       count:1,
//       index:i
//     });
//   }

//   render(){
//     let list=this.state.list;
//     return(
//       <div>
//         <Jumbotron>
//         <h3>{this.state.title}</h3>
//         <form ref="myForm" className="myForm" >
//        {"Enter your name : "} <input type="text" ref="name" placeholder="name"  value={this.state.name} className="formField"/><br></br><br></br>
//       {"Enter your Email : "}<input type="text" ref="Email" placeholder="Email"  value={this.state.Email} className="formField"/><br></br><br></br>
//       {"Enter your number : "}  <input type="text" ref="PhoneNumber" placeholder="Phone Number" value={this.state.PhoneNumber} className="formField"/><br></br><br></br>
//         <button onClick={(event)=>this.fsumbit(event)} className="btn btn-lg btn-primary">SUBMIT</button>
//         </form>
//       <pre>
//         {list.map((val, i)=>
//           <li key={i} className="list-group-item">
//             {i+1}. {val.name}.{val.Email}.{val.PhoneNumber}
//             <button onClick={()=>this.fremove(i)} className="float-right">delete</button>
//             <button onClick={()=>this.fEdit(i)} className="float-right">update</button> 
//           </li>)}
//       </pre>
//       </Jumbotron>
//       </div>
//     );
//   }
// } 
// export default App;

