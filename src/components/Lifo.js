class Stack {

    constructor() {
        this.contents = []
    }

    addElement = (item) => {
        this.contents.push(item)
    }


    serveElement = () => {
        return this.contents.pop()
    }

    showElements() {
        return this.contents;

    }

}

export default Stack