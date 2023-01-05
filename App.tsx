import {Provider} from "react-redux";
import {store, useAppSelector} from "./src/BLL/store/store";
import {ActivityIndicator, MD2Colors} from "react-native-paper";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SearchAndContent} from "./src/UI/SearchAndContent";
import {CurrentFilmById} from "./src/UI/CurrentFilmById";
import {useState} from "react";

export default function defaultApp() {


    return(
            <Provider store={store}>
                <App/>
            </Provider>
    )
}

function App() {
     const [id,changeTitle] = useState('t')

    const {isLoading} = useAppSelector(state => state.contentReducer)

    const Stack = createNativeStackNavigator();



    if (isLoading) {
        return <ActivityIndicator style={styles.loader} animating={true} size={'large'} color={MD2Colors.blue600}/>
    }
    return (

        <SafeAreaView style={styles.global}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'SearchContainer'} screenOptions={{ headerTitleAlign:"center"}}>
                    <Stack.Screen
                        options={{title: 'Welcome movies data base'}}
                        name="SearchContainer"
                        component={SearchAndContent}
                    />
                    <Stack.Screen  name={'Title'} component={CurrentFilmById} />
                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    global: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height: '100%',
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

