import { observer } from "mobx-react-lite"
import { theButton } from "../../models/btn"
import './Button.css'
interface ButtonProps {
    myButtonCurr: theButton
    click?: () => void
    text?: string
}

const Button = ({myButtonCurr, click}: ButtonProps) => {


    return (
        <button
            className='control-action-button'
            onClick={click}
        >
            {myButtonCurr.title}
        </button>

    )
}

export default observer(Button) 

