import React, {Component} from 'react';
import MenuList from "../MenuList/MenuList";
import DropdownItem from "../DropdownItem/DropdownItem";
import './DropdownList.css';

class DropdownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedMenu: "",
        }
        this.menuList = [
            {
                name: "Account settings",
                includes: [
                    {
                        name: "Profile information",
                        includes: [],
                    },
                    {
                        name: "Change password",
                        includes: [],
                    },
                    {
                        name: "Become PRO",
                        includes: [],
                    },
                    {
                        name: "Help",
                        includes: [],
                    },
                    {
                        name: "Log Out",
                        includes: [],
                    },
                ]
            },
        ];
    }

    changeClickedMenu = targetMenu => {
        if (this.state.clickedMenu === targetMenu) {
            this.setState({clickedMenu: ""})
        } else {
            this.setState({clickedMenu: targetMenu});
        }
    };

    render() {
        const menuListItems = [];
        const dropListItems = [];
        let key = 0;
        for (let menu of this.menuList) {
            menuListItems.push(<MenuList name={menu.name} onClickFunc={this.changeClickedMenu} key={key}/>);
            if (this.state.clickedMenu === menu.name) {
                let key = 0;
                for (let item of menu.includes) {
                    dropListItems.push(<DropdownItem name={item.name} key={key}/>);
                    key++;
                }
            }
            key++;
        }
        const showDropdownItems = dropListItems.length > 0 ? "show" : "";
        return (
            <div className="container">
                <div className="btn-group">
                    {menuListItems}
                    <div className={"dropdown-menu " + showDropdownItems}>
                        {dropListItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default DropdownList;