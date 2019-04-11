import React from 'react'
import LinkedList from "./LinkedList"
import node from "./Node"

class LinkedListInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newNodeSubject: null,
            newNodeAmmount: null,
            numberOfNodes: 0,
            current: null
        };
        this.controller = null
    }


    handleNewNodeSubject = (event) => {
        this.setState({ newNodeSubject: event.target.value });
    }

    handleNewNodeBalance = (event) => {
        this.setState({ newNodeAmmount: event.target.value });
    }

    addNewNode = () => {
        let newNode = new node(this.state.newNodeSubject, this.state.newNodeAmmount)
        this.controller == null ? this.controller = new LinkedList(newNode) : this.controller.insertNode(newNode)

        this.setState({ newNodeSubject: "" });
        this.setState({ newNodeAmmount: "" });
        this.setState({ numberOfNodes: this.controller.numberOfNodes });
        //console.log (this.controller)
    }

    showCurrInfo = () => {
        //console.log (this.controller)
        //this.setState({ current: this.controller.current.subject });
        return (<div>
          
          <p>Current Node:  {this.controller.current.subject} </p>
          
          <button onClick={() => { this.movePrev() }}>Prev</button>
          <button onClick={() => { this.moveNext() }}>Next</button>
          <button onClick={() => { this.delNode() }}>delete</button>
          </div>

        )
    }

    delNode = () => {
        this.controller.deleteNode()

        this.setState({ current: this.controller.current.subject })
    }


    movePrev = () => {
        this.controller.movePrev()
        this.setState({ current: this.controller.current.subject })
    }

    moveNext = () => {
        this.controller.moveNext()
        this.setState({ current: this.controller.current.subject })
    }



    showNodeList = () => {
        let lista = [];

        let datarray = this.controller.toArray()

        datarray.forEach((element) => {

            lista.push(<div> {element} </div>)

        })
        return lista
    }







    render() {
        let currNode = null
        let lista = null
        if (this.controller == null) {} else {
            currNode = this.showCurrInfo()
            lista = this.showNodeList()

            //console.log (this.controller.current.forwardNode === this.controller.current)
        }


        return (
            <div> 

            <div className="cityCard"> 
          <p>New Node</p> 
                        <input
                    type="text"
                    value={this.state.newNodeSubject || ''}
                    onChange={this.handleNewNodeSubject}
                    placeholder="Subject"
                /> 
                <input
                    type="number"
                    value={this.state.newNodeAmmount || ''}
                    onChange={this.handleNewNodeBalance}
                    placeholder="Ammount"
                />
              <button onClick={() => { this.addNewNode() }}>Add Node</button>

              <p>Number of Nodes: {this.state.numberOfNodes}  </p>

              
              {currNode}
              
          </div>
          {lista}
      <div > 
      

      </div>



         </div>
        );
    }
}

export default LinkedListInterface;