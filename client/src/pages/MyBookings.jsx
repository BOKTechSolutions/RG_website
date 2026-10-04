import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {
  const { axios, getToken, user } = useAppContext();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's bookings
  const fetchUserBookings = async () => {
    try {
      const token = await getToken();

      const { data } = await axios.get('/api/bookings/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Paystack payment
  const handlePayment = async (bookingId) => {
    try {
      const token = await getToken();

      const { data } = await axios.post(
        '/api/bookings/paystack-payment',
        { bookingId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        window.location.href = data.authorization_url;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="py-32 text-center text-lg">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming reservations. Plan your trips seamlessly with just a few clicks."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 font-medium text-base py-3">
          <div>Room Type</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            You have no bookings yet.
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 py-6 first:border-t"
            >
              {/* Room Details */}
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={booking.room?.images?.[0]}
                  alt="room"
                  className="w-full md:w-44 rounded shadow object-cover"
                />

                <div className="flex flex-col gap-1.5">
                  <p className="font-playfair text-2xl">
                    {booking.hotel?.name}
                    <span className="font-inter text-sm">
                      {' '}
                      ({booking.room?.roomType})
                    </span>
                  </p>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                    />
                    <span>{booking.hotel?.address}</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img
                      src={assets.guestsIcon}
                      alt="guests"
                    />
                    <span>Guests: {booking.guests}</span>
                  </div>

                  <p className="text-base font-medium">
                    Total: GH₵{booking.totalPrice * 100}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="flex flex-row md:items-center md:gap-12 mt-4 md:mt-0 gap-8">
                <div>
                  <p>Check-In</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(
                      booking.checkInDate
                    ).toDateString()}
                  </p>
                </div>

                <div>
                  <p>Check-Out</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(
                      booking.checkOutDate
                    ).toDateString()}
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex flex-col justify-center pt-4 md:pt-0">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      booking.isPaid
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  ></div>

                  <p
                    className={`text-sm ${
                      booking.isPaid
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {booking.isPaid ? 'Paid' : 'Unpaid'}
                  </p>
                </div>

                {!booking.isPaid && (
                  <button
                    onClick={() => handlePayment(booking._id)}
                    className="mt-4 px-4 py-2 border rounded-full hover:bg-gray-100 transition"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;