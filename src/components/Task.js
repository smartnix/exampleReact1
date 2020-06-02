import React,{Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component
{
    StyleCompleted ()
    {
        return {
            fontSize : '20px',
            color:this.props.task.done?'gray':'black',
            textDecoration: this.props.task.done?'line-through':'none'
        }
    }
    
    render()
    {
        
        return <div style={this.StyleCompleted()}>
            {this.props.task.id} - 
            {this.props.task.title} - 
            {this.props.task.description}
            <input type="checkbox" onChange={this.props.checkDone.bind(this,this.props.task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this,this.props.task.id)}>
                X
            </button>
        </div>
    }
}

Task.ProtoTypes =
{
    task:PropTypes.object.isRequired
}

const btnDelete = 
{
    fontSize:'30px',
    background: '#ea2017',
    color: '#fffff',
    border:'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pinter'
}

export default Task;