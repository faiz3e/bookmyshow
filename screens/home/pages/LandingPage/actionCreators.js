import { LOAD_GENRE_LIST} from "./actionTypes";

export function getGenreListAction(pageNo) {
	return {
		type: LOAD_GENRE_LIST,
		payload: pageNo
	};
}