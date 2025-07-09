import { useState } from "react";

function Arr() {
      const [name,setname]=useState(["Urvish","Gopal","Jay"]);
      const [user,setuser]=useState([
           {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      age: 28,
      isActive: true
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya.mehta@example.com",
      age: 24,
      isActive: false
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul.verma@example.com",
      age: 32,
      isActive: true
    },
    {
      id: 4,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      age: 30,
      isActive: true
    },
    {
      id: 5,
      name: "Karan Joshi",
      email: "karan.joshi@example.com",
      age: 27,
      isActive: false
    }
      ])

      const GetF=()=>{
          const filter=user.filter(u=>u.isActive);
          setuser(filter)
      }

       const GetFi=()=>{
          const filter=user.filter(u=>!u.isActive);
          setuser(filter)
      }

      return(
         <ul>
              {name.map((n,i)=>(
                 <li key={i}>{[...n]}</li> 
              ))}

              {user.map((u,i)=>(
                  <li key={i}>   {u.name} - {u.email} - Age: {u.age} -{" "}
            {u.isActive ? "Active" : "Inactive"}</li>
              ))}

              <button onClick={GetF}>Active user</button>
              <button onClick={GetFi}>inActive user</button>
         </ul>
      )

  
}


export default Arr;