//components
import PinPad from '../components/PinPad';
import SolutionEncripted from '../components/SolutionEncripted';
//styles
import '../styles/layout/Main.scss';


const Main = (props) => {
    return <main className="main">
        <SolutionEncripted/>
        <PinPad pinPadNumbers={props.pinPadNumbers} />
        
    </main>
}



export default Main