import { useState } from "react";

const Users = (props1)=>{
    const {name} = props1;

    const [count] = useState(0);
    return (
        <div className="UserCard card">
            <h6>{count}</h6>
            <h2>Name :{name}</h2>
            <h3>Address : Nashik</h3>
            <h4>Contact : xyz@gmail.com</h4>
        </div>
    );
}

export default Users;