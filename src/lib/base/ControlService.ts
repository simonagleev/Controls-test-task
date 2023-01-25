import { makeAutoObservable } from "mobx";

class ControlService {

    text = ''

    constructor() {
        makeAutoObservable(this)
    }

    getText() {
      return this.text
    }

    putText(str: string) {
      this.text = str
    }
}

export default new ControlService()