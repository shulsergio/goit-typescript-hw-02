import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css'

const Loader: React.FC=()=> {
  return (
  <div className={css.loaderOverlay}>  
      <RotatingLines
        
// export const RotatingSquare: React.FunctionComponent<RotatingSquareProps>;
// type _Props3 = {
//     width?: string;
//     visible?: boolean;
//     strokeWidth?: string;
//     strokeColor?: string;
//     animationDuration?: string;
//     ariaLabel?: string;};

      visible={true}
      // height={96}
      width="96"
      strokeColor="Green" 
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      />
      </div>
  );
}
export default Loader;