import React from 'react'


export class ListItem extends React.Component {

  render() {
    const { listItem, handleChangeToggle, handleChangeTitle, handleDelete } = this.props
    return (
      <div>
        {
          listItem.map(({ title, index, isCompleted }) => {
            return (
              <li key={index} class="list-group-item  ">
                <input id={index} checked={isCompleted} type="checkbox" onChange={handleChangeToggle} ></input>&nbsp;
                <input id={index} type="text" value={title} onChange={handleChangeTitle} placeholder="typing someting" ></input>
                &nbsp;&nbsp;
                <button
                  class="btn btn-danger btn-sm"
                  id={index}
                  onClick={handleDelete}>
                  Delete
              </button>
              </li>
            )
          })
        }
      </div>
    )
  }
}

