import React,{Component} from 'react';

class CompontentUno extends Component
{
    state = 
    {
        show:true
    }

    cambiarEstado = () =>
    {
        this.setState({show:false});
    }

    render ()
    {
        if(this.state.show){
            return (
            
                <div id="hello">
                    <h3>{this.props.subtitle}</h3>
                    {this.props.mytext}
                    <button onClick={this.cambiarEstado()} >Cambiar</button>
                </div> 
            );
        }
        else
        {
            return <h1>No elementos</h1>
        }
    };
}

export default CompontentUno;