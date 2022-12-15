/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

exports.updateData = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Data updated successfully!');
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
