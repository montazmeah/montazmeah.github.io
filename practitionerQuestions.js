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
    notes: ``,
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
];
