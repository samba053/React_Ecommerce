import { useState,useEffect } from "react";

function Users()
{
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log('In use effect function...')
        return()=>{
            console.log('In return keyword of usestate');
        }

    },[counter]);
    
    return(
        <div>
            <h1>Users list</h1> 
            <h1>Counter:<span>{counter}</span></h1>
            <button onClick={()=>setCounter(counter+1)}>Modify</button>
        </div>
        
    )
}
export default Users;