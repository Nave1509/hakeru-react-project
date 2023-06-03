import getAll from "./cardService";
import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

setTokenHeader();

export function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function loginUser(credential) {
  const response = await httpService.post("/auth", credential);
  localStorage.setItem(TOKEN_KEY, response.data.token);
  setTokenHeader();
  return response;
}

export function logOut() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export const usersService = {
  createUser,
  loginUser,
  logOut,
  getJWT,
  getUser,
};

export default usersService;
