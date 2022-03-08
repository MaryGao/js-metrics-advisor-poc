// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { FarmbeatsLike } from "./clientDefinitions";

export default function Farmbeats(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): FarmbeatsLike {
  const baseUrl = options.baseUrl ?? `${endpoint}/metricsadvisor/v1.0`;

  options = {
    ...options,
    credentials: {
      scopes: ["https://farmbeats.azure.net/.default"]
    }
  };

  const client = getClient(baseUrl, credentials, options) as FarmbeatsLike;

  return client;
}
