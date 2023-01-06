import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../BLL/store/store";
import {FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View} from "react-native";
import {OneFilmInSearched} from "./oneFilmInSearched";
import {contentThunk} from "../BLL/thunk/contentThunk";
import {contentSlice} from "../BLL/reducer/content-reducer";
import {ActivityIndicator, Button, MD2Colors} from "react-native-paper";


type ContentTypeProps = {
    navigation:any
}

export const Content:React.FC<ContentTypeProps> = ({navigation}) => {
    const [onButtonUp,setOnButtonUp] = useState(false)

    const {films,page,searchTitle} = useAppSelector(state => state.contentReducer)
    const flatListRef = React.useRef<any>()

    const {isLoading} = useAppSelector(state => state.contentReducer)

    const dispatch = useAppDispatch()

    const onEndHandler = async () => {
        await dispatch(contentSlice.actions.changePage())
        dispatch(contentThunk({title:searchTitle,page}))
    }

    const onScrollHandler = (e:NativeSyntheticEvent<NativeScrollEvent>) => {
        if(e.nativeEvent.contentOffset.y > 500){
            setOnButtonUp(true)
        }
        if(e.nativeEvent.contentOffset.y < 500 && onButtonUp){
            setOnButtonUp(false)
        }
    }

    const onPressHandler = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    if (isLoading) {
        return <ActivityIndicator style={styles.loader} animating={true} size={'large'} color={MD2Colors.blue600}/>
    }
    return (
        <View>
            <FlatList
                ref={flatListRef}
                contentContainerStyle={{ alignItems:"center"}}
                onScroll={onScrollHandler}
                data={films}
                renderItem={({item}) => <OneFilmInSearched  navigation={navigation} film={item} />}
                keyExtractor={item => item.imdbID}
                onEndReachedThreshold={0.4}
                onEndReached={onEndHandler}
                scrollsToTop
            />
            { onButtonUp && <Button  labelStyle={{ color: "white", fontSize: 15 }} onPress={onPressHandler} style={styles.upScrollButton}>Up</Button>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        textAlign: 'center'

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
        top:22,
        right:'10%',
        backgroundColor:'#325DF4',
        color:'white',
    },
    loader: {
        position: 'relative',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },

})