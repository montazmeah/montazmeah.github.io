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
    notes: ``,
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
    notes: `
    <h2 id="section_BA73E8B3CFCC4CBEB5BE3F76B2BC8682" tabindex="-1">What are the new query string parameters added to the redirect URLs?</h2>
    <details open="">
<summary><span class="details-marker">&nbsp;</span>Answer</summary><p>The following query string parameters are associated with redirect offers:</p>
<div class="table-container">

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Parameter</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-title="Parameter"><code>adobe_mc_sdid</code></td>
      <td data-title="Description">The <code>adobe_mc_sdid</code> parameter passes the Supplemental Data Id (SDID) and Experience Cloud Org Id from the default page to the new page. These IDs allow A4T to “stitch” together the Target request on the default page with the Analytic request on the new page.<br>The expected format to pass sdid in the url (for hybrid apps or from one app to the website or one website to another) is ex. adobe_mc_sdid=SDID=123</td>
    </tr>
    <tr>
<td data-title="Parameter"><code>adobe_mc_ref</code></td>
<td data-title="Description">The <code>adobe_mc_ref</code> parameter passes the referring URL of the default page to the new page. When used with  AppMeasurement.js version 2.1 (or later),  Analytics uses this parameter value as the referring URL on the new page.</td>
</tr>
  </tbody>
</table>
</div>
<p>These parameters are automatically added to the redirect URLs when using the built-in redirect offers in the VEC and Form-Based Experience Composer when the Visitor Id service is implemented on the page. If you are using your own custom redirect code in the VEC or Form-Based Composer, you must be sure to pass these parameters with your custom code.</p>
</details>
<i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t-faq/a4t-faq-redirect-offers.html?lang=en">https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t-faq/a4t-faq-redirect-offers.html?lang=en</a></i>
    `,
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
    notes: `
    <h2 id="email%3A-implement-target" tabindex="-1"><mark>Email:</mark> implement Target</h2>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Purpose</th>
            <th scope="col">When To Use</th>
            <th scope="col">URL Structure</th>
            <th scope="col">Offer Type</th>
            <th scope="col">Offer Content</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row"><mark>AdBox</mark></th>
            <td><mark>Returns different images to the ad</mark></td>
            <td>To change the content of an ad</td>
            <td><code>clientcode​.tt.​omtrdc​.net/​m2​/​clientcode/ubox/​image?</code></td>
            <td>redirect offer</td>
            <td>URL for an image</td>
            </tr>
            <tr>
            <th scope="row">Redirector</th>
            <td>Redirects a visitor to a different web page</td>
            <td>To change the landing page of an ad	</td>
            <td><code>clientcode​.tt.omtrdc.net/​m2/clientcode​/ubox/page?</code></td>
            <td>redirect offer</td>
            <td>URL for a page</td>

            </tr>
            
        </tbody>
    </table>
    <i>source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target-dev/developer/implement-email/overview.html?lang=en">https://experienceleague.adobe.com/docs/target-dev/developer/implement-email/overview.html?lang=en</a></i>
    `,
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
    notes: `
    <h1 id="automated-personalization-(ap)" tabindex="-1"><mark>Automated Personalization (AP)</mark></h1>
    <h2 id="target-automatically-uses-all-adobe-experience-cloud-shared-audiences-to-build-the-personalization-models" tabindex="-1">Target automatically uses all Adobe <mark>Experience Cloud</mark> shared <mark>audiences</mark> to build the personalization models</h2>
    <ul>
      <li>You don’t need to do anything specific to add audiences to the model. For information about using Experience Cloud Audiences with Target, see <a href="/docs/target/using/integrate/mmp.html?lang=en">Experience Cloud Audiences</a>.</li>
    </ul>
    <h2 id="marketers-can-upload-offline-data%2C-propensity-scores%2C-or-other-custom-data-to-build-personalization-models" tabindex="-1">Marketers can upload offline data, propensity scores, or other custom data to build personalization models</h2>
    <p>Offline data, such as CRM information or customer-churn propensity scores, can be incredibly valuable when building personalization models. There are several ways to input data in Automated Personalization (AP) and Auto-Target personalization algorithms.</p>
    <ul>
      <li><a href="/docs/target-dev/developer/implementation/methods/methods-to-get-data-into-target.html?lang=en" target="_blank"><mark>mbox parameters</mark></a></li>
      <li><a href="/docs/target-dev/developer/implementation/methods/methods-to-get-data-into-target.html?lang=en" target="_blank">Profile parameters</a></li>
      <li><a href="/docs/target-dev/developer/implementation/methods/methods-to-get-data-into-target.html?lang=en" target="_blank">Server-side APIs for profile update</a></li>
    </ul>
    <p>For information about the data automatically collected and used by Automated Personalization and Auto-Target personalization algorithms, see <a href="/docs/target/using/activities/automated-personalization/ap-data.html?lang=en">Automated Personalization Data Collection</a>.</p>
    <i>Source: <a href="https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html?lang=en" target="_blank">https://experienceleague.adobe.com/docs/target/using/activities/automated-personalization/automated-personalization.html?lang=en</a></i>
    `,
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
    notes: `
    <div class="docs-main">
  <!-- Docs page metadata-->
  <h1 id="script-profile-attributes" tabindex="-1">Script profile attributes</h1>

  <p>Script profile attributes are name/value pairs defined in the Adobe Target solution. The value is determined from executing a JavaScript snippet on Target’s server per server call.</p>
<p>Users write small code snippets that execute per mbox call, and before a visitor is evaluated for audience and activity membership.</p>
<h2 id="format" tabindex="-1">Format</h2>
<p>Script profile attributes are created in the Audiences section of Target. Any attribute name is valid, and the value is the result of a JavaScript function written by the Target user. The attribute name is automatically prefixed by " user. " in Target to distinguish them from in-page profile attributes.</p>
<p>The code snippet is written in the Rhino JS language and can reference tokens and other values.</p>
<h2 id="example-use-cases" tabindex="-1">Example Use Cases</h2>
<ul>
<li><strong>Cart Abandonment</strong>: When the visitor reaches the shopping cart, set the profile script to 1. When the visitor converts, reset it to 0. If the value =1, then the visitor has an item in the cart.</li>
<li><strong>Visit Count</strong>: On every new visit, increment the count by 1 to keep track of how often a visitor returns to the site.</li>
</ul>
<h2 id="benefits-of-method" tabindex="-1">Benefits of method</h2>
<p>Requires no page code updates.</p>
<p>Executes before audience and activity membership decisions, so these profile script attributes can affect membership on a single server call.</p>
<p>Can be very robust. As many as 2,000 instructions can be executed per script.</p>
<h2 id="caveats" tabindex="-1">Caveats</h2>
<p>Requires JavaScript knowledge.</p>
<p>The execution order of profile scripts cannot be guaranteed, so they cannot rely on each other.</p>
<p>Can be difficult to debug.</p>
<h2 id="code-examples" tabindex="-1">Code examples</h2>
<p>Profile scripts are quite flexible:</p>
<div class="code-toolbar"><code class="language-none">user.purchase_recency: var dayInMillis = 3600 * 24 * 1000; if (mbox.name == 'orderThankyouPage') {  user.setLocal('lastPurchaseTime', new Date().getTime()); } var lastPurchaseTime = user.getLocal('lastPurchaseTime'); if (lastPurchaseTime) {  return ((new Date()).getTime()-lastPurchaseTime)/dayInMillis; }
</code></div>
<h3 id="links-to-relevant-information" tabindex="-1">Links to relevant information</h3>
<p><a href="https://experienceleague.adobe.com/docs/target-dev/developer/implementation/methods/script-profile-attributes.html?lang=en">Profile Script Attributes</a></p>

</div>
    `,
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
    notes: `
    <div class="docs-main">
  <!-- Docs page metadata-->
  <p><span class="sp-badge-wrapper"><sp-badge size="s" style="cursor:inherit !important" variant="informative" dir="ltr">premium</sp-badge></span></p>
<h1 id="create-profile-scripts-in-adobe-target" tabindex="-1">Create Profile Scripts in Adobe Target</h1>

  
  <h2 id="description" tabindex="-1">Description</h2>
<p>In this video, you learn how to:</p>
<ul>
<li>Describe profile scripts</li>
<li>Create profile scripts</li>
</ul>
<h2 id="intended-audience" tabindex="-1">Intended Audience</h2>
<ul>
<li>Business Practitioner</li>
<li>Developer</li>
</ul>
<div class="extension video"><iframe allowfullscreen="" embedded-video="" src="https://video.tv.adobe.com/v/17394/?quality=12" style="width: 100%; height: 100%; min-height: 900px"><source src="https://video.tv.adobe.com/v/17394/?quality=12" type="" /><p>Your browser does not support the iframe element.</p></iframe></div>
</div>
<i>Source: <a href="https://experienceleague.adobe.com/docs/target-learn/tutorials/audiences/create-profile-scripts.html?lang=en">https://experienceleague.adobe.com/docs/target-learn/tutorials/audiences/create-profile-scripts.html?lang=en</a></i>
    `,
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
    notes: `
    <i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/visitor-profile-lifetime.html?lang=en">https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/visitor-profile-lifetime.html?lang=en</a></i>
    <div data-id="body">
          <h1 id="title"></h1>
          <!-- docs-main view start -->

<div class="docs-main">
  <!-- Docs page metadata-->
  <h1 id="visitor-profile-lifetime" tabindex="-1">Visitor profile lifetime</h1>

  
  <p>By default, a visitor profile in Adobe Target expires after 14 days of inactivity for that visitor. This profile lifetime can be extended.</p>
<p><a href="/docs/target/using/cmp-resources-and-contact-information.html?lang=en#reference_ACA3391A00EF467B87930A450050077C">Contact Client Care or your Adobe consultant</a> to extend the profile lifetime at no additional cost. The lifetime can be set to as many as 90 days.</p>
<p>You do not need to download a new Platform Web SDK file or at.js file if your profile is extended beyond the default.</p>
<p>The expiration date is not reset for existing profiles. If a previous visitor does not return for 15 days, that profile expires. If a previous visitor returns before the original two-week profile expires, the profile is reset to the extended lifetime. All new visitor profiles are set to the extended profile lifetime.</p>

</div>
<!-- docs-main view end -->


          
        <div>        
<h2 class="ada-section-title" id="recsSimpleList">More help on this topic</h2>

<ul>
  <li><a href="https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/visitor-profile.html?lang=en">What Are Visitor Profiles?</a></li>
  <li><a href="https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/profile-parameters.html?lang=en">What Are Profile Attributes?</a></li>
  <li><a href="https://experienceleague.adobe.com/docs/target/using/audiences/visitor-profiles/variables-profiles-parameters-methods.html?lang=en">Which Profiles, Variables, and Parameters Are Used in Target?</a></li>
</ul></div>
        </div>
    `,
  },
  {
    number: 8,
    choose: 1,
    question: `<div id="InstructionText" class="instructionText noSelect" style="font-size: 17px;">The client ran A/B Test activities on their website for a year without the Tag Management System. The client is now using a data layer and asks the Adobe Target Architect to use values from the data layer for website personalization. <br><br>Where should the Adobe Target Architect recommend placing the data layer?</div>`,
    answers: [
      {
        correct: false,
        text: "At the bottom of the &lt;BODY&gt; section after referencing at.js",
      },
      {
        correct: false,
        text: "In the &lt;HEAD&gt; section after referencing at.js",
      },
      {
        correct: false,
        text: "At the bottom of the &lt;BODY&gt; section before referencing at.js",
      },
      {
        correct: true,
        text: "In the &lt;HEAD&gt; section before referencing at.js",
      },
    ],
    notes: `
    <blockquote>If you have a data layer, it is optimal to define as much of it as possible in the <code>&lt;head&gt;</code> of your pages before at.js loads. This placement provides the maximum ability to use this information in Target for personalization.</blockquote>
    <i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/deploy-at-js/implement-target-without-a-tag-manager.html?lang=en">https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/deploy-at-js/implement-target-without-a-tag-manager.html?lang=en</a></i>
    
    `,
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
    notes: `
    <i>source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target-dev/developer/implement-email/testing-email-image-adbox.html?lang=en">https://experienceleague.adobe.com/docs/target-dev/developer/implement-email/testing-email-image-adbox.html?lang=en</a></i>
    <div class="docs-main">
  <!-- Docs page metadata-->
  <h4 id="test-an-email-image-adbox" tabindex="-1">Test an email image <mark>Adbox</mark></h4>

  
  <p><mark>Dynamically test images in email, and even change those images on the fly when someone opens the email.</mark></p>
<p>Redirectors can be used in emails to track clicks and dynamically control which landing page people reach.</p>
<p>Email image testing is achieved through using modified versions of adboxes. Because email clients do not allow cookies to be set, a unique identifier must be generated for each email. This number is appended to the adbox URL and to any redirectors used in the email to track clicks from the email.</p>
<div class="extension note">
<div>NOTE</div>
<div>
<p>Although Target can technically deliver image optimization at open time, each email client handles caching differently, so success will be varied. Regardless of the email service provider used, the email client that the end user uses to open the email (Gmail app, Outlook, Hotmail, and so forth) determines whether the image is actually fetched at open-time. For example, Gmail caches most everything, so the image the end user sees is dependent on when Gmail chooses to call and cache the image.</p>
</div>
</div>
<p><strong>Sample code for an email image adbox:</strong></p>
<div class="code-toolbar"><code class="language-none">&lt;img src="https://{clientcode}.tt.omtrdc.net/m2/​{clientcode}/ubox/​image?
mbox={email_header}&amp;
mboxDefault=​{http%3A%2F%2Fwww.domain.com%2Fheader.jpg}&amp;
mboxXDomain=disabled&amp;
mboxSession={123456}&amp;
mboxPC={123456}" border=:"0"/&gt;
</code>
</div>
<p>Where the below values are specific to you:</p>
<div class="table-container">

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clientcode</td>
      <td>Your company’s client code. Find this in your at.js listed as <code>clientCode='yourclientcode'</code>. This is all lower case and has no special characters.</td>
    </tr>
    <tr>
      <td>image</td>
      <td>The offer type. It is always “image” for graphic ads and “page” for redirectors.</td>
    </tr>
    <tr>
      <td>email_header</td>
      <td>The name of the adbox.</td>
    </tr>
    <tr>
      <td><code>mboxDefault=http%3A%2F%2Fwww.domain.com%2Fheader.jpg	</code</td>
      <td>Required. Replace the URL with appropriate default content for your adbox. This must be an absolute reference and must be URL encoded.</td>
    </tr>
    <tr>
      <td><code>mboxXDomain=disabled</code</td>
      <td>Tells Target to not attempt to set a cookie.</td>
    </tr>
    <tr>
      <td><code>mboxSession=123456</code> and <code>mboxPC=123456</code</td>
      <td>Two values required by Target to merge this user’s profile with the existing profile for your site. 123456 is the unique identifier generated per email. Dynamically insert this value into every adbox and redirector URL. This number must be unique for each email sent to each person. If a weekly email is sent to 1,000 people, 1,000 unique IDs need to be generated.
      The unique identifier per email needs to be assigned to the mboxSession and mboxPC in each adbox and redirector URL. The recommended format for this identifier is timestamp-NNNNN where NNNNN is a random 5-digit number, but any alphanumeric format will work. Some mass e-mail services and any programming language are capable of generating this unique identifier.
      </td>
    </tr>
  </tbody>
</table>

</div>

</div>`,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: `
    <h2 id="bots" tabindex="-1">Bots</h2>
    <p>Adobe Target uses the <a href="https://deviceatlas.com/device-data/user-agent-tester/">DeviceAtlas</a> metric “isRobot” to detect known bots based on the User Agent String passed in the Request Header.</p>
    <div class="extension note">
      <div>NOTE</div>
      <div>
        <p>For Server-Side requests, the value passed in the <a href="https://developers.adobetarget.com/api/delivery-api/#tag/Delivery-API">Request’s “Context” node</a> is given precedence over the User Agent String for bot detection.</p>
      </div>
    </div>
    <p>Traffic that is identified as being generated by a bot is still served content. Bots are treated like a regular user to ensure that Target is in line with SEO guidelines. Using bot traffic can skew A/B tests or personalization algorithms if they are treated like normal users. Therefore, if a known bot is detected in your Target activity, the traffic is treated slightly differently. Removing bot traffic provide a more accurate measurement of user activity.</p>
    <p>Specifically, for known bot traffic <mark>Target does not:</mark></p>
    <ul>
      <li><mark>Create or retrieve a visitor profile</mark></li>
      <li>Log any profile attributes or execute profile scripts</li>
      <li>Look up Adobe Audience Manager (AAM) segments (if applicable)</li>
      <li>Use bot traffic in modeling and serving personalized content for Recommendations, Auto-Target, Automated Personalization, or Auto-Allocate activities</li>
      <li><mark>Log an activity visit for reporting</mark></li>
      <li>Log data to be sent to the Adobe Experience Cloud platform</li>
    </ul>
    <p>For known bot traffic when using Analytics for Target (A4T), Target does not:</p>
    <ul>
      <li>Send events to Analytics</li>
    </ul>
    <p>For known bot traffic when using client_side logging, Target does not return:</p>
    <ul>
      <li>tnta payload</li>
    </ul>
    <i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target/using/introduction/how-target-works.html?lang=en">https://experienceleague.adobe.com/docs/target/using/introduction/how-target-works.html?lang=en</a></i>
    `,
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
    notes: `
    <h3 id="roles-permissions" tabindex="-1">Roles and permissions</h3>
    <p>Roles and permissions determine the access levels that users have to create and manage activities in your Target implementation. In Target, roles include the following:</p>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Role</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Approver</th>
      <td>Can create, edit, and activate or stop activities.</td>
    </tr>
    <tr>
      <th scope="row">Editor</th>
      <td>Can create and edit activities before they are live, but cannot approve the launch of an activity.</td>
    </tr>
    <tr>
      <th scope="row">Observer</th>
      <td>Can view activities, but cannot create or edit them.</td>
    </tr>
    <tr>
      <th scope="row">Publisher</th>
      <td>Similar to the Observer role (can view activities, but cannot create or edit them). However, the Publisher role has the additional permission to activate activities.</td>
    </tr>
    
  </tbody>
</table>
<i>Source: <a href="https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html?lang=en">https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html?lang=en</a></i>

    
    `,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: `
    <h2 id="profile-attribute-matching" tabindex="-1">Profile Attribute matching</h2>
    <p><mark>Filter dynamically in Adobe Target Recommendations by comparing items (entities) against a value in the user’s profile.</mark></p>
    <p><mark>Use Profile Attribute Matching when you want to show recommendations that match a value stored in the visitor’s profile, such as size or favorite brand.</mark></p>
    <p>The following scenarios show how you can use Profile Attribute Matching:</p>
    <ul>
      <li>A company that sells eyeglasses stores a visitor’s favorite frame color as “walnut.” For that specific visitor, recommendation are set up to return only eyeglass frames that match “walnut” in color.</li>
      <li>A profile parameter can be defined for the clothing size (e.g., Small, Medium, or Large) of a visitor as they navigate your company’s web site. A recommendation can be set up to match that profile parameter and return products specific only to the user’s preferred clothing size.</li>
    </ul>
    <i>Source: <a target="_blank" href="https://experienceleague.adobe.com/docs/target/using/recommendations/criteria/dynamic-static/profile-attribute-matching.html?lang=en#:~:text=Filter%20dynamically%20in%20Adobe%20Target,as%20size%20or%20favorite%20brand.">https://experienceleague.adobe.com/docs/target/using/recommendations/criteria/dynamic-static/profile-attribute-matching.html?lang=en#:~:text=Filter%20dynamically%20in%20Adobe%20Target,as%20size%20or%20favorite%20brand.</a></i>
    `,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
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
    notes: ``,
  },
];
