import { Head } from '@inertiajs/react';
import React from 'react';

export default function PrivacyPage() {
  return (
    <>
      <Head title="Privacy Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Aventura con Esencia, accessible from example.com, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information that is collected and recorded by
          Aventura con Esencia and how we use it.
        </p>
        <p className="mb-4">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to
          contact us.
        </p>
        <p className="mb-4">
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with
          regard to the information that they shared and/or collect in Aventura con Esencia. This policy is not
          applicable to any information collected offline or via channels other than this website.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
        {/* More privacy policy details could be added here */}
      </div>
    </>
  );
}
