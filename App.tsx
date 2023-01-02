import {Provider} from "react-redux";
import {store} from "./src/BLL/store/store";
import {SearchContent} from "./src/UI/SeacrhContent";

export default function defaultApp() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {
    return (
        <>
            <SearchContent/>
        </>
    )
}


