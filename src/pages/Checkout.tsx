import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
        <div className="mt-10 sm:mt-0 ">
          <div className="md:grid  md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h1 className="text-lg font-medium leading-6 text-gray-900">
                  Billing details
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className=" md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          autoComplete="phone"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 outline-0 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Ha Noi</option>
                          <option>Da Nang</option>
                          <option>Tay Nguyen</option>
                          <option>Ho Chi Minh</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 outline-0 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                        />
                      </div>
                    </div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      Additional information
                    </label>
                    <textarea
                      className="w-full mt-1 col-span-6 outline-0 p-2 h-32 px-3 py-2 text-base text-gray-700 shadow-sm placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      placeholder="Notes abour your order , e.g. special notes for delivery."
                    ></textarea>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#b97c5e] hover:bg-[#b96c4e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-[70px] ml-[30px]">
          <div className="relative mt-4 text-gray-700">
            <input
              className="w-3xl pl-3  pr-8 py-3 outline-0 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="absolute font-serif inset-y-0 left-[180px] flex items-center px-4 font-bold text-white bg-[#b97c5e] rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
              Apply Coupon
            </button>
          </div>
          <div className="border mt-4 p-2 my-2 w-2/3 flex gap-2">
            <img
              style={{ width: "80px" }}
              className=""
              src="https://i.imgur.com/XhsdXpQ.jpg"
              alt=""
            />
            <div className="">
              <p className="font-medium font-serif text-xl">Mug Color</p>
              <p className="text-[#b97c5e] font-serif font-medium text-lg">
                $ 106
              </p>
            </div>
          </div>
          <div className="border p-2 my-2 w-2/3 flex gap-2">
            <img
              style={{ width: "80px" }}
              className=""
              src="https://i.imgur.com/XhsdXpQ.jpg"
              alt=""
            />
            <div className="">
              <p className="font-medium font-serif text-xl">Mug Color</p>
              <p className="text-[#b97c5e] font-serif font-medium text-lg">
                $ 106
              </p>
            </div>
          </div>
          <div className="border p-2 my-2 w-2/3 flex gap-2">
            <img
              style={{ width: "80px" }}
              className=""
              src="https://i.imgur.com/XhsdXpQ.jpg"
              alt=""
            />
            <div className="">
              <p className="font-medium font-serif text-xl">Mug Color</p>
              <p className="text-[#b97c5e] font-serif font-medium text-lg">
                $ 106
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
