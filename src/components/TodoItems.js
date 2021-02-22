import React, { Component} from 'react'
import './Todo.css'

class TodoItems extends Component {
    constructor(props) {
        super(props)
        this.state ={

        }
        this.delete = this.delete.bind(this)
    }

    delete(key){
        this.props.delete(key)
    }
    render(){
        return(
            <>
            <div className="ul-container">
                <ul>
                    {this.props.lista.map((item) => {
                        return(
                            <li onClick={() => this.delete(item.key)} key={item.key}>{item.text} <i class="fas fa-trash-alt"></i></li>
                        )
                    })}
                </ul>
            </div>
            </>
        )
    }
}

export default TodoItems;