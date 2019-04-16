import React from 'react'
import Stack from "./Lifo"
import Queue from "./Fifo"

class StructureComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBoxValue: "",
            contents: [],
            lastValue: null
        }


        this.props.tipo === "Fifo" ? this.structure = new Queue() : this.structure = new Stack()



    }



    handleNewValue = (event) => {
        this.setState({ textBoxValue: event.target.value });
    }

    addValue = () => {

        this.structure.addElement(this.state.textBoxValue);
        const x = this.structure.showElements()
        this.setState({ contents: x });
        this.setState({ textBoxValue: "" });


    }


    pullValue = () => {

        const a = this.structure.serveElement();
        const x = this.structure.showElements()
        this.setState({ contents: x });
        this.setState({ lastValue: "Last Value Pulled:" + a });


    }

    show() {
        let lista = [];

        let datarray = this.state.contents

        datarray.forEach((element) => {

            lista.push(<div key = {element}>  {element} </div>)

        })

        if (this.state.lastValue) { lista.unshift(<h3 key = "meaw"> Last value Pulled =  {this.state.lastValue} </h3>) }
        return lista
    }

    render() {


        return (
            <div> <h2>{this.props.title}</h2>
        <button onClick={() => { this.addValue() }}>Add Element</button>


<input type="text" value={this.state.textBoxValue || ''} onChange={this.handleNewValue}  placeholder="Add value"/> 
<button onClick={() => { this.pullValue() }}>Pull an element</button>

{this.show()}
        </div>

        );
    }
}

export default StructureComponent