import React from "react";
import "./cartActionButton.css";

const ButtonAction = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove_positive">
          <i className="fa fa-minus" onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i className="fa fa-plus" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div className="btnAddRemove_negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i className="fa fa-plus"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAction;
