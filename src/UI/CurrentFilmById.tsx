import React from 'react';
import {Text} from "react-native";
import {useAppSelector} from "../BLL/store/store";

type CurrentFilmByIdType = {

}

export const CurrentFilmById:React.FC<CurrentFilmByIdType> = () => {
   const id = useAppSelector(state => state.contentReducer.currentId)
    const film = useAppSelector(state =>state.contentReducer.searchFilmById)
    console.log(film)
    return (
        <Text>{film.Actors}</Text>
    );
};

