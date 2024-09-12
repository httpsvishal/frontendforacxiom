import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const home = () => {
        console.log('home');
        navigate('/');
    };
    return(
        <div className="flex p-5 justify-between">
                <div className="bg-sky-600 p-5 border rounded">
                    <p>Chart</p>
                </div>
                <div className="bg-sky-600 p-5 border rounded" onClick={home} >
                    <p>Back</p>
                </div>
            </div>
    )
};

export default Navbar;