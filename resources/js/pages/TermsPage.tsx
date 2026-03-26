import { Head } from '@inertiajs/react';
import React from 'react';

export default function TermsPage() {
  return (
    <>
      <Head title="Terms and Conditions" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to Aventura con Esencia. These terms and conditions outline the rules and regulations for the use of
          Aventura con Esencia's Website, located at example.com.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Aventura
          con Esencia if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
        <p className="mb-4">
          We employ the use of cookies. By accessing Aventura con Esencia, you agreed to use cookies in agreement with
          the Aventura con Esencia's Privacy Policy.
        </p>
        <p className="mb-4">
          Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used
          by our website to enable the functionality of certain areas to make it easier for people visiting our website.
          Some of our affiliate/advertising partners may also use cookies.
        </p>
        {/* More terms could be added here */}
      </div>
    </>
  );
}
