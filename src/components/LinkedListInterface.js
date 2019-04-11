import React from 'react'
import LinkedList from "./LinkedList"
import node from "./Node"

class LinkedListInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newNodeSubject : null,
            newNodeAmmount : null,
            numberOfNodes: 0
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

    showCurrInfo= () => {
    	//console.log (this.controller)
    	return (<div>

    			<p>Current Node: </p> {this.controller.current.subject}

    			</div>

    		)
    	}

    showNodeList= () => {
    	let lista = [];

         let myCurr = this.controller.current.name

         this.controller.moveFirst()
         while (this.controller.current.forwardNode !== this.controller.current)
         {

         	lista.push (<div> Subject: {this.controller.current.subject} Ammount: {this.controller.current.ammount}   </div> )
         	this.controller.moveNext()
         	          } 
        return lista
    }




    


    render() {
    	let currNode = null
    	let lista = null
        if (this.controller == null) {}
        else {currNode = this.showCurrInfo()
        	 	lista = null//this.showNodeList()
        	 	
        	 	//console.log (this.controller.current.forwardNode === this.controller.current)
        	 	 }


        return (
        <div> 

           	<div className="Acc"> 
        	<p>New Node</p> 
        	              <input
                    type="text"
                    value={this.state.newNodeSubject}
                    onChange={this.handleNewNodeSubject}
                    placeholder="Subject"
                /> 
                <input
                    type="text"
                    value={this.state.newNodeAmmount}
                    onChange={this.handleNewNodeBalance}
                    placeholder="Ammount"
                />
              <button onClick={() => {
                        //this.props.funcMoveIn(this.props.name);
                       //alert('miau')
                       this.addNewNode()
                    }}


              >Add Node</button>

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