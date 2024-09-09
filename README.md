# A simple visual regression test app

This is a sample app to show how visual regression testing can be used for testing web apps. More information about the app and the approach can be read at the following blog post: [Visual regression testing](https://www.itsfullofstars.de).

The recommended approach for the blog post and this app is to go through the steps described in the blog and to use this repository as a reference and help.

# Step 3: Create baseline

In this step the baseline of the visual regression tests is created. The test scenarios defined in step 2 are used as the reference. For this, the tests are run and the images captured:

```sh
npx backstop test
```

This test run will be reported as an error by BackstopJS as there are no references found. Therefore, the generated images of the 3 test runs are taken as the new baseline. These are the images future test runs will be compared to.

```sh
npx backstop approve
```

In the next step, new tests will be run and the captured images compared to the baseline images created in this step.