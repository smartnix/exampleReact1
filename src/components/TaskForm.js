import React, {Component} from 'react';

export default class TaskForm extends Component
{
    state = {
        title:'',
        description:''
    }
    
    onSubmit = (e) =>
    {
        //console.log(e);
        e.preventDefault(); //
        this.props.addTask(this.state.title,this.state.description);
    }

    onChange = (e) =>{
       //console.log(e.target.value);
       this.setState({
           [e.target.name]: e.target.value,
           
       })
    }
    render()
    {
       
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="task" onChange={this.onChange} value={this.state.title}/>
                <br/><br/>
                <textarea placeholder="Write a description" name="description" onChange={this.onChange} value={this.state.description}></textarea>
                <br/>
                
                <input type="submit" />
            </form>
        )
    }
}

