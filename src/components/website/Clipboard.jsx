import React from "react";
import logo from "../../assets/website/clipboard/logo.svg";
import computer from "../../assets/website/clipboard/image-computer.png";
import notebook from "../../assets/website/clipboard/icon-blacklist.svg";
import preview from "../../assets/website/clipboard/icon-preview.svg";
import text from "../../assets/website/clipboard/icon-text.svg";

const Clipboard = () => {
  return (
    <>
      <section id="landing-page">
        <div className="max-w-6xl mx-auto text-center px-10 mb-40 pt-16">
          {/* logo */}
          <img src={logo} alt="logo" className="mx-auto my-10" />
          {/* text */}
          <h3 className="text-3xl font-bold mb-10">
            A history of everything you copy
          </h3>
          <p className="font-light mb-6">
            Clipboard allows you to track and organize everythibg you copy
            instantly access your clipboard on all your devices
          </p>
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-6">
            <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
              Download for Ios
            </button>
            <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
              Download for Mac
            </button>
          </div>
        </div>
      </section>
      <section id="snippets">
        <div className="max-w-6xl mx-auto text-center my-20">
          <h3 className="text-3xl font-bold">Kepp track of your snippets</h3>
          <p className="max-w-3xl mx-auto font-light mb-24 text-md">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section id="feature">
        <div className="max-w-6xl mx-auto my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                src={computer}
                alt="computer"
                className="md:absolute top-0 right-[50%]"
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 text space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              <div className="flex flex-col items-center text-center space-y-3 md:items-start md:text-left">
                <h3 className="text-md font-bold">Quick Search</h3>
                <p className="font-light text-md">
                  Easily search your snippets by content category, web address,
                  application and more
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 md:items-start md:text-left">
                <h3 className="text-md font-bold">iCloud Sync</h3>
                <p className="font-light text-md">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 md:items-start md:text-left">
                <h3 className="text-md font-bold">Completely History</h3>
                <p className="font-light text-md">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="supercharge">
        <div className="max-w-6xl mx-auto text-center my-20">
          <h3 className="text-3xl font-bold text-strongCyan">
            Supercharge your workflow
          </h3>
          <p className="max-w-3xl mx-auto font-light mb-24 text-md">
            We've got the tools to boots your productivity
          </p>
        </div>
      </section>
      <section className="card-list">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-around space-y-4 md:flex-row md:space-y-0 md:space-x-6 mb-24">
          <div className="flex flex-col items-center justify-between space-y-3 text-center">
            <img src={notebook} alt="notebook" className="w-12" />
            <h5 className="font-bold">Create blacklists</h5>
            <p className="font-light text-md">
              {" "}
              Easily search your snippets by content category, web address,
              application and more.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between space-y-3 text-center">
            <img src={text} alt="notebook" className="w-12" />
            <h5 className="font-bold">Plain text snippets</h5>
            <p className="font-light text-md">
              {" "}
              Remove unwanted formatting form copied text for a consistend look.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between space-y-3 text-center">
            <img src={preview} alt="notebook" className="w-12" />
            <h5 className="font-bold">Sneak preview</h5>
            <p className="font-light text-md">
              {" "}
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clipboard;
