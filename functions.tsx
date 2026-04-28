import data from "./data.json";

function getData(categoryName: string) {
  return data.find((category) => category.name === categoryName);
}

export default getData;
