import { value } from "../../components/ui/TopBar";

export const data = [];
export const data2 = [];

export async function searchResults() {
  //All Result typess
  try {
    await fetch(
      `https://vast-beyond-47209.herokuapp.com/https://api.deezer.com/search?q=${value}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        const results = resData.data;
        for (let value of Object.values(results)) {
          if (data.includes(value) === false) data.push(value);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

export async function playlists() {
  try {
    await fetch(
      `https://vast-beyond-47209.herokuapp.com/https://api.deezer.com/search/playlist?q=${value}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        const results = resData.data;
        for (let value of Object.values(results)) {
          if (data2.includes(value) === false) data2.push(value);
        }
      });
  } catch (error) {
    console.error(error);
  }
}
