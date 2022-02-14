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