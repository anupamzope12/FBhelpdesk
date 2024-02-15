import '../styles/AgentScreen.css';
import { useNavigate } from 'react-router-dom';

const AgentScreen = () => {
    const navigate=useNavigate();
    const redirectToDisconnect = ()=>{
        navigate('/disconnect')
    }
    
    return (
        <div id="main">
            <div id="header">
                <div id="person-name"><h1>Amit RG</h1></div>
            </div>

            <div id="message-box">
                <div id="left-message">
                    <div className="message">Is it in stock right now?</div>
                    <div className="time">Amit RG - Mar 05, 2:22 AM</div>
                </div>
                <div className="right-message">
                    <div className="message">We have 3 left in stock!</div>
                    <div className="message">If you order before 8PM, we can ship it today.</div>
                    <div className="time">Richard Panel - Mar 05, 2:22 AM</div>
                </div>
                <div id="input-box">
                <input type="text" placeholder="Message Hiten Saxena" />

                    <button type='submit' id="disconnect1" onClick={redirectToDisconnect}>Disconnect</button> 

                </div>
            </div>

        </div>
    );
}

export default AgentScreen;
