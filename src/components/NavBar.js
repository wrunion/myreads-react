import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

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
              as={Link}
              to='/bookshelf'
              name='bookshelf'
              active={activeItem === 'bookshelf'}
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