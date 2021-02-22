import React,{Component} from 'react'
import TodoItems from './TodoItems'
import './Todo.css'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = {
            tarefa: '' ,
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
   
    addItem(e){
       let state = this.state
       if(this._tarefaInput.value !== ''){
           let newItem = {
               text: this._tarefaInput.value,
               key: Date.now()
           }
         this.setState({items: [...state.items, newItem]})  
       }
       e.preventDefault()
       this.setState({tarefa:''})
    }

    deleteItem(key){
      let filtro = this.state.items.filter((item) => {
          return(item.key !==key)
      })
       this.setState({items: filtro});
    }
    render(){
        return(
            <>
            <div className="container">
            <div className="header">
                
                <h1>Lista de Tarefas</h1>
                 <form onSubmit={this.addItem}>
                     <input type="text" placeholder="Nova Tarefa" name="tarefa" value={this.state.tarefa} onChange={(e) => this.setState({tarefa: e.target.value})}
                     ref={(event) => this._tarefaInput = event}/>
                     <button className="btn" type="submit">Adicionar</button>
                 </form>       
                
            </div>
            <TodoItems lista={this.state.items} delete={this.deleteItem}/>
            </div>
            
               
            </>
        )
    }
}
   



export default TodoList