import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Menu, { MenuItem, MenuDivider} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuComponent extends Component {

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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Menu
                    ref={this.setMenuRef}
                    button={<TouchableOpacity onPress={this.showMenu}><Icon name='reorder-three' size={30}/></TouchableOpacity>}>
                        <MenuItem onPress={this.hideMenu}>최신순</MenuItem>
                        <MenuItem onPress={this.hideMenu}>과거순</MenuItem>
                        {/* <MenuItem onPress={this.hideMenu} disabled>
                            테스트용 메뉴
                        </MenuItem>
                        <MenuDivider/>
                        <MenuItem onPress={this.hideMenu}>나누기 테스트용</MenuItem> */}
                </Menu>
            </View>
        )
    }
}

export default MenuComponent;