import React from 'react';
import {useAppSelector} from "../BLL/store/store";
import {FlatList, StyleSheet, View} from "react-native";
import {OneFilmInSearched} from "./oneFilmInSearched";

export const Content = () => {

    const {films} = useAppSelector(state => state.contentReducer)

    const onEndHandler = () => {
        debugger
     return console.log(1)
    }

    return (
        <View>
            <FlatList
                // onRefresh={()=>{
                //    return  alert(2)}}
                columnWrapperStyle={{justifyContent:'center'}}
                numColumns={2}
                data={films}
                renderItem={({item}) => <OneFilmInSearched film={item}/>}
                keyExtractor={item => item.imdbID}
                onEndReachedThreshold={0}
                onEndReached={onEndHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        textAlign: 'center'

    },
    img: {
        width: '100%',
        height: undefined,
        aspectRatio: 90 / 120,
    },
    content: {
        alignItems: 'center',

    },
    title: {
        marginTop: 10,
        textAlign: 'center'
    }
})