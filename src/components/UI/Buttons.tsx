import ControlService from '../../lib/base/ControlService';
import { theButton } from '../../models/btn';

export const rightSideButtons: theButton[] = [
    {
        side: 'Right',
        title: 'Очистить',
        callBack: () => { ControlService.putText('') }
    },
    {
        side: 'Right',
        title: 'Hello world',
        callBack: () => { ControlService.putText('Hello world!') }
    }
]

export const bothSidesButtons: theButton[] = [
    {
        side: 'Left',
        title: 'Проверка на число',
        callBack: () => {
            (ControlService.getText() !== '' && !Number.isNaN(+ControlService.getText())) && alert(ControlService.getText())
        }
    },
    {
        side: 'Right',
        title: 'Alert',
        callBack: () => {
            alert(ControlService.getText())
        }
    }
]
