/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

import * as restm from 'typed-rest-client/RestClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import ClientTraceInterfaces = require("./interfaces/ClientTraceInterfaces");

export interface IClientTraceApi extends basem.ClientApiBase {
    publishEvents(events: ClientTraceInterfaces.ClientTraceEvent[]): Promise<void>;
}

export class ClientTraceApi extends basem.ClientApiBase implements IClientTraceApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-ClientTrace-api', options);
    }

    /**
     * @param {ClientTraceInterfaces.ClientTraceEvent[]} events
     */
    public async publishEvents(
        events: ClientTraceInterfaces.ClientTraceEvent[]
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "ClientTrace",
                    "06bcc74a-1491-4eb8-a0eb-704778f9d041",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, events, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
