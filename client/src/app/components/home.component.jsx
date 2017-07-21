import React, {Component} from 'react';
import styles from '../components/user/profile.component.scss';
import pic from './f.png';

// const img = require('./a.jpg');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic : pic
        }
    }

    render() {
        return (
            <div className="rato">
                rato rato rato

                {/*{console.log(pic)}*/}

                {/*<img src={this.state.pic} />*/}

                {/*/!*<Image file={this.state.pic} alt='some text'/>*!/*/}

            </div>

        );
    }
}
export default Home