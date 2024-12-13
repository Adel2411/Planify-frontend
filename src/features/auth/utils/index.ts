import { apiFetch } from "@/api/apiFetch";
import { AuthResponse, LoginInputs, RegisterInputs, User } from "../types";

export async function postRegister(
  data: RegisterInputs,
): Promise<AuthResponse> {
  const { fullName, email, password } = data;
  return apiFetch("/register", {
    method: "POST",
    body: JSON.stringify({ fullName, email, password }),
  });
}

export async function postLogin(data: LoginInputs): Promise<AuthResponse> {
  return apiFetch("/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getCurrentUser(): Promise<User> {
  return await apiFetch("/user");
}

export async function logOut(): Promise<AuthResponse> {
  return await apiFetch("/logout");
}

// export async function postRegister(data: RegisterInputs) {
//   try {
//     const { fullName, email, password } = data;
//     const body = JSON.stringify({ fullName, email, password });
//     const response: AuthResponse = await fetch("/register", {
//       method: "POST",
//       body,
//     });
//     return response.message;
//   } catch (e) {
//     console.error(e);
//   }
// }
//
// export async function postLogin(data: LoginInputs) {
//   try {
//     const body = JSON.stringify(data);
//     const response: AuthResponse = await apiFetch("/login", {
//       method: "POST",
//       body,
//     });
//     return response.message;
//   } catch (e) {
//     console.error(e);
//   }
// }
//
// export async function getCurrentUser() {
//   try {
//     const response: User = await apiFetch("/user");
//     return response;
//   } catch (e) {
//     return null;
//   }
// }
//
// export async function logOut() {
//   try {
//     const response = await apiFetch("/logout");
//     return response.message;
//   } catch (e) {
//     console.error(e);
//   }
// }
