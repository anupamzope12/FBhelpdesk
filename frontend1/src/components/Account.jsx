import { useNavigate } from "react-router-dom";

const Account = ()=>{
    const navigate =useNavigate();
        const redirectToDisconnect = () => {
            navigate('/disconnect');
          };
    return(
        <div>
            <h1>Welcome to Face Book</h1>
                <button type="submit" onClick={redirectToDisconnect}>Disconnect</button>
        </div>
    )
}

export default Account;