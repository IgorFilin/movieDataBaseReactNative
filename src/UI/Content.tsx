import React from 'react';
import {useAppDispatch, useAppSelector} from "../BLL/store/store";
import {FlatList, StyleSheet, View} from "react-native";
import {OneFilmInSearched} from "./oneFilmInSearched";
import {contentThunk} from "../BLL/thunk/contentThunk";

type ContentTypeProps = {

}

export const Content:React.FC<ContentTypeProps> = () => {

    const {films,page} = useAppSelector(state => state.contentReducer)

    const dispatch = useAppDispatch()

    const onEndHandler = () => {
        // dispatch(contentThunk())
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