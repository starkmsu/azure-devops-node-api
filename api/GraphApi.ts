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
import GraphInterfaces = require("./interfaces/GraphInterfaces");
import ProfileInterfaces = require("./interfaces/ProfileInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGraphApi extends basem.ClientApiBase {
    deleteAvatar(subjectDescriptor: string): Promise<void>;
    getAvatar(subjectDescriptor: string, size?: ProfileInterfaces.AvatarSize, format?: string): Promise<ProfileInterfaces.Avatar>;
    setAvatar(avatar: ProfileInterfaces.Avatar, subjectDescriptor: string): Promise<void>;
    getCachePolicies(): Promise<GraphInterfaces.GraphCachePolicies>;
    getDescriptor(storageKey: string): Promise<GraphInterfaces.GraphDescriptorResult>;
    getFederatedProviderData(subjectDescriptor: string, providerName: string, versionHint?: number): Promise<GraphInterfaces.GraphFederatedProviderData>;
    createGroup(creationContext: GraphInterfaces.GraphGroupCreationContext, scopeDescriptor?: string, groupDescriptors?: string[]): Promise<GraphInterfaces.GraphGroup>;
    deleteGroup(groupDescriptor: string): Promise<void>;
    getGroup(groupDescriptor: string): Promise<GraphInterfaces.GraphGroup>;
    updateGroup(customHeaders: any, groupDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<GraphInterfaces.GraphGroup>;
    translate(masterId?: string, localId?: string): Promise<string>;
    lookupMembers(memberLookup: GraphInterfaces.GraphSubjectLookup): Promise<{ [key: string] : GraphInterfaces.GraphMember; }>;
    getMemberByDescriptor(memberDescriptor: string): Promise<GraphInterfaces.GraphMember>;
    addMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    checkMembershipExistence(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    getMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    removeMembership(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    listMemberships(subjectDescriptor: string, direction?: GraphInterfaces.GraphTraversalDirection, depth?: number): Promise<GraphInterfaces.GraphMembership[]>;
    getMembershipState(subjectDescriptor: string): Promise<GraphInterfaces.GraphMembershipState>;
    lookupMembershipTraversals(membershipTraversalLookup: GraphInterfaces.GraphSubjectLookup, direction?: GraphInterfaces.GraphTraversalDirection, depth?: number): Promise<{ [key: string] : GraphInterfaces.GraphMembershipTraversal; }>;
    traverseMemberships(subjectDescriptor: string, direction?: GraphInterfaces.GraphTraversalDirection, depth?: number): Promise<GraphInterfaces.GraphMembershipTraversal>;
    getProviderInfo(userDescriptor: string): Promise<GraphInterfaces.GraphProviderInfo>;
    requestAccess(jsondocument: any): Promise<void>;
    resolve(mappings: GraphInterfaces.IdentityMappings): Promise<GraphInterfaces.ResolveDisconnectedUsersResponse>;
    createScope(creationContext: GraphInterfaces.GraphScopeCreationContext, scopeDescriptor?: string): Promise<GraphInterfaces.GraphScope>;
    deleteScope(scopeDescriptor: string): Promise<void>;
    getScope(scopeDescriptor: string): Promise<GraphInterfaces.GraphScope>;
    updateScope(customHeaders: any, scopeDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<void>;
    createServicePrincipal(creationContext: GraphInterfaces.GraphServicePrincipalCreationContext, groupDescriptors?: string[]): Promise<GraphInterfaces.GraphServicePrincipal>;
    deleteServicePrincipal(servicePrincipalDescriptor: string): Promise<void>;
    getServicePrincipal(servicePrincipalDescriptor: string): Promise<GraphInterfaces.GraphServicePrincipal>;
    updateServicePrincipal(updateContext: GraphInterfaces.GraphServicePrincipalUpdateContext, servicePrincipalDescriptor: string): Promise<GraphInterfaces.GraphServicePrincipal>;
    getStorageKey(subjectDescriptor: string): Promise<GraphInterfaces.GraphStorageKeyResult>;
    lookupSubjects(subjectLookup: GraphInterfaces.GraphSubjectLookup): Promise<{ [key: string] : GraphInterfaces.GraphSubject; }>;
    querySubjects(subjectQuery: GraphInterfaces.GraphSubjectQuery): Promise<GraphInterfaces.GraphSubject[]>;
    getSubject(subjectDescriptor: string): Promise<GraphInterfaces.GraphSubject>;
    createUser(creationContext: GraphInterfaces.GraphUserCreationContext, groupDescriptors?: string[]): Promise<GraphInterfaces.GraphUser>;
    deleteUser(userDescriptor: string): Promise<void>;
    getUser(userDescriptor: string): Promise<GraphInterfaces.GraphUser>;
    updateUser(updateContext: GraphInterfaces.GraphUserUpdateContext, userDescriptor: string): Promise<GraphInterfaces.GraphUser>;
}

export class GraphApi extends basem.ClientApiBase implements IGraphApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Graph-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "bb1e7ec9-e901-4b68-999a-de7012b920f8";

    /**
     * @param {string} subjectDescriptor
     */
    public async deleteAvatar(
        subjectDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "801eaf9c-0585-4be8-9cdb-b0efa074de91",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * @param {string} subjectDescriptor
     * @param {ProfileInterfaces.AvatarSize} size
     * @param {string} format
     */
    public async getAvatar(
        subjectDescriptor: string,
        size?: ProfileInterfaces.AvatarSize,
        format?: string
        ): Promise<ProfileInterfaces.Avatar> {

        return new Promise<ProfileInterfaces.Avatar>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                size: size,
                format: format,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "801eaf9c-0585-4be8-9cdb-b0efa074de91",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProfileInterfaces.Avatar>;
                res = await this.rest.get<ProfileInterfaces.Avatar>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Avatar,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ProfileInterfaces.Avatar} avatar
     * @param {string} subjectDescriptor
     */
    public async setAvatar(
        avatar: ProfileInterfaces.Avatar,
        subjectDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "801eaf9c-0585-4be8-9cdb-b0efa074de91",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, avatar, options);

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
     */
    public async getCachePolicies(
        ): Promise<GraphInterfaces.GraphCachePolicies> {

        return new Promise<GraphInterfaces.GraphCachePolicies>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "beb83272-b415-48e8-ac1e-a9b805760739",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphCachePolicies>;
                res = await this.rest.get<GraphInterfaces.GraphCachePolicies>(url, options);

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
     * Resolve a storage key to a descriptor
     * 
     * @param {string} storageKey - Storage key of the subject (user, group, scope, etc.) to resolve
     */
    public async getDescriptor(
        storageKey: string
        ): Promise<GraphInterfaces.GraphDescriptorResult> {

        return new Promise<GraphInterfaces.GraphDescriptorResult>(async (resolve, reject) => {
            let routeValues: any = {
                storageKey: storageKey
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "048aee0a-7072-4cde-ab73-7af77b1e0b4e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphDescriptorResult>;
                res = await this.rest.get<GraphInterfaces.GraphDescriptorResult>(url, options);

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
     * Acquires the full set of federated provider authentication data available for the given graph subject and provider name.
     * 
     * @param {string} subjectDescriptor - the descriptor of the graph subject that we should acquire data for
     * @param {string} providerName - the name of the provider to acquire data for, e.g. "github.com"
     * @param {number} versionHint - a version hint that can be used for optimistic cache concurrency and to support retries on access token failures; note that this is a hint only and does not guarantee a particular version on the response
     */
    public async getFederatedProviderData(
        subjectDescriptor: string,
        providerName: string,
        versionHint?: number
        ): Promise<GraphInterfaces.GraphFederatedProviderData> {
        if (providerName == null) {
            throw new TypeError('providerName can not be null or undefined');
        }

        return new Promise<GraphInterfaces.GraphFederatedProviderData>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                providerName: providerName,
                versionHint: versionHint,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "5dcd28d6-632d-477f-ac6b-398ea9fc2f71",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphFederatedProviderData>;
                res = await this.rest.get<GraphInterfaces.GraphFederatedProviderData>(url, options);

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
     * Create a new Azure DevOps group or materialize an existing AAD group.
     * 
     * @param {GraphInterfaces.GraphGroupCreationContext} creationContext - The subset of the full graph group used to uniquely find the graph subject in an external provider.
     * @param {string} scopeDescriptor - A descriptor referencing the scope (collection, project) in which the group should be created. If omitted, will be created in the scope of the enclosing account or organization. Valid only for VSTS groups.
     * @param {string[]} groupDescriptors - A comma separated list of descriptors referencing groups you want the graph group to join
     */
    public async createGroup(
        creationContext: GraphInterfaces.GraphGroupCreationContext,
        scopeDescriptor?: string,
        groupDescriptors?: string[]
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeDescriptor: scopeDescriptor,
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.create<GraphInterfaces.GraphGroup>(url, creationContext, options);

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
     * Removes an Azure DevOps group from all of its parent groups.
     * 
     * @param {string} groupDescriptor - The descriptor of the group to delete.
     */
    public async deleteGroup(
        groupDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * Get a group by its descriptor.
     * 
     * @param {string} groupDescriptor - The descriptor of the desired graph group.
     */
    public async getGroup(
        groupDescriptor: string
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.get<GraphInterfaces.GraphGroup>(url, options);

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
     * Update the properties of an Azure DevOps group.
     * 
     * @param {string} groupDescriptor - The descriptor of the group to modify.
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - The JSON+Patch document containing the fields to alter.
     */
    public async updateGroup(
        customHeaders: any,
        groupDescriptor: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.update<GraphInterfaces.GraphGroup>(url, patchDocument, options);

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
     * Identity Translation - Translate endpoint is supposed to be used by geneva action.
     * 
     * @param {string} masterId
     * @param {string} localId
     */
    public async translate(
        masterId?: string,
        localId?: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                masterId: masterId,
                localId: localId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "9cacc4da-06e3-474a-a1fa-604dd34a2fa2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

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
     * @param {GraphInterfaces.GraphSubjectLookup} memberLookup
     */
    public async lookupMembers(
        memberLookup: GraphInterfaces.GraphSubjectLookup
        ): Promise<{ [key: string] : GraphInterfaces.GraphMember; }> {

        return new Promise<{ [key: string] : GraphInterfaces.GraphMember; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "3d74d524-ae3d-4d24-a9a7-f8a5cf82347a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : GraphInterfaces.GraphMember; }>;
                res = await this.rest.create<{ [key: string] : GraphInterfaces.GraphMember; }>(url, memberLookup, options);

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
     * This endpoint returns a result for any member that has ever been valid in the system, even if the member has since been deleted or has had all their memberships deleted. The current validity of the member is indicated through its disabled property, which is omitted when false.
     * 
     * @param {string} memberDescriptor - The descriptor of the desired member.
     */
    public async getMemberByDescriptor(
        memberDescriptor: string
        ): Promise<GraphInterfaces.GraphMember> {

        return new Promise<GraphInterfaces.GraphMember>(async (resolve, reject) => {
            let routeValues: any = {
                memberDescriptor: memberDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "b9af63a7-5db6-4af8-aae7-387f775ea9c6",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMember>;
                res = await this.rest.get<GraphInterfaces.GraphMember>(url, options);

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
     * Create a new membership between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to a group or user that can be the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to a group that can be the container in the relationship.
     */
    public async addMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<GraphInterfaces.GraphMembership> {

        return new Promise<GraphInterfaces.GraphMembership>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership>;
                res = await this.rest.replace<GraphInterfaces.GraphMembership>(url, null, options);

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
     * Check to see if a membership relationship between a container and subject exists.
     * 
     * @param {string} subjectDescriptor - The group or user that is a child subject of the relationship.
     * @param {string} containerDescriptor - The group that is the container in the relationship.
     */
    public async checkMembershipExistence(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.head<void>(url, options);

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
     * Get a membership relationship between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to the container in the relationship.
     */
    public async getMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<GraphInterfaces.GraphMembership> {

        return new Promise<GraphInterfaces.GraphMembership>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership>;
                res = await this.rest.get<GraphInterfaces.GraphMembership>(url, options);

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
     * Deletes a membership between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to a group or user that is the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to a group that is the container in the relationship.
     */
    public async removeMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * Get all the memberships where this descriptor is a member in the relationship.
     * 
     * @param {string} subjectDescriptor - Fetch all direct memberships of this descriptor.
     * @param {GraphInterfaces.GraphTraversalDirection} direction - Defaults to Up.
     * @param {number} depth - The maximum number of edges to traverse up or down the membership tree. Currently the only supported value is '1'.
     */
    public async listMemberships(
        subjectDescriptor: string,
        direction?: GraphInterfaces.GraphTraversalDirection,
        depth?: number
        ): Promise<GraphInterfaces.GraphMembership[]> {

        return new Promise<GraphInterfaces.GraphMembership[]>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                direction: direction,
                depth: depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "e34b6394-6b30-4435-94a9-409a5eef3e31",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership[]>;
                res = await this.rest.get<GraphInterfaces.GraphMembership[]>(url, options);

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
     * Check whether a subject is active or inactive.
     * 
     * @param {string} subjectDescriptor - Descriptor of the subject (user, group, scope, etc.) to check state of
     */
    public async getMembershipState(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphMembershipState> {

        return new Promise<GraphInterfaces.GraphMembershipState>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "1ffe5c94-1144-4191-907b-d0211cad36a8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembershipState>;
                res = await this.rest.get<GraphInterfaces.GraphMembershipState>(url, options);

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
     * Traverse memberships of the given subject descriptors.
     * 
     * @param {GraphInterfaces.GraphSubjectLookup} membershipTraversalLookup - Fetch the descendants/ancestors of the list of descriptors depending on direction.
     * @param {GraphInterfaces.GraphTraversalDirection} direction - The default value is Unknown.
     * @param {number} depth - The default value is '1'.
     */
    public async lookupMembershipTraversals(
        membershipTraversalLookup: GraphInterfaces.GraphSubjectLookup,
        direction?: GraphInterfaces.GraphTraversalDirection,
        depth?: number
        ): Promise<{ [key: string] : GraphInterfaces.GraphMembershipTraversal; }> {

        return new Promise<{ [key: string] : GraphInterfaces.GraphMembershipTraversal; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                direction: direction,
                depth: depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "5d59d874-746f-4f9b-9459-0e571f1ded8c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : GraphInterfaces.GraphMembershipTraversal; }>;
                res = await this.rest.create<{ [key: string] : GraphInterfaces.GraphMembershipTraversal; }>(url, membershipTraversalLookup, options);

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
     * Traverse memberships of the given subject descriptor.
     * 
     * @param {string} subjectDescriptor - Fetch the descendants/ancestors of this descriptor depending on direction.
     * @param {GraphInterfaces.GraphTraversalDirection} direction - The default value is Unknown.
     * @param {number} depth - The default value is '1'.
     */
    public async traverseMemberships(
        subjectDescriptor: string,
        direction?: GraphInterfaces.GraphTraversalDirection,
        depth?: number
        ): Promise<GraphInterfaces.GraphMembershipTraversal> {

        return new Promise<GraphInterfaces.GraphMembershipTraversal>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                direction: direction,
                depth: depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "5d59d874-746f-4f9b-9459-0e571f1ded8c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembershipTraversal>;
                res = await this.rest.get<GraphInterfaces.GraphMembershipTraversal>(url, options);

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
     * @param {string} userDescriptor
     */
    public async getProviderInfo(
        userDescriptor: string
        ): Promise<GraphInterfaces.GraphProviderInfo> {

        return new Promise<GraphInterfaces.GraphProviderInfo>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "1e377995-6fa2-4588-bd64-930186abdcfa",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphProviderInfo>;
                res = await this.rest.get<GraphInterfaces.GraphProviderInfo>(url, options);

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
     * @param {any} jsondocument
     */
    public async requestAccess(
        jsondocument: any
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "8d54bf92-8c99-47f2-9972-b21341f1722e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, jsondocument, options);

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
     * Batch-map a list of users to new users.
     * 
     * @param {GraphInterfaces.IdentityMappings} mappings - A list of mappings.
     */
    public async resolve(
        mappings: GraphInterfaces.IdentityMappings
        ): Promise<GraphInterfaces.ResolveDisconnectedUsersResponse> {

        return new Promise<GraphInterfaces.ResolveDisconnectedUsersResponse>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "2f0cae3a-74a3-4c40-a13b-974889698e6b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.ResolveDisconnectedUsersResponse>;
                res = await this.rest.create<GraphInterfaces.ResolveDisconnectedUsersResponse>(url, mappings, options);

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
     * @param {GraphInterfaces.GraphScopeCreationContext} creationContext
     * @param {string} scopeDescriptor
     */
    public async createScope(
        creationContext: GraphInterfaces.GraphScopeCreationContext,
        scopeDescriptor?: string
        ): Promise<GraphInterfaces.GraphScope> {

        return new Promise<GraphInterfaces.GraphScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphScope>;
                res = await this.rest.create<GraphInterfaces.GraphScope>(url, creationContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeDescriptor
     */
    public async deleteScope(
        scopeDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * Get a scope identified by its descriptor
     * 
     * @param {string} scopeDescriptor - A descriptor that uniquely identifies a scope.
     */
    public async getScope(
        scopeDescriptor: string
        ): Promise<GraphInterfaces.GraphScope> {

        return new Promise<GraphInterfaces.GraphScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphScope>;
                res = await this.rest.get<GraphInterfaces.GraphScope>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeDescriptor
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument
     */
    public async updateScope(
        customHeaders: any,
        scopeDescriptor: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchDocument, options);

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
     * Materialize an existing AAD service principal into the ADO account.
     * 
     * @param {GraphInterfaces.GraphServicePrincipalCreationContext} creationContext - The subset of the full graph service principal used to uniquely find the graph subject in an external provider.
     * @param {string[]} groupDescriptors - A comma separated list of descriptors of groups you want the graph service principal to join
     */
    public async createServicePrincipal(
        creationContext: GraphInterfaces.GraphServicePrincipalCreationContext,
        groupDescriptors?: string[]
        ): Promise<GraphInterfaces.GraphServicePrincipal> {

        return new Promise<GraphInterfaces.GraphServicePrincipal>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "e1dbb0ae-49cb-4532-95a1-86cd89cfcab4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphServicePrincipal>;
                res = await this.rest.create<GraphInterfaces.GraphServicePrincipal>(url, creationContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphServicePrincipal,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Disables a service principal.
     * 
     * @param {string} servicePrincipalDescriptor - The descriptor of the service principal to delete.
     */
    public async deleteServicePrincipal(
        servicePrincipalDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                servicePrincipalDescriptor: servicePrincipalDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "e1dbb0ae-49cb-4532-95a1-86cd89cfcab4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * Get a service principal by its descriptor.
     * 
     * @param {string} servicePrincipalDescriptor - The descriptor of the desired service principal.
     */
    public async getServicePrincipal(
        servicePrincipalDescriptor: string
        ): Promise<GraphInterfaces.GraphServicePrincipal> {

        return new Promise<GraphInterfaces.GraphServicePrincipal>(async (resolve, reject) => {
            let routeValues: any = {
                servicePrincipalDescriptor: servicePrincipalDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "e1dbb0ae-49cb-4532-95a1-86cd89cfcab4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphServicePrincipal>;
                res = await this.rest.get<GraphInterfaces.GraphServicePrincipal>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphServicePrincipal,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Map an existing service principal to a different service principal.
     * 
     * @param {GraphInterfaces.GraphServicePrincipalUpdateContext} updateContext - The subset of the full graph service principal used to uniquely find the graph subject in an external provider.
     * @param {string} servicePrincipalDescriptor - The descriptor of the service principal to update
     */
    public async updateServicePrincipal(
        updateContext: GraphInterfaces.GraphServicePrincipalUpdateContext,
        servicePrincipalDescriptor: string
        ): Promise<GraphInterfaces.GraphServicePrincipal> {

        return new Promise<GraphInterfaces.GraphServicePrincipal>(async (resolve, reject) => {
            let routeValues: any = {
                servicePrincipalDescriptor: servicePrincipalDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "e1dbb0ae-49cb-4532-95a1-86cd89cfcab4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphServicePrincipal>;
                res = await this.rest.update<GraphInterfaces.GraphServicePrincipal>(url, updateContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphServicePrincipal,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Resolve a descriptor to a storage key.
     * 
     * @param {string} subjectDescriptor
     */
    public async getStorageKey(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphStorageKeyResult> {

        return new Promise<GraphInterfaces.GraphStorageKeyResult>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "eb85f8cc-f0f6-4264-a5b1-ffe2e4d4801f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphStorageKeyResult>;
                res = await this.rest.get<GraphInterfaces.GraphStorageKeyResult>(url, options);

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
     * Resolve descriptors to users, groups or scopes (Subjects) in a batch.
     * 
     * @param {GraphInterfaces.GraphSubjectLookup} subjectLookup - A list of descriptors that specifies a subset of subjects to retrieve. Each descriptor uniquely identifies the subject across all instance scopes, but only at a single point in time.
     */
    public async lookupSubjects(
        subjectLookup: GraphInterfaces.GraphSubjectLookup
        ): Promise<{ [key: string] : GraphInterfaces.GraphSubject; }> {

        return new Promise<{ [key: string] : GraphInterfaces.GraphSubject; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "4dd4d168-11f2-48c4-83e8-756fa0de027c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : GraphInterfaces.GraphSubject; }>;
                res = await this.rest.create<{ [key: string] : GraphInterfaces.GraphSubject; }>(url, subjectLookup, options);

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
     * Search for Azure Devops users, or/and groups. Results will be returned in a batch with no more than 100 graph subjects.
     * 
     * @param {GraphInterfaces.GraphSubjectQuery} subjectQuery - The query that we'll be using to search includes the following: Query: the search term. The search will be prefix matching only. SubjectKind: "User" or "Group" can be specified, both or either ScopeDescriptor: Non-default scope can be specified, i.e. project scope descriptor
     */
    public async querySubjects(
        subjectQuery: GraphInterfaces.GraphSubjectQuery
        ): Promise<GraphInterfaces.GraphSubject[]> {

        return new Promise<GraphInterfaces.GraphSubject[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "05942c89-006a-48ce-bb79-baeb8abf99c6",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphSubject[]>;
                res = await this.rest.create<GraphInterfaces.GraphSubject[]>(url, subjectQuery, options);

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
     * @param {string} subjectDescriptor
     */
    public async getSubject(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphSubject> {

        return new Promise<GraphInterfaces.GraphSubject>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "1d44a2ac-4f8a-459e-83c2-1c92626fb9c6",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphSubject>;
                res = await this.rest.get<GraphInterfaces.GraphSubject>(url, options);

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
     * Materialize an existing AAD or MSA user into the VSTS account.
     * 
     * @param {GraphInterfaces.GraphUserCreationContext} creationContext - The subset of the full graph user used to uniquely find the graph subject in an external provider.
     * @param {string[]} groupDescriptors - A comma separated list of descriptors of groups you want the graph user to join
     */
    public async createUser(
        creationContext: GraphInterfaces.GraphUserCreationContext,
        groupDescriptors?: string[]
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.create<GraphInterfaces.GraphUser>(url, creationContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Disables a user.
     * 
     * @param {string} userDescriptor - The descriptor of the user to delete.
     */
    public async deleteUser(
        userDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * Get a user by its descriptor.
     * 
     * @param {string} userDescriptor - The descriptor of the desired user.
     */
    public async getUser(
        userDescriptor: string
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.get<GraphInterfaces.GraphUser>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Map an existing user to a different user.
     * 
     * @param {GraphInterfaces.GraphUserUpdateContext} updateContext - The subset of the full graph user used to uniquely find the graph subject in an external provider.
     * @param {string} userDescriptor - The descriptor of the user to update
     */
    public async updateUser(
        updateContext: GraphInterfaces.GraphUserUpdateContext,
        userDescriptor: string
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.update<GraphInterfaces.GraphUser>(url, updateContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
