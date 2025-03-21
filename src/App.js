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
            "id": 1,
            "title": "Naruto Uzumaki",
            "img": "https://i.siteapi.org/o7LFvgm-tL6ybCKir_1iL5F3fdc=/320x0:1700x2000/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/f2a114360252916.ru/img/lwj9fwwa628ooow4844c8cg8gkcw0k",
            "description": "Фигурка Наруто Узумаки из аниме 'Наруто'. Высота: 20 см. Материал: ПВХ. Официальная лицензированная продукция.",
            "category": "Boys",
            "price": 49.99
          },
          {
            "id": 2,
            "title": "Sailor Moon",
            "img": "https://i.siteapi.org/sPs_c_-HES_0RvJoC2b65wZMLR0=/310x0:910x760/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/5i4od2j3mmsc0owwkc4gkoo4g44w0o",
            "description": "Фигурка Сейлор Мун из одноименного аниме. Высота: 18 см. Материал: ПВХ. В комплекте с аксессуарами.",
            "category": "Girls",
            "price": 59.99
          },
          {
            "id": 3,
            "title": "Totoro",
            "img": "https://avatars.mds.yandex.net/i?id=b8a48f6ca6184737d3b86b197589fa187c0541cd-5325822-images-thumbs&n=13",
            "description": "Большой Тоторо из аниме 'Мой сосед Тоторо'. Высота: 25 см. Материал: Плюш. Официальная продукция Studio Ghibli.",
            "category": "Pet",
            "price": 39.99
          },
          {
            "id": 4,
            "title": "Goku Super Saiyan",
            "img": "https://i.siteapi.org/EfAOcpMN-rPoDOzgi2CtcvXzAA4=/49x13:532x650/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/afv64nagziwc40o88s48wockcgwg8k",
            "description": "Фигурка Гоку в форме Супер Сайяна из аниме 'Dragon Ball'. Высота: 22 см. Материал: ПВХ. Светящиеся эффекты.",
            "category": "Boys",
            "price": 69.99
          },
          {
            "id": 5,
            "title": "Mikasa Ackerman",
            "img": "https://i.siteapi.org/Ga3E-oepVlCwKlrgXCZJhKxDbLE=/470x0:1175x1005/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/f2a114360252916.ru/img/p6bvy9c0ebk040s0oskow8cg488sks",
            "description": "Фигурка Микасы Аккерман из аниме 'Атака Титанов'. Высота: 19 см. Материал: ПВХ. В комплекте с маневренным снаряжением.",
            "category": "Girls",
            "price": 54.99
          },
          {
            "id": 6,
            "title": "Pikachu",
            "img": "https://avatars.mds.yandex.net/i?id=48be69190f711504abc5210491728081b378ac9b-7999331-images-thumbs&n=13",
            "description": "Фигурка Пикачу из аниме 'Покемон'. Высота: 15 см. Материал: ПВХ. Светящиеся щеки. Официальная продукция Pokemon Company.",
            "category": "Pet",
            "price": 29.99
          },
          {
            "id": 7,
            "title": "Tanjiro Kamado",
            "img": "https://i.siteapi.org/VKxdNTtL4N7fk9T1SbjfYZbb-iA=/250x0:1280x1500/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/6wn4v773y1og0oscgks4o4wgcsko4s",
            "description": "Фигурка Танджиро Камадо из аниме 'Клинок, рассекающий демонов'. Высота: 21 см. Материал: ПВХ. В комплекте с мечом.",
            "category": "Boys",
            "price": 64.99
          },
          {
            "id": 8,
            "title": "Zero Two",
            "img": "https://i.siteapi.org/nAJ0CWIIHS1frJFAn5oPA2CZ9nY=/0x0:432x576/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/brr2slatj94w4844484ksc0g48g4kw",
            "description": "Фигурка Зеро Ту из аниме 'Darling in the Franxx'. Высота: 20 см. Материал: ПВХ. Ограниченная серия.",
            "category": "Girls",
            "price": 79.99
          },
          {
            "id": 9,
            "title": "Kuroneko",
            "img": "https://avatars.mds.yandex.net/i?id=3eb911367355dd984f6682dce1142834ed6e41a1-3694967-images-thumbs&n=13",
            "description": "Фигурка Куронеко из аниме 'Oreimo'. Высота: 17 см. Материал: ПВХ. В костюме черной кошки.",
            "category": "Girls",
            "price": 49.99
          },
          {
            "id": 10,
            "title": "Dragon Ball Shenron",
            "img": "https://avatars.mds.yandex.net/i?id=130075b86f21a2ce427c4f129e5e4801e85e4787-5232592-images-thumbs&n=13",
            "description": "Фигурка Шенрона из аниме 'Dragon Ball'. Высота: 30 см. Материал: ПВХ. Светящиеся глаза. Ограниченная серия.",
            "category": "Other",
            "price": 89.99
          },
          {
            "id": 11,
            "title": "Edward Elric",
            "img": "https://i.siteapi.org/XxGglIRyN9IQWr0moOPKhxTWy4M=/300x0:1210x1445/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/aamj3y6revk84cccw0ssow0oc08kww",
            "description": "Фигурка Эдварда Элрика из аниме 'Стальной алхимик'. Высота: 20 см. Материал: ПВХ. В комплекте с алхимическими кругами.",
            "category": "Boys",
            "price": 59.99
          },
          {
            "id": 12,
            "title": "Rem",
            "img": "https://i.siteapi.org/b8RD_tm_ulcRFcvhOTomXvU17MA=/280x0:1220x1500/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/4v31slnvw3y8g0o44sw8cwwwow4400",
            "description": "Фигурка Рем из аниме 'Re:Zero'. Высота: 19 см. Материал: ПВХ. В костюме горничной.",
            "category": "Girls",
            "price": 69.99
          },
          {
            "id": 13,
            "title": "Koro-sensei",
            "img": "https://avatars.mds.yandex.net/i?id=f33e15a6ac19678f536bac88cabdd15864effd4e70da83ee-5309142-images-thumbs&n=13",
            "description": "Фигурка Коро-сенсея из аниме 'Убийца Академии'. Высота: 15 см. Материал: ПВХ. Светящиеся эффекты.",
            "category": "Other",
            "price": 34.99
          },
          {
            "id": 14,
            "title": "Luffy Gear Fourth",
            "img": "https://i.siteapi.org/V4PFQ7Mtx_EuHRELUlK4PjmyCT4=/72x44:500x684/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/f2a114360252916.ru.s.siteapi.org/img/h3pv9dyes740k0ckoo0o4kcggsc0ws",
            "description": "Фигурка Луффи в форме Gear Fourth из аниме 'One Piece'. Высота: 23 см. Материал: ПВХ. Ограниченная серия.",
            "category": "Boys",
            "price": 84.99
          },
          {
            "id": 15,
            "title": "Miku Hatsune",
            "img": "https://i.siteapi.org/5f_tJT-NFPg_81FNBNG6kBolcDc=/520x206:1253x1179/fit-in/250x330/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/f2a114360252916.ru/img/o5jkf2s5etc44kk80sc0s00c8so00k",
            "description": "Фигурка Мику Хацунэ из серии Vocaloid. Высота: 18 см. Материал: ПВХ. В фирменном костюме.",
            "category": "Girls",
            "price": 74.99
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
