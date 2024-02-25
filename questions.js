let questions = [
  {
    number: 1,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client uses Adobe Target Recommendations to implement a recommendation showing the top selling products in a specific category on that specific category page. The setup of the activity in Adobe Target interface has been verified to be correct. However, the recommendations module is not showing.<br><br>What are two possible reasons why this recommendation activity is not showing? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: "The entity.categoryId mbox parameter contains multiple values separated by a comma.",
      },
      {
        correct: true,
        text: "The CSS selector on the page no longer exists.",
      },
      {
        correct: false,
        text: "The entity.id mbox parameter is not populated.",
      },
      {
        correct: false,
        text: "The user.categoryId mbox parameter contains multiple values separated by a comma.",
      },
      {
        correct: false,
        text: "The entity.categoryId mbox parameter contains only a single value.",
      },
    ],
  },
  {
    number: 2,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client is complaining that Analytics For Target (A4T) visit counts are inflated on a Visual Experience Composer (VEC) A/B activity with a Redirect Offer. The reason points to missing query parameters on the redirected URL to allow for A4T to capture the proper visit count.<br><br>What are the two required parameters on the redirected page of an Adobe Target Redirect Offer that can resolve this issue? (Choose two.)</div>`,
    answers: [
      {
        correct: false,
        text: "mboxOverride.browserIp",
      },
      {
        correct: true,
        text: "adobe_mc_sdid",
      },
      {
        correct: false,
        text: "mbox3rdPartyId",
      },
      {
        correct: true,
        text: "adobe_mc_ref",
      },
    ],
  },
  {
    number: 3,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client would like to test alternate images within their email campaigns. <br><br>One requirement is for all the images to link to the same landing page. <br><br>Which implementation method will achieve this goal?</div>`,
    answers: [
      {
        correct: false,
        text: "getOffer/applyOffer",
      },
      {
        correct: false,
        text: "Redirector",
      },
      {
        correct: true,
        text: "AdBox",
      },
    ],
  },
  {
    number: 4,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A retail company is planning to use Automated Personalization from Adobe Target to personalize content based on user visits.<br><br>What are two visit-based features that Automated Personalization supports? (Choose two.)</div>`,
    answers: [
      {
        correct: false,
        text: "Emails",
      },
      {
        correct: true,
        text: "Experience Cloud Audiences",
      },
      {
        correct: false,
        text: "Rawbox implementations",
      },
      {
        correct: true,
        text: "Mbox parameters",
      },
    ],
  },
  {
    number: 5,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to display a real-time Abandoned Cart message on the homepage when a customer reaches the "Review Order" page but does not complete the order. The Abandoned Cart message should contain the product categories, total price, and a link back to the cart contents. The client also wants to report on the activity's success using Adobe Analytics.<br><br>What does the architect need to implement to support this requirement?</div>`,
    answers: [
      {
        correct: true,
        text: "Multiple profile scripts",
      },
      {
        correct: false,
        text: "Target Segments",
      },
      {
        correct: false,
        text: "Analytics Segments",
      },
    ],
  },
  {
    number: 6,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client would like to run two activities on their homepage and does not want these activities to overlap.  <br><br>Which feature should be used to separate visitors into two distinct audiences?</div>`,
    answers: [
      {
        correct: false,
        text: "Data Providers",
      },
      {
        correct: false,
        text: "Traffic Allocation",
      },
      {
        correct: true,
        text: "Profile Script",
      },
    ],
  },
  {
    number: 7,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A financial services website has been struggling to run their personalization activities effectively. Too many of their customers are only using the website to pay their bills once a month and are consistently showing up in the reports as New Visitors.<br><br>Which option should the Adobe Target Architect recommend to fix this problem?</div>`,
    answers: [
      {
        correct: false,
        text: "Modify the audience criteria to include returning visitors to target website traffic at every stage of the customer journey.",
      },
      {
        correct: false,
        text: "Migrate Experience Targeting activities to Automated Personalization activities to capitalize on machine learning benefits.",
      },
      {
        correct: true,
        text: "Increase the Target profile expiration from the default of 14 days to a value greater than one month.",
      },
    ],
  },
  {
    number: 8,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The client ran A/B Test activities on their website for a year without the Tag Management System. The client is now using a data layer and asks the Adobe Target Architect to use values from the data layer for website personalization. <br><br>Where should the Adobe Target Architect recommend placing the data layer?</div>`,
    answers: [
      {
        correct: false,
        text: "At the bottom of the <BODY> section after referencing at.js",
      },
      {
        correct: false,
        text: "In the <HEAD> section after referencing at.js",
      },
      {
        correct: false,
        text: "At the bottom of the <BODY> section before referencing at.js",
      },
      {
        correct: true,
        text: "In the <HEAD> section before referencing at.js",
      },
    ],
  },
  {
    number: 9,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The client has been using Adobe Target for website personalization for three years. The client recently started a new email campaign and wants to use content from Adobe Target to personalize their emails.<br><br>Which implementation approach should the architect recommend?</div>`,
    answers: [
      {
        correct: false,
        text: "Use Profile Script Attributes",
      },
      {
        correct: false,
        text: "Use Adobe Target JavaScript library",
      },
      {
        correct: true,
        text: "Use AdBox URLs",
      },
    ],
  },
  {
    number: 10,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target architect is designing an implementation that requires the use of Analytics for Target (A4T).<br><br>Which script must be loaded first?</div>`,
    answers: [
      {
        correct: true,
        text: "VisitorAPI.js",
      },
      {
        correct: false,
        text: "at.js.",
      },
      {
        correct: false,
        text: "appMeasurement.js",
      },
    ],
  },
  {
    number: 11,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to set up an Activity using Analytics for Target (A4T) and needs to send Target-based conversion data to Adobe Analytics.<br><br>Which metric name will this data be given in Adobe Analytics?</div>`,
    answers: [
      {
        correct: false,
        text: "Activity Impressions",
      },
      {
        correct: true,
        text: "Activity Conversions",
      },
      {
        correct: false,
        text: "Activity Goals",
      },
    ],
  },
  {
    number: 12,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has recently upgraded their Adobe Experience Manager (AEM) instance to version 6.5 and would like to utilize Experience Fragments (XFs) in Adobe Target.  <br><br>Which two actions are prerequisites for exporting XFs from AEM into Adobe Target? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: "Add the Cloud Services for Adobe Target in AEM.",
      },
      {
        correct: false,
        text: "Configure at.js to load in the site header template in AEM.",
      },
      {
        correct: true,
        text: "Configure the AEM Link Externalizer.",
      },
      {
        correct: false,
        text: "Enable Response Tokens in Adobe Target.",
      },
      {
        correct: false,
        text: "Provision Analytics for Target (A4T) Integration.",
      },
    ],
  },
  {
    number: 13,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to increase content velocity and reuse by utilizing content created in Adobe Experience Manager (AEM) within Adobe Target Automated Personalization activities.  <br><br>What should the architect recommend?</div>`,
    answers: [
      {
        correct: false,
        text: "Use the Adobe Target createOffer API to pass JSON Offers to Adobe Target.",
      },
      {
        correct: false,
        text: "Use AEM Content Fragments as Adobe Target Offers.",
      },
      {
        correct: true,
        text: "Use AEM Experience Fragments as Adobe Target Offers.",
      },
    ],
  },
  {
    number: 14,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to execute their A/B Testing activities on the homepage and combine the testing results with additional traffic/behavior that resides in Adobe Analytics.  <br><br>What should the architect do to support this requirement?</div>`,
    answers: [
      {
        correct: false,
        text: "Import Adobe Analytics segments using Experience Cloud Audiences.",
      },
      {
        correct: true,
        text: "Implement Analytics for Target (A4T) for results and reporting.",
      },
      {
        correct: false,
        text: "Implement server-side forwarding in Adobe Analytics.",
      },
    ],
  },
  {
    number: 15,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An optimization team is struggling to manually update the image tags in the HTML code of the page and would prefer to use the Visual Experience Composer (VEC) to more easily swap images.<br><br>Which two steps are required to ensure the marketing team can quickly swap the images? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: "Contact Adobe Customer Care to request the Scene7 Account Configuration.",
      },
      {
        correct: false,
        text: "Contact Adobe Customer Care to provision Image Offers.",
      },
      {
        correct: false,
        text: "Share image folders from Adobe Experience Cloud Assets Core Service with Adobe Target.",
      },
      {
        correct: true,
        text: "Upload image files to Adobe Experience Cloud Assets Core Service.",
      },
      {
        correct: false,
        text: "Enable Image Offers in Adobe Target > Setup.",
      },
    ],
  },
  {
    number: 16,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to personalize their Adobe Campaign Standard marketing emails using Adobe Target.  <br><br>Using Target Remote Offers, which personalization option is supported when integrating Adobe Target and Adobe Campaign Standard?</div>`,
    answers: [
      {
        correct: false,
        text: "Personalize subject line only.",
      },
      {
        correct: true,
        text: "Personalize images in the email body.",
      },
      {
        correct: false,
        text: "Personalize the email body using Profile Scripts.",
      },
    ],
  },
  {
    number: 17,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to personalize their homepage using segments sourced from Adobe Audience Manager (AAM) without affecting page-load performance.  <br><br>Which capability enables this functionality?</div>`,
    answers: [
      {
        correct: false,
        text: "AAM Dynamic Integration Library (DIL)",
      },
      {
        correct: true,
        text: "Experience Cloud ID Service",
      },
      {
        correct: false,
        text: "Analytics for Target (A4T)",
      },
    ],
  },
  {
    number: 18,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A credit card company would like to use Adobe Target to personalize their website for visitors who have used their platinum card to purchase airline tickets with their affiliate booking company. They also need to combine this data with anonymous third-party attributes.<br><br>What should the Adobe Target Architect recommend as the audience source for this personalization activity?</div>`,
    answers: [
      {
        correct: true,
        text: "Adobe Audience Manager",
      },
      {
        correct: false,
        text: "Adobe Campaign",
      },
      {
        correct: false,
        text: "Adobe Target",
      },
    ],
  },
  {
    number: 19,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A retail company is planning to use Adobe Target to implement A/B Testing. They are concerned that bot traffic might impact the results. <br><br>What are two ways that Adobe Target handles known bot traffic? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: "It does not log an activity visit for reporting.",
      },
      {
        correct: false,
        text: "It uses bot traffic in modeling and serving personalized content.",
      },
      {
        correct: true,
        text: "It does not create or retrieve a visitor profile.",
      },
      {
        correct: false,
        text: "It logs data to be sent to the Adobe Experience Platform.",
      },
    ],
  },
  {
    number: 20,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A company recently started working with a third-party User Experience (UX) agency. The agency has requested access to Adobe Target and should be able to view only the status and reports of existing activities and create activities in Adobe Target. <br><br>To which role should the UX agency be assigned?</div>`,
    answers: [
      {
        correct: false,
        text: "Approver",
      },
      {
        correct: true,
        text: "Editor",
      },
      {
        correct: false,
        text: "Developer",
      },
      {
        correct: false,
        text: "Observer",
      },
    ],
  },
  {
    number: 21,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target Architect needs to create a new Workspace in order to allow separate management of Target Activities and Users for a new website.<br><br>In which configuration area should the new Workspace be created?</div>`,
    answers: [
      {
        correct: false,
        text: "Adobe Target -> Setup -> Properties",
      },
      {
        correct: false,
        text: "Adobe Analytics -> Workspaces",
      },
      {
        correct: true,
        text: "Experience Cloud Admin Console -> Target Product Profiles",
      },
    ],
  },
  {
    number: 22,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Adobe Target has been implemented on a client's e-commerce website domain (example.com). The client uses a third-party Payment Card Industry (PCI) compliant service for accepting credit cards as a method of payment, where the visitor enters data into a payment form within an iframe that is on the third-party service's domain (thirdpartyservice.com). The client wants to change the appearance of the payment form with Adobe Target. <br><br>Which solution should the Adobe Target Architect recommend?</div>`,
    answers: [
      {
        correct: true,
        text: "The client must install Adobe Target on the iframe page/domain.",
      },
      {
        correct: false,
        text: "The client should use Enhanced Experience Composer.",
      },
      {
        correct: false,
        text: "The client should use cross domain tracking for both domains.",
      },
    ],
  },
  {
    number: 23,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client wants to serve Adobe Target content to their mobile application. They prefer to manage the content using the Adobe Target UI and have the mobile application developers apply the necessary formatting/design within the application.<br><br>What should the Adobe Target Architect recommend?</div>`,
    answers: [
      {
        correct: false,
        text: "Add HTML offer using the Visual Experience Composer.",
      },
      {
        correct: true,
        text: "Build JSON Offers within Adobe Target.",
      },
      {
        correct: false,
        text: "Expose Experience Fragments to the mobile application.",
      },
    ],
  },
  {
    number: 24,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has an experienced group of Adobe Target developers on staff and wants to extend the existing Adobe Target functionality to their Android/iOS mobile applications. They want to keep content creation within the Adobe Target UI and manage rendering and styling in the mobile app.  <br><br>Which solution will support this requirement?</div>`,
    answers: [
      {
        correct: false,
        text: "Scene7 Integration",
      },
      {
        correct: false,
        text: "Experience Fragments",
      },
      {
        correct: false,
        text: "Content Fragments",
      },
      {
        correct: true,
        text: "JSON Offers",
      },
    ],
  },
  {
    number: 25,
    choose: 1,
    question: `
    <div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">
        <p>A hospitality industry client currently uses "People Who Viewed This, Viewed That" logic in their Recommendations Criteria to recommend vacation packages on their product pages. They now have the following new requirement, which includes:</p>

        <p> </p>

        <ul>
            <li>To recommend only the vacation packages applicable to the viewer's membership level.</li>
            <li>An example of this new requirement is to recommend only gold vacation packages to a viewer with a gold membership.</li>
            <li>The membership level is stored in the viewer's profile, and vacation packages have an entity attribute indicating the membership level.</li>
        </ul>

        <p><br>
        What is one way to configure the Recommendation Activity to satisfy these requirements?</p>
    </div>
    `,
    answers: [
      {
        correct: false,
        text: "Add a Static Filter to the inclusion rules in the Criteria configuration to match the viewer's membership level.",
      },
      {
        correct: false,
        text: `Add an "Entity Attribute Matching" filtering rule to the Criteria to recommend packages that match the viewer's membership level.`,
      },
      {
        correct: true,
        text: `Add a "Profile Attribute Matching" filtering rule to the Criteria to recommend packages that match the viewer's membership level.`,
      },
    ],
  },
  {
    number: 26,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A retail company needs to set up a Recommendations Activity to shorten the path to conversion for their returning visitors.<br><br>For this Activity, the company would like to show a carousel of items based on the chronological order of the previously-viewed products for each visitor.<br><br>What is the correct key to use in the Criteria for this scenario?</div>`,
    answers: [
      {
        correct: false,
        text: "Most Viewed Item",
      },
      {
        correct: false,
        text: "Popularity",
      },
      {
        correct: true,
        text: "Recently Viewed Items",
      },
    ],
  },
  {
    number: 27,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client with an e-commerce site is looking to implement Adobe Target Recommendations. The client would like to use aggregate visitor behavior context to show relevant results using the current product key.<br><br>Which two types of logic can be used in this scenario? (Choose two.)</div>`,
    answers: [
      {
        correct: false,
        text: "Previously Viewed Articles",
      },
      {
        correct: false,
        text: "Best Rated Articles",
      },
      {
        correct: true,
        text: "People Who Viewed This, Viewed That",
      },
      {
        correct: true,
        text: "People Who Bought This, Bought That",
      },
    ],
  },
  {
    number: 28,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A digital retail client wants to show an Adobe Target Recommendation's "Most Popular Products" component on their homepage. They wish to use the same data used for organic search product messaging, as well as automate the inclusion of the product data. The client also wants to have Adobe Analytics capture recommended product click-throughs from the web and the "Most Popular Products" component.  <br><br>Which Adobe Target Recommendations feature should the architect recommend?</div>`,
    answers: [
      {
        correct: false,
        text: "Import Experience Cloud Audiences",
      },
      {
        correct: false,
        text: "Manual upload of a CSV file",
      },
      {
        correct: true,
        text: "Google Product Feeds",
      },
    ],
  },
  {
    number: 29,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The client wants to be able to recommend high-profit-margin products on low-profit-margin product pages. <br><br>Which method should be used to pass profit margin product data to Adobe Target Recommendations?</div>`,
    answers: [
      {
        correct: false,
        text: "Data Source",
      },
      {
        correct: false,
        text: "URL parameter",
      },
      {
        correct: true,
        text: "Feeds Entity",
      },
    ],
  },
  {
    number: 30,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>What are two valid token syntaxes that can be used in a template design in Adobe Target Recommendations? (Choose two.)</p>
</div>`,
    answers: [
      {
        correct: false,
        text: "$adobe.target.recommendations[0].entity.id",
      },
      {
        correct: true,
        text: "$entity3.prodId",
      },
      {
        correct: false,
        text: "${entities[2]}.productId",
      },
      {
        correct: true,
        text: "$key.pageURL",
      },
    ],
  },
  {
    number: 31,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has developed a new website build on a Single Page Application (SPA) framework. On the old website, a non-SPA, the Optimization Team was very dependent on using the VEC to run Target Activities.<br><br>What should the Adobe Target Architect ask the developers to do?</div>`,
    answers: [
      {
        correct: false,
        text: "Deploy adobe.target.applyOffer() function in SPA.",
      },
      {
        correct: false,
        text: "Deploy adobe.target.trackEvent() function in SPA.",
      },
      {
        correct: true,
        text: "Deploy adobe.target.triggerView() function in SPA.",
      },
    ],
  },

  {
    number: 32,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has recently added several dynamic elements to their shopping cart funnel on their website. These new AJAX interactions are causing some disagreement amongst the optimization team about how Target requests (mboxes) behave after a page has already loaded. Their site currently uses at.js 1.x.<br><br>What is a limitation of using at.js 1.x with dynamic content?</div>`,
    answers: [
      {
        correct: false,
        text: "at.js 1.x does not support AJAX interactions but does support prefetching offers and single-page applications.",
      },
      {
        correct: false,
        text: "Asynchronous Target requests (mboxes) and AJAX interactions are limited to displaying remote offers only.",
      },
      {
        correct: false,
        text: "Target requests (mboxes) fired after the page has rendered can only be used for metrics and not content delivery.",
      },
      {
        correct: true,
        text: "at.js 1.x cannot leverage prefetch of offers nor triggerView() for VEC-based activities.",
      },
    ],
  },
  {
    number: 33,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client is trying to implement Adobe Target on a non-browser based IoT device such as a kiosk or voice assistant in order to deliver consistent and personalized experiences to a user.<br><br>As an Adobe Target architect, which implementation method will you suggest based upon their requirement? </div>`,
    answers: [
      {
        correct: false,
        text: "Adobe Target at.js JavaScript library",
      },
      {
        correct: false,
        text: "Adobe Experience Platform Web SDK",
      },
      {
        correct: true,
        text: "Adobe Target's Delivery API",
      },
    ],
  },

  {
    number: 34,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>For a promotional campaign, the client has a requirement that an experience in an Adobe Target activity show to a visitor once per week. The client is unable to pass a parameter via <code>targetPageParams</code> in the Target implementation to satisfy this requirement.<br>
<br>
Which feature of Adobe Target can be used to capture the recency of the visit?</p>
</div>`,
    answers: [
      {
        correct: false,
        text: "Response Tokens",
      },
      {
        correct: true,
        text: "Profile Script",
      },
      {
        correct: false,
        text: "Customer Attributes",
      },
    ],
  },

  {
    number: 35,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>In an iOS native application with an Adobe Target implementation, what are the two primary methods to create a targeted location? (Choose two.)</p>
</div>`,
    answers: [
      {
        correct: false,
        text: "targetCreateRequest",
      },
      {
        correct: true,
        text: "targetCreateRequestWithName",
      },
      {
        correct: false,
        text: "targetCreateLocation",
      },
      {
        correct: true,
        text: "targetLoadRequest",
      },
      {
        correct: false,
        text: "targetLoadRequestWithName",
      },
    ],
  },
  {
    number: 36,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A client has recently implemented Adobe Target for an Android application that uses AEP Mobile SDK and passes a custom visitor ID from a CRM system.<br>
<br>
Which API method can be used to retrieve the custom visitor ID from Adobe Target?</p>
</div>`,
    answers: [
      {
        correct: false,
        text: `Visitor.getInstance("YOUR-UNIQUE-ORG-ID@AdobeOrg").getMarketingCloudVisitorID();`,
      },
      {
        correct: true,
        text: "getThirdPartyId()",
      },
      {
        correct: false,
        text: "getTntId()",
      },
    ],
  },
  {
    number: 37,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which two Adobe Target activity types can be created in the Mobile App Visual Experience Composer? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: `A/B Test`,
      },
      {
        correct: false,
        text: "Multivariate Test",
      },
      {
        correct: true,
        text: "Experience Targeting",
      },
      {
        correct: false,
        text: "Recommendations",
      },
    ],
  },
  {
    number: 38,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">Which two Adobe Target activity types can be created in the Mobile App Visual Experience Composer? (Choose two.)</div>`,
    answers: [
      {
        correct: true,
        text: `A/B Test`,
      },
      {
        correct: false,
        text: "Multivariate Test",
      },
      {
        correct: true,
        text: "Experience Targeting",
      },
      {
        correct: false,
        text: "Recommendations",
      },
    ],
  },
  {
    number: 38,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A client has a requirement to promote a discount offer to reorder the last purchased product by the user. The recommendation is to use Adobe Target HTML Offers with Dynamic Data. Last product purchased information is available in the data layer when a user logs into the web-application. From the data layer, the information is passed in a Target request as a profile attribute. The HTML Offer has the following code:<br>
<br>
<code>&lt;h1&gt; Get a discount when you buy \${user.lastProductPurchased} again. Click here for further details! &lt;/h1&gt;</code><br>
<br>
The offer is not rendering the Dynamic Data.<br>
<br>
What is the correct syntax for the Dynamic Data?</p>
</div>`,
    answers: [
      {
        correct: true,
        text: "${profile.lastProductPurchased}",
      },
      {
        correct: false,
        text: "${campaign.lastProductPurchased}",
      },
      {
        correct: false,
        text: '${user.lastProductPurchased encode="escape"}',
      },
    ],
  },
  {
    number: 39,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client is planning to implement Adobe Target using the Adobe WebSDK. In initial testing, the client is reporting that activities created using the Visual Experience Composer (VEC) are not automatically rendering and are not present in the response. The Data Collection developer has confirmed that "decisionScopes" are being passed in the request and that "target-global-mbox" is included in the testing environment where they are validating. <br><br>What could be the primary reason that Target VEC activities are not being returned in the Interact request to the Adobe Edge Network?</div>`,
    answers: [
      {
        correct: true,
        text: "renderDecisions needs to be set to true",
      },
      {
        correct: false,
        text: `TriggerView needs to include "target-global-mbox"`,
      },
      {
        correct: false,
        text: 'Missing decisionScope  "__view__"',
      },
      {
        correct: false,
        text: 'Missing displayProposition value "1"',
      },
    ],
  },
  {
    number: 40,
    choose: 2,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A marketer has set up an Experience Targeting activity for their regional website targeting users from that region using Target's Geo Targeting. <br><br>After setting up the test, the marketer has shared the Activity QA URL with the business stakeholders, which looks like: <br><br>https://www.regionalwebsite.com/?at_preview_token=m4o9ne46I4_vETG-Mi8Fn4sfdKGAJyg5DsJ3XxNj67A&amp;at_preview_index=1_2&amp;at_preview_listed_activities_only=true&amp;at_preview_evaluate_as_true_audience_ids=2161154<br><br>However, the stakeholders are not able to see the experience using the QA URLs. <br><br>What are two possible reasons the activity is not seen in QA? (Choose two.)</div>`,
    answers: [
      {
        correct: false,
        text: "The users are not located in the region for which the activity has been created.",
      },
      {
        correct: true,
        text: "The activity is created using a different at_property than the regional website.",
      },
      {
        correct: true,
        text: 'The activity is created using "URL is" under page delivery options in VEC.',
      },
      {
        correct: false,
        text: "The users are using the Company's VPN that is changing their actual location.",
      },
    ],
  },

  {
    number: 41,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>Refer to the exhibit:<br>
<br>
<br>
<code>&lt;html&gt;<br>
&lt;head&gt;<br>
&lt;title&gt;Client Product Page&lt;/title&gt;<br>
<br>
&lt;script&gt;<br>
pageURL = document.location.pathname;<br>
var dataLayer = {<br>
page: urlPAGE;<br>
}<br>
&lt;/script&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
&lt;!-- Client HTML --&gt;<br>
&lt;!-- Pre hiding snippet --&gt;<br>
&lt;script src="/scripts/at.js" async&gt;&lt;/script&gt;<br>
<br>
&lt;/body&gt;<br>
&lt;/html&gt;</code><br>
<br>
A client states that people within the organization are reporting page "flicker" whenever an Adobe Target campaign is running.<br>
<br>
Based on the code exhibit, what should the Architect do to fix this issue?</p>
</div>`,
    answers: [
      {
        correct: true,
        text: "Move the at.js library script and pre hiding snippet to the &lt;HEAD&gt; .",
      },
      {
        correct: false,
        text: 'Remove the "async" flag to load the at.js library synchronously.',
      },
      {
        correct: false,
        text: 'Correct the "page" variable assignment inside the dataLayer object.',
      },
    ],
  },
  {
    number: 42,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">A client has set up a Redirect Offer within Adobe Target with Adobe Analytics as the reporting source. Data for the redirect landing page is not showing in the report. The Adobe Target Architect has confirmed that the three required libraries meet minimum version requirements and are present and implemented in the correct order on both pages.  <br><br>What should the Adobe Target Architect do next?</div>`,
    answers: [
      {
        correct: true,
        text: "Verify that the correct adobe_mc_sdid URL parameter is present on the redirect page.",
      },
      {
        correct: false,
        text: "Verify that the correct adobe_mc_ref URL parameter is present on the redirect page.",
      },
      {
        correct: false,
        text: "Include additional code in the redirect offer to encode the URL parameters.",
      },
    ],
  },
  {
    number: 43,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The Optimization Lead has successfully activated an activity using the Adobe Target API, but the activity shows a status of Inactive in the Target UI.<br><br>What is a possible explanation for why the status still displays as Inactive?</div>`,
    answers: [
      {
        correct: true,
        text: "Updating through the API can take up to ten minutes to propagate to the UI.",
      },
      {
        correct: false,
        text: "The Optimization Lead needs to also activate the test in the Target UI.",
      },
      {
        correct: false,
        text: "The priority of the activity was set low and caused the test not to activate yet.",
      },
      {
        correct: false,
        text: "The audience of the specific activity has a collision with another activity.",
      },
    ],
  },
  {
    number: 44,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target activity uses a new Experience Cloud audience previously created in Adobe Analytics. The activity is live, but according to the activity reporting, no visitors have yet qualified for the activity. The architect wants to determine if it is ready for use in Adobe Target.<br><br>Where can an Adobe Target Architect view the initial processing status of the Adobe Analytics-created Experience Cloud audience to verify readiness?</div>`,
    answers: [
      {
        correct: false,
        text: "Segments in Adobe Audience Manager",
      },
      {
        correct: false,
        text: "Audiences in Adobe Target",
      },
      {
        correct: true,
        text: "Audience Library in People Core Service",
      },
    ],
  },
  {
    number: 45,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>An e-commerce team wants to run an A/B test to promote a company email newsletter, but only to first time visitors who are not logged in and have not arrived at the website with an email campaign id.</p>

<p> </p>

<ul>
	<li>Analytics for Target (A4T) has been configured correctly.</li>
	<li>Adobe Analytics has a segment that meets these requirements.</li>
</ul>

<p><br>
The person setting up the Adobe Target Activity is unable to select Adobe Analytics as the reporting source. The Adobe Target Architect has verified the user does belong to a group with access to both Analytics and Target.<br>
<br>
To which other group should the user belong?</p>
</div>`,
    answers: [
      {
        correct: false,
        text: "Adobe Target Product Admin",
      },
      {
        correct: false,
        text: "Enterprise User Permissions Group",
      },
      {
        correct: true,
        text: "Web Services Access Group in Adobe Analytics",
      },
    ],
  },
  {
    number: 46,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">An Adobe Target activity uses a new Experience Cloud audience previously created in Adobe Analytics. The activity is live, but according to the activity reporting, no visitors have yet qualified for the activity. The architect wants to determine if it is ready for use in Adobe Target.<br><br>Where can an Adobe Target Architect view the initial processing status of the Adobe Analytics-created Experience Cloud audience to verify readiness?</div>`,
    answers: [
      {
        correct: false,
        text: "Segments in Adobe Audience Manager",
      },
      {
        correct: true,
        text: "Audience Library in People Core Service",
      },
      {
        correct: false,
        text: "Audiences in Adobe Target",
      },
    ],
  },

  {
    number: 47,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A developer recently created a new criterion for the recommendation service.<br>
<br>
After implementing a Recommendations Activity using the new criterion, the developer is unable to view the recommendation.<br>
<br>
The debugger gives the following response:<br>
<br>
<code>no_content</code><br>
<br>
Assuming results are ready for the requested algorithm/key combination, what is a possible reason for this error code?</p>
</div>`,
    answers: [
      {
        correct: false,
        text: "The Activity is targeting the wrong pages.",
      },
      {
        correct: true,
        text: "Results are not yet cached at the nearest Edge server.",
      },
      {
        correct: false,
        text: "The Design contains an error.",
      },
    ],
  },
  {
    number: 48,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;"><p>A Target developer is testing a new recommendations design but is observing an issue where the dynamic product information is not being replaced in the html code.<br>
<br>
Based on the code snippet below of the Recommendations design, what should the architect recommend the developer do to resolve the issue?<br>
<br>
<a href="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E409/resources_files_Screen_Shot_2021-05-05_at_11-04-25_AM.png" data-lightbox="instruction"><img alt="" src="https://content.gmetrix.net/questions/images/Adobe%20Certified%20Expert/AD4-E409/resources_files_Screen_Shot_2021-05-05_at_11-04-25_AM.png" data-uw-rm-alt-original=""></a></p>
</div>`,
    answers: [
      {
        correct: false,
        text: 'Append "#" to the front of all of the entity references.',
      },
      {
        correct: true,
        text: 'Append "$" to the front of all of the entity references.',
      },
      {
        correct: false,
        text: 'Append "jQuery" to the front of all of the entity references.',
      },
    ],
  },
];