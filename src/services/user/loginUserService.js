import axios from 'axios';

export const loginUserService = async (email, password) => {
  try {
    const response = await axios.post(process.env.LOGIN, {
      email,
      password
    });

    if(response.status !== 201) {
      console.error('Login error');
      return null;
    }

    return response.data.access_token;
  } catch (error) {
    console.error("Login error:", error.response);
    return null;
  }
};