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
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");

export interface IElasticApi extends basem.ClientApiBase {
    getElasticPoolLogs(poolId: number, top?: number): Promise<TaskAgentInterfaces.ElasticPoolLog[]>;
    createElasticPool(elasticPool: TaskAgentInterfaces.ElasticPool, poolName: string, authorizeAllPipelines?: boolean, autoProvisionProjectPools?: boolean, projectId?: string): Promise<TaskAgentInterfaces.ElasticPoolCreationResult>;
    getElasticPool(poolId: number): Promise<TaskAgentInterfaces.ElasticPool>;
    getElasticPools(): Promise<TaskAgentInterfaces.ElasticPool[]>;
    updateElasticPool(elasticPoolSettings: TaskAgentInterfaces.ElasticPoolSettings, poolId: number): Promise<TaskAgentInterfaces.ElasticPool>;
    getElasticNodes(poolId: number, state?: TaskAgentInterfaces.ElasticNodeState): Promise<TaskAgentInterfaces.ElasticNode[]>;
    updateElasticNode(elasticNodeSettings: TaskAgentInterfaces.ElasticNodeSettings, poolId: number, elasticNodeId: number): Promise<TaskAgentInterfaces.ElasticNode>;
}

export class ElasticApi extends basem.ClientApiBase implements IElasticApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Elastic-api', options);
    }

    /**
     * Get elastic pool diagnostics logs for a specified Elastic Pool.
     * 
     * @param {number} poolId - Pool Id of the Elastic Pool
     * @param {number} top - Number of elastic pool logs to retrieve
     */
    public async getElasticPoolLogs(
        poolId: number,
        top?: number
        ): Promise<TaskAgentInterfaces.ElasticPoolLog[]> {

        return new Promise<TaskAgentInterfaces.ElasticPoolLog[]>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "595b1769-61d5-4076-a72a-98a02105ca9a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticPoolLog[]>;
                res = await this.rest.get<TaskAgentInterfaces.ElasticPoolLog[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticPoolLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a new elastic pool. This will create a new TaskAgentPool at the organization level. If a project id is provided, this will create a new TaskAgentQueue in the specified project.
     * 
     * @param {TaskAgentInterfaces.ElasticPool} elasticPool - Elastic pool to create. Contains the properties necessary for configuring a new ElasticPool.
     * @param {string} poolName - Name to use for the new TaskAgentPool
     * @param {boolean} authorizeAllPipelines - Setting to determine if all pipelines are authorized to use this TaskAgentPool by default.
     * @param {boolean} autoProvisionProjectPools - Setting to automatically provision TaskAgentQueues in every project for the new pool.
     * @param {string} projectId - Optional: If provided, a new TaskAgentQueue will be created in the specified project.
     */
    public async createElasticPool(
        elasticPool: TaskAgentInterfaces.ElasticPool,
        poolName: string,
        authorizeAllPipelines?: boolean,
        autoProvisionProjectPools?: boolean,
        projectId?: string
        ): Promise<TaskAgentInterfaces.ElasticPoolCreationResult> {
        if (poolName == null) {
            throw new TypeError('poolName can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.ElasticPoolCreationResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                poolName: poolName,
                authorizeAllPipelines: authorizeAllPipelines,
                autoProvisionProjectPools: autoProvisionProjectPools,
                projectId: projectId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "dd3c938f-835b-4971-b99a-db75a47aad43",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticPoolCreationResult>;
                res = await this.rest.create<TaskAgentInterfaces.ElasticPoolCreationResult>(url, elasticPool, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticPoolCreationResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns the Elastic Pool with the specified Pool Id.
     * 
     * @param {number} poolId - Pool Id of the associated TaskAgentPool
     */
    public async getElasticPool(
        poolId: number
        ): Promise<TaskAgentInterfaces.ElasticPool> {

        return new Promise<TaskAgentInterfaces.ElasticPool>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "dd3c938f-835b-4971-b99a-db75a47aad43",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticPool>;
                res = await this.rest.get<TaskAgentInterfaces.ElasticPool>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticPool,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of all Elastic Pools.
     * 
     */
    public async getElasticPools(
        ): Promise<TaskAgentInterfaces.ElasticPool[]> {

        return new Promise<TaskAgentInterfaces.ElasticPool[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "dd3c938f-835b-4971-b99a-db75a47aad43",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticPool[]>;
                res = await this.rest.get<TaskAgentInterfaces.ElasticPool[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticPool,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update settings on a specified Elastic Pool.
     * 
     * @param {TaskAgentInterfaces.ElasticPoolSettings} elasticPoolSettings - New Elastic Pool settings data
     * @param {number} poolId
     */
    public async updateElasticPool(
        elasticPoolSettings: TaskAgentInterfaces.ElasticPoolSettings,
        poolId: number
        ): Promise<TaskAgentInterfaces.ElasticPool> {

        return new Promise<TaskAgentInterfaces.ElasticPool>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "dd3c938f-835b-4971-b99a-db75a47aad43",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticPool>;
                res = await this.rest.update<TaskAgentInterfaces.ElasticPool>(url, elasticPoolSettings, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticPool,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of ElasticNodes currently in the ElasticPool
     * 
     * @param {number} poolId - Pool id of the ElasticPool
     * @param {TaskAgentInterfaces.ElasticNodeState} state - Optional: Filter to only retrieve ElasticNodes in the given ElasticNodeState
     */
    public async getElasticNodes(
        poolId: number,
        state?: TaskAgentInterfaces.ElasticNodeState
        ): Promise<TaskAgentInterfaces.ElasticNode[]> {

        return new Promise<TaskAgentInterfaces.ElasticNode[]>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                '$state': state,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "1b232402-5ff0-42ad-9703-d76497835eb6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticNode[]>;
                res = await this.rest.get<TaskAgentInterfaces.ElasticNode[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticNode,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update properties on a specified ElasticNode
     * 
     * @param {TaskAgentInterfaces.ElasticNodeSettings} elasticNodeSettings
     * @param {number} poolId
     * @param {number} elasticNodeId
     */
    public async updateElasticNode(
        elasticNodeSettings: TaskAgentInterfaces.ElasticNodeSettings,
        poolId: number,
        elasticNodeId: number
        ): Promise<TaskAgentInterfaces.ElasticNode> {

        return new Promise<TaskAgentInterfaces.ElasticNode>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                elasticNodeId: elasticNodeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "1b232402-5ff0-42ad-9703-d76497835eb6",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ElasticNode>;
                res = await this.rest.update<TaskAgentInterfaces.ElasticNode>(url, elasticNodeSettings, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ElasticNode,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
