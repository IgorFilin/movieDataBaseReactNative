import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Platform, StatusBar} from "react-native";
import {useAppSelector} from "../BLL/store/store";
import {SearchFilmByIdType} from "../BLL/types/types";
import { WebView } from 'react-native-webview';

type CurrentFilmByIdType = {

}

export const CurrentFilmById:React.FC<CurrentFilmByIdType> = () => {


    const film = useAppSelector<SearchFilmByIdType>(state => state.contentReducer.searchFilmById)
    return (
        <ScrollView>
        <View style={styles.searchedFilmById}>
            <Image style={styles.imgFilm}  source={{uri:film.Poster,width:250,height:250}}/>
        <Text style={styles.textContent}>{film.Actors}</Text>
        <Text style={styles.textContent}>{film.Year}</Text>
        <Text style={styles.textContent}>{film.Country}</Text>
        <Text style={styles.textContent}>{film.Website}</Text>
        <Text style={styles.textContent}>{film.Plot}</Text>
        <Text style={styles.textContent}>{film.Writer}</Text>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    searchedFilmById:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight = 30 : 0,
        margin:10,
        padding:5,
        display:'flex',
        alignItems:'center',
    },
    textContent:{
        textAlign:'center',
        padding:2
    },
    imgFilm:{
        width:200,
        height:300,
        marginBottom:10,
    }

})