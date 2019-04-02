import { apiKey, baseURL } from "../../../../common/utils/config";
 
export const genreAPI = async () => {
	const authData = {
		method: 'GET',
	}
	const response = await fetch(`${baseURL}movie/list${apiKey}`);
	const resp = await response.json();
	if (resp.error) {
		return resp.error
	} else {
		return resp
	}
}


export const movieAPI = async (id=28) => {	
	const authData = {
		method: 'GET',
	}
	const response = await fetch(`${baseURL} ${id}/movies${apiKey}`);
	const resp = await response.json();
	if (resp.error) {
		return resp.error
	} else {
		return resp
	}
}