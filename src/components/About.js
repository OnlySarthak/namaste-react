import Users from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    
    return (
        <div className="container">
            <h1>
            What’s our story?
            </h1>
            <h3>
            With love and support from consumers, Swiggy expanded far and wide, first through the entire city of Bengaluru and then across the entire country. Today, Swiggy is the leading food ordering and delivery platform in India.
            </h3>
            <div className="users-container">
                <UserClass/>
            </div>
        </div>
    )
}

export default About;