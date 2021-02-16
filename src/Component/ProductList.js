import React from "react";
import "../Pages/One.css";

class ProductList extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-sm-10 p-2">
        <div className="box">
          <img
            className="img-rounded"
            src={this.props.image}
            width="200px"
            s
            height="200px"
          />
          <div className="info">
            <h4 className>{this.props.name}</h4>
            <h6 className="mt-3">Price : {this.props.price}</h6>
            <h6>Stock : {this.props.stock}</h6>
            <div className="tombol mt-4">
              <button
                className="btn-edit btn text-white m-1"
                onClick={this.props.onEdit}
              >
                EDIT
              </button>
              <button
                className="btn-delete btn text-white m-1"
                onClick={this.props.onDrop}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
