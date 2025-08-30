import { FaCheck, FaRegCreditCard, FaChevronDown, FaLock } from "react-icons/fa";

const BookingForm = () => {
  return (
    <form className="space-y-8">
      {/* Contact Detail */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Contact Detail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
          </div>
        </div>

        {/* Styled Checkbox with React Icon */}
        <div className="flex items-start space-x-2 mt-4 text-sm text-gray-700">
          <input id="sms" type="checkbox" className="hidden peer" />
          <div className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-green-600 peer-checked:border-green-600">
            <FaCheck className="text-white text-xs hidden peer-checked:block" />
          </div>
          <label htmlFor="sms" className="cursor-pointer">
            Receive text message update about your booking. Messages rates may apply.
          </label>
        </div>
      </section>

      {/* Payment Section */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Pay with</h2>

        {/* Payment Option Field */}
        <div className="border rounded-md p-3 flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <FaRegCreditCard className="text-gray-500" />
            <span>Credit or debit card</span>
          </div>
          <FaChevronDown className="text-gray-500" />
        </div>

        {/* Card Details */}
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 pr-10 focus:border-green-600 focus:ring-green-600"
              />
              <FaLock className="absolute right-3 top-3 text-gray-400 text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                Expiration date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Billing Address */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Street Address"
            className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Apt or suite number"
            className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="State"
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            />
            <select
              className="block w-full rounded-md border border-gray-300 p-2 focus:border-green-600 focus:ring-green-600"
            >
              <option value="ghana">Ghana</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition"
        >
          Confirm & pay
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
