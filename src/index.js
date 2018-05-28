import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import { addComment } from "./action";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

store.dispatch(addComment("Pierwszy komentarz"));
store.dispatch(addComment("Drugi komentarz"));
