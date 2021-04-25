import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spiner = () => (
  <div className="loader__container">
    <Loader type="BallTriangle" color="#3f51b5" height={100} width={100} />
  </div>
);

export default Spiner;
