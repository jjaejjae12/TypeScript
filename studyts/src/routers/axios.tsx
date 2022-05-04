import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;


function Axios() {//axios 비동기 통신 promise객체로 반환해주기떄문에 response데이터를 다루기 
    const [Join, setJoin] = useState({
        id: "",
        password: "",
    })

    const onChageJoin = ({ target: { name, value }}:React.ChangeEvent<HTMLInputElement>) => {
        setJoin({ ...Join, [name]: value })
        console.log(Join)
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    axios.post(`http://10.120.74.70:8080/users`,Join)
    .then((Response) => console.log(Response,1))
    .catch((error) => console.log(error))
    

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" name="id" value={Join.id} autoComplete="off" placeholder="Email" onChange={onChageJoin} />
                    <input type="password" name="password" value={Join.password} autoComplete="off" placeholder="Password" onChange={onChageJoin} />
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Axios;