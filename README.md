# _FoxTV Stations Take Home Assignment_

## **Installs**
##### _Pre-requisites_

- First program that needs to be installed is  [Node.js](https://nodejs.org/en/download/). 
- In order to visualize the code via IDE, install [Visual Studio Code](https://code.visualstudio.com/download)

##### _Requirements_
- Install Automation Framework: [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
```sh
Install Cypress via command: ${npm install cypress --save-dev}

run below command when package.json file does not exists
Create package.json file using command: ${text in here}
```
- Install 2nd Automation Framework: [TestCafe](https://testcafe.io/documentation/402635/getting-started)

```sh
Install TestCafe via command: ${npm install --save-dev testcafe}
Reaons for installation will be explained in the 'Findings - 3.1' section of the ReadMe file
```

##### _Plugins_
- [Cypress real-events](https://github.com/dmtrKovalenko/cypress-real-events) - Real-Events plugin site
- [Cypress iframes](https://www.npmjs.com/package/cypress-iframe) - Cypress Iframes plugin site
- Run the following commands in the VSC terminal to install appropriate dependicies
```sh
cypress real-events: ${npm install cypress-real-events} 
cypress iframe:      ${npm install -D cypress-iframe}
```


## **How to Run**

### Cypress:
After Cypress installation has been completed, the SDET may choose to either run the testscripts in head or headless mode.
In order to do either, the SDET may run any of the following commands:
```sh
Run 'Cypress' via GUI mode:       ${npx cypress open}
Run 'Cypress' via headleass mode: ${npx cypress run --headless --browser chrome}
```

### GUI:
- With the GUI Command the SDET is able to use the interface to select testscripts to run.  
- This may be done either singularly or in bulk.  
- The GUI of Cypress opens a browser within an iframe that allows for the ability to use their 'Time Travel' feature.
- If so desired, the user may select between different browsers and run the code. 
-- Note: The browsers available depend on which browsers are loaded onto the OS.
- While the GUI is running a specific script, changes that are daved to the JS file will re-run the test in the GUI.
-- This allows for immediate results of your code, on the GUI, while testing.

### Headless: 
- With your terminal in VSC, the SDET is able run all testscripts in headless mode.
- This means that no GUI is present when the tests are run and results are collected accordingly.
- Run the headless mode Command stated above and all testscripts will launch and be tested.
- Tests will be shown as pass or fail in the terminal that used the Command.
- This mode will automatically record all testcases and save them as an MP4 file.
- Screenshots are all recorded, although this is limited to test failures.

### TestCafe (task 3 Alternative):

Due to the difficulty in not finding the iframes or them not being loaded via the DOM, `TestCafe` was used to test and verify that the Top and right ad Banners. 
These banners are embedded in iframes that for some reason are not loaded by Cypress.  

As an alternative to Cypress, `TestCafe` was installed to verify that the ads due infact exist within the iframes.  
The following will explain how to run js file using `TestCafe`.

```sh
Run 'TestCafe' via Terminal: ${npx testcafe chrome "./testCafe/testCafeAdBanner.js"}
Test should run and verify that the ads due exist in the page.
```



## TestCases are located by clicking this [link]()
-- Note: These testcases are a supplement to help understand how each and every testcase was translated into code, therefore a Cypress Test

## **Findings**

**Tasks:**
Task 1 was broken down into three tests.  
Task 2 was broken down into three test.
Task 3 was broken down into two tests.
Task 4 was kept as one test. 

| Test #| Results|
|-------|--------|
| 1.1| The test was to add and delete buttons accordingly.  This proved to be straightforward with little issue|
|1.2| The test was to deal with dynamic controls that affect how other features display and work.  
|   | Note: There is a defect for each of the controls present.  |
||  Defect 1: CheckBox, cLicking the Enable/disable button causes the 'A Checkbox' text to be printed everytime the button is used.
|| Defect 2: Input Field, after clicking the enable/disable button for the Checkbox,  the enable/disable button will cause the load animation to be added everytime the button is used.|
|1.3| The test introduced iframes via a WYSIWYG editor.  Plug-in used to help solve this testcase.|
|2.1|The test was to ensure that a video is playing on the main channel and that the tester verifies that the correct video is playing. FoxLA Live link should play the Fox 11 live video|
|2.2| The test was to verify that video buttons in an iframe were present.  |
|2.3| The test was to ensure that the play/pause button worked as intended|
|3.1| The test was to verify the Top Ad Banner. 
||This one was difficult to work with, for some reason `Cypress is not able to render these google based ads`.  |
||Manually inspecting the site the ads will be displayed as normal. |
||For some reason, Cypress is not able to load these ads.  Further inspection revealed that when the site is loaded via Cypress, the `DOM fails to load the iframe elements` that would normally be shown. |
||With this in mind, further investigation into security settings were made.  `Browser settings, Ignore X-Frame Header, even setting Cypress setting to chromeSecurity: false` did not help in rendering these.|
||Not satisfied with this conclusion, it was decided to try another framework.  `TestCafe` was installed to see if maybe cypress was the issue|
||`TestCafe` was able to render the ads without issue, only a delay in launching tests was required.|
||Therefore, it was concluded that Cypress is not capable of getting around these specfic iframes.  If there the element does not exist in the DOM, there is nothing to test|
|3.2|The Test was to verify if the any of the right most ads can be checked and verified. |
||Seeing as though the first ad on the right suffers from the same issue as the Top ad Banner, the second ad was used to complete the test.|
|| `Cypress completes this well`|
||`TestCafe` was also used to test this.|
|| `TestCafe` succeeds in verifying the ad Banner iframes for both the top and right side of the site.|
|4.1| The test was to assert that a response schema would yield a specific property.  The assertion made was to verify that the property were an array of strings.  




