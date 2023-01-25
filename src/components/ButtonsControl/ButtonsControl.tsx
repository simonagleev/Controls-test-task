import { observer } from 'mobx-react-lite';
import ControlService from '../../lib/base/ControlService'
import { theButton } from '../../models/btn';
import Button from './Button';
import './ButtonsControl.css'

interface ControlProps {
    buttons: {
        side: string;
        title: string;
        callBack: any;
    }[];
}

const ButtonsContol = ({ buttons }: ControlProps) => {

    const mapButtons = (side: string) => {
        return buttons
            .slice()
            .filter((item: { side: string }) => item.side === side)
            .map((button: theButton, index: number) => (
                <Button
                    key={index}
                    myButtonCurr={button}
                    click={button.callBack}
                />
            ));
    };

    return (
        <div className="buttons-control-container">
            <div className="buttons-control-leftSideBar">
                {mapButtons("Left")}
            </div>
            <textarea
                className="buttons-control-textarea"
                value={ControlService.getText()}
                onChange={(e) => { ControlService.putText(e.target.value) }}
            />
            <div className="buttons-control-rightSideBar">
                {mapButtons("Right")}
            </div>
        </div>
    )
}

export default observer(ButtonsContol)