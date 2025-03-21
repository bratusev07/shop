import React from "react";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Items from "./components/Items.js";
import ShowFullItem from "./components/ShowFullItem.js";
import Categories from "./components/Categories.js";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        orders: [],
        currentItems: [],
        items: [
        {
            id: 1,
            title: "Смартфон XYZ",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Современный смартфон с отличной камерой и производительностью.",
            category: "electronic",
            price: 299.99
        },
        {
            id: 2,
            title: "Ноутбук ABC",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Мощный ноутбук для работы и игр.",
            category: "electronic",
            price: 899.99
        },
        {
            id: 3,
            title: "Наушники DEF",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Беспроводные наушники с высоким качеством звука.",
            category: "audio",
            price: 149.99
        },
        {
            id: 4,
            title: "Камера GHI",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Цифровая камера с высоким разрешением.",
            category: "Фото",
            price: 499.99
        },
        {
            id: 5,
            title: "Часы JKL",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Стильные смарт-часы с множеством функций.",
            category: "Аксессуары",
            price: 199.99
        },
        {
            id: 6,
            title: "Планшет MNO",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Легкий и мощный планшет для работы и развлечений.",
            category: "electronic",
            price: 349.99
        },
        {
            id: 7,
            title: "Игровая консоль PQR",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Игровая консоль нового поколения.",
            category: "Игры",
            price: 499.99
        },
        {
            id: 8,
            title: "Клавиатура STU",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Механическая клавиатура с подсветкой.",
            category: "Компьютерные аксессуары",
            price: 89.99
        },
        {
            id: 9,
            title: "Мышь VWX",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Эргономичная игровая мышь.",
            category: "Компьютерные аксессуары",
            price: 59.99
        },
        {
            id: 10,
            title: "Флешка YZA",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Флешка на 64 ГБ.",
            category: "Хранение данных",
            price: 19.99
        },
        {
            id: 11,
            title: "Смарт-колонка BCD",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Умная колонка с голосовым управлением.",
            category: "audio",
            price: 129.99
        },
        {
            id: 12,
            title: "Электронная книга EFG",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Легкая электронная книга с подсветкой.",
            category: "Чтение",
            price: 89.99
        },
        {
            id: 13,
            title: "Внешний жесткий диск HIJ",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Внешний жесткий диск на 1 ТБ.",
            category: "Хранение данных",
            price: 79.99
        },
        {
            id: 14,
            title: "Кофеварка KLM",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Автоматическая кофеварка для дома.",
            category: "Кухонная техника",
            price: 149.99
        },
        {
            id: 15,
            title: "Умная лампочка NOP",
            img: "https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/6/9/0/9096/1c249932fbac3508dc9cb87126896210.jpg",
            description: "Умная лампочка с управлением через приложение.",
            category: "Освещение",
            price: 29.99
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
        this.setState({currentItems: this.state.items})
        return
    }
    let filteredItems = this.state.items.filter(el => el.category === category)
    this.setState({currentItems: filteredItems})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
        if(el.id === item.id) isInArray = true 
    })
    if(!isInArray) {
        this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;
