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
import SBOMInterfaces = require("./interfaces/SBOMInterfaces");

export interface ISBOMApi extends basem.ClientApiBase {
    getSignStatus(operationId: string, project?: string): Promise<SBOMInterfaces.SignStatusResponse>;
    validateBuildAndSubmitSignSBOM(fileHash: SBOMInterfaces.FileHash, project?: string): Promise<NodeJS.ReadableStream>;
    createTelemetryData(telemetry: SBOMInterfaces.SBOMTelemetry, project?: string): Promise<void>;
}

export class SBOMApi extends basem.ClientApiBase implements ISBOMApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-SBOM-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "2e504d18-2c0c-46f8-af8f-322d2af0068a";

    /**
     * @param {string} operationId
     * @param {string} project - Project ID or project name
     */
    public async getSignStatus(
        operationId: string,
        project?: string
        ): Promise<SBOMInterfaces.SignStatusResponse> {

        return new Promise<SBOMInterfaces.SignStatusResponse>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                operationId: operationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "SBOM",
                    "63f17c0a-3175-4595-9deb-7f139eb7abd4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<SBOMInterfaces.SignStatusResponse>;
                res = await this.rest.get<SBOMInterfaces.SignStatusResponse>(url, options);

                let ret = this.formatResponse(res.result,
                                              SBOMInterfaces.TypeInfo.SignStatusResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {SBOMInterfaces.FileHash} fileHash
     * @param {string} project - Project ID or project name
     */
    public async validateBuildAndSubmitSignSBOM(
        fileHash: SBOMInterfaces.FileHash,
        project?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "SBOM",
                    "63f17c0a-3175-4595-9deb-7f139eb7abd4",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {SBOMInterfaces.SBOMTelemetry} telemetry
     * @param {string} project - Project ID or project name
     */
    public async createTelemetryData(
        telemetry: SBOMInterfaces.SBOMTelemetry,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "SBOM",
                    "46883e7d-444f-46df-96d9-ee71c25b87f4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, telemetry, options);

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
