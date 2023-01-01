import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {useState} from "react";
import {Provider} from "react-redux";
import {store, useAppDispatch} from "./src/BLL/store/store";
import {contentThunk} from "./src/BLL/thunk/contentThunk";

export default function defaultApp() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {
    const [text, setText] = useState("");

    const dispatch = useAppDispatch()

    const searchFilmsHandler = () => {
        dispatch(contentThunk({title: text}))
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
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    buttonSend: {
        width: '100%',
        marginTop: 10,
        alignSelf: 'center',
    },
    searchContainer: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        width: '40%'
    }
});
