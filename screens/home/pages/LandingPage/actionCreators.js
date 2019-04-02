import { LOAD_GENRE_LIST} from "./actionTypes";

export function getGenreListAction(pageNo) {
	console.log("action is called pageNo:",pageNo);
	return {
		type: LOAD_GENRE_LIST,
		payload: pageNo
	};
}