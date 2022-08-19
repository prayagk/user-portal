export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

export const initializeAdmin = () => {
  if (getItem("users") === null) {
    setItem("users", [
      {
        id: 1,
        username: "admin",
        password: "admin",
        role: "admin",
      },
    ]);
  }
};
