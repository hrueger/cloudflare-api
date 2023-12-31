/* tslint:disable */
/* eslint-disable */
/**
 * Cloudflare API
 * Interact with Cloudflare's products and services via the Cloudflare API.  Using the Cloudflare API requires authentication so that Cloudflare knows who is making requests and what permissions you have. Create an API token to grant access to the API to perform actions.  To create an API token, from the Cloudflare dashboard, go to My Profile > API Tokens and select Create Token. For more information on how to create and troubleshoot API tokens, refer to our [API fundamentals](https://developers.cloudflare.com/fundamentals/api/).  Totally new to Cloudflare? [Start here](https://developers.cloudflare.com/fundamentals/get-started/).
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse4XX306 } from '../models';
import { InlineResponse4xx52 } from '../models';
import { InvitesIdentifierBody1 } from '../models';
import { Model6KaSmMdRInviteComponentsSchemasIdentifier } from '../models';
import { Model6KaSmMdRSchemasCollectionInviteResponse } from '../models';
import { Model6KaSmMdRSingleInviteResponse } from '../models';
/**
 * UsersInvitesApi - axios parameter creator
 * @export
 */
export const UsersInvitesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the details of an invitation.
         * @summary Invitation Details
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userSInvitesInvitationDetails: async (identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling userSInvitesInvitationDetails.');
            }
            const localVarPath = `/user/invites/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all invitations associated with my user.
         * @summary List Invitations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userSInvitesListInvitations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/invites`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Responds to an invitation.
         * @summary Respond to Invitation
         * @param {InvitesIdentifierBody1} body 
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userSInvitesRespondToInvitation: async (body: InvitesIdentifierBody1, identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userSInvitesRespondToInvitation.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling userSInvitesRespondToInvitation.');
            }
            const localVarPath = `/user/invites/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersInvitesApi - functional programming interface
 * @export
 */
export const UsersInvitesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets the details of an invitation.
         * @summary Invitation Details
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesInvitationDetails(identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>>> {
            const localVarAxiosArgs = await UsersInvitesApiAxiosParamCreator(configuration).userSInvitesInvitationDetails(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all invitations associated with my user.
         * @summary List Invitations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesListInvitations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model6KaSmMdRSchemasCollectionInviteResponse>>> {
            const localVarAxiosArgs = await UsersInvitesApiAxiosParamCreator(configuration).userSInvitesListInvitations(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Responds to an invitation.
         * @summary Respond to Invitation
         * @param {InvitesIdentifierBody1} body 
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesRespondToInvitation(body: InvitesIdentifierBody1, identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>>> {
            const localVarAxiosArgs = await UsersInvitesApiAxiosParamCreator(configuration).userSInvitesRespondToInvitation(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersInvitesApi - factory interface
 * @export
 */
export const UsersInvitesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets the details of an invitation.
         * @summary Invitation Details
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesInvitationDetails(identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>> {
            return UsersInvitesApiFp(configuration).userSInvitesInvitationDetails(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all invitations associated with my user.
         * @summary List Invitations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesListInvitations(options?: AxiosRequestConfig): Promise<AxiosResponse<Model6KaSmMdRSchemasCollectionInviteResponse>> {
            return UsersInvitesApiFp(configuration).userSInvitesListInvitations(options).then((request) => request(axios, basePath));
        },
        /**
         * Responds to an invitation.
         * @summary Respond to Invitation
         * @param {InvitesIdentifierBody1} body 
         * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSInvitesRespondToInvitation(body: InvitesIdentifierBody1, identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>> {
            return UsersInvitesApiFp(configuration).userSInvitesRespondToInvitation(body, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersInvitesApi - object-oriented interface
 * @export
 * @class UsersInvitesApi
 * @extends {BaseAPI}
 */
export class UsersInvitesApi extends BaseAPI {
    /**
     * Gets the details of an invitation.
     * @summary Invitation Details
     * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersInvitesApi
     */
    public async userSInvitesInvitationDetails(identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>> {
        return UsersInvitesApiFp(this.configuration).userSInvitesInvitationDetails(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists all invitations associated with my user.
     * @summary List Invitations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersInvitesApi
     */
    public async userSInvitesListInvitations(options?: AxiosRequestConfig) : Promise<AxiosResponse<Model6KaSmMdRSchemasCollectionInviteResponse>> {
        return UsersInvitesApiFp(this.configuration).userSInvitesListInvitations(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Responds to an invitation.
     * @summary Respond to Invitation
     * @param {InvitesIdentifierBody1} body 
     * @param {Model6KaSmMdRInviteComponentsSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersInvitesApi
     */
    public async userSInvitesRespondToInvitation(body: InvitesIdentifierBody1, identifier: Model6KaSmMdRInviteComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model6KaSmMdRSingleInviteResponse>> {
        return UsersInvitesApiFp(this.configuration).userSInvitesRespondToInvitation(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
