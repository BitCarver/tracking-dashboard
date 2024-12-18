import shipHubLogo from "../../assets/ShipHubLogo.png"
import './Home.css'

const Home = () => {
    return (
        <>
            <div>
                <a href="https://github.com/BitCarver" target="_blank">
                    <img src={shipHubLogo} className="logo" alt="BitCarver logo" />
                </a>
            </div>
            <h1 className='title'>Welcome to ShipHub</h1>
            <p className="read-the-docs">
                Click on the BitCarver Logo to visit my GitHub Profile
            </p>
        </>
    )
}
export default Home;