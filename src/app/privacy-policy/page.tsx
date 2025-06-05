import type { Metadata } from "next";

import { Heading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.pages.privacyPolicy.title,
  description: siteConfig.pages.privacyPolicy.description,
};

export const Section = ({
  children,
  ...props
}: Readonly<React.HTMLAttributes<HTMLElement>>) => {
  return (
    <section className="space-y-4" {...props}>
      {children}
    </section>
  );
};

export const List = ({
  children,
}: Readonly<React.HTMLAttributes<HTMLElement>>) => {
  return <ul className="list-inside list-disc pl-4">{children}</ul>;
};

export default function PrivacyPolicyPage() {
  return (
    <div className="p-10 space-y-8">
      <Section>
        <Heading>PRIVACY POLICY</Heading>
        <p className="text-xs font-bold">Last updated August 16, 2024</p>
      </Section>
      <Section>
        <p>
          This privacy notice for Publish Studio ({""}
          <strong>&quot;we,&quot; &quot;us,&quot;</strong> or{" "}
          <strong>&quot;our&quot;</strong>), describes how and why we might
          collect, store, use, and/or share ({""}
          <strong>&quot;process&quot;</strong>) your information when you use
          our services (<strong>&quot;Services&quot;</strong>), such as when
          you:
        </p>
        <List>
          <li>
            Visit our website at{" "}
            <LinkButton href={siteConfig.url}>{siteConfig.url}</LinkButton>, or
            any website of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </List>
        <p>
          <strong>Questions or concerns?</strong> Reading this privacy notice
          will help you understand your privacy rights and choices. If you do
          not agree with our policies and practices, please do not use our
          Services. If you still have any questions or concerns, please contact
          us at support@publishstudio.one.
        </p>
      </Section>
      <Section>
        <Heading level={2}>SUMMARY OF KEY POINTS</Heading>
        <p className="font-bold italic">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our{" "}
          <LinkButton href="#toc" target="_parent">
            table of contents
          </LinkButton>{" "}
          below to find the section you are looking for.
        </p>
        <p>
          <strong>What personal information do we process?</strong> When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use.
        </p>
        <p>
          <strong>Do we process any sensitive personal information?</strong> We
          do not process sensitive information.
        </p>
        <p>
          <strong>Do we receive any information from third parties?</strong> We
          may receive information from public databases, marketing partners,
          social media platforms, and other outside sources.
        </p>
        <p>
          <strong>How do we process your information?</strong> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with
          your consent. We process your information only when we have a valid
          legal reason to do so.
        </p>
        <p>
          <strong>
            In what situations and with which parties do we share personal
            information?
          </strong>{" "}
          We may share information in specific situations and with specific
          third parties.
        </p>
        <p>
          <strong>How do we keep your information safe?</strong> We have
          organizational and technical processes and procedures in place to
          protect your personal information. However, no electronic transmission
          over the internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cyber-criminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information.
        </p>
        <p>
          <strong>What are your rights?</strong> Depending on where you are
          located geographically, the applicable privacy law may mean you have
          certain rights regarding your personal information.
        </p>
        <p>
          How do you exercise your rights? The easiest way to exercise your
          rights is by visiting{" "}
          <LinkButton href={`${siteConfig.links.mainApp}/profile`}>
            {siteConfig.links.mainApp}/profile
          </LinkButton>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </p>
        Want to learn more about what we do with any information we collect?{" "}
        <LinkButton href="#toc" target="_parent">
          Review the privacy notice in full
        </LinkButton>
        .
      </Section>
      <Section id="toc">
        <Heading level={2}>TABLE OF CONTENTS</Heading>
        <ol className="list-inside list-decimal">
          <li>
            <LinkButton href="#info-collect" target="_parent">
              WHAT INFORMATION DO WE COLLECT?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#info-use" target="_parent">
              HOW DO WE PROCESS YOUR INFORMATION?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#legalbases" target="_parent">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#who-share" target="_parent">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#cookies" target="_parent">
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#ai" target="_parent">
              DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#social-logins" target="_parent">
              HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#info-retain" target="_parent">
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#info-safe" target="_parent">
              HOW DO WE KEEP YOUR INFORMATION SAFE?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#info-minors" target="_parent">
              DO WE COLLECT INFORMATION FROM MINORS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#privacy-rights" target="_parent">
              WHAT ARE YOUR PRIVACY RIGHTS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#DNT" target="_parent">
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#uslaws" target="_parent">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#otherlaws" target="_parent">
              DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#policy-updates" target="_parent">
              DO WE MAKE UPDATES TO THIS NOTICE?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#contact" target="_parent">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#request" target="_parent">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </LinkButton>
          </li>
        </ol>
      </Section>
      <ol className="list-inside list-decimal space-y-8">
        <Section id="info-collect">
          <Heading level={2}>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
          </Heading>
          <Heading level={3}>Personal information you disclose to us</Heading>
          <p className="italic">
            <strong>In Short:</strong> We collect personal information that you
            provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
          <p>
            <strong> Personal Information Provided by You.</strong>The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </p>
          <List>
            <li>names</li>
            <li>email addresses</li>
            <li>passwords</li>
          </List>
          <p>
            <strong>Sensitive Information.</strong> We do not process sensitive
            information.
          </p>
          <p>
            Payment Data. We may collect data necessary to process your payment
            if you choose to make purchases, such as your payment instrument
            number, and the security code associated with your payment
            instrument. All payment data is handled and stored by Paddle. You
            may find their privacy notice link(s) here:{" "}
            <LinkButton href={"https://www.paddle.com/legal/privacy"}>
              https://www.paddle.com/legal/privacy
            </LinkButton>
            .
          </p>
          <p>
            <strong>Social Media Login Data.</strong> We may provide you with
            the option to register with us using your existing social media
            account details, like your Facebook, Twitter, or other social media
            account. If you choose to register in this way, we will collect the
            information described in the section called &quot;
            <LinkButton href="#social-logins" target="_parent">
              HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </LinkButton>
            &quot; below.
          </p>
          <p>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
          <Heading level={3}>Information automatically collected</Heading>
          <p className="italic">
            <strong>In Short:</strong> Some information — such as your Internet
            Protocol (IP) address and/or browser and device characteristics — is
            collected automatically when you visit our Services.
          </p>
          <p>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>
          <p>
            Like many businesses, we also collect information through cookies
            and similar technologies. You can find out more about this in our
            Cookie Notice:
            <LinkButton href={`${siteConfig.url}/cookies`}>
              {siteConfig.url}/cookies
            </LinkButton>
            .
          </p>
          <p>The information we collect includes:</p>
          <List>
            <li>
              <span className="italic">Log and Usage Data.</span> Log and usage
              data is service-related, diagnostic, usage, and performance
              information our servers automatically collect when you access or
              use our Services and which we record in log files. Depending on
              how you interact with us, this log data may include your IP
              address, device information, browser type, and settings and
              information about your activity in the Services (such as the
              date/time stamps associated with your usage, pages and files
              viewed, searches, and other actions you take such as which
              features you use), device event information (such as system
              activity, error reports (sometimes called "crash dumps"), and
              hardware settings).
            </li>
            <li>
              <span className="italic">Device Data.</span> We collect device
              data such as information about your computer, phone, tablet, or
              other device you use to access the Services. Depending on the
              device used, this device data may include information such as your
              IP address (or proxy server), device and application
              identification numbers, location, browser type, hardware model,
              Internet service provider and/or mobile carrier, operating system,
              and system configuration information.
            </li>
            <li>
              <span className="italic">Location Data.</span> We collect location
              data such as information about your device's location, which can
              be either precise or imprecise. How much information we collect
              depends on the type and settings of the device you use to access
              the Services. For example, we may use GPS and other technologies
              to collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </List>
          <Heading level={3}>Google API</Heading>
          <p>
            Our use of information received from Google APIs will adhere to{" "}
            <LinkButton
              href={
                "https://developers.google.com/terms/api-services-user-data-policy"
              }
            >
              Google API Services User Data Policy
            </LinkButton>
            ,{" "}
            <LinkButton
              href={
                "https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              }
            >
              including the Limited Use requirements.
            </LinkButton>
          </p>
        </Section>
        <Section id="info-use">
          <Heading level={2}>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We may also
            process your information for other purposes with your consent.
          </p>
          <strong>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </strong>
          <List>
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>
                To deliver and facilitate delivery of services to the user.
              </strong>{" "}
              We may process your information to provide you with the requested
              service.
            </li>
            <li>
              <strong>To send administrative information to you.</strong> We may
              process your information to send you details about our products
              and services, changes to our terms and policies, and other similar
              information.
            </li>
            <li>
              <strong>To request feedback.</strong> We may process your
              information when necessary to request feedback and to contact you
              about your use of our Services.
            </li>
            <li>
              <strong>
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </strong>
            </li>
            <li>
              <strong>
                To save or protect an individual's vital interest.
              </strong>{" "}
              We may process your information when necessary to save or protect
              an individual's vital interest, such as to prevent harm.
            </li>
          </List>
        </Section>
        <Section id="legalbases">
          <Heading level={2}>
            <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (i.e., legal basis) to do so under applicable law, like with your
            consent, to comply with laws, to provide you with services to enter
            into or fulfill our contractual obligations, to protect your rights,
            or to fulfill our legitimate business interests.
          </p>
          <p className="italic underline">
            If you are located in the EU or UK, this section applies to you.
          </p>
          <p>
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <List>
            <li>
              <strong>Consent.</strong> We may process your information if you
              have given us permission (i.e., consent) to use your personal
              information for a specific purpose. You can withdraw your consent
              at any time. Learn more about withdrawing your consent.
            </li>
            <li>
              <strong>Performance of a Contract.</strong> We may process your
              personal information when we believe it is necessary to fulfill
              our contractual obligations to you, including providing our
              Services or at your request prior to entering into a contract with
              you.
            </li>
            <li>
              <strong>Legitimate Interests.</strong> We may process your
              information when we believe it is reasonably necessary to achieve
              our legitimate business interests and those interests do not
              outweigh your interests and fundamental rights and freedoms. For
              example, we may process your personal information for some of the
              purposes described in order to:{" "}
              <List>
                <li>
                  Analyze how our Services are used so we can improve them to
                  engage and retain users
                </li>
                <li>
                  Understand how our users use our products and services so we
                  can improve user experience
                </li>
              </List>
            </li>
            <li>
              <strong>Legal Obligations.</strong> We may process your
              information where we believe it is necessary for compliance with
              our legal obligations, such as to cooperate with a law enforcement
              body or regulatory agency, exercise or defend our legal rights, or
              disclose your information as evidence in litigation in which we
              are involved.
            </li>
            <li>
              <strong>Vital Interests.</strong> We may process your information
              where we believe it is necessary to protect your vital interests
              or the vital interests of a third party, such as situations
              involving potential threats to the safety of any person.
            </li>
          </List>
          <p className="italic underline">
            If you are located in Canada, this section applies to you.
          </p>
          <p>
            We may process your information if you have given us specific
            permission ( i.e., express consent) to use your personal information
            for a specific purpose, or in situations where your permission can
            be inferred (i.e., implied consent). You can withdraw your consent
            at any time.
          </p>
          <p>
            In some exceptional cases, we may be legally permitted under
            applicable law to process your information without your consent,
            including, for example:
          </p>

          <List>
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>
              For business transactions provided certain conditions are met
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent
              would compromise the availability or the accuracy of the
              information and the collection is reasonable for purposes related
              to investigating a breach of an agreement or a contravention of
              the laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes
            </li>
            <li>
              If the information is publicly available and is specified by the
              regulations
            </li>
          </List>
        </Section>
        <Section id="who-share">
          <Heading level={2}>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </p>
          <p>
            We may need to share your personal information in the following
            situations:
          </p>
          <List>
            <li>
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </li>
          </List>
        </Section>
        <Section id="cookies">
          <Heading level={2}>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We may use cookies and other tracking
            technologies to collect and store your information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
          </p>
          <p>
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
          </p>
          <p>
            To the extent these online tracking technologies are deemed to be a
            &quot;sale&quot;/&quot;sharing&quot; (which includes targeted
            advertising, as defined under the applicable laws) under applicable
            US state laws, you can opt out of these online tracking technologies
            by submitting a request as described below under section &quot;
            <LinkButton href="#uslaws" target="_parent">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </LinkButton>
            &quot;
          </p>
          <p>
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice:{" "}
            <LinkButton href={`${siteConfig.url}/cookies`}>
              {siteConfig.url}/cookies
            </LinkButton>
            .
          </p>
        </Section>
        <Section id="ai">
          <Heading level={2}>
            <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies.
          </p>
          <p>
            As part of our Services, we offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies (collectively, &quot;AI Products&quot;).
          </p>
          <p>
            These tools are designed to enhance your experience and provide you
            with innovative solutions. The terms in this privacy notice govern
            your use of the AI Products within our Services.
          </p>
          <Heading level={3}>Use of AI Technologies</Heading>
          <p>
            We provide the AI Products through third-party service providers
            (&quot;AI Service Providers&quot;), including Google Gemini and IBM
            Watson. As outlined in this privacy notice, your input, output, and
            personal information will be shared with and processed by these AI
            Service Providers to enable your use of our AI Products for purposes
            outlined in &quot;
            <LinkButton href="#legalbases" target="_parent">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </LinkButton>
            .&quot; You must not use the AI Products in any way that violates
            the terms or policies of any AI Service Provider.
          </p>
          <Heading level={3}>Our AI Products</Heading>
          <p>Our AI Products are designed for the following functions:</p>
          <List>
            <li>AI document generation</li>
            <li>Text analysis</li>
            <li>Natural language processing</li>
          </List>
          <Heading level={3}>How We Process Your Data Using AI</Heading>
          <p>
            All personal information processed using our AI Products is handled
            in line with our privacy notice and our agreement with third
            parties. This ensures high security and safeguards your personal
            information throughout the process, giving you peace of mind about
            your data&apos;s safety.
          </p>
        </Section>
        <Section id="social-logins">
          <Heading level={2}>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </p>
          <p>
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
          </p>
          <p>
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </Section>
        <Section id="info-retain">
          <Heading level={2}>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this privacy notice
            unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>
          <p>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </Section>
        <Section id="info-safe">
          <Heading level={2}>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </p>
          <p>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cyber-criminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </Section>
        <Section id="info-minors">
          <Heading level={2}>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age.
          </p>
          <p>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent&apos;s use of the Services. If we
            learn that personal information from users less than 18 years of age
            has been collected, we will deactivate the account and take
            reasonable measures to promptly delete such data from our records.
            If you become aware of any data we may have collected from children
            under age 18, please contact us at support@publishstudio.one.
          </p>
        </Section>
        <Section id="privacy-rights">
          <Heading level={2}>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> Depending on your state of residence in
            the US or in some regions, such as the European Economic Area (EEA),
            United Kingdom (UK), Switzerland, and Canada, you have rights that
            allow you greater access to and control over your personal
            information. You may review, change, or terminate your account at
            any time, depending on your country, province, or state of
            residence.
          </p>
          <p>
            In some regions (like the EEA, UK, Switzerland, and Canada), you
            have certain rights under applicable data protection laws. These may
            include the right (i) to request access and obtain a copy of your
            personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; (iv)
            if applicable, to data portability; and (v) not to be subject to
            automated decision-making. In certain circumstances, you may also
            have the right to object to the processing of your personal
            information. You can make such a request by contacting us by using
            the contact details provided in the section &quot;
            <LinkButton href={"#contact"} target="_parent">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </LinkButton>
            &quot; below.
          </p>
          <p>
            We will consider and act upon any request in accordance with
            applicable data protection laws.
          </p>
          <p>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <LinkButton
              href={"https://ec.europa.eu/newsroom/article29/items/612080"}
            >
              Member State data protection authority
            </LinkButton>{" "}
            or{" "}
            <LinkButton
              href={
                "https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
              }
            >
              UK data protection authority
            </LinkButton>
            .
          </p>
          <p>
            If you are located in Switzerland, you may contact the{" "}
            <LinkButton href={"https://www.edoeb.admin.ch/edoeb/en/home.html"}>
              Federal Data Protection and Information Commissioner
            </LinkButton>
            .
          </p>
          <p>
            <strong className="underline">Withdrawing your consent:</strong> If
            we are relying on your consent to process your personal information,
            which may be express and/or implied consent depending on the
            applicable law, you have the right to withdraw your consent at any
            time. You can withdraw your consent at any time by contacting us by
            using the contact details provided in the section &quot;
            <LinkButton href={"#contact"} target="_parent">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </LinkButton>
            &quot; below.
          </p>
          <p>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <Heading level={3}>Account Information</Heading>
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <List>
            <li>
              Log in to your account settings and update your user account.
            </li>
            <li>Contact us using the contact information provided.</li>
          </List>
          <p>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <p>
            <strong className="underline">
              Cookies and similar technologies:
            </strong>{" "}
            Most Web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Services. For further information, please see our Cookie Notice:{" "}
            <LinkButton href={`${siteConfig.url}/cookies`}>
              {siteConfig.url}/cookies
            </LinkButton>
            .
          </p>
          <p>
            If you have questions or comments about your privacy rights, you may
            email us at support@publishstudio.one.
          </p>
        </Section>
        <Section id="DNT">
          <Heading level={2}>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          </Heading>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this privacy notice.
          </p>
          <p>
            California law requires us to let you know how we respond to web
            browser DNT signals. Because there currently is not an industry or
            legal standard for recognizing or honoring DNT signals, we do not
            respond to them at this time.
          </p>
        </Section>
        <Section id="uslaws">
          <Heading level={2}>
            <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> If you are a resident of California,
            Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky,
            Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah,
            or Virginia, you may have the right to request access to and receive
            details about the personal information we maintain about you and how
            we have processed it, correct inaccuracies, get a copy of, or delete
            your personal information. You may also have the right to withdraw
            your consent to our processing of your personal information. These
            rights may be limited in some circumstances by applicable law. More
            information is provided below.
          </p>
          <Heading level={3}>
            Categories of Personal Information We Collect
          </Heading>
          <p>
            We have collected the following categories of personal information
            in the past twelve (12) months:
          </p>
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr className="*:px-6 *:py-3">
                <th scope="col">Category</th>
                <th scope="col">Examples</th>
                <th scope="col">Collected</th>
              </tr>
            </thead>
            <tbody className="*:border-b *:bg-white *:dark:border-gray-700 *:dark:bg-gray-800">
              <tr className="*:px-6 *:py-4">
                <td>A. Identifiers</td>
                <td>
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address and account name
                </td>
                <td>YES</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>
                  B. Personal information categories listed in the California
                  Customer Records statute
                </td>
                <td>
                  Name, contact information, education, employment, employment
                  history and financial information
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>
                  C. Protected classification characteristics under state or
                  federal law
                </td>
                <td>
                  Gender, age, date of birth, race and ethnicity, national
                  origin, marital status, and other demographic data
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>D. Commercial information</td>
                <td>
                  Transaction information, purchase history, financial details,
                  and payment information
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>E. Biometric information</td>
                <td>Fingerprints and voiceprints</td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>F. Internet or other similar network activity</td>
                <td>
                  Browsing history, search history, online behavior, interest
                  data, and interactions with our and other websites,
                  applications, systems, and advertisements
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>G. Geolocation data</td>
                <td>Device location</td>
                <td>YES</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>H. Audio, electronic, sensory, or similar information</td>
                <td>
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>I. Professional or employment-related information</td>
                <td>
                  Business contact details in order to provide you our Services
                  at a business level or job title, work history, and
                  professional qualifications if you apply for a job with us
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>J. Education Information</td>
                <td>Student records and directory information</td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>K. Inferences drawn from collected personal information</td>
                <td>
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual's preferences and characteristics
                </td>
                <td>NO</td>
              </tr>
              <tr className="*:px-6 *:py-4">
                <td>L. Sensitive personal Information</td>
                <td></td>
                <td>NO</td>
              </tr>
            </tbody>
          </table>
          <p>
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <List>
            <li>Receiving help through our customer support channels</li>
            <li>Participation in customer surveys or contests</li>
            <li>
              Facilitation in the delivery of our Services and to respond to
              your inquiries
            </li>
          </List>
          <p>
            We will use and retain the collected personal information as needed
            to provide the Services or for:
          </p>
          <List>
            <li>Category A - As long as the user has an account with us</li>
            <li>Category B - As long as the user has an account with us</li>
            <li>Category G - 1 year</li>
          </List>
          <Heading level={3}>Sources of Personal Information</Heading>
          <p>
            Learn more about the sources of personal information we collect in{" "}
            <LinkButton href="#info-collect" target="_parent">
              WHAT INFORMATION DO WE COLLECT?
            </LinkButton>
          </p>
          <Heading level={3}>How We Use and Share Personal Information</Heading>
          <p>
            Learn about how we use your personal information in the section,{" "}
            <LinkButton href="#info-use" target="_parent">
              HOW DO WE PROCESS YOUR INFORMATION?
            </LinkButton>
          </p>
          <Heading level={4}>
            Will your information be shared with anyone else?
          </Heading>
          <p>
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Learn more about how we disclose personal information to in the
            section,{" "}
            <LinkButton href="#who-share" target="_parent">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </LinkButton>
          </p>
          <p>
            We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and demonstration. This is not considered to be
            "selling" of your personal information.
          </p>
          <p>
            We have not disclosed, sold, or shared any personal information to
            third parties for a business or commercial purpose in the preceding
            twelve (12) months. We will not sell or share personal information
            in the future belonging to website visitors, users, and other
            consumers.
          </p>
          <Heading level={3}>Your Rights</Heading>
          <p>
            You have rights under certain US state data protection laws.
            However, these rights are not absolute, and in certain cases, we may
            decline your request as permitted by law. These rights include:
          </p>
          <List>
            <li>
              <strong>Right to know</strong> whether or not we are processing
              your personal data
            </li>
            <li>
              <strong>Right to access</strong> your personal data
            </li>
            <li>
              <strong>Right to correct</strong> inaccuracies in your personal
              data
            </li>
            <li>
              <strong>Right to request</strong> the deletion of your personal
              data
            </li>
            <li>
              <strong>Right to obtain a copy</strong> of the personal data you
              previously shared with us
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising your
              rights
            </li>
            <li>
              <strong>Right to opt out</strong> of the processing of your
              personal data if it is used for targeted advertising (or sharing
              as defined under California's privacy law), the sale of personal
              data, or profiling in furtherance of decisions that produce legal
              or similarly significant effects ("profiling")
            </li>
          </List>
          <p>
            Depending upon the state where you live, you may also have the
            following rights:
          </p>
          <List>
            <li>
              <strong>Right to obtain a list</strong> of the categories of third
              parties to which we have disclosed personal data (as permitted by
              applicable law, including California's and Delaware's privacy law)
            </li>
            <li>
              <strong>Right to obtain a list</strong> of specific third parties
              to which we have disclosed personal data (as permitted by
              applicable law, including Oregon's privacy law)
            </li>
            <li>
              <strong>Right to limit</strong> use and disclosure of sensitive
              personal data (as permitted by applicable law, including
              California's privacy law)
            </li>
            <li>
              <strong>Right to opt out</strong> of the collection of sensitive
              data and personal data collected through the operation of a voice
              or facial recognition feature (as permitted by applicable law,
              including Florida's privacy law)
            </li>
          </List>
          <Heading level={3}>How to Exercise Your Rights</Heading>
          <p>
            To exercise these rights, you can contact us by submitting a data
            subject access request, by emailing us at support@publishstudio.one,
            or by referring to the contact details at the bottom of this
            document.
          </p>
          <p>
            Under certain US state data protection laws, you can designate an
            authorized agent to make a request on your behalf. We may deny a
            request from an authorized agent that does not submit proof that
            they have been validly authorized to act on your behalf in
            accordance with applicable laws.
          </p>
          <Heading level={3}>Request Verification</Heading>
          <p>
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. We will only use personal information provided in
            your request to verify your identity or authority to make the
            request. However, if we cannot verify your identity from the
            information already maintained by us, we may request that you
            provide additional information for the purposes of verifying your
            identity and for security or fraud-prevention purposes.
          </p>
          <p>
            If you submit the request through an authorized agent, we may need
            to collect additional information to verify your identity before
            processing your request and the agent will need to provide a written
            and signed permission from you to submit such request on your
            behalf.
          </p>
          <Heading level={3}>Appeals</Heading>
          <p>
            Under certain US state data protection laws, if we decline to take
            action regarding your request, you may appeal our decision by
            emailing us at support@publishstudio.one. We will inform you in
            writing of any action taken or not taken in response to the appeal,
            including a written explanation of the reasons for the decisions. If
            your appeal is denied, you may submit a complaint to your state
            attorney general.
          </p>
          <Heading level={3}>California "Shine The Light" Law</Heading>
          <p>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us by using the contact
            details provided in the section{" "}
            <LinkButton href="#contact" target="_parent">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </LinkButton>
          </p>
        </Section>
        <Section id="otherlaws">
          <Heading level={2}>
            <li>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> You may have additional rights based on
            the country you reside in.
          </p>
          <Heading level={3}>Australia and New Zealand</Heading>
          <p>
            We collect and process your personal information under the
            obligations and conditions set by Australia's Privacy Act 1988 and
            New Zealand's Privacy Act 2020 (Privacy Act).
          </p>
          <p>
            This privacy notice satisfies the notice requirements defined in
            both Privacy Acts, in particular: what personal information we
            collect from you, from which sources, for which purposes, and other
            recipients of your personal information.
          </p>
          <p>
            If you do not wish to provide the personal information necessary to
            fulfill their applicable purpose, it may affect our ability to
            provide our services, in particular:
          </p>
          <List>
            <li>Offer you the products or services that you want</li>
            <li>Respond to or help with your requests</li>
            <li>Manage your account with us</li>
            <li>Confirm your identity and protect your account</li>
          </List>
          <p>
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <LinkButton href="#request" target="_parent">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </LinkButton>
          </p>
          <p>
            If you believe we are unlawfully processing your personal
            information, you have the right to submit a complaint about a breach
            of the Australian Privacy Principles to the{" "}
            <LinkButton
              href={
                "https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
              }
              target="_blank"
            >
              Office of the Australian Information Commissioner
            </LinkButton>{" "}
            and a breach of New Zealand's Privacy Principles to the{" "}
            <LinkButton
              href={
                "https://www.privacy.org.nz/your-rights/making-a-complaint/"
              }
              target="_blank"
            >
              Office of New Zealand Privacy Commissioner
            </LinkButton>
            .
          </p>
          <Heading level={3}>Republic of South Africa</Heading>
          <p>
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <LinkButton href="#request" target="_parent">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </LinkButton>
          </p>
          <p>
            If you are unsatisfied with the manner in which we address any
            complaint with regard to our processing of personal information, you
            can contact the office of the regulator, the details of which are:
          </p>
          <p>
            <LinkButton href={"https://inforegulator.org.za/"}>
              The Information Regulator (South Africa)
            </LinkButton>
            <br />
            General enquiries:
            <LinkButton href={"mailto:enquiries@inforegulator.org.za"}>
              enquiries@inforegulator.org.za
            </LinkButton>
            <br />
            Complaints (complete POPIA/PAIA form 5):
            <LinkButton href={"mailto:PAIAComplaints@inforegulator.org.za"}>
              PAIAComplaints@inforegulator.org.za
            </LinkButton>{" "}
            &{" "}
            <LinkButton href={"mailto:POPIAComplaints@inforegulator.org.za"}>
              POPIAComplaints@inforegulator.org.za
            </LinkButton>
          </p>
        </Section>
        <Section id="policy-updates">
          <Heading level={2}>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          </Heading>
          <p className="italic">
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date and
            the updated version will be effective as soon as it is accessible.
            If we make material changes to this privacy notice, we may notify
            you either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </Section>
        <Section id="contact">
          <Heading level={2}>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          </Heading>
          <p>
            If you have questions or comments about this notice, you may email
            us at support@publishstudio.one.
          </p>
        </Section>
        <Section id="request">
          <Heading level={2}>
            <li>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </Heading>
          <p>
            Based on the applicable laws of your country or state of residence
            in the US, you may have the right to request access to the personal
            information we collect from you, details about how we have processed
            it, correct inaccuracies, or delete your personal information. You
            may also have the right to withdraw your consent to our processing
            of your personal information. These rights may be limited in some
            circumstances by applicable law. To request to review, update, or
            delete your personal information, please fill out and submit a data
            subject access request.
          </p>
        </Section>
      </ol>
    </div>
  );
}
