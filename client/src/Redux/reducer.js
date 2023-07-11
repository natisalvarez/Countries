import {
    ADD_ACTIVITIES,
    COUNTRY_DETAIL,
    GET_COUNTRIES,
    SEARCH_COUNTRIES
} from "./actionTypes";

const initialState = {
    allCountries: [],
    allCountriesFilter: [],
    countryDetail: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }

        case SEARCH_COUNTRIES:

            return {
                ...state,
                allCountriesFilter: action.payload
            }

        case ADD_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
                allActivitiesFilter: action.payload
            }

        case COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }

        default: return { ...state }
    }
}

export default reducer;