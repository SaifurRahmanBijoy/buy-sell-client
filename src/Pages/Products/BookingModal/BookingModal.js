import React from "react";

const BookingModal = ({ product, setProduct }) => {
  const { name, resalePrice } = product;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productPrice = form.price.value;
    const location = form.user_location.value;
    const phone = form.phone.value;
    const userName = form.name.value;
    const userEmail = form.email.value;

    const booking = {
      price: productPrice,
      productName: name,
      userLocation: location,
      userPhone: phone,
      userName,
      userEmail,
    };
    console.log(booking);
    setProduct(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          {/* ---- */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <label className="text-xs">Price</label>
            <input
              name="price"
              type="text"
              disabled
              defaultValue={resalePrice}
              className="input w-full input-bordered"
            />
            <input
              name="user_location"
              type="text"
              placeholder="Your Location"
              required
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              required
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              disabled
              placeholder="Your Name"
              //   defaultValue={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="text"
              disabled
              placeholder="Your Email"
              //   defaultValue={user?.email}
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;