export const createTool = async () => {
  let response = await fetch('https://fierce-shelf-58751.herokuapp.com/tools');
  let data = await response.json();

  return data;
}
