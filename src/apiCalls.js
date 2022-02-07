// export const fetchApi = (type, id) => {
//   if (!id) {
//     return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${type}`)
//       .then((response) =>
//         response.json())
//       .catch(error => console.log('fetch error', error))
//   } else {
//     return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${type}/${id}`)
//       .then((response) =>
//         response.json())
//       .catch(error => console.log('fetch error', error))
//   }
// };

export const fetchApi = (type, id) => {
  let endPoint;
  if (!id) {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}`
  } else {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}/${id}`
  }
  return fetch(endPoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
};