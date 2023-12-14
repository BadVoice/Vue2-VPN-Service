import axios from 'axios';

export const registerUserService = async (email, firstName, lastName, password) => {
  try {
    const response = await axios.post(process.env.REGISTER, {
      email,
      firstName,
      lastName,
      password
    });

    if(response.status !== 201) {
      console.error('Register error');
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Register error:", error.response);
    return null;
  }
};