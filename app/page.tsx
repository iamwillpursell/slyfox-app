import Image from "next/image"
import FoxLogo from "../public/sly-fox-logo-notext.png"

export default function Home() {
  return (
    <section className="lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
        <Image
          className="mx-auto"
          src={FoxLogo}
          alt="Sly Fox Logo"
          width={250}
          height={300}
          priority
        />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Curated Server Deployment With
            <strong className="text-orange-600"> Intelligence </strong>
            Made Quick and Easy
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
          Getting a server up and running has never been easier. Deploy and manager your instances with ease with our intuitive interface. Kiss confusing dashboard an endless settings goodbye.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block border-2 border-black-600 px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-gray-200"
              href="/login"
            >
              Get Started
            </a>

            <a
              className="inline-block border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
