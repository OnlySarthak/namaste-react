import { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends Component{
    constructor(props){
        super(props);  // ✅ Must call super(props) before using `this`
        this.state = {
            name: "dummy"
        };
        console.log("constructor");
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        this.setState({
            name : json.name
        })
        console.log("component Did Mount");
    };

    componentDidUpdate(){
        console.log("component Did update");  
    }

    render(){
        const {name} = this.state;
        return (
            <div className="UserCard card">
                <UserContext.Consumer>
                    {(object)=>{
                        console.log(object)
                        console.log(object.loggedUser)
                    }}
                </UserContext.Consumer>
                <h2>Name : {name}</h2>
                <h3>Address : Nashik</h3>
                <h4>Contact : xyz@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;