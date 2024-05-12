import API from "../config/axiosConfig";

export const get = (id) => {
	id = id || "";
	return API.get(`Wishlist/${id}`);
};

export const add = (body) => {
	return API.post(`Wishlist`, body);
};

export const deleteEventAPI = (id) => {
	return API.delete(`movies/${id}`);
};
