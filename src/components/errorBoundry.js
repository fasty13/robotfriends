import React,{Component} from 'react';

class errorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render() {
        if (this.state.hasError){
            return <h1>Oooops. Thats not good</h1>
        } 
        return this.props.children;
    }

}


export default errorBoundry;