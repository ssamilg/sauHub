import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

// const Header = ({}) => {
//     const {Header} = styles;
//     return (
//         <View style={{flexDirection:'column'}}>
//             <Header>
//                 <Left>
//                     <Icon
//                         name='ios-menu'
//                         onPress={() => 
//                             this.props.navigation.navigate('DrawerOpen')}
//                     />
//                 </Left>
//             </Header>
//         </View>
//     )
// }

const Header = ({ onPress }) => {
    return(
        <Appbar.Header>
        <Appbar.Action
            icon = "menu"
            onPress={onPress}
        />
        <Appbar.Content
            title="Title"
            subtitle="Subtitle"
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
    );
};

export {Header};