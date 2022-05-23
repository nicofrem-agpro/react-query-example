const BASE_URL = "http://localhost:3030";

export const getUsers = () =>
  fetch(`${BASE_URL}/users`).then((response) => response.json());

export const getUser = (id) =>
  fetch(`${BASE_URL}/users/${id}`).then((response) => response.json());
