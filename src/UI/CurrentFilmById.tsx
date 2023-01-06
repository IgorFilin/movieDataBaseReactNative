import React from 'react';
import {Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "../BLL/store/store";
import {SearchFilmByIdType} from "../BLL/types/types";
import {ActivityIndicator, MD2Colors} from "react-native-paper";

type CurrentFilmByIdType = {}

export const CurrentFilmById: React.FC<CurrentFilmByIdType> = () => {
    const film = useAppSelector<SearchFilmByIdType>(state => state.contentReducer.searchFilmById)
    const {isLoadingSearchedFilmById} = useAppSelector(state => state.contentReducer)

    if (isLoadingSearchedFilmById) {
        return <ActivityIndicator style={styles.loader} animating={true} size={'large'} color={MD2Colors.blue600}/>
    }


    return (
        <ScrollView>
            <View style={styles.searchedFilmById}>
                <Image style={styles.imgFilm} source={{uri: film.Poster, width: 250, height: 250}}/>
                <Text style={styles.textContent}>{film.Title}</Text>
                <Text style={styles.textContent}>{film.Actors}</Text>
                <Text style={styles.textContent}>{film.Director}</Text>
                <Text style={styles.textContent}>{film.Language}</Text>
                <Text style={styles.textContent}>{film.Country}</Text>
                <Text style={styles.textContent}>{film.Year}</Text>
                <Text style={styles.textContent}>{film.Plot}</Text>
            </View>
        </ScrollView>
    );
};

export const styles = StyleSheet.create({
    searchedFilmById: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight = 30 : 0,
        margin: 10,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
    },
    textContent: {
        fontSize:17,
        textAlign: 'center',
        padding: 2
    },
    imgFilm: {
        width: 200,
        height: 300,
        marginBottom: 10,
    },
    loader: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },

})