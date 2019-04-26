import React, { Component } from "react";
// import ReactTable from "react-table";
// import "react-table/react-table.css";


class FlaskExerciseRender extends Component {
      constructor(props) {
        super(props);

this.state = {
            
            dspitems: [] 
        }

}
  componentWillMount = () => {};

  callExcel = async () => {
    const excelItems = await fetch("http://127.0.0.1:5000/load_excel/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const jsonexcelItems = await excelItems.json();
    //console.log("???", jsonexcelItems);
    
     this.setState({ dspitems: jsonexcelItems });
  };

  showData(){

     let lista = [];

      lista.push (<div className ="bor1">
         <p className ="bor3">Date</p>
         <p className ="bor3">Client Name</p>
         <p className ="bor3">Invoice # </p>
         <p className ="bor3">Items</p>
         <p className ="bor3">$ Amount </p>

        </div>)

        const arr = this.state.dspitems;
        arr.forEach((element) => {
          //console.log(element)
            lista.push(
                <div className ="bor1">
         <p className ="bor2">{element.Date}</p>
         <p className ="bor2">{element['Client Name']} </p>
         <p className ="bor2">{element['Invoice #']} </p>
         <p className ="bor2">{element.Items}</p>
         <p className ="bor2">{element['$ Amount']} </p>

        </div>
            );
        });

        return lista;

  }



  render() {
    return (
      <div>
        <div className="bor1" onClick={this.callExcel}>Click to pull Data from server</div>
         <hr />

         <br />
          {this.showData()}
         
      </div>
    );
  }
}

export default FlaskExerciseRender