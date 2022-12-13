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
import DeploymentInterfaces = require("./interfaces/DeploymentInterfaces");

export interface IDeploymentApi extends basem.ClientApiBase {
    getArtifactProvenances(resourceUri: string[], typeFilters?: string): Promise<DeploymentInterfaces.ArtifactProvenance[]>;
    addAttesationDetails(attestationDetails: DeploymentInterfaces.AttestationDetails, project: string): Promise<void>;
    addDeploymentDetails(deploymentDetails: DeploymentInterfaces.DeploymentDetails, project: string): Promise<void>;
    addImageDetails(imageDetails: DeploymentInterfaces.ImageDetails, project: string): Promise<void>;
    getImageResourceIds(project: string, runId: number): Promise<string[]>;
    addVulnerabilityDetails(vulnerabilityDetails: DeploymentInterfaces.VulnerabilityDetails, project: string): Promise<void>;
}

export class DeploymentApi extends basem.ClientApiBase implements IDeploymentApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-deployment-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "8580c551-69db-4092-9050-c9ccd4521d2e";

    /**
     * @param {string[]} resourceUri
     * @param {string} typeFilters
     */
    public async getArtifactProvenances(
        resourceUri: string[],
        typeFilters?: string
        ): Promise<DeploymentInterfaces.ArtifactProvenance[]> {
        if (resourceUri == null) {
            throw new TypeError('resourceUri can not be null or undefined');
        }

        return new Promise<DeploymentInterfaces.ArtifactProvenance[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                resourceUri: resourceUri && resourceUri.join(","),
                typeFilters: typeFilters,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Deployment",
                    "d943a6f4-a813-4498-823a-4da53bf9d0cd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DeploymentInterfaces.ArtifactProvenance[]>;
                res = await this.rest.get<DeploymentInterfaces.ArtifactProvenance[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              DeploymentInterfaces.TypeInfo.ArtifactProvenance,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {DeploymentInterfaces.AttestationDetails} attestationDetails
     * @param {string} project - Project ID or project name
     */
    public async addAttesationDetails(
        attestationDetails: DeploymentInterfaces.AttestationDetails,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Deployment",
                    "45eed45c-a02d-4f52-99ae-4f1282049f6b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, attestationDetails, options);

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

    /**
     * @param {DeploymentInterfaces.DeploymentDetails} deploymentDetails
     * @param {string} project - Project ID or project name
     */
    public async addDeploymentDetails(
        deploymentDetails: DeploymentInterfaces.DeploymentDetails,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Deployment",
                    "bb302ef9-066f-4ffb-aee2-d61b91783b2a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, deploymentDetails, options);

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

    /**
     * @param {DeploymentInterfaces.ImageDetails} imageDetails
     * @param {string} project - Project ID or project name
     */
    public async addImageDetails(
        imageDetails: DeploymentInterfaces.ImageDetails,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "Deployment",
                    "647bb185-908a-4660-b59b-dff3d1ace8de",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, imageDetails, options);

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

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async getImageResourceIds(
        project: string,
        runId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "Deployment",
                    "647bb185-908a-4660-b59b-dff3d1ace8de",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {DeploymentInterfaces.VulnerabilityDetails} vulnerabilityDetails
     * @param {string} project - Project ID or project name
     */
    public async addVulnerabilityDetails(
        vulnerabilityDetails: DeploymentInterfaces.VulnerabilityDetails,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Deployment",
                    "ab55f461-1075-4c26-b84d-35cd2d5833bd",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, vulnerabilityDetails, options);

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
