import React, {Component} from 'react';

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick = evt => {this.props.onClickFunc(evt.target.textContent)};

    render() {
        return (
            <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={this.handleClick}
            >
                {this.props.name}
            </button>
        );
    }
}

export default MenuList;