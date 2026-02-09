import {age, skills} from "./App.jsx"
import name from "./App.jsx"

export const Pratice=()=>{
    const student=[];

    return(
        <>
        <p>My Name is {name}<br></br> and my Age is {age}. i am good at {skills}</p>
        <p>
          {student.length && "No Student FOund"}  
        </p>
        <p>Number of students is {student.length} </p>
        </>
    );
}