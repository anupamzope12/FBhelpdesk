import { useNavigate } from "react-router-dom";
import '../styles/Delete.css'
const Disconnect = () =>{
    const navigate = useNavigate();
    const redirectToLogin = ()=>{
        navigate('/login')
    }
    const redirectToAccount = ()=>{
        navigate('/agentScreen')
    }
    return(
        <div className="container">
        <div id="main-box">
            <div id="text">
                <h4 id="h21">Facebook Page Integration </h4>
                    <div id="page">
                        <h7 id="page1">Integrated Page :  <span id="span"> Amazon Business</span>  </h7>
                    </div>
            </div>
             <div className="button-container">
                <button type="submit" id="button1" onClick={redirectToLogin}>Delete Integration</button>
                <button type="submit" id="button2" onClick={redirectToAccount}>Reply To Message</button>
            </div>
        </div>
    </div>
    )
}

export default Disconnect;