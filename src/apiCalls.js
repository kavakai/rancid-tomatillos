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

export const fetchApi = (type, id, category) => {
  let endPoint;
  if (!id && !category) {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}`
  } else if (!category) {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}/${id}`
  } else {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}/${id}/${category}`;
  }
  return fetch(endPoint)
};