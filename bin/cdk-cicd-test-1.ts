#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCicdTest1Stack } from '../lib/cdk-cicd-test-1-stack';

const app = new cdk.App();
new CdkCicdTest1Stack(app, 'CdkCicdTest1Stack');
