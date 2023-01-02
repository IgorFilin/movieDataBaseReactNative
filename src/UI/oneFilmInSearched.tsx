import React from 'react';
import {Card, Title} from "react-native-paper";
import {Image, StyleSheet} from "react-native";
import {SearchTitleOneFilmType} from "../BLL/types/types";

type OneFilmInSearchedType = {
    film:SearchTitleOneFilmType
}

export const OneFilmInSearched:React.FC<OneFilmInSearchedType> = ({film}) => {
    return (
        <Card style={{width: 220, margin:10,}} key={film.imdbID}>
            <Card.Content style={{...styles.content}}>
                <Image style={styles.img} source={{uri:film.Poster}}/>
                <Title style={styles.title}>{film.Title}
                </Title>
                <Title style={styles.title}>{film.Year}
                </Title>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        textAlign: 'center'

    },
    img: {
        width: 190,
        height: 280,
        aspectRatio: 40 / 80,
    },
    content: {
        alignItems: 'center',

    },
    title: {
        marginTop: 10,
        textAlign: 'center'
    }
})