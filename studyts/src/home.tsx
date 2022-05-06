import { Link } from "react-router-dom";    

export default function Home() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <Link to={`/type`}>Type</Link>
            <Link to={`/fuction`}>Function</Link>
            <Link to={`/axios`}>Axios</Link>
            <Link to={`/class`}>Class</Link>
            <Link to={`/Interfaces`}>Interfaces</Link>
        </div>
    )} 