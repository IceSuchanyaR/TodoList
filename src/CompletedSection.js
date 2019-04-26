import React from 'react';
import { List } from './List.js';


class CompletedSection extends React.Component {
    
    state = {
        isShow : false
    }
    onToggle = () =>{
        this.setState({
           isShow: !this.state.isShow
        })
      
    }
     
    render() {
       const {list, handleChangeToggle,handleChangeTitle, handleDelete} = this.props
        return (
            <div>
                <li class="list-group-item d-flex justify-content-between">
                    <h3>{list.length} Completed</h3>
                    <span class="badge badge-pill App-header"><button type="button" class="btn btn-link" onClick={this.onToggle} >
                    {
                      this.state.isShow ? "Hide" : "Show"
                    }
                    </button></span>   
                </li>
               
                {

                       this.state.isShow && 
                      
                       <List list={list}  
                       handleChangeToggle={handleChangeToggle}
                       handleChangeTitle={handleChangeTitle}
                       handleDelete={handleDelete}/> 
                        
                    }
                  
            </div>
        )
    }
}

export default CompletedSection;