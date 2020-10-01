import React from 'react';
import GitHubIcon from '../GitHubIcon';
import LinkedInIcon from '../LinkedInIcon';

export default function Footer() {
  return (
    <footer className="bg-white footer" id="footer">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          <a
            href="//linkedin.com/in/byron-ferguson"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <LinkedInIcon className="h-8 w-8" />
          </a>
          <a
            href="//github.com/byronferguson"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <GitHubIcon className="h-8 w-8" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            © {new Date().getFullYear()} Byron Ferguson All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
