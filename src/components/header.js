

import React from 'react';
import {Appbar} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from 'react-native';

const AppbarHeader=({scene,navigation})=>{
    return (
        <Appbar.Header>
            {
                navigation.canGoBack()?
                (
                    <Appbar.BackAction onPress={()=> navigation.pop()}/>
                )
                :
                <View></View>
            }
            <Appbar.Content title='Menu' style={{alignItems: 'center'}}/>
        </Appbar.Header>
    )
};

export default AppbarHeader;