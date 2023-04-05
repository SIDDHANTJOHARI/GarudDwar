import CustomAxios from "./CustomAxios"
export const initializeGarudDwarAPI=(data)=>{
    return new Promise((resolve, reject) => {
        CustomAxios
          .post(`/api/garudDwar/initialise`, data)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
 export  const sendEventAPI=(data)=>{
        return new Promise((resolve, reject) => {
            CustomAxios
              .post(`/api/garudDwar/event`, data)
              .then(function (response) {
                resolve(response);
              })
              .catch(function (error) {
                reject(error);
              });
          });
    }
