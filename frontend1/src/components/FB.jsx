import { useNavigate } from "react-router-dom";
import '../styles/FB.css'
const Fb = () =>{
    const navigate =useNavigate();
    
    const redirectToAccount = () => {
        navigate('/agentScreen');
    };
    
    return(
        <div className="container">
        <div id="main-box">
            <div id="int">
                <h3 id="integration">Facebook Page Integration </h3>
            </div>
             <div className="button-container">
                <button type="submit" id="button" onClick={redirectToAccount}>Connect Page</button>
            </div>
        </div>
    </div>
    )
}

export default Fb;