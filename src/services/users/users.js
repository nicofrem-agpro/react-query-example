import { useQuery } from "react-query";

import { getUsers, getUser } from "./users.requests";

export const useUsers = (opts = {}) =>
  useQuery("users", () => getUsers(), opts);

export const useUser = (id, opts = {}) =>
  useQuery(["users", id], () => getUser(id), opts);
