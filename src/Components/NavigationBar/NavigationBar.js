import './NavigationBar.css'
import { Link } from "react-router-dom"

function NavigationBar() {
    return (
        <div className="NavBar">
            <div className="NavBar-title">Financial Manager</div>
            <ul className="NavBar-containers">
                <Link to="/dashboard"><li className="NavBar-item">Dashboard</li></Link>
                <Link to="/insert"><li className="NavBar-item">Insert</li></Link>
                <Link to="/transactions"><li className="NavBar-item">Transactions</li></Link>
            </ul>
        </div>
    );
}

export default NavigationBar;