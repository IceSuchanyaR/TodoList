import React from 'react'

class Header extends React.Component{
    render() {
      const {handleAdd} = this.props
        return (
          <li class="list-group-item d-flex justify-content-between align-items-center App-header">
         <h1>New List</h1>
          <span class="button button-primary button-pill" onClick = {handleAdd}><button>+</button></span>
        </li>
      
        )
      }
    }
    
    export default Header;
    