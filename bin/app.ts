#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { DemoPipelineStack } from "../lib/pipeline-stack";

const app = new App();

new DemoPipelineStack(app, "DemoPipelineStack", {
  env: { account: "607103741379", region: "eu-west-1" }
});

app.synth();
