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
