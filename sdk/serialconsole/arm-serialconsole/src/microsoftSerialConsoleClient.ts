/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MicrosoftSerialConsoleClientContext } from "./microsoftSerialConsoleClientContext";


class MicrosoftSerialConsoleClient extends MicrosoftSerialConsoleClientContext {
  // Operation groups
  list: operations.List;
  listConsole: operations.ListConsole;
  console: operations.Console;

  /**
   * Initializes a new instance of the MicrosoftSerialConsoleClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MicrosoftSerialConsoleClientOptions) {
    super(credentials, subscriptionId, options);
    this.list = new operations.List(this);
    this.listConsole = new operations.ListConsole(this);
    this.console = new operations.Console(this);
  }
}

// Operation Specifications

export {
  MicrosoftSerialConsoleClient,
  MicrosoftSerialConsoleClientContext,
  Models as MicrosoftSerialConsoleModels,
  Mappers as MicrosoftSerialConsoleMappers
};
export * from "./operations";
