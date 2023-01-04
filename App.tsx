import {Provider} from "react-redux";
import {store, useAppSelector} from "./src/BLL/store/store";
import {SearchContent} from "./src/UI/SeacrhContent";
import {ActivityIndicator, MD2Colors} from "react-native-paper";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {Content} from "./src/UI/Content"

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
            <SafeAreaView style={styles.global}>
                <SearchContent />
                <Content />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    global: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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

