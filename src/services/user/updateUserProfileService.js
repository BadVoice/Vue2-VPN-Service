import axios from 'axios';

export const updateUserProfileService = async (userId, token, updatedFields) => {
  try {
    const response = await axios.patch(`${process.env.UPDATE_PROFILE}${userId}`, updatedFields, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status !== 200) {
      console.error('Failed to update user profile');
      return null;
    }

    return response.data.profile;

  } catch(error) {
    console.error('Error updating user profile:', error);
    return null;
  }
};