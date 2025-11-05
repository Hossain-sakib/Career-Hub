
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <h2>Opps!!</h2>
            <button><Link to="/">Home</Link></button>
        </div>
    );
};

export default Error;