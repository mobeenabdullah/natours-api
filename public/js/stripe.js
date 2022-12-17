/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_AcrfINvJUuLsyL1KBblvESFi');

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });

    // 3) Create session as response
    res.status(200).json({
      status: 'success',
      session,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
