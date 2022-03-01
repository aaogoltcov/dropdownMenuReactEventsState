import React, {Component} from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a className="dropdown-item" href="#">{this.props.name}</a>
            </div>
        );
    }
}

export default DropdownItem;