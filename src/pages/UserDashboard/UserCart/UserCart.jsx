/* eslint-disable no-unused-vars */
import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserCart = () => {
  const [cart, refetch] = useCart();
  //calculate total price in user dashboard cart
  let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  // console.log('Total Price: ', cart);
  // decimal point fix
  totalPrice = totalPrice.toFixed(2);
  // console.log('Total Price: ', totalPrice);
  const axiosSecure = useAxiosSecure();
  // delete item from cart
  const handleDelete = (id) => {
    // console.log("Delete Item: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it!",
      confirmButtonColor: "#f87171",
      cancelButtonColor: "#60a5fa",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your item has been deleted from cart.",
                "success"
              );
            } else {
              // Handle the case where the item may not exist or has already been deleted.
              Swal.fire(
                "Oops!",
                "The item you tried to delete was not found.",
                "error"
              );
            }
          })
          .catch((error) => {
            // This will catch any network errors, or errors thrown from the server side.
            console.error("Error deleting item:", error);
            Swal.fire(
              "Error!",
              "There was a problem deleting the item.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-slate-500 font-medium text-center mt-5">
          My Cart
        </h1>
      </div>
      <div className="flex justify-evenly">
        <h2 className="text-2xl text-slate-500 font-medium mt-5">
          Total Items: {cart.length}
        </h2>
        <h2 className="text-2xl text-slate-500 font-medium mt-5">
          Total Price: {totalPrice}$
        </h2>
        <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Pay Now
        </button>
      </div>
      {/* table */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map((item, index) => (
                    <tr key={item._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        <img
                          src={item.image}
                          alt="food"
                          className="w-10 h-10 rounded-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.price}$
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          onClick={() => handleDelete(item._id)}
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <FaTrash className="text-xl text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
