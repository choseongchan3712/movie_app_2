import fetch from "node-fetch";

const baseUrl: string = "https://api.themoviedb.org/3/";

interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
};

const options:Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjgxNDNhYWZhNzlmNzBiODg5NDdiYzZhOThhNGNjMCIsIm5iZiI6MTczMDI2MzAyOS42MjAxNDg0LCJzdWIiOiI2NzIxYjQ1NTgyNmZlNTc5OWNjNGE3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7q59cSNpTBjE4_OUirV4gRcERwvhXu1h1fgbg6aPZ-M",
  },
};

const url = (urlName: string) => baseUrl + `${urlName}?language=ko-kr`;

export const nowPlaying = () => fetch(url("movie/now_playing"), options).then((res)=>res.json());
export const popular = () => fetch(url("movie/popular"), options).then((res)=>res.json());
export const topRated = () => fetch(url("movie/top_rated"), options).then((res)=>res.json());
export const upComing = () => fetch(url("movie/upcoming"), options).then((res)=>res.json());