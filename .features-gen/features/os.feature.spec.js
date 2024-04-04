/** Generated from: features/os.feature */
import { test } from "playwright-bdd";

test.describe("Adding and Deleting Users", () => {

  test("Login as admin Check title", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://openspecimen-staging.bcchr.ca/openspecimen\"", null, { page });
    await When("I fill in the username and password and click button \"Sign In\"", null, { page });
    await Then("I see in title \"Home\"", null, { page });
  });

  test("Login as admin and create a regular user", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://openspecimen-staging.bcchr.ca/openspecimen\"", null, { page });
    await When("I fill in the username and password and click button \"Sign In\"", null, { page });
    await When("I click on the side bar and select \"Users\"", null, { page });
    await When("I see in title \"Users\"", null, { page });
    await When("I click on the button \"Create\"", null, { page });
    await Then("I see in title \"Create User\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/os.feature"),
});

const testMetaMap = {
  "Login as admin Check title": {"pickleLocation":"3:5"},
  "Login as admin and create a regular user": {"pickleLocation":"8:5"},
};