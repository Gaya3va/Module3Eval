export const getData = () =>
  JSON.parse(localStorage.getItem("evalData")) || [];

export const setData = (data) =>
  localStorage.setItem("evalData", JSON.stringify(data));
