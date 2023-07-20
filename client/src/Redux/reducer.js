import {
    GET_COUNTRIES,
    GET_BY_NAME,
    CLEAN_DETAIL,
    ADD_ACTIVITIES,
    COUNTRY_DETAIL,
    SET_CURRENT_PAGE,
    FILTER_COUNTRY_CONTINENT,
    FILTER_ACTIVITIES,
    ORDER,
    GET_ACTIVITIES,
    COUNTRY_ACTIVITIES

} from "./actionTypes";

const initialState = {
    Countries: [],
    CountryFilter: [],
    countryDetail: [],  // Por qué lo habian puesto como objeto
    allActivities: [],
    allActivitiesFilter: [],
    activitiesCountries: [],
    currentPage: [] 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                Countries: action.payload,
                CountryFilter: action.payload,
            }

        case GET_BY_NAME: {
            return {
                ...state,
                CountryFilter: action.payload,
            };
        }

        case FILTER_COUNTRY_CONTINENT: {
            const allCountries = [...state.Countries];

            const continentFiltered =
                action.payload === "All"
                    ? allCountries
                    : allCountries.filter(
                        (country) =>
                            country.continent.toLowerCase() === action.payload.toLowerCase()
                    );

            return {
                ...state,
                CountryFilter: continentFiltered,
            };
        }

        case COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: []
            }


        case ADD_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
                allActivitiesFilter: action.payload
            }

        case FILTER_ACTIVITIES: {
            if (action.payload !== "All Activities") {
                const activity = state.allActivities.find(
                    (a) => a.name === action.payload
                );
                if (activity && activity.Countries) {
                    return {
                        ...state,
                        CountryFilter: activity.Countries,
                        allActivitiesFilter: activity.Countries,
                    };
                } else {
                    // No se encuentra el paìs y se devuelve un array vacío
                    return {
                        ...state,
                        CountryFilter: [],
                    };
                }
            }
            return {
                ...state,
                CountryFilter: state.Countries,
            };
        }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };


        case ORDER: {
            const allCount = [...state.CountryFilter];

            if (action.payload === "A") {
                allCount.sort((a, b) => a.name.localeCompare(b.name));
            }
            //localCompare compara los valores name de los objetos y 
            // los ordena alfabeticamente en función de esos valores

            if (action.payload === "D") {
                allCount.sort((a, b) => b.name.localeCompare(a.name));
            }

            if (action.payload === "Less population") {
                allCount.sort((a, b) => a.population - b.population);
            }

            if (action.payload === "More population") {
                allCount.sort((a, b) => b.population - a.population);
            }

            if (action.payload === "All") {
                return {
                    ...state,
                    CountryFilter: [...state.Countries],
                };
            }

            return {
                ...state,
                CountryFilter: allCount,
            };
        }

        case GET_ACTIVITIES: {
            return {
                ...state,
                allActivities: action.payload,
                allActivitiesFilter: action.payload
            };
        }

        case COUNTRY_ACTIVITIES: {
            //Filtra las actividades de los países
            const name = action.payload;
            const activitiesCountries = state.Countries.filter((country) =>
              country.Activities.some((activity) => activity.name.includes(name))
            );
            return {
              ...state,
              activitiesCountries,
            };
        }
        
        default: return { ...state }
    }
}

export default reducer;

