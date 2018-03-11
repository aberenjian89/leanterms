import React from 'react';


class ShowContract extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            numPages: null,
            pageNumber: 1,
        };

        this.DownloadContract = this.DownloadContract.bind(this);

    }

    DownloadContract(){
        // let doc = new jsPDF();
        // doc.text("Hello 1",10,10);
        // debugger;
        // doc.save("../../pdf/1.pdf");
    }


  render() {
    let pdf = this.DownloadContract();
    return(
        <div>

        </div>
    );
  }
}

export default ShowContract;
