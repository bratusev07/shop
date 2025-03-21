import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Boys',
                    name: 'Мальчики'
                },
                {
                    key: 'Girls',
                    name: 'Девочки'
                },
                {
                    key: 'Pet',
                    name: 'Животные'
                },
                {
                    key: 'Other',
                    name: 'Другое'
                }
            ],
            selectedCategory: 'all'
        }
    }

    componentDidMount() {
        this.props.chooseCategory('all')
    }

    handleCategoryClick = (categoryKey) => {
        this.setState({ selectedCategory: categoryKey })
        this.props.chooseCategory(categoryKey)
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div 
                        key={el.key} 
                        onClick={() => this.handleCategoryClick(el.key)}
                        className={this.state.selectedCategory === el.key ? 'active' : ''}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Categories