import { observer } from "mobx-react-lite"
import { theButton } from "../../models/btn"
import './Button.css'

interface ButtonProps {
    buttonCurr: theButton
    click?: () => void
    text?: string
}

const Button = ({buttonCurr, click}: ButtonProps) => {
    return (
        <button
            className='control-action-button'
            onClick={click}
        >
            {buttonCurr.title}
        </button>
    )
}

export default observer(Button) 

