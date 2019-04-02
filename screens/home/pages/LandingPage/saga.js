// import { LOGIN, LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGOUT_CALL } from "./actionTypes";
import { takeLatest, call, all, put } from "redux-saga/effects";

import { LOAD_GENRE_LIST, LOAD_GENRE_LIST_INITIATED, LOAD_GENRE_LIST_SUCCESS, LOAD_GENRE_LIST_FAILED, MOVIE_LOADING_SUCCESS } from "./actionTypes";
import { genreAPI, movieAPI } from "./api";
import { NUMBER_OF_RECORDS } from "../../../../common/utils/constants";

export function* movieListingSaga() {
	yield takeLatest(LOAD_GENRE_LIST, workerSaga);
}

function* workerSaga(action) {
	try {
		yield put({ type: LOAD_GENRE_LIST_INITIATED });
		const response = yield call(genreAPI);
		const pageNumber = action.payload;
		if (response.genres) {
			let genreListToShow = response.genres.slice((pageNumber - 1) * NUMBER_OF_RECORDS, pageNumber * NUMBER_OF_RECORDS)
			// load the genre according to page no 
			yield put({ type: LOAD_GENRE_LIST_SUCCESS, payload: genreListToShow })
			// create a array of api calls to be exicuted in parallel
			let arr = genreListToShow.map((item) => {
				return call(movieAPI, item.id)
			})
			//yield all api calls required 
			const movies = yield all(arr)
			yield put({ type: MOVIE_LOADING_SUCCESS, payload: movies })
		}
		else {
			yield put({ type: LOAD_GENRE_LIST_FAILED, payload: response.error })
		}
	}
	catch (error) {
		console.log(error)
	}
}

