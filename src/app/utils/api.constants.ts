export const BASE_URL = "http://localhost:8081/api";
export const ApiConstants = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
  },
  users: {
    count: `${BASE_URL}/users/count`,
    list: function (page: number = 1, limit: number = 10) {
      return `${BASE_URL}/users?page=${page}&limit=${limit}`;
    },
    update: function (id: string | number) {
      return `${BASE_URL}/users/${id}`;
    },
    delete: function (id: string | number) {
      return `${BASE_URL}/users/${id}`;
    },
    add: `${BASE_URL}/users`,
  },
  artists: {
    list: function (page: number = 1, limit: number = 10) {
      return `${BASE_URL}/users/artists?page=${page}&limit=${limit}`;
    },
    export: `${BASE_URL}/users/export/artists`,
    import: `${BASE_URL}/users/import/artists`,
  },
  musics: {
    list: function (page: number = 1, limit: number = 10, artistid: string | number) {
      console.log("artistid............ ", artistid);
      return `${BASE_URL}/music?page=${page}&limit=${limit}&artistId=${artistid}`;
    },
    update: function (id: string | number) {
      return `${BASE_URL}/music/${id}`;
    },
    delete: function (id: string | number) {
      return `${BASE_URL}/music/${id}`;
    },
    add: `${BASE_URL}/music`,
  },
};
