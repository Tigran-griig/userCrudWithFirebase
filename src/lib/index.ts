export const baseConfigs = {
  connection: {
    server_url: "https://identitytoolkit.googleapis.com/v1/",
  },
};

export const adminConfigs = {
  connection: {
    server_url: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
};
