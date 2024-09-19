import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="FAQs"
          paragraph="Some frequently asked questions"
          center
        />
        <div className="w-full px-4">
          <div className="wow fadeInUp]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Do I need to enter my credit card details to sign up?
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                You can sign up for Publish Studio without entering your credit
                card details. But you need to provide your credit card details
                to start the free trial. You can cancel immediately after
                starting free trial if you don't want to automatically get
                charged. Your free trial will still continue until the end of
                the trial period. This is to prevent fraud and ensure that you
                have uninterrupted access to Publish Studio.
              </p>
            </div>
            <div className="mb-1">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                I still don't understand what Publish Studio does.
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Publish Studio is like{" "}
                <Link
                  href={"https://buffer.com"}
                  target="_blank"
                  className="text-primary"
                >
                  Buffer
                </Link>{" "}
                and{" "}
                <Link
                  href={"https://www.hootsuite.com"}
                  target="_blank"
                  className="text-primary"
                >
                  Hootsuite
                </Link>
                , but for blogging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
