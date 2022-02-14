export const fetchApi = (type, id) => {
  let endPoint;
  if (!id) {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}`
  } else {
    endPoint = `https://rancid-tomatillos.herokuapp.com/api/v2/${type}/${id}`
  }
  return fetch(endPoint)
};