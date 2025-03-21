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
            title: "Naruto Uzumaki",
            img: "https://i.imgur.com/8JQZqXZ.jpg",
            description: "Фигурка Наруто Узумаки из аниме 'Наруто'. Высота: 20 см. Материал: ПВХ. Официальная лицензированная продукция.",
            category: "Boys",
            price: 49.99
        },
        {
            id: 2,
            title: "Sailor Moon",
            img: "https://i.imgur.com/L5YqXZP.jpg",
            description: "Фигурка Сейлор Мун из одноименного аниме. Высота: 18 см. Материал: ПВХ. В комплекте с аксессуарами.",
            category: "Girls",
            price: 59.99
        },
        {
            id: 3,
            title: "Totoro",
            img: "https://i.imgur.com/9JQZqXZ.jpg",
            description: "Большой Тоторо из аниме 'Мой сосед Тоторо'. Высота: 25 см. Материал: Плюш. Официальная продукция Studio Ghibli.",
            category: "Pet",
            price: 39.99
        },
        {
            id: 4,
            title: "Goku Super Saiyan",
            img: "https://i.imgur.com/7JQZqXZ.jpg",
            description: "Фигурка Гоку в форме Супер Сайяна из аниме 'Dragon Ball'. Высота: 22 см. Материал: ПВХ. Светящиеся эффекты.",
            category: "Boys",
            price: 69.99
        },
        {
            id: 5,
            title: "Mikasa Ackerman",
            img: "https://i.imgur.com/6JQZqXZ.jpg",
            description: "Фигурка Микасы Аккерман из аниме 'Атака Титанов'. Высота: 19 см. Материал: ПВХ. В комплекте с маневренным снаряжением.",
            category: "Girls",
            price: 54.99
        },
        {
            id: 6,
            title: "Pikachu",
            img: "https://i.imgur.com/5JQZqXZ.jpg",
            description: "Фигурка Пикачу из аниме 'Покемон'. Высота: 15 см. Материал: ПВХ. Светящиеся щеки. Официальная продукция Pokemon Company.",
            category: "Pet",
            price: 29.99
        },
        {
            id: 7,
            title: "Tanjiro Kamado",
            img: "https://i.imgur.com/4JQZqXZ.jpg",
            description: "Фигурка Танджиро Камадо из аниме 'Клинок, рассекающий демонов'. Высота: 21 см. Материал: ПВХ. В комплекте с мечом.",
            category: "Boys",
            price: 64.99
        },
        {
            id: 8,
            title: "Zero Two",
            img: "https://i.imgur.com/3JQZqXZ.jpg",
            description: "Фигурка Зеро Ту из аниме 'Darling in the Franxx'. Высота: 20 см. Материал: ПВХ. Ограниченная серия.",
            category: "Girls",
            price: 79.99
        },
        {
            id: 9,
            title: "Kuroneko",
            img: "https://i.imgur.com/2JQZqXZ.jpg",
            description: "Фигурка Куронеко из аниме 'Oreimo'. Высота: 17 см. Материал: ПВХ. В костюме черной кошки.",
            category: "Girls",
            price: 49.99
        },
        {
            id: 10,
            title: "Dragon Ball Shenron",
            img: "https://i.imgur.com/1JQZqXZ.jpg",
            description: "Фигурка Шенрона из аниме 'Dragon Ball'. Высота: 30 см. Материал: ПВХ. Светящиеся глаза. Ограниченная серия.",
            category: "Other",
            price: 89.99
        },
        {
            id: 11,
            title: "Edward Elric",
            img: "https://i.imgur.com/0JQZqXZ.jpg",
            description: "Фигурка Эдварда Элрика из аниме 'Стальной алхимик'. Высота: 20 см. Материал: ПВХ. В комплекте с алхимическими кругами.",
            category: "Boys",
            price: 59.99
        },
        {
            id: 12,
            title: "Rem",
            img: "https://i.imgur.com/ZJQZqXZ.jpg",
            description: "Фигурка Рем из аниме 'Re:Zero'. Высота: 19 см. Материал: ПВХ. В костюме горничной.",
            category: "Girls",
            price: 69.99
        },
        {
            id: 13,
            title: "Koro-sensei",
            img: "https://i.imgur.com/YJQZqXZ.jpg",
            description: "Фигурка Коро-сенсея из аниме 'Убийца Академии'. Высота: 15 см. Материал: ПВХ. Светящиеся эффекты.",
            category: "Other",
            price: 34.99
        },
        {
            id: 14,
            title: "Luffy Gear Fourth",
            img: "https://i.imgur.com/XJQZqXZ.jpg",
            description: "Фигурка Луффи в форме Gear Fourth из аниме 'One Piece'. Высота: 23 см. Материал: ПВХ. Ограниченная серия.",
            category: "Boys",
            price: 84.99
        },
        {
            id: 15,
            title: "Miku Hatsune",
            img: "https://i.imgur.com/WJQZqXZ.jpg",
            description: "Фигурка Мику Хацунэ из серии Vocaloid. Высота: 18 см. Материал: ПВХ. В фирменном костюме.",
            category: "Girls",
            price: 74.99
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
