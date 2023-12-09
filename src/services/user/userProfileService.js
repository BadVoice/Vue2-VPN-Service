import axios from 'axios';

export const getUserProfileService = async (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedToken = JSON.parse(atob(base64));

    const userId = decodedToken.id;

    const response = await axios.get(`${process.env.GET_PROFILE}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

     if (response.status !== 200) {
      console.error('Failed to retrieve user profile');
      return null;
    }
    
    return { profile: response.data.profile, userId: userId };

  } catch (error) {
    console.error("Error while getting user information:", error);
    return null;
  }
};