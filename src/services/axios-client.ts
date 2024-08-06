import axios, { AxiosInstance } from "axios";

const apiURL = "https://dash.mayrahkeeafrica.com/api";

export const axiosClient = (token: string | null, multiMedia: boolean = false): AxiosInstance => {
  let headers;

  const contentType = multiMedia ? 'multipart/form-data' : "application/json;charset=utf-8"

  if(token){
   headers = {
      "Content-Type": contentType,
      "Authorization": `Bearer ${token}`,
    }
  } else{
    headers = {
      "Content-Type": contentType,
    };
  
  }

  
  const client = axios.create({
    baseURL: apiURL,
    headers,
    timeout: 60000,
    withCredentials: false,
  });

  return client;
};
