import React, {useState} from 'react';
import {Keyboard, StyleSheet, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useAppDispatch} from "../BLL/store/store";
import {contentThunk} from "../BLL/thunk/contentThunk";

type SearchContentPropsType = {

}

export const SearchContent:React.FC<SearchContentPropsType> = () => {

    const [text, setText] = useState("");


    const dispatch = useAppDispatch()

    const searchFilmsHandler = () => {
        dispatch(contentThunk({title: text,page:1}))
        setText('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput label="Search films"
                           value={text}
                           onChangeText={text => setText(text)}/>

                <Button style={styles.buttonSend} mode="contained" onPress={searchFilmsHandler}>
                    Send Search
                </Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchContainer: {
        marginTop: 30,
        marginBottom:10,
        display: 'flex',
        justifyContent: 'center',
        width: '40%'
    },
    buttonSend: {
        width: '100%',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor:'#325DF4'
    },

});
