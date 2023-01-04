import React, {useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../BLL/store/store";
import {FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View} from "react-native";
import {OneFilmInSearched} from "./oneFilmInSearched";
import {contentThunk} from "../BLL/thunk/contentThunk";
import {contentSlice} from "../BLL/reducer/content-reducer";
import {Button, IconButton} from "react-native-paper";

type ContentTypeProps = {

}

export const Content:React.FC<ContentTypeProps> = () => {
    const [onButtonUp,setOnButtonUp] = useState(true)
    console.log(onButtonUp)
    const {films,page,searchTitle} = useAppSelector(state => state.contentReducer)



    const dispatch = useAppDispatch()
    const onEndHandler = async () => {
        await dispatch(contentSlice.actions.changePage())
        dispatch(contentThunk({title:searchTitle,page}))
    }
    const onScrollHandler = (e:NativeSyntheticEvent<NativeScrollEvent>) => {
        if(e.nativeEvent.contentOffset.y > 500){
            setOnButtonUp(true)
        }
    }



    return (
        <View>
            <FlatList
                onScroll={onScrollHandler}
                columnWrapperStyle={{justifyContent:'center'}}
                numColumns={2}
                data={films}
                renderItem={({item}) => <OneFilmInSearched film={item}/>}
                keyExtractor={item => item.imdbID}
                onEndReachedThreshold={0.4}
                onEndReached={onEndHandler}
            />
            { onButtonUp && <IconButton style={styles.upScrollButton} icon={'camera'}></IconButton>}
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
    },
    upScrollButton:{
        position:"absolute",
        top:-112,
        right:'10%',
    }

})