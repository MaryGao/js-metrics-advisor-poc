
# Azure  Farmbeats TypeScript Protocol Layer

> see https://aka.ms/autorest
## Configuration

```yaml
package-name: "@azure-rest/agrifood-farming"
title: Farmbeats
description: Farmbeats Client
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/08f5e391f2153a99580b458cc71ef88e45dd0531/specification/cognitiveservices/data-plane/MetricsAdvisor/preview/v1.0/MetricsAdvisor.json
package-version: 1.0.0-beta.2
rest-level-client: true
add-credentials: true
credential-scopes: https://farmbeats.azure.net/.default
use-extension:
  "@autorest/typescript": "latest"
```