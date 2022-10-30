import '../index.css'
import React, {useState} from 'react'
export default function Form() {

const [show,setshow]=useState("vb")
const ShowData = () =>{
    if(show==="vb"){setshow("vbnone");}
}

const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [rating,setRating]=useState("");
const [list,setList]=useState([]);

const Add=(event)=>{
    event.preventDefault();
    const data={name, department, rating};
    setList((bb)=>[...bb,data]);
    
}
const Namein=(event)=>{
    setName(event.target.value);
  }
const Departmentin=(event)=>{
    setDepartment(event.target.value);
  }
const Ratingin=(event)=>{
    setRating(event.target.value);
  }
return (
    <>
    
    <h1 className='text-center mt-3'>EMPLOYEE FEEDBACK FORM</h1>
        <div className='text-center'>
            <form onSubmit={Add}>
            <br/>
                <b>Name :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Your Name" value={name} onChange={Namein} /><br/><br/>
                <b>Department :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Name of department" value={department} onChange={Departmentin}  /><br/><br/>
                <b>Rating :&nbsp;</b>
                <input type="text" className="form-control bt" placeholder="Rating" value={rating} onChange={Ratingin} /><br/><br/>
                <button type="submit" id="submit-btn" onClick={ShowData}>
                Submit
                </button>
                <br/>
                <hr/>
            </form>
            
        </div>
            
            <div id='parent' className={show}>
            {list.map((a)=><div className='child'>
            <span>name : {a.name} </span><br/>
            <span>department : {a.department}</span> <br/>
            <span> rating : {a.rating}</span>
            </div>)}
            </div>

    </>
)
}
