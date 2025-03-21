import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order.js'

const showOrders = (props) => {
  let summ = 0
  props.orders.forEach(el => {
    summ += Number.parseFloat(el.price)
  });
  return <div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summ'>Сумма: {new Intl.NumberFormat().format(summ)}</p>
  </div>
}

const shwNothing = () => {
  return <div className='empty'>
    <h2>Добавьте товары в корзину</h2>
  </div>
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingCart 
              onClick={() => setCartOpen(!cartOpen)} 
              className={`shop-cart-button ${cartOpen && 'active'}`}
            />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : shwNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
