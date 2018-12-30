import React, {Component} from 'react';
import { Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icons from 'react-native-vector-icons/Ionicons';

class HeaderMenu extends Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        return (
            <Menu
                ref={this.setMenuRef}
                button={<Icons color="white" size={25} style={{ width: 25 }} name="md-more" onPress={this.showMenu} />}
            >
                <MenuItem onPress={this.hideMenu} disabled>장비1</MenuItem>
                <MenuItem onPress={this.hideMenu}>장비2</MenuItem>
                <MenuItem onPress={this.hideMenu}>
                    장비3
                </MenuItem>
            </Menu>
        );
    }
}

export default HeaderMenu;