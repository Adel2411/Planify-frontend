import { LoginInputs, RegisterInputs, User } from "../types";

export async function postRegister(data: RegisterInputs) {
  try {
    // register logic here
    return true;
  } catch (e) {
    console.error(e);
  }
}

export async function postLogin(data: LoginInputs) {
  try {
    // login logic here
    return true;
  } catch (e) {
    console.error(e);
  }
}

export async function getCurrentUser() {
  try {
    // get current user logic here
    return true;
  } catch (e) {
    return null;
  }
}

export async function logOut() {
  try {
    // logout logic here
    return true;
  } catch (e) {
    console.error(e);
  }
}
