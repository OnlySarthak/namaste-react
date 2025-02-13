import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const Err = useRouteError();
    console.log(Err);
    

    return (
        <div>
            <h1>{Err.status} : {Err.statusText}</h1>
            <img src='https://as2.ftcdn.net/v2/jpg/03/52/83/79/1000_F_352837939_50ecBVcyv2OCR6BGve3683m4mGOAwbMs.jpg' 
            style={{ width: "80%", marginLeft: "-40px" }} />
        </div>
    );
};

export default Error;
