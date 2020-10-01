import React from 'react';
import GitHubIcon from '../../components/GitHubIcon';
import WebIcon from '../WebIcon';

export default function Project({ project }) {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
      <div className="flex-1 flex flex-col p-8">
        <img
          className="flex-shrink-0 mx-auto bg-black"
          src="https://www.fillmurray.com/640/360"
          alt=""
        />
        <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
          {project.title}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm leading-5">
            {project.description}
          </dd>
        </dl>
      </div>
      <div className="border-t border-gray-200">
        <div className="-mt-px flex">
          <div className="w-0 flex-1 flex border-r border-gray-200">
            <a
              href={project.repo}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <GitHubIcon className="h-8 w-8" />
              <span className="ml-3">Repo</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a
              href={project.url}
              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <WebIcon className="w-6 h-6" />
              <span className="ml-3">URL</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
