// import { createStore } from "redux";
// import rootReducer from "./reducers/rootReducer";

// const store = createStore(rootReducer);
// export default store;

import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const makeStore = () => createStore(rootReducer);

export const wrapper = createWrapper(makeStore);
