// src/components/SplashPage.tsx
import { useRef } from "react";
import { ChevronDown } from "lucide-react"; // Optional: use lucide icons

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative h-screen w-full bg-gray-900/80 bg-[url('src/assets/cern.jpg')] bg-cover bg-center bg-blend-multiply">
        {/* Dark overlay */}
        {/* <div className=" bg-gray-900/80 bg-[url('/cern.jpg')] bg-blend-multiply bg-cover bg-center absolute inset-0"> */}
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Benefits Physics Institutions Have for New Parents
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            This website is a collection of data about the benefits that US
            institutions with physics programs provide for new parents
          </p>
        </div>

        {/* Scroll Arrow */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      </div>
      {/* </div> */}

      {/* About Section */}
      <div className="min-h-screen flex flex-col justify-between bg-base-100 px-6 pt-32 pb-16">
        <div>
          <div ref={aboutRef} />
          <h2 className="text-center text-3xl font-bold mb-6">About</h2>
          <p className="text-center max-w-2xl mx-auto">
            We are presenting a list of a summary of benefits US institutions
            with physics and astronomy programs provide for international and
            domestic graduate students and postdocs who are parents or planning
            to become parents. This dataset has been collected from available
            online information provided by the institutions. This community
            impact project has been accomplished as part of the Rubin
            Observatory's Legacy Survey of Space and Time{" "}
            <a href="https://lsstdiscoveryalliance.org/" className="underline">
              (LSST) Discovery Alliance
            </a>{" "}
            <a
              href="https://lsstdiscoveryalliance.org/programs/catalyst-fellowship/"
              className="underline"
            >
              Catalyst Postdoctoral Fellowship Program{" "}
            </a>
            in the field of Astronomy and Astrophysics sponsored by the John
            Templeton Foundation.
          </p>
        </div>
        <div>
          <h3 className=" text-center">Questions/Concerns</h3>
          <p className="text-center text-sm max-w-xl mx-auto  text-gray-500">
            If you’d like to suggest updates or improvements to this dataset,
            please contact{" "}
            <a
              href="mailto:khakpash@physics.rutgers.edu"
              className="text-blue-600 underline"
            >
              Somayeh Khakpash
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
