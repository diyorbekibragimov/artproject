"use client";
import { useState } from "react";
import TopNav from "../components/TopNav";

const Submit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [googleDocLink, setGoogleDocLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");

    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Google Doc Link:", googleDocLink);

    if (!name || !email || !googleDocLink) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }


    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: googleDocLink,
      }),
    })
      .then((res) => {
        res.json();
        setLoading(false);
        setAlertMessage("Email sent");
      })
      .catch((err) => {
        alert(err);
        setAlertMessage("");
      });
  };

  return (
    <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
      <TopNav alwaysBlack />
      <div className="container mx-auto py-12 p-6 md:p-0 md:py-12">
        <div className="flex flex-col mt-14 flex-wrap">
          <div className="text-6xl mt-4 text-white font-title font-bold">
            Submissions
          </div>
          <div className="flex md:flex-row flex-col w-full">
            <div className="w-full md:w-1/2 uppercase text-lg">
              <p className="mt-10 md:mt-20">
                Here&apos;s where you can submit additional artists from Gaza
                that you know of but didn&apos;t see in the art gallery. To do
                this, create a Google document with the following:
              </p>
              <ul className="list-disc mt-4 md:mt-10">
                <li>A picture of the artist, if available. </li>
                <li> Two high-quality art pieces from each artist. </li>
                <li>
                  {" "}
                  Write an introduction about the artist and what each piece
                  means (100 to 200 words). If possible, try to gather
                  information from their relatives or friends for more insight.
                </li>
                <li>
                  {" "}
                  References are crucial for us to accept your submission.
                </li>
              </ul>
              <p className="mt-3 md:mt-10">
                {" "}
                Feel free to ask if you need further clarification or
                assistance!
              </p>
              <div className="mt-3 md:mt-10 flex flex-col">
                <div className="flex flex-row justify-start items-center">
                  <div className="mr-2 rounded-full bg-white w-8 h-8 text-black text-center p-auto flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <p>+974 5092 7055</p>
                </div>
                <div className="flex flex-row mt-2">
                  <div className="mr-2 rounded-full bg-white w-8 h-8 text-black text-center p-auto flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      className="underline"
                      href="mailto:aquradag@andrew.cmu.edu"
                    >
                      aquradag@andrew.cmu.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:px-4 mt-10 md:mt-0">
              <form onSubmit={handleSubmit} className="text-black font-title">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 rounded-md w-full bg-gray-800 text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 rounded-md w-full bg-gray-800 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="googleDocLink"
                    className="block text-lg font-medium text-white"
                  >
                    Google Document Link
                  </label>
                  <input
                    type="text"
                    id="googleDocLink"
                    className="mt-1 p-2 rounded-md w-full bg-gray-800 text-white"
                    value={googleDocLink}
                    onChange={(e) => setGoogleDocLink(e.target.value)}
                  />
                </div>
                <div>
                  <p className="text-green-500">{alertMessage}</p>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-4 py-2 bg-[#ddd] text-black rounded-md"
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Submit Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
