export default function Contact() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    console.log(data);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Your response has been received!");
    } else {
      alert("There was an error. Please try again in a while.");
    }
  };

  return (
    <div className="py-12 mt-16 bg-gray-100 min-h-screen">
      <div className="">
        <p className="text-3xl text-center font-bold">Contact Us</p>
      </div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 my-auto">
              <span className="text-3xl font-bold">
                We&apos;d love to hear from you
              </span>
              <p className="max-w-xl mt-2 text-lg">
                Whether you have a question about features, trials, pricing,
                need a demo, or anything else, our team is ready to answer all
                your questions.
              </p>

              <div className="mt-8 text-md">
                <address className="mt-2 not-italic">
                  282 Lake Brook Dr. <br />
                  Houston, TX 77096
                </address>
                <a href="" className="text-blue-600">
                  713-444-4444
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={4}
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                  >
                    <span className="font-medium"> Send Inquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
