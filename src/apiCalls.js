export const fetchApi = (type, id) => {
  if (!id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${type}`)
      .then((response) =>
        response.json())
      .catch(error => console.log('fetch error', error))
  } else {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${type}/${id}`)
      .then((response) =>
        response.json())
      .catch(error => console.log('fetch error', error))
  }
};