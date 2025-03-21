import React, { Component } from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'  

export class Order extends Component {
  render() {
    return (
        <div className='item'>
            <div className='quantity-controls'>
              <FaMinus 
                className='quantity-button' 
                onClick={() => this.props.onUpdateQuantity(this.props.item.id, -1)}
              />
              <span className='quantity'>{this.props.item.quantity}</span>
              <FaPlus 
                className='quantity-button' 
                onClick={() => this.props.onUpdateQuantity(this.props.item.id, 1)}
              />
            </div>
            <img src={this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}</p>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
    )
  }
}

export default Order