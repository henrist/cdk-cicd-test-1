import { CfnOutput, Construct, Stage, StageProps } from "@aws-cdk/core"
import { DemoStack } from "./stack"

/**
 * Deployable unit of web service app
 */
export class DemoStage extends Stage {
  public readonly urlOutput: CfnOutput

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props)

    const service = new DemoStack(this, "WebService")

    // Expose DemoStack's output one level higher
    this.urlOutput = service.urlOutput
  }
}
