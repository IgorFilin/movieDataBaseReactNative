import {Provider} from "react-redux";
import {store, useAppDispatch, useAppSelector} from "./src/BLL/store/store";
import {SearchContent} from "./src/UI/SeacrhContent";
import {ActivityIndicator, MD2Colors} from "react-native-paper";
import {ScrollView, StyleSheet, View} from "react-native";
import {Content} from "./src/UI/Content";
import {useState} from "react";
import {contentThunk} from "./src/BLL/thunk/contentThunk";

export default function defaultApp() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {
    const {isLoading} = useAppSelector(state => state.contentReducer)

    if (isLoading) {
        return <ActivityIndicator style={styles.loader} animating={true} size={'large'} color={MD2Colors.blue600}/>
    }
    return (
            <View style={styles.global}>
                <SearchContent />
                <Content />
            </View>
    )
}

const styles = StyleSheet.create({
    global: {
        width: '100%',
        height: '100%'
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


