// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { MetricsAdvisorRestClientLike } from "./clientDefinitions";

export default function MetricsAdvisorRestClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): MetricsAdvisorRestClientLike {
  const baseUrl = options.baseUrl ?? `${endpoint}/metricsadvisor/v1.0`;

  options = {
    ...options,
    credentials: {
      scopes: ["https://farmbeats.azure.net/.default"]
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as MetricsAdvisorRestClientLike;

  return client;
}
