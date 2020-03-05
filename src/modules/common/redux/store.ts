import { createStore, combineReducers } from "redux";

let store: any = null;

const CreateStore = (reducers: any) => {
	if(store !== null) throw new Error("Store has already initialized");
	
	store = createStore(combineReducers(reducers));
	return store;
}

const GetStore = () => {
	if(store !== null) return store;
	else throw new Error("Store is null"); 
}

export { 
	CreateStore,
	GetStore
}