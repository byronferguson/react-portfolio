import React from 'react';
import Page from '../../components/Page';

export default function Resume() {
  const resume = {
    fullName: 'Byron Ferguson',
    emailAddress: 'ferguson.bs@gmail.com',
    salaryExpectation: 120000,
    about: `Shank bresaola jowl picanha sausage burgdoggen filet mignon cupim capicola sirloin. Brisket tenderloin drumstick, capicola doner tongue hamburger ribeye alcatra. Chuck ground round meatball ribeye tail beef ribs chicken sirloin picanha pig brisket chislic bacon. Sausage beef ham pork loin. Venison pork tail cow. Ham hock jerky ball tip, alcatra meatloaf cow capicola t-bone prosciutto short ribs tenderloin filet mignon. Hamburger beef ribs porchetta chicken, ham hock kevin tri-tip leberkas shank alcatra short loin beef ham pork.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'MySQL', 'Mongo', 'React'],
  };

  return (
    <Page title="Resume">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {resume.fullName}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {resume.emailAddress}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                $ {resume.salaryExpectation.toLocaleString()}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Skills
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md">
                  {resume.skills.map((skill, idx) => (
                    <li
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                      key={idx}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Page>
  );
}
