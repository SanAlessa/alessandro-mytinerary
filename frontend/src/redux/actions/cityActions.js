const cityActions = {
  getCities: ()=> {
    return async (dispatch, getState) => {
      try {
        const response = await fetch('http://localhost:4000/api/cities')
        const data = await response.json()
        dispatch({type: 'GET_CITIES', payload: data.response})
      }catch(error) {
        console.log(error)
      }
    }
  },
  getCity:(id) => {
    return async (dispatch, getState) => {
      dispatch({type: 'GET_CITY', payload: id})
      }
  },

  searchCities: (inputValue) => {
    return async (dispatch, getState) => {
      dispatch({type: 'SEARCH_CITIES', payload: inputValue })
    }
  }
}

export default cityActions
