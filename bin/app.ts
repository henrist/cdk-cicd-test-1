#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { DemoStack } from "../lib/stack";

const app = new App();

new DemoStack(app, "DemoPipelineStack", {
  env: { account: "607103741379", region: "eu-west-1" }
});

app.synth();
