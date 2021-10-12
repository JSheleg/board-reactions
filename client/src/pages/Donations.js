import { useState } from "react";
import StripeContainer from '../components/Donations/StripeContainer';


const Donations = () => {
     const [showItem, setShowItem] = useState(false) 
    
     return(
        <div className="App">
        <h1>Board Reaction's Donations</h1>
        {showItem ? <StripeContainer/> : <> <h3>$20.00</h3>
        <button className="donate-button" onClick={() => setShowItem(true)}>Make a Donation</button></>}
      </div>
    );
}

export default Donations;