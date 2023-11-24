/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, price, recipe, image, category, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const form = location.state?.form?.pathname || "/";

  const handleAddToCart = (food) => {
    // console.log(food, user.displayName, user.email);
    if (user && user.displayName && user.email) {
      // send cart items to backend
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        // send data to cart
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${name} Added to Cart`,
            text: "Your item added to cart successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update cart items in navbar
          refetch();
        }
      });
    } else {
      // redirect to login page
      Swal.fire({
        tite: "Please Login First to add items to cart",
        title: "You are not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user to login page
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mt-5">
      <img className="w-full h-auto rounded-t-xl" src={image} alt={name} />
      <div className="p-4 md:p-5">
        <p className="mt-1 text-blue-500 dark:text-gray-400">{category}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {name}
          </h3>
          <h3 className="text-base font-bold text-gray-800 dark:text-white">
            {price} $
          </h3>
        </div>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{recipe}</p>

        <a
          onClick={() => handleAddToCart(item)}
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#153E3D] text-white hover:bg-[#BDC6C5]disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 uppercase cursor-pointer"
        >
          Add To Cart
        </a>
      </div>
    </div>
  );
};

export default FoodCard;
