import React from 'react';
import Page from '../../components/Page';

export default function Contact() {
  return (
    <Page title="Contact">
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <form
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            onSubmit={() => {}}
          >
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="first_name"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows="4"
                  className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Let's talk
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
}
