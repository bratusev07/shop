import React from 'react'

export class Items extends React.Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <div 
            className='item' 
            key={el.id} 
            onClick={() => this.props.onShowItem(el)}
          >
            <img src={el.img} />
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <b>{el.price}</b>
            <div 
              className='add-to-cart' 
              onClick={(e) => {
                e.stopPropagation();
                this.props.onAdd(el);
              }}
            >
              +
            </div>
          </div>
        ))}
      </main>
    )
  }
}

export default Items