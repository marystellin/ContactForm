import React from 'react'
import Axios from 'axios';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
const View=({List,setList,getting,setpage})=>
{
    const deleteVal=(e)=>{
      Axios.delete("http://localhost:4000/deleteValue/"+e,).then(success=>{
            alert("Deleted")     
            setList(List.filter(i=>i._id!==e));   
          }) 
    }
    const updateVal=(e,name,email,number)=>{
        var updateName=prompt("Enter your Name",name);
        var updateEmail=prompt("Enter your Email",email);
        var updatePhone=prompt("Enter your Phone",number);
        Axios.put("http://localhost:4000/updateValue/"+e,{Name:updateName,Email:updateEmail,Phone:updatePhone}).then(success=>
        {
            setList(List.map(i=>i._id===e?[...List,success.data]:List))
            getting();
            alert("Update")

        })
    }
    
    return(
        <div>
            <h2><center>CONTACT FORM DETAILS</center></h2>
            <Table dark>
                <thead>
                    <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                </tr>
                </thead>
                <tbody>
                    {
                List.map((i)=>(
                    <tr key={i._id}>
                        <td>{i.Name}</td>
                        <td>{i.Email}</td>
                        <td>{i.Phone}</td>
                        <td>
                        <Button color="primary" onClick={deleteVal.bind(this,i._id)}>delete</Button></td> 
                    <td><Button color="primary" onClick={updateVal.bind(this,i._id,i.Name,i.Email,i.Phone)}>Update</Button></td>
                   
                    </tr>
                )) 
            }
                </tbody>
            </Table>
            </div>
            
    )
}
export default View;
             
            // List.map((i)=>{
            //     return (<div >
            //         <ul key={i._id}>
            // <li>{"Name:"} {i.Name}</li>
            // <li>{"Email:"} {i.Email}</li>
            // <li>{"Phone:"} {i.Phone}</li>
            // <button className onClick={deleteVal.bind(this,i._id)}>delete</button> 
            // <button onClick={updateVal.bind(this,i._id,i.Name,i.Email,i.Phone)}>Update</button></ul>
            // </div>
            //     )
            // })} */}
           
        