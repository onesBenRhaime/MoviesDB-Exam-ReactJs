const initialState = {
	data: [],
	list: [],
	error: "",
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "getData":
			return { ...state, data: action.payload };
		case "getDataWishlist":
			return { ...state, list: action.payload };
		case "addData": {
			console.log(state);
			const newData = state.data;
			newData.push(action.payload);
			console.log(newData);
			return { ...state, data: newData };
		}
		case "updateData": {
			const index = state.data.indexOf(action.payload);

			if (index === -1) {
				const newData = state.data;
				newData[index] = action.payload;
				return { ...state, data: newData };
			}
			return state;
		}
		case "deleteData": {
			const newData = state.data.filter((e) => e.id !== action.payload);
			return { ...state, data: newData };
		}

		case "addDataWishlist": {
			const newData = state.list.filter((e) => e.id !== action.payload);
			return { ...state, list: newData };
		}
		case "deleteallWishlist": {
			return { ...state, list: [] };
		}
		case "deleteDataWishlist": {
			const newData = state.list.filter((e) => e.id !== action.payload);
			return { ...state, list: newData };
		}
		default:
			return state;
	}
};
