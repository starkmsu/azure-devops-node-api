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
import FeatureAvailabilityInterfaces = require("./interfaces/FeatureAvailabilityInterfaces");

export interface IFeatureAvailabilityApi extends basem.ClientApiBase {
    getAllFeatureFlags(userEmail?: string): Promise<FeatureAvailabilityInterfaces.FeatureFlag[]>;
    getFeatureFlagByName(name: string, checkFeatureExists?: boolean): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    getFeatureFlagByNameAndUserEmail(name: string, userEmail: string, checkFeatureExists?: boolean): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    getFeatureFlagByNameAndUserId(name: string, userId: string, checkFeatureExists?: boolean): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    updateFeatureFlag(state: FeatureAvailabilityInterfaces.FeatureFlagPatch, name: string, userEmail?: string, checkFeatureExists?: boolean, setAtApplicationLevelAlso?: boolean): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
}

export class FeatureAvailabilityApi extends basem.ClientApiBase implements IFeatureAvailabilityApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-FeatureAvailability-api', options);
    }

    /**
     * Retrieve a listing of all feature flags and their current states for a user
     * 
     * @param {string} userEmail - The email of the user to check
     */
    public async getAllFeatureFlags(
        userEmail?: string
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag[]> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                userEmail: userEmail,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag[]>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag[]>(url, options);

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
     * Retrieve information on a single feature flag and its current states
     * 
     * @param {string} name - The name of the feature to retrieve
     * @param {boolean} checkFeatureExists - Check if feature exists
     */
    public async getFeatureFlagByName(
        name: string,
        checkFeatureExists?: boolean
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                checkFeatureExists: checkFeatureExists,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
     * Retrieve information on a single feature flag and its current states for a user
     * 
     * @param {string} name - The name of the feature to retrieve
     * @param {string} userEmail - The email of the user to check
     * @param {boolean} checkFeatureExists - Check if feature exists
     */
    public async getFeatureFlagByNameAndUserEmail(
        name: string,
        userEmail: string,
        checkFeatureExists?: boolean
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {
        if (userEmail == null) {
            throw new TypeError('userEmail can not be null or undefined');
        }

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userEmail: userEmail,
                checkFeatureExists: checkFeatureExists,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
     * Retrieve information on a single feature flag and its current states for a user
     * 
     * @param {string} name - The name of the feature to retrieve
     * @param {string} userId - The id of the user to check
     * @param {boolean} checkFeatureExists - Check if feature exists
     */
    public async getFeatureFlagByNameAndUserId(
        name: string,
        userId: string,
        checkFeatureExists?: boolean
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {
        if (userId == null) {
            throw new TypeError('userId can not be null or undefined');
        }

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userId: userId,
                checkFeatureExists: checkFeatureExists,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
     * Change the state of an individual feature flag for a name
     * 
     * @param {FeatureAvailabilityInterfaces.FeatureFlagPatch} state - State that should be set
     * @param {string} name - The name of the feature to change
     * @param {string} userEmail
     * @param {boolean} checkFeatureExists - Checks if the feature exists before setting the state
     * @param {boolean} setAtApplicationLevelAlso
     */
    public async updateFeatureFlag(
        state: FeatureAvailabilityInterfaces.FeatureFlagPatch,
        name: string,
        userEmail?: string,
        checkFeatureExists?: boolean,
        setAtApplicationLevelAlso?: boolean
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userEmail: userEmail,
                checkFeatureExists: checkFeatureExists,
                setAtApplicationLevelAlso: setAtApplicationLevelAlso,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.update<FeatureAvailabilityInterfaces.FeatureFlag>(url, state, options);

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
