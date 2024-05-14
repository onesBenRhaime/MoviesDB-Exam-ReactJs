export const getData = (events) => ({
	type: "getData",
	payload: events,
});

export const addData = (item) => ({
	type: "addData",
	payload: item,
});

export const updateData = (item) => ({
	type: "updateData",
	payload: item,
});

export const deletData = (id) => ({
	type: "deleteData",
	payload: id,
});

export const addDataWishlist = (list) => ({
	type: "addDataWishlist",
	payload: list,
});
export const getDataWishlist = (list) => ({
	type: "getDataWishlist",
	payload: list,
});

export const deleteallWishlist = () => ({
	type: "deleteallWishlist",
});
export const deleteDataWishlist = (id) => ({
	type: "deleteDataWishlist",
	payload: id,
});
