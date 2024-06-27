import React, {component} from "react";



class ErrorBoundry extends component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }
      componentDidCatch(error, info) {
        this.setstate({hasError: true})
      }

    render() {
        if (this.state.hasError) {
            return <h1>OOPS NOT GOOOOOD!!</h1>
        } 
        return this.props.children
     }
}


export default ErrorBoundry;