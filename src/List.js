import React from 'react'
import { ListItem } from './ListItem.js';

export class List extends React.Component {
    render() {
        const { list ,handleChangeToggle, handleChangeTitle,handleDelete} = this.props
        return (
            <div>
                <li >
                    <ListItem listItem={list}
                    handleChangeToggle={handleChangeToggle}
                    handleChangeTitle={handleChangeTitle}
                    handleDelete={handleDelete} />
                </li>
            </div>
        )
    }
}
