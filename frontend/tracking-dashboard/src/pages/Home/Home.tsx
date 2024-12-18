import bitCarverLogo from '../../assets/bit-carver-logo.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <div>
                <a href="https://github.com/BitCarver" target="_blank">
                    <img src={bitCarverLogo} className="logo" alt="BitCarver logo" />
                </a>
            </div>
            <h1 className='title'>Welcome to ShipHub</h1>
            <div className="card">
                <p className="description">
                    For all of your shipping & tracking needs!
                </p>
            </div>
            <p className="read-the-docs">
                Click on the BitCarver Logo to visit my GitHub Profile
            </p>
        </>
    )
}
export default Home;