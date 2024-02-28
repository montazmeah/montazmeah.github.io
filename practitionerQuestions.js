let questions = [
  {
    number: 1,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has a variety of products on their website&nbsp;and plans to launch some new ones. To ensure the success of this new launch, the client wishes to place some details about these new products in the best possible location on the website in order to attract more traffic and conversions. During these Placement Tests, the client is looking for the best combination of elements for user interaction as well. <p></p><p></p><p>Which steps should be taken to achieve this objective?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Use Automated Personalization followed by Auto-Allocate",
      },
      {
        correct: true,
        text: "Use a Multivariate Test followed by an A/B Test",
      },
      {
        correct: false,
        text: "Use Experience Targeting followed by Recommendations",
      },
    ],
    notes: `
    <i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target/using/activities/multivariate-test/multivariate-testing.html?lang=en">https://experienceleague.adobe.com/docs/target/using/activities/multivariate-test/multivariate-testing.html?lang=en</a></i>
    <div class="docs-main">
  <!-- Docs page metadata-->
  <h1 id="multivariate-test-overview" tabindex="-1">
    Multivariate Test overview
  </h1>

  <p>
    A Multivariate Test (MVT) activity in Adobe Target compares combinations of
    offers in elements on a page to determine which combination performs the
    best for a specific audience. A Multivariate Test activity also helps to
    identify which element most impacts the activity’s success.
  </p>
  <p>
    Multivariate testing helps you discover the relative influence specific
    elements have on conversion, compared to other elements on the page.
    Multivariate testing can also help you refine a combination of elements that
    have been shown to be effective.
  </p>
  <p>
    One advantage a Multivariate Test provides compared to an A/B test is the
    ability to show which elements on your page have the greatest influence on
    conversion. This advantage is also known as the “main effect.” This
    information is useful, for example, to help you determine where to place
    content that you want to receive the most attention.
  </p>
  <p>
    Multivariate Test activities also help you find compound effects between two
    or more elements on a page. For example, a particular ad might produce more
    conversions when combined with a certain banner or hero image. This is also
    known as the “interaction effect.”
  </p>
  <p>
    Target uses full-factorial multivariate tests to help you optimize your
    content. A full-factorial multivariate test examines all possible
    combinations of content with equal probability. For example, if you have two
    page elements with three offers each, there are nine possible combinations
    (3x3). Three elements, with two containing three possible offers and one
    with two offers, provide 18 options (3x3x2).
  </p>
  <p>
    In Target, each combination is one experience. The Multivariate Test
    compares each experience so that you can learn which combinations are the
    most successful. At the same time, data is collected and analyzed to
    understand how each location and the offers influence the success metric.
  </p>
  <p>
    <img style="width:100%;"
      src="https://experienceleague.adobe.com/docs/target/assets/multivariate.png?lang=en"
      alt="multivariate image"
    />
  </p>
  <p>
    Because of the number of combinations that can be generated, a Multivariate
    Test requires more time and traffic than an A/B test. The page must receive
    enough traffic to produce statistically significant results for each
    experience. To obtain useful results, you must understand the amount of
    traffic your page receives and test the optimal number of combinations for
    the right amount of time to get the required results.
  </p>
  <p>
    Target’s
    <a
      href="/docs/target/using/activities/multivariate-test/create-mvt/traffic-estimator.html?lang=en#task_71AA6922AFD447EA8C5E610A78ABA714"
      >Traffic Estimator</a
    >
    can help you design a test that works with your traffic. Before you use the
    Traffic Estimator, you should have good statistics showing the number of
    impressions and conversions your site normally receives. Consider your
    traffic levels per day. The more experiences in an activity, the more
    traffic the activity must include or the longer your activity must run. If
    your amount of traffic isn’t high, you should test a few combinations;
    otherwise, the amount of time required to produce meaningful test results
    might be too long to be useful.
  </p>
</div>

    `,
  },
  {
    number: 2,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has several websites hosted in AEM, and a large number of users interact with the website's components. The client wishes to target specific users with different content and a logical sequence of pages in order to optimize web marketing. The goal is to display the right messages to the right people at the right time. <p></p><p></p><p>How can this goal be met?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Use reports to analyze the User's activity.",
      },
      {
        correct: true,
        text: "Use Audience, and map it to Experiences.",
      },
      {
        correct: false,
        text: "Use Audience, and analyze it using reports.",
      },
    ],
    notes: ``,
  },
  {
    number: 3,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has several websites and a variety of products. The client wishes to send an email to potential customers&nbsp;informing them about the best-selling product, hoping for a conversion. A dynamic version of the content should appear in the mail as soon as the user opens it. The client wishes to monitor the response to the offer at the audience or session-level. <p></p><p></p><p>Which solution can be proposed to the client to accomplish this goal?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Integrate Adobe Target with Cloud Audiences",
      },
      {
        correct: false,
        text: "Integrate Adobe Target with Adobe Analytics",
      },
      {
        correct: true,
        text: "Integrate Adobe Target with Adobe Campaign",
      },
    ],
    notes: ``,
  },
  {
    number: 4,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Multiple MVT activities were created by an Adobe Target Business Practitioner. During the creation of these activities, the traffic split was set to 25/25/25/25, and the Visitor metric was used for analysis. While reviewing activity results, the Practitioner noticed a significant difference in the distribution of traffic between experiences in the reporting. <p></p><p></p><p>Which action should be taken to resolve this problem?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Create a new report with the correct parameters.",
      },
      {
        correct: false,
        text: "Change the traffic distribution while running the tests.",
      },
      {
        correct: true,
        text: "Keep the traffic splits even between the tests.",
      },
    ],
    notes: ``,
  },
  {
    number: 5,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner has developed a number of offers for the platforms. These offers require HTML code knowledge. The client wishes to manage these offers in such a way that content creators with no coding background can create these offers and use them for Adobe Target activities. <p></p><p></p><p>Which action can be taken to improve the creation of offers for content creators?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Use Images for new offers.",
      },
      {
        correct: false,
        text: "Use Visual Experience Composer.",
      },
      {
        correct: true,
        text: "Use AEM Experience Fragments.",
      },
    ],
    notes: ``,
  },
  {
    number: 6,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An optimization consultant wants a setup to deliver four different retail promo banners to individual groups of people that came through email campaigns. <p></p><p></p><p>Which activity should be used?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Recommendations",
      },
      {
        correct: false,
        text: "Automated Personalization",
      },
      {
        correct: true,
        text: "Experience Targeting",
      },
    ],
    notes: ``,
  },
  {
    number: 7,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">In the process of setting up a priority in Adobe Target, the user has two activities. One activity targets the branded search keyword, and the second targets the non-branded keyword sneakers.  Both targeted activities have the same priority.<p></p><p></p><p>What will be displayed to a visitor who is new to the page?</p></div>`,
    answers: [
      {
        correct: false,
        text: "The activity that was most recently viewed is displayed.",
      },
      {
        correct: false,
        text: "Both activities will be displayed in round-robin.",
      },
      {
        correct: true,
        text: "The activity that was most recently activated is displayed.",
      },
    ],
    notes: ``,
  },
  {
    number: 8,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is calculating the sample size for an activity that includes different special offers such as free shipping, a 20% discount, and a complimentary gift for returning visitors in order to increase the chance of converting.  Each of these offers is presented in a separate experience. <p></p><p></p><p>Which action should be taken to account for the effect of multiple offers on the confidence level?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Apply the same number of daily visitors per offer.",
      },
      {
        correct: false,
        text: "Adjust the statistical power.",
      },
      {
        correct: true,
        text: "Apply the Bonferroni correction .",
      },
    ],
    notes: `
    
    
    `,
  },
  {
    number: 9,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to use a home page A/B Test to see whether using animations instead of static images would have a significant impact on conversions. Review this information:<p></p><p>• 95% confidence level </p><p>• 12,534 daily visitors to the home page</p><p>• 4.6% conversion currently</p><p></p><p>The Practitioner has used the Adobe Sample Size Calculator to determine how many days it will have to run the test in order to achieve a 5% increase in conversion (4.83% goal conversion rate) and would like to reduce the time for the test without changing the goal conversion rate. </p><p></p><p>Which action can be taken to accomplish this goal?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Reduce Confidence Level",
      },
      {
        correct: false,
        text: "Apply Bonferonni Correction",
      },
      {
        correct: false,
        text: "Increase Statistical Power",
      },
    ],
    notes: ``,
  },
  {
    number: 10,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">There is a requirement to compare two different experience on a page, and then traffic will be redirected to the winner.<p></p><p></p><p>Which type of the A/B activity can be used to meet this requirement?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Manual A/B Test",
      },
      {
        correct: false,
        text: "Auto-Target",
      },
      {
        correct: true,
        text: "Auto-Allocate",
      },
    ],
    notes: ``,
  },
  {
    number: 11,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">On a page, there are different experiences, and the number of experiences exceeds five and spans two or more locations.The Product Manager needs to know which areas on the page are most likely to improve conversion.<p></p><p></p><p>Which test can be used to meet to provide this information?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Multivariate",
      },
      {
        correct: false,
        text: "Multi-Arm Bandit",
      },
      {
        correct: false,
        text: "A/B",
      },
    ],
    notes: ``,
  },
  {
    number: 12,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner hypothesizes that placing ads on a homepage can improve conversions. In order to test this hypothesis, five different elements of the homepage were selected to be included in the test. These elements were banner image, promo text, a call to action, header, and footer. The Practitioner plans on identifying the offer with the highest conversion as the test winner. <p></p><p></p><p>At which confidence level should this hypothesis be tested?</p></div>`,
    answers: [
      {
        correct: false,
        text: "0.9",
      },
      {
        correct: false,
        text: "0.95",
      },
      {
        correct: true,
        text: "0.995",
      },
    ],
    notes: ``,
  },
  {
    number: 13,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner has been tasked to examine whether moving the location of the navigation bar to the bottom of the homepage will increase engagement. To validate this hypothesis, a new homepage with the navigational links at the bottom was created, and the experience with that new page was tested against the existing homepage. <p></p><p></p><p>Which element should be monitored to validate the alignment of the objective with the hypothesis?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Bounce rate",
      },
      {
        correct: false,
        text: "Number of searches",
      },
      {
        correct: false,
        text: "Number of orders",
      },
    ],
    notes: ``,
  },
  {
    number: 14,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to run an A/B Test to encourage content discovery on the website. In preparation, the Practitioner would like to revamp the landing page to set it up as a redirect A/B Test.<p></p><p></p><p>Which metric is an accurate primary metric for this situation?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Checkout",
      },
      {
        correct: true,
        text: "Engaged Sessions",
      },
      {
        correct: false,
        text: "Orders",
      },
    ],
    notes: ``,
  },
  {
    number: 15,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to run an A/B Test on a website and assigns different values for each page on that site. The success of the test will be gauged by an increase in views for higher-valued pages. For this test, the Practitioner will use Adobe Target as the reporting source. <p></p><p></p><p>Which primary goal should be selected to enable the success metric for such a test?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Revenue",
      },
      {
        correct: true,
        text: "Engagement",
      },
      {
        correct: false,
        text: "Conversion",
      },
    ],
    notes: ``,
  },
  {
    number: 16,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to encourage sign-ups on a website. To encourage sign-ups, the business is offering eBook downloads on successful email confirmation through an experience-targeting activity. At the same time, the business also wants to prevent fraudulent sign-ups. <p></p><p></p><p>How should the Practitioner respond to these requirements?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Set up registrations as the primary goal metric and the eBook downloads as a secondary metric.",
      },
      {
        correct: true,
        text: "Set up email confirmations as the primary goal metric, and update target settings to prevent re-entry into the experience.",
      },
      {
        correct: false,
        text: "Reset the test with additional restrictions.",
      },
    ],
    notes: ``,
  },
  {
    number: 17,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>An Adobe Target Business Practitioner has created the following audience for a his/her A/B Test.</p>

    <p><a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-1-08-2_2.png" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-1-08-2_2.png" style="width: 983px; height: 381px;" data-uw-rm-alt-original=""></a></p>

    <p>On setting live the A/B Test, the report is not qualifying any visitors.</p>

    <p>Which problem is occurring?</p>
    </div>`,
    answers: [
      {
        correct: true,
        text: "A user can't have a Safari and Firefox browser at the same time, so the audience set up is incorrect.",
      },
      {
        correct: false,
        text: "The audience set up is correct, but there have been no new users to the website",
      },
      {
        correct: false,
        text: 'All of the "AND" operators need to be changed to "OR", so the audience set up is incorrect.',
      },
    ],
    notes: ``,
  },
  {
    number: 18,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A Target user would like to determine the differences between visitors who were exposed to the control experiences versus another experience.<p></p><p></p><p>Which panel on A4T would provide this information?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Quick Insights Panel",
      },
      {
        correct: false,
        text: "Attribution Panel",
      },
      {
        correct: true,
        text: "Segment Compare Panel",
      },
    ],
    notes: ``,
  },
  {
    number: 19,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitionerr would like to report activities on each session that a visitor initiates, after they qualify for the experience. This report will be made regardless of whether the visitor saw the test experience in subsequent visits.<p></p><p></p><p>Which metric should be selected to obtain this information?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Visit",
      },
      {
        correct: false,
        text: "Visitors",
      },
      {
        correct: false,
        text: "Impressions",
      },
    ],
    notes: ``,
  },
  {
    number: 20,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A developer is trying to decide whether to use the Form-Based Experience Composer or the Visual Experience Composer (VEC).<p></p><p></p><p>Which piece of information accurately describes the difference between these two approaches?</p></div>`,
    answers: [
      {
        correct: true,
        text: "The Form-Based Composer will create experiences and offers for delivery in emails, kiosks, and voice assistants.",
      },
      {
        correct: false,
        text: "The Form-based Composer is an editor that will let the marketers and designers create and change content using a visual interface.",
      },
      {
        correct: false,
        text: "The Visual Experience Composer is useful when creating experiences for use in A/B Tests, Experience Targeting, Automated Personalization, and Recommendations activities.",
      },
    ],
    notes: `
    `,
  },
  {
    number: 21,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A developer is using Visual Experience Composer (VEC) in Adobe Target.<p></p><p></p><p>Which feature should the developer note when using this product?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Pages must accept URL parameters for the Visual Experience Composer to work.",
      },
      {
        correct: false,
        text: "An element can be moved outside a container that is followed by a CSS property.",
      },
      {
        correct: false,
        text: "Actions such as Edit Class and Rearrange are allowed inside an mbox.",
      },
    ],
    notes: ``,
  },
  {
    number: 22,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Visual Experience Composer is being used by a client to create an experience. The client made some changes to the existing content while creating this new experience with Visual Experience Composer and would now like to place an image just above an existing element on the page.<p></p><p>	</p><p>How can the client achieve this goal?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Select an element on the page, and then click on Replace With.",
      },
      {
        correct: false,
        text: "Select an element on the page, and then click on Expand Selection.",
      },
      {
        correct: true,
        text: "Select an element on the page, and then click on Insert Before.",
      },
    ],
    notes: ``,
  },
  {
    number: 23,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Visual Experience Composer is being used by a client to create an experience. It has been discovered that the content within an iframe on the page cannot be changed in Visual Experience Composer (VEC).<p></p><p></p><p>Which action, if any, can be taken to resolve this issue?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Ensure that the iframe document is Target-enabled, and then load the iframe URL by adding some custom parameters.",
      },
      {
        correct: true,
        text: "Ensure that the iframe document is Target-enabled, and then load the iframe URL in the VEC.",
      },
      {
        correct: false,
        text: "An iframe URL cannot be loaded in the VEC.",
      },
    ],
    notes: ``,
  },
  {
    number: 24,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A client wants to send an email to a specific group of users in order to conduct an A/B Test.</p>

    <p>Which feature can be used to create an experience to meet this goal?</p>
    </div>`,
    answers: [
      {
        correct: true,
        text: "Form-Based Experience Composer",
      },
      {
        correct: false,
        text: "Visual Experience Composer",
      },
      {
        correct: false,
        text: "Enhanced Experience Composer",
      },
    ],
    notes: ``,
  },
  {
    number: 25,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to host content outside of Adobe Target that Target references and delivers to the end users. This content could be in a content management system or in another system. <p></p><p></p><p>Which offer/content needs to be selected in Form-Based Experience composer to meet this goal?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Create HTML Offer",
      },
      {
        correct: false,
        text: "Create Redirect Offer",
      },
      {
        correct: true,
        text: "Create Remote Offer",
      },
    ],
    notes: ``,
  },
  {
    number: 26,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is in the process of creating additional experiences using Visual Experience Composer.<p></p><p></p><p>Which steps should be taken?</p></div>`,
    answers: [
      {
        correct: false,
        text: 'Click "Add Experience Targeting" > Select the audience > Choose Audience dialog box displays > Add an experience',
      },
      {
        correct: false,
        text: 'Click "Add Experience Targeting" >  Add an experience > Choose Audience dialog box displays > Select the audience',
      },
      {
        correct: true,
        text: 'Click "Add Experience Targeting" >  Choose Audience dialog box displays >  Select the audience > Add an experience',
      },
    ],
    notes: ``,
  },
  {
    number: 27,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is performing functions using Experience, and all actions are being completed with the help of Experience Composer.<p></p><p></p><p>Which function is possible in this situation?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Renaming an experience is possible, but an experience cannot be duplicated or deleted.",
      },
      {
        correct: false,
        text: "Duplication and renaming an experience are possible, but an experience cannot be deleted.",
      },
      {
        correct: true,
        text: "Duplicating, renaming, and deleting an experience are all possible.",
      },
    ],
    notes: ``,
  },
  {
    number: 28,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is using Workflow to create all activity types.<p></p><p></p><p>Which sequence of steps should be followed?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Create > Goal and Settings > Target",
      },
      {
        correct: false,
        text: "Goal and Settings > Create > Target",
      },
      {
        correct: true,
        text: "Create > Target > Goal and Settings",
      },
    ],
    notes: ``,
  },
  {
    number: 29,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is using the "Goal and Settings" step of the workflow to create Target Activities. The Setting being used will specify whether data is collected from Adobe Target or from Adobe Analytics.<p></p><p></p><p>Which Setting category is being used?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Reporting",
      },
      {
        correct: false,
        text: "Metadata",
      },
      {
        correct: false,
        text: "Activity",
      },
    ],
    notes: ``,
  },
  {
    number: 30,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner needs to use an A/B Test which will identify a winner among two or more experiences and then re-direct traffic to that winner, increasing conversion as the test runs and learns.<p></p><p></p><p>Which test is used for this purpose? </p></div>`,
    answers: [
      {
        correct: false,
        text: "Manual A/B",
      },
      {
        correct: true,
        text: "Auto-Allocate",
      },
      {
        correct: false,
        text: "Auto-Target",
      },
    ],
    notes: ``,
  },
  {
    number: 31,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner created an A/B Test activity with a success metric that is used when a visitor performs these actions on a site:<p></p><p>• Clicks a button</p><p>• Views a page</p><p>• Completes a survey</p><p>• Makes a purchase</p><p></p><p>Which success metric is being used?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Conversion",
      },
      {
        correct: false,
        text: "Page Views",
      },
      {
        correct: false,
        text: "Custom Scoring",
      },
    ],
    notes: ``,
  },
  {
    number: 32,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client will be having an outdoor equipment website and wants to show different hero images on the homepage. The specific image shown will be based on the visitor's location or their hobbies. <p></p><p></p><p>Which activity could be used to accomplish this step?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Experience Targeting",
      },
      {
        correct: false,
        text: "Auto-Allocate",
      },
      {
        correct: false,
        text: "A/B Test",
      },
    ],
    notes: ``,
  },
  {
    number: 33,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An XT Activity was created by an Adobe Target Business Practitioner. During the testing phase, the Practitioner notices that visitors who should have qualified for Experience B or C qualified for Experience A instead.<p></p><p></p><p>How should the Practitioner resolve this problem?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Delete all audience/experience pairs and recreate them.",
      },
      {
        correct: true,
        text: "Reorder the audience/experience pair.",
      },
      {
        correct: false,
        text: "Create a new XT Activity.",
      },
    ],
    notes: ``,
  },
  {
    number: 34,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client is launching a new product and wants to run an ad that combines the banner and text. In preparation for this action, the client wants to know which page elements have the greatest influence on conversion. <p></p><p></p><p>Which activity can provide this information?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Multivariate Test",
      },
      {
        correct: false,
        text: "Recommendations",
      },
      {
        correct: false,
        text: "Experience Targeting",
      },
    ],
    notes: ``,
  },
  {
    number: 35,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner developed a Multivariate Test, but it was discovered that the same piece of content was being delivered to multiple locations. <p></p><p></p><p>What could be the underlying cause of this problem?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Duplicate JavaScript class on the page",
      },
      {
        correct: true,
        text: "Duplicate DOM IDs on the page",
      },
      {
        correct: false,
        text: "Duplicate HTML code on the page",
      },
    ],
    notes: ``,
  },
  {
    number: 36,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which strategy should be suggested to a product manager who wants to utilize parameters collected by Adobe Target to personalize experiences for customers but wants an approach that is also automatic?</div>`,
    answers: [
      {
        correct: true,
        text: "Auto Target",
      },
      {
        correct: false,
        text: "Multivariate Testing",
      },
      {
        correct: false,
        text: "Auto Allocate",
      },
    ],
    notes: ``,
  },
  {
    number: 37,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which activity type should be used when a Practitioner wants to use a custom code served from AEM fragments to improve customers' experiences based on their profiles?</div>`,
    answers: [
      {
        correct: true,
        text: "Auto Target",
      },
      {
        correct: false,
        text: "Automated Personalization",
      },
      {
        correct: false,
        text: "Auto Allocate",
      },
    ],
    notes: ``,
  },
  {
    number: 38,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which recommendation logic should be used when an Adobe Target Business Practitioner wants to make recommendations only based on the item the visitor is currently viewing on the company's retail website?</div>`,
    answers: [
      {
        correct: false,
        text: "Customers who bought this item also bought these items",
      },
      {
        correct: true,
        text: "Items with similar attributes",
      },
      {
        correct: false,
        text: "The most-viewed items in a particular category",
      },
    ],
    notes: ``,
  },
  {
    number: 39,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which type of recommendation algorithm should be used when an Adobe Target Business Practitioner wants to make recommendations based on the items that are from the visitor's favorite category?</div>`,
    answers: [
      {
        correct: false,
        text: "User-based",
      },
      {
        correct: false,
        text: "Item-based",
      },
      {
        correct: true,
        text: "Custom criteria",
      },
    ],
    notes: ``,
  },
  {
    number: 40,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner would like to determine how different types of visitors respond to the same content.<p></p><p></p><p>Which type of audience can be used for this purpose?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Targeting",
      },
      {
        correct: false,
        text: "Analyzing",
      },
      {
        correct: true,
        text: "Reporting",
      },
    ],
    notes: ``,
  },
  {
    number: 41,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to create an audience that will be used only once and not be stored in the Audiences Library.<p></p><p></p><p>Which type of the audience can be used for this purpose?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Activity only",
      },
      {
        correct: false,
        text: "Visit only",
      },
      {
        correct: false,
        text: "Report only",
      },
    ],
    notes: ``,
  },
  {
    number: 42,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner needs to configure multiple activities which are assigned to the same location with the same audience.<p></p><p></p><p>Which activity setting can be used for this purpose? </p></div>`,
    answers: [
      {
        correct: false,
        text: "Parent",
      },
      {
        correct: true,
        text: "Priority",
      },
      {
        correct: false,
        text: "Display order",
      },
    ],
    notes: ``,
  },
  {
    number: 43,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner set the reporting solution to Analytics and wants to create a goal metric.<p></p><p></p><p>Which metric will be available in this configuration? </p></div>`,
    answers: [
      {
        correct: false,
        text: "Page Views",
      },
      {
        correct: false,
        text: "Custom Scoring",
      },
      {
        correct: true,
        text: "Conversion",
      },
    ],
    notes: ``,
  },
  {
    number: 44,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner has set up an A/B Test on the homepage of a major retailer to identify which type of promotions would generate decent engagement on the website. The test includes different promotional placements such as Free Shipping, BOGO, % OFF, and $$ OFF on the Hero Banner, Header Link, Footer Link, and Sidebar. The test audience will include users from both the U.S. and Canada. Before going live with the activity, the Practitionerwould like to share the Preview URL links with a team member in Canada for testing in order to confirm whether someone from Canada can see the page, and thus qualify for the test.<p></p><p></p><p>Which action needs to be taken to accomplish this task?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Set the activity to live and use multiple audiences, including QA and an actual audience to validate.",
      },
      {
        correct: false,
        text: "Use the Target QA bookmarklet to force out of Activity QA and view the website as a typical visitor.",
      },
      {
        correct: false,
        text: "Generate a Preview URL to validate all audience qualifications by default.",
      },
    ],
    notes: ``,
  },
  {
    number: 45,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner needs to apply a different audience from the Audience Library to the QA activity. <p></p><p></p><p>Which action needs to be taken to complete this task?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Deactivate the activity, create a new activity with new goals, and then use the same links to share.",
      },
      {
        correct: false,
        text: "Isolate the activity from other live activities, and then update the audience conditions.",
      },
      {
        correct: true,
        text: "Edit the activity, and then generate the new links to share.",
      },
    ],
    notes: ``,
  },
  {
    number: 46,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner would like to check if the home page URL has been used in multiple activities at the same time.<p></p><p> </p><p>Where should the Practitioner check to locate this information?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Collision Report",
      },
      {
        correct: false,
        text: "Change Log Report",
      },
      {
        correct: false,
        text: "Results Report",
      },
    ],
    notes: ``,
  },
  {
    number: 47,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is reviewing the activities list from the Adobe Target Interface.  <p></p><p></p><p>Which action can be taken on an activity with live status? </p></div>`,
    answers: [
      {
        correct: false,
        text: "Archive",
      },
      {
        correct: true,
        text: "Edit",
      },
      {
        correct: false,
        text: "Activate",
      },
    ],
    notes: ``,
  },
  {
    number: 48,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner would like to display content that is more relevant and attractive to each visitor during their browsing sessions. To meet this goal, the Practitioner is interested in knowing whether the browser type, location, or time of day of visit are more frequently used by Adobe Target's personalization model.<p></p><p> </p><p>Which report should the Practitioner use to obtain this information?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Importance Attributes",
      },
      {
        correct: false,
        text: "Experience Performance",
      },
      {
        correct: false,
        text: "Automated Segments",
      },
    ],
    notes: ``,
  },
  {
    number: 49,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner has set up an A/B Test, and the primary goal of the activity is to increase revenue. The test is targeted to the returning users landing from the display campaign, "Your saved basket". <p></p><p></p><p>The first report was sent to stakeholders, and they found that the number of returning visitors in the report has been very high, but the revenue increase has not been sufficient. One of the stockholders wants a report showing the returning users who have spent more than $1,000. </p><p></p><p>How should the Practitioner share this information from Target?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Add an Audience/Target condition to include returning visitors with order value > $1000.",
      },
      {
        correct: false,
        text: "Download report data in a .csv format to filter orders with value > $1000.",
      },
      {
        correct: true,
        text: "Add a reporting segment to include returning visitors with order value > $1000.",
      },
    ],
    notes: ``,
  },
  {
    number: 50,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is making use of a significance calculator to estimate the amount of time that a test will take to yield results. During the setup and reporting of the results, the Practitioner focuses on the measure that will indicate whether an experience's success was due to chance.<p></p><p></p><p>Which measure is being focused on by the Practitioner?</p></div>`,
    answers: [
      {
        correct: true,
        text: "Confidence Level",
      },
      {
        correct: false,
        text: "Statistical Power",
      },
      {
        correct: false,
        text: "Confidence Interval",
      },
    ],
    notes: ``,
  },
  {
    number: 51,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is making use of a significance calculator to estimate the amount of time for a test to yield results. During the setup and reporting of the results, the Practitioner would like to focus on the ability or sensitivity of the experiment to detect changes.<p></p><p></p><p>Which measure is the focus of this Practitioner?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Statistical Significance",
      },
      {
        correct: true,
        text: "Minimum Detectable Lift",
      },
      {
        correct: false,
        text: "Statistical Power",
      },
    ],
    notes: ``,
  },
  {
    number: 52,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The figure below shows five offers that have the same long-term conversion rate. Offer B had a poor conversion rate for the first 2,000 visitors, and it takes a long time before the estimated conversion rate returns to the true long-term rate.<p></p><p></p><p></p><p><a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-03-1.png" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-03-1.png" data-uw-rm-alt-original=""></a></p><p></p><p></p><p>This phenomenon is known as "regression to the mean." </p><p></p><p>What is the best way to avoid this issue?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Reduce the number of visitors per offer, and then run the test for a smaller amount of time.",
      },
      {
        correct: false,
        text: "Limit the number of offers per run, and then run the test with the same number of visitors.",
      },
      {
        correct: true,
        text: "Determine an adequate number of visitors before running the test, and then let the test run until all visitors have been exposed to the offers.",
      },
    ],
    notes: ``,
  },
  {
    number: 53,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The figure below shows two offers that two different visitors see at the same time on a Sunday afternoon. The consideration period for Offer A is short, and the visitor converts later that day. However, Offer B has a longer consideration period, and the visitor who saw Offer B thinks about the offer for a while and ends up converting Monday morning. If the test is stopped Sunday night, the conversion associated with Offer A is counted toward Offer A's conversion metric, but the conversion associated with Offer B is not counted toward Offer B's conversion metric. This puts Offer B at a significant disadvantage.<p></p><p></p><p></p><p><a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-03-2.png" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-03-2.png" data-uw-rm-alt-original=""></a></p><p></p><p></p><p>Which strategy will avoid this pitfall?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Reduce the number of visitors for both of the offers to ensure the that the test executes properly.",
      },
      {
        correct: false,
        text: "Change the consideration period for both of the offers to the same length, which will eventually put both on same advantage.",
      },
      {
        correct: true,
        text: "Allow some time for visitors who were exposed to the test offers to convert after a new entry to the test has been stopped.",
      },
    ],
    notes: ``,
  },
  {
    number: 54,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">What is the difference between an Automated Personalization summary report and an Auto-Target report?</div>`,
    answers: [
      {
        correct: false,
        text: "The amount of traffic per experience required to build an Auto-Target model is more than the amount of traffic required by the Automated Personalization model.",
      },
      {
        correct: true,
        text: "There are more experiences in an Automated Personalization activity report than in an Auto-Target activity report.",
      },
      {
        correct: false,
        text: "An Automated Personalization activity report allows multiple changes within one experience, but the Auto-Target report only allows a single change.",
      },
    ],
    notes: ``,
  },
  {
    number: 55,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner has set up six different experiences in Adobe Target and would like to know which areas on the home page are most likely to improve conversion, and thus increase revenue. Stakeholders want to know the activity's results. Preliminary results are shown in the following Experience Performance (MVT) report:  <p></p><p></p><p></p><p><a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-05-1.jpg" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-05-1.jpg" data-uw-rm-alt-original=""></a></p><p></p><p></p><p>Which action should the Practitioner take when analyzing the current results of this activity?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Declare Experience E the winner, since it shows positive lift and high significance.",
      },
      {
        correct: true,
        text: "Allow the activity to continue running to gather more data since results are inconclusive.",
      },
      {
        correct: false,
        text: "Eliminate Experience D and H as under-performing challengers, and then select either Experience B, C, or E as the winner.",
      },
    ],
    notes: ``,
  },
  {
    number: 56,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>An Adobe Target Business Practitioner would like to know which element of a homepage can best improve conversions. The three elements (banner image, promo text, and call to action), including their controls, were targeted in a Multivariate Test (MVT). The results of this test are shown in the following MVT report:</p>

    <p><a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-05-2.png" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E406AdobeTargetBusinessPractitioner/E406-3-05-2.png" style="width: 624px; height: 349px;" data-uw-rm-alt-original=""></a></p>

    <p>Which of the elements that had added offers resulted in the most conversions?</p>
    </div>`,
    answers: [
      {
        correct: false,
        text: "Image",
      },
      {
        correct: true,
        text: "Call to Action",
      },
      {
        correct: false,
        text: "Promo Text",
      },
    ],
    notes: ``,
  },
  {
    number: 57,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is completing an A/B Test and notices that traffic distribution remains fixed even after some experiences are observed as outperforming others. The Practitioner also notes that the whole activity must run its entire course before a winner can be decided. This situation increases the cost and must be resolved.<p></p><p></p><p>Which type of activity can be used to solve this problem?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Auto-Target",
      },
      {
        correct: true,
        text: "Auto-Allocate",
      },
      {
        correct: false,
        text: "Automated Personalization",
      },
    ],
    notes: ``,
  },
  {
    number: 58,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to rank-order how every experience has performed relative to the others.<p></p><p></p><p>How should this goal be achieved?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Experience Target",
      },
      {
        correct: false,
        text: "Auto-Allocate",
      },
      {
        correct: true,
        text: "Manual A/B Test",
      },
    ],
    notes: ``,
  },
  {
    number: 59,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner is completing an A/B Test and wants to be sure that the variations that perform best are being seen by visitors. The Practitioner is concerned because this A/B activity run is happening during a core business moment, which is a product lunch time.<p></p><p></p><p>Which type of A/B Testing activity should be used for this purpose?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Auto Target",
      },
      {
        correct: false,
        text: "Manual A/B Test",
      },
      {
        correct: true,
        text: "Auto-Allocate",
      },
    ],
    notes: ``,
  },
  {
    number: 60,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner observes that an activity was delivered, but the expected result is not being seen. The Practitioner decides to enable Target Console Logging to check the logs to gain insight into the problem.<p></p><p></p><p>Which logs should be checked?</p></div>`,
    answers: [
      {
        correct: true,
        text: "The logs on the console of the browser",
      },
      {
        correct: false,
        text: "The logs on the network tab of the debugger",
      },
      {
        correct: false,
        text: "The logs on log tab of the debugger",
      },
    ],
    notes: ``,
  },
  {
    number: 61,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Business Practitioner wants to expose debugging statements to the browser for at.js version older than 0.9.6.<p></p><p></p><p>What is the correct way to complete this task?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Enable Target Console Logging on Tools Tab of the debugger.",
      },
      {
        correct: false,
        text: "Write a custom Target debugger.",
      },
      {
        correct: true,
        text: "Add ?mboxDebug=true query string parameter to the URL.",
      },
    ],
    notes: ``,
  },
  {
    number: 62,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A product owner is testing different category pages on an eCommerce website but is afraid that the results could be marred by a Black Friday sale which will be held at the end of November. The owner does not want to stop the test during the sale.<p></p><p></p><p>Which solution should the Practitioner recommend?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Navigate to reports, select settings, and then exclude the extreme values from the control experience.",
      },
      {
        correct: true,
        text: 'Navigate to reports, select settings, and then set exclude extreme values to "True".',
      },
      {
        correct: false,
        text: "Navigate to reports, download the reports, and then exclude extreme sales from the control experience.",
      },
    ],
    notes: ``,
  },
  {
    number: 63,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A product manager has been running an A/B Test on auto allocate and needs to set the appropriate amount of metric that is required to ensure lift bounds are displayed.<p></p><p></p><p>What is the appropriate amount that should be used for this purpose?</p></div>`,
    answers: [
      {
        correct: false,
        text: "Minimum 100 Conversions",
      },
      {
        correct: false,
        text: "40% Lift",
      },
      {
        correct: true,
        text: "60% Confidence",
      },
    ],
    notes: ``,
  },
  {
    number: 64,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A product owner wants to personalize the user experience based on the visit number for that user and has configured the visit number using profile scripts. The Practitioner would now like to use a Target feature to QA accurate functioning of these profile scripts.</p>

    <p>Which two features can be used for this purpose? (Choose two.)</p>
    </div>`,
    answers: [
      {
        correct: true,
        text: "mbox trace",
      },
      {
        correct: false,
        text: "Property tokens",
      },
      {
        correct: true,
        text: "Response tokens",
      },
      {
        correct: false,
        text: "Activity tokens",
      },
    ],
    notes: ``,
  },
  {
    number: 65,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A company recently bought Target Premium to drive personalization of its web products. The Practitioner has configured Target into separate properties to be used with each individual product. An A/B Test has been set up, and during QA, it is realized that the experience is not rendering as expected.</p>

    <p>Which two steps are part of the troubleshooting process? (Choose two.)</p>
    </div>`,
    answers: [
      {
        correct: true,
        text: "Troubleshoot the activity using mboxTrace.",
      },
      {
        correct: true,
        text: "Check with the developer team to ensure that a property token is present as part of each target call.",
      },
      {
        correct: false,
        text: "Filter the network log using b/ss to see if network calls are firing.",
      },
      {
        correct: false,
        text: "Contact the Engineering teams.",
      },
    ],
    notes: ``,
  },
  {
    number: 66,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>An Adobe Target Business Practitioner wants to launch an A/B Test for new users from Safari browsers. In which two ways can an audience be created for this test?</p>
    </div>`,
    answers: [
      {
        correct: false,
        text: "Create a segment in Adobe Analytics, with browser type to be Safari or Firefox, and save.",
      },
      {
        correct: true,
        text: "Create a segment in Adobe Analytics, with browser type to be Safari or Firefox, click save, and share it with experience cloud.",
      },
      {
        correct: true,
        text: 'Combine multiple audiences for each browser, separated with the operator "AND".',
      },
      {
        correct: false,
        text: 'Combine multiple audiences for each browser, separated with the operator "OR".',
      },
    ],
    notes: ``,
  },
];
