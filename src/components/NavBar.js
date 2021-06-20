// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'

// export default class NavBar extends Component {
//   state = { activeItem: 'bio' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu tabular>

//         <Menu.Item
//           name='Bookshelf'
//           active={activeItem === 'bio'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='Add Book'
//           active={activeItem === 'photos'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='Search'
//           active={activeItem === 'photos'}
//           onClick={this.handleItemClick}
//         />

//       </Menu>
//     )
//   }
// }

import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ margin: '1.5em 0 0 0' }}>
        <Menu pointing secondary>
          <Menu.Item
            name='Bookshelf'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item
            name='Add Book'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item
            name='Search'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment>
          {this.props.children}
        </Segment>
      </div>
    )
  }
}