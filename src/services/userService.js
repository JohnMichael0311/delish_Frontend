// import axios from 'axios';

// export const getUser = () =>
//   localStorage.getItem('user')
//     ? JSON.parse(localStorage.getItem('user'))
//     : null;

// export const login = async (email, password) => {
//   const { data } = await axios.post('api/users/login', { email, password });
//   localStorage.setItem('user', JSON.stringify(data));
//   return data;
// };

// export const register = async registerData => {
//   const { data } = await axios.post('api/users/register', registerData);
//   localStorage.setItem('user', JSON.stringify(data));
//   return data;
// };

// export const logout = () => {
//   localStorage.removeItem('user');
// };

// export const updateProfile = async user => {
//   const { data } = await axios.put('/api/users/updateProfile', user);
//   localStorage.setItem('user', JSON.stringify(data));
//   return data;
// };

// export const changePassword = async passwords => {
//   await axios.put('/api/users/changePassword', passwords);
// };

// export const getAll = async searchTerm => {
//   const { data } = await axios.get('/api/users/getAll/' + (searchTerm ?? ''));
//   return data;
// };

// export const toggleBlock = async userId => {
//   const { data } = await axios.put('/api/users/toggleBlock/' + userId);
//   return data;
// };

// export const getById = async userId => {
//   const { data } = await axios.get('/api/users/getById/' + userId);
//   return data;
// };

// export const updateUser = async userData => {
//   const { data } = await axios.put('/api/users/update', userData);
//   return data;
// };


import axios from 'axios';

// Get current user
export const getUser = () =>
  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

// Get stored token
export const getToken = () => localStorage.getItem('token');

// Login
export const login = async (email, password) => {
  const { data } = await axiosInstance.post('/api/users/login', { email, password });
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.token);
  return data.user;
};

// Register
export const register = async registerData => {
  const { data } = await axiosInstance.post('/api/users/register', registerData);
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.token);
  return data.user;
};

// Logout
export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

// Update Profile
export const updateProfile = async user => {
  const { data } = await axiosInstance.put('/api/users/updateProfile', user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

// Change Password
export const changePassword = async passwords => {
  await axiosInstance.put('/api/users/changePassword', passwords);
};

// Admin: Get all users (optional search)
export const getAll = async searchTerm => {
  const { data } = await axiosInstance.get('/api/users/getAll/' + (searchTerm ?? ''));
  return data;
};

// Admin: Toggle user block
export const toggleBlock = async userId => {
  const { data } = await axiosInstance.put('/api/users/toggleBlock/' + userId);
  return data;
};

// Get user by ID
export const getById = async userId => {
  const { data } = await axiosInstance.get('/api/users/getById/' + userId);
  return data;
};

// Update any user (admin)
export const updateUser = async userData => {
  const { data } = await axiosInstance.put('/api/users/update', userData);
  return data;
};

