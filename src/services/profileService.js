import axios from 'axios';

export default {
  async getUserProfileById(userId) {
    try {
      const userProfileData = await axios.get(`http://185.125.201.105:5000/users/profiles/${userId}`);
      return userProfileData.data;
    } catch (error) {
      throw new Error('Failed to fetch user profile');
    }
  }
};