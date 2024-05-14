import API from "../config/axiosConfig";

export const get = (id) => {
	id = id || "";
	return API.get(`Movies/${id}`);
};

export const add = (body) => {
	console.log("body", body.name);

	return API.post(`Movies`, body);
};
export const update = async (id, data) => {
	const result = await API.put(`Movies/${id}`, data);
	console.log(result.data);
};

export const deleteEventAPI = (id) => {
	return API.delete(`Movies/${id}`);
};

export const addWishlist = (body) => {
	return API.post(`Wishlist`, body);
};

export const getWishlist = (id) => {
	id = id || "";
	return API.get(`Wishlist/${id}`);
};

export const deleteWishlist = (id) => {
	return API.delete(`Wishlist/${id}`);
};
export const deleteAllWishlist = async () => {
	const response = await API.get(`Wishlist`);

	for (const item of response.data) {
		await API.delete(`Wishlist/${item.id}`);
	}
	return true;
};
