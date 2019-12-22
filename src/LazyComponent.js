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
            <div>
                {
                    lazyElement ? <div id='list'>
                        <li id='a'>a</li>
                        <li>b</li>
                        <li>c</li>
                    </div> : null
                }</div>
        );
    }
}

export default LazyComponent;
