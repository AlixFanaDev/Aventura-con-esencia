import { Head } from '@inertiajs/react';
import React from 'react';

export default function CookiesPage() {
  return (
    <>
      <Head title="Cookies Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
        <p className="mb-4">
          This Cookies Policy explains what cookies are and how we use them, the types of cookies we use i.e, what
          information we collect using cookies and how that information is used, and how to manage the cookie settings.
        </p>
        <p className="mb-4">
          Cookies are small text files that are used to store small pieces of information. They are stored on your device
          when the website is loaded on your browser. These cookies help us to make the website function properly, make
          it more secure, provide better user experience, and understand how the website performs and to analyze what
          works and where it needs improvement.
        </p>
        <h2 className="text-2xl font-semibold mb-3">How we use cookies</h2>
        <p className="mb-4">
          As most of the online services, our website uses first-party and third-party cookies for several purposes.
          First-party cookies are mostly necessary for the website to function the right way, and they do not collect any
          of your personally identifiable data.
        </p>
        <p className="mb-4">
          The third-party cookies used on our website are mainly for understanding how the website performs, how you
          interact with our website, keeping our services secure, providing advertisements that are relevant to you,
          and all in all providing you with a better and improved user experience and help speed up your future
          interactions with our website.
        </p>
        {/* More cookie policy details could be added here */}
      </div>
    </>
  );
}
