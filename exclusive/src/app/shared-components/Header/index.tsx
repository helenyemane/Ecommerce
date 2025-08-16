"use client";
import { ChevronDownIcon, HeartIcon, SearchIcon, CartIcon } from "../Icons/index"
export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 shadow-md bg-white">
            <div className="text-white bg-black  text-s font-poppins flex gap-5 items-center py-3">
                <span className="mx-auto">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className=" px-3 underline font-bold ">ShopNow</a>
                </span>
                <button
                    type="button"
                    className="flex  items-center gap-3 cursor-pointer select-none"
                    aria-label="Select Language"
                >
                    English <ChevronDownIcon className="w-4 h-4" />
                </button>
            </div>
            <nav>
                <div className="">
                    <div className="flex justify-between items-center h-25 w-3/4 mx-auto">
                        <div className="f text-3xl font-bold font-poppins text-primary">
                            Exclusive
                        </div>
                        <ul className="flex gap-10 font-poppins">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-primary"
                                >
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                        <div className="hidden md:flex items-center space-x-6 ">
                            <button
                                aria-label="Search"
                                className="hover:text-primary transition cursor-pointer md:flex gap-5 inline-flex items-center border-0 rounded-lg bg-gray-100 px-7 py-2"
                            >
                                <span className="font-light font-poppins text-sm text-gray-600">What are you looking for?</span>
                                <SearchIcon className="w-6 h-6" />
                            </button>
                            <button
                                aria-label="Favorites"
                                className="hover:text-primary transition cursor-pointer"
                            >
                                <HeartIcon className="w-6 h-6" />
                            </button>
                            <button
                                aria-label="Cart"
                                className="hover:text-primary transition cursor-pointer"
                            >
                                <CartIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}