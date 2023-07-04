import axios from "axios";
async function fetchData (url: string): Promise<any> {
  try {
    const response = await axios({
      url ,
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
    return response
  } catch (e) {
    console.log("Could not fetch data", e);
  }
}
async function fetchSingleData (url: string): Promise<any> {
  try {
    const response = await axios({
      url: `${url}` ,
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
    return response
  } catch (e) {
    console.log("Could not fetch data", e);
  }
}
export { fetchData, fetchSingleData };
