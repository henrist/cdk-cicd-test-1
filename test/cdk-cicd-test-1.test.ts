import {
  expect as expectCDK,
  MatchStyle,
  matchTemplate
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { DemoStack } from "../lib/stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new DemoStack(app, "MyTestStack");
  // THEN
  if (false) { // Not in sync.
    expectCDK(stack).to(
      matchTemplate(
        {
          Resources: {}
        },
        MatchStyle.EXACT
      )
    );
  }
});
