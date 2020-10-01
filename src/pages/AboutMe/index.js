import React from 'react';
import PageHeader from '../../components/PageHeader';
import profile from '../../assets/profile.jpg';
import Page from '../../components/Page';

export default function AboutMe() {
  return (
    <Page title="About Me">
      <div className="flex flex-col items-center md:flex-row">
        <img src={profile} className="w-48 h-48 rounded-full" alt="profile" />
        <p className="mt-6 md:mt-0 md:ml-6">
          Shank bresaola jowl picanha sausage burgdoggen filet mignon cupim
          capicola sirloin. Brisket tenderloin drumstick, capicola doner tongue
          hamburger ribeye alcatra. Chuck ground round meatball ribeye tail beef
          ribs chicken sirloin picanha pig brisket chislic bacon. Sausage beef
          ham pork loin. Venison pork tail cow. Ham hock jerky ball tip, alcatra
          meatloaf cow capicola t-bone prosciutto short ribs tenderloin filet
          mignon. Hamburger beef ribs porchetta chicken, ham hock kevin tri-tip
          leberkas shank alcatra short loin beef ham pork.
        </p>
      </div>
    </Page>
  );
}
