import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscount } from "../../utils/getDiscount";
import { removeFromCart } from "../../redux/actions/cartSlice";

export default function Cart ({ products }) {
    const [ subtotal, setSubtotal ] = useState(0);

    const cart = useSelector(state => state.cart.data);

    const dispatch = useDispatch();

    const checkoutButton = useRef(null);

    // * Disable checkout button if cart is empty
    useEffect(() => {
        checkoutButton.current.disabled = cart.length === 0 ? true : false;
    }, [cart])

    //* Calculate subtotal and set cart to local storage
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            const product = products.find(product => product.id === item.id);
            if(!product) return acc;
            return acc + (getDiscount(product.price, product.discountPercentage) * item.qty);
        }, 0);
        setSubtotal(sum);
        if(cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        };
    }, [cart, products]);

    const onRemoveItem = (id) => {
        const confirmRemove = window.confirm("Are you sure you want to remove this item from your cart?");
        if(!confirmRemove) return;
        dispatch(removeFromCart(id));
    }

    return (
        <div
        className="sticky top-0 w-screen z-10 max-w-sm h-screen overflow-y-auto border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
        >
            <div className="mt-4 min-h-[calc(100vh-8rem)] flex flex-col justify-between">
                {cart.length === 0 && (
                    <h1 className="text-center text-xl text-gray-300 font-semibold">Your cart is empty</h1>
                )}
                <ul className="space-y-4">
                    {cart.map((item, ind) => {
                        const product = products.find(product => product.id === item.id);
                        if(!product) return null;
                        return (
                    <li key={ind} className="flex items-center gap-4">
                        <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="size-16 rounded-sm object-cover"
                        />
                    
                        <div>
                        <h3 className="text-sm text-gray-900">{product.title.length > 15 ? product.title.slice(0, 15) + "..." : product.title}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                                <dt className="inline">Price : </dt>
                                <dd className="inline">$ {getDiscount(product.price, product.discountPercentage).toFixed(2).toLocaleString("id-ID")}</dd>
                            </div>
                        
                            <div>
                                <dt className="inline">Total : </dt>
                                <dd className="inline"> {(getDiscount(product.price, product.discountPercentage).toFixed(2) * item.qty).toLocaleString("id-ID")}</dd>
                            </div>
                        </dl>
                        </div>
                    
                        <div className="flex flex-1 items-center justify-end gap-2">
                            <form>
                                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                <input
                                type="number"
                                min="1"
                                value={item.qty}
                                id="Line1Qty"
                                className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                disabled
                                />
                            </form>
                        
                            <button onClick={() => onRemoveItem(item.id)} className="text-gray-600 transition hover:text-red-400">
                                <span className="sr-only">Remove item</span>

                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 cursor-pointer"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                                </svg>
                            </button>
                        </div>
                    </li>
                        )
                    })}
                </ul>

                <div>
                    <hr className="opacity-30" />
                    <div className="mt-2 flex justify-between items-center text-gray-700">
                        <b>Subtotal</b>
                        <p className="font-semibold">$ {subtotal.toLocaleString("id-ID")}</p>
                    </div>
                    <div className="space-y-4 text-center mt-8">
                        <button
                            ref={checkoutButton}
                            className="block rounded-sm bg-gray-700 px-5 py-3 w-full text-sm text-gray-100 transition hover:bg-gray-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}