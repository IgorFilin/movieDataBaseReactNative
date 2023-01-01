import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import {useState} from "react";
import {Provider} from "react-redux";
import {store} from "./src/BLL/store/store";

export default function App() {
    const [text, setText] = useState("");

    const searchFilmsHandler = () => {

    }

    return (
        <Provider store={store}>
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
        </Provider>
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
