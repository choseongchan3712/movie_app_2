import fetch from "node-fetch";

const baseUrl: string = "https://api.themoviedb.org/3/";

interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

const options: Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjgxNDNhYWZhNzlmNzBiODg5NDdiYzZhOThhNGNjMCIsIm5iZiI6MTczMDYzNDQ1Mi45MjcwNzg1LCJzdWIiOiI2NzIxYjQ1NTgyNmZlNTc5OWNjNGE3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o1P3UhSBl0rUkG_NQy8unnjvzWzsEi0ZQqMrneH9nhg",
  },
};

const url = (urlName: string) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());
export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());
export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());
export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
