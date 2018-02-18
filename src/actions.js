//syntax issue somewhere over here

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

// Sends successful data response to reducer
export function getSuccess(data) {
  //data will be {films: }
  return {
    type: GET_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function starWarsAction(page) {
  return async dispatch => {
    try {
      dispatch(getRequest());

      let dataObj = {};

      // let dataArr = [
      //   "people",
      //   "films",
      //   "planets",
      //   "species",
      //   "starships",
      //   "vehicles"
      // ];

      await fetch(`https://swapi.co/api/people/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["people"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      await fetch("https://swapi.co/api/films")
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["films"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      await fetch(`https://swapi.co/api/planets/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["planets"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      await fetch(`https://swapi.co/api/species/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["species"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      await fetch(`https://swapi.co/api/starships/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["starships"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      await fetch(`https://swapi.co/api/vehicles/?page=${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dataObj["vehicles"] = json.results;
          return json.results;
        })
        .catch(error => {
          dispatch(getFailure(error));
        });

      // for (let i = 0; i < dataArr.length; i++) {
      //   let promise = new Promise((resolve, reject) => {
      //     fetch(`https://swapi.co/api/${dataArr[i]}`)
      //       .then(response => {
      //         if (!response.ok) {
      //           throw new Error(`${response.status} ${response.statusText}`);
      //         }
      //         return response.json();
      //       })
      //       .then(json => {
      //         dataObj[`${dataArr[i]}`] = json.results;
      //         resolve json.results;
      //       })
      //       .catch(error => {
      //         dispatch(getFailure(error));
      //       });
      //   });
      // }

      // await dataArr.forEach( aysnc (data) => {
      //
      //   try {
      //     await fetch(`https://swapi.co/api/${data}`)
      //       .then(response => {
      //         return response.json()
      //       })
      //       .then(json => {
      //         dataObj[`${data}`] = json.results
      //         return null
      //       })
      //       .catch(error => {
      //         dispatch(getFailure(error))
      //       });
      //   }
      //
      //   catch(e){
      //     console.log(e);
      //   }
      //
      // })

      dispatch(getSuccess(dataObj));
    } catch (e) {
      console.log(e);
    }
  };
}
