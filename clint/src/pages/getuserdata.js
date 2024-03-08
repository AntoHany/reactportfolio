async function fetchData() {
  try {
    const response = await fetch('/get/userdata');
    const data = await response.json();
    return data;
  }catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
}

export default fetchData;  
