import React from 'react';
import {SearchContent} from "./SeacrhContent";
import {Content} from "./Content";
import {View} from "react-native";

type SearchAndContentType = {
    navigation:any
}

export const SearchAndContent:React.FC<SearchAndContentType> = ({navigation}) => {
    return (
        <View>
        <SearchContent navigation={navigation}/>
        <Content navigation={navigation}/>
        </View>
    );
};
