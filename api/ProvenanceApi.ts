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
import ProvenanceInterfaces = require("./interfaces/ProvenanceInterfaces");

export interface IProvenanceApi extends basem.ClientApiBase {
    createSession(sessionRequest: ProvenanceInterfaces.SessionRequest, protocol: string, project?: string): Promise<ProvenanceInterfaces.SessionResponse>;
}

export class ProvenanceApi extends basem.ClientApiBase implements IProvenanceApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Provenance-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "b40c1171-807a-493a-8f3f-5c26d5e2f5aa";

    /**
     * Creates a session, a wrapper around a feed that can store additional metadata on the packages published to it.
     * 
     * @param {ProvenanceInterfaces.SessionRequest} sessionRequest - The feed and metadata for the session
     * @param {string} protocol - The protocol that the session will target
     * @param {string} project - Project ID or project name
     */
    public async createSession(
        sessionRequest: ProvenanceInterfaces.SessionRequest,
        protocol: string,
        project?: string
        ): Promise<ProvenanceInterfaces.SessionResponse> {

        return new Promise<ProvenanceInterfaces.SessionResponse>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                protocol: protocol
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Provenance",
                    "503b4e54-ebf4-4d04-8eee-21c00823c2ac",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProvenanceInterfaces.SessionResponse>;
                res = await this.rest.create<ProvenanceInterfaces.SessionResponse>(url, sessionRequest, options);

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
