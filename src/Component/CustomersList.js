import React from "react";

export default class CustomerList extends React.Component {
  render() {
    return (
      <div className="box-cus row m-3 mt-4">
        <div className="mr-4">
          {/* image */}
          <img
            alt={this.props.name}
            src={this.props.image}
            className="img-cus"
            width="150"
            height="150"
          />
        </div>
        <div className="col-sm-8 p-3">
          {/* description */}
          <h5 className="">Customer Name : {this.props.name}</h5>
          <h6 className=" mt-3 font-weight-normal">
            Customer Phone : {this.props.phone}
          </h6>
          <h6 className="font-weight-normal">
            Customer Address : {this.props.address}
          </h6>
        </div>
        <div className="col-sm-2 pt-4 ml-3">
          {/* action */}
          <button
            className="btn btn-sm btn-edit text-white btn-block"
            onClick={this.props.onEdit}
          >
            EDIT
          </button>

          <button
            className="btn btn-sm btn-delete text-white btn-block"
            onClick={this.props.onDrop}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}
