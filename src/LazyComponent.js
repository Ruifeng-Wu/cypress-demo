import React, {Component} from 'react';
import './App.css';

class LazyComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lazyElement: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({lazyElement: true})
        }, 5000);
    }

    render() {
        const {lazyElement} = this.state;
        return (
            <div>lazy component
                {
                    lazyElement ? <div id="list">
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                    </div> : null
                }</div>
        );
    }
}

export default LazyComponent;
