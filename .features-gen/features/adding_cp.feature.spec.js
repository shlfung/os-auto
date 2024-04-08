/** Generated from: features/adding_cp.feature */
import { test } from "playwright-bdd";

test.describe("Adding Collection Protocol", () => {

  test("Login as admin and create a collection protocol", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://openspecimen-staging.bcchr.ca/openspecimen\"", null, { page });
    await When("I fill in the username and password and click button \"Sign In\"", null, { page });
    await When("I click on the side bar and select \"Collection Protocols\"", null, { page });
    await When("I see in title \"Collection Protocols\"", null, { page });
    await When("I click on the button \"Create\"", null, { page });
    await When("I see in title \"Create Collection Protocol\"", null, { page });
    await Then("I create a new Collection Protocol", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/adding_cp.feature"),
});

const testMetaMap = {
  "Login as admin and create a collection protocol": {"pickleLocation":"3:5"},
};