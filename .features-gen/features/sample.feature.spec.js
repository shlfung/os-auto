/** Generated from: features/sample.feature */
import { test } from "playwright-bdd";

test.describe("OpenSpecimen Homepage", () => {

  test("Check title", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://openspecimen.bcchr.ca/openspecimen\"", null, { page });
    await When("I fill in the username and password and click button \"Sign In\"", null, { page });
    await Then("I see in title \"Home\"", null, { page });
  });

  test("Check Side Bar", async ({ Given, page, When, Then }) => {
    await Given("I open url \"https://openspecimen.bcchr.ca/openspecimen\"", null, { page });
    await When("I fill in the username and password and click button \"Sign In\"", null, { page });
    await When("I click on the side bar", null, { page });
    await Then("I see in title \"Navigate To\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/sample.feature"),
});

const testMetaMap = {
  "Check title": {"pickleLocation":"3:5"},
  "Check Side Bar": {"pickleLocation":"8:5"},
};