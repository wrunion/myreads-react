import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

let { Item } = Menu;

export default class NavBar extends Component {
  state = { 
    activeItem: 'bookshelf' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ marginTop: '1.5em' }}>
        <Menu pointing secondary>
          <Item header>MyReads</Item>

          <Menu.Menu position='right'>
            <Item
              name='bookshelf'
              active={activeItem === 'bookshelf'}
              onClick={this.handleItemClick}
              >
              <Icon name='book' />
              Bookshelf
            </Item>
            <Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
              >
              <Icon name='search' />
              Search
            </Item>
          </Menu.Menu>
          
        </Menu>

      </div>
    )
  }
}