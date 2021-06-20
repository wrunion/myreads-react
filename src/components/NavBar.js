import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
let { Item } = Menu;

const NavBar = () => {

  return (
    <div style={{ marginTop: '1.5em' }}>
      <Menu pointing secondary>
        <Item header>MyReads</Item>

        <Menu.Menu position='right'>
          <Item
            as={NavLink}
            to='/bookshelf'
            >
            <Icon name='book' />
            Bookshelf
          </Item>
          <Item
            as={NavLink}
            to='/search'
            >
            <Icon name='search' />
            Search
          </Item>
        </Menu.Menu>  

      </Menu>
    </div>
  )
}

export default NavBar;