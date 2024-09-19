import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section id="use-cases" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Use Cases" paragraph="" center />
        {/* <div className="-mx-4 flex flex-wrap items-center"> */}
        {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div> */}
        <div className="w-full px-4">
          <div className="wow fadeInUp]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                👩‍💻 Bloggers & Writers: Focus on Writing, Not the Chaos
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                You've got brilliant ideas, but the process of managing drafts,
                switching between platforms, and keeping track of deadlines
                feels like herding cats. With Publish Studio, you can plan,
                write, and publish seamlessly.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                💸 Freelancers - Work Smarter, Not Harder
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Manage multiple clients and projects, track progress, and
                deliver polished content quickly. Publish Studio lets you stay
                organized and ahead of deadlines.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                📈 Marketers: Streamline Your Content Strategy
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Creating content that drives traffic and engagement doesn't have
                to be a juggling act. Use the content planner to map out your
                strategy, generate fresh ideas with the Brainstorm Tool, and
                publish across multiple platforms in just a few clicks. Less
                stress, more results!
              </p>
            </div>
            <div className="mb-1">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                🧠 Anyone with Big Ideas: Turn Your Thoughts into Reality
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Have a lot of ideas but no system to bring them to life? Publish
                Studio's tools help you organize, brainstorm, and write—all
                without losing momentum. Whether you're starting a blog,
                building a newsletter, or crafting a new campaign, Publish
                Studio is the space where ideas grow into something great.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSectionTwo;
