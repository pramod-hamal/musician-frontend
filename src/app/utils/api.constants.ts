export const BASE_URL = "http://localhost:8081/api";
export const ApiConstants = {
  users: {
    count: `${BASE_URL}/users/count`,
    list: function (page: number = 1, limit: number = 10) {
      return `${BASE_URL}/users?page=${page}&limit=${limit}`;
    },
    update: function(id: string | number) {
      return `${BASE_URL}/users/${id}`;
    },
    delete: `${BASE_URL}/users`,
    add: `${BASE_URL}/users`,
  },
};
