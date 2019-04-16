class Queue {

    constructor() {
        this.contents = []
    }

    addElement = (item) => {
        this.contents.push(item)
    }


    serveElement = () => {
        return this.contents.shift()
    }

    showElements() {
        return this.contents;

    }

}

export default Queue