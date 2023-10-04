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
import { DestinationsWebhooksBody } from '../models';
import { HrcAXqolApiResponseCollection } from '../models';
import { HrcAXqolIdResponse } from '../models';
import { HrcAXqolIdentifier } from '../models';
import { HrcAXqolSchemasSingleResponse } from '../models';
import { HrcAXqolUuid } from '../models';
import { HrcAXqolWebhooksComponentsSchemasResponseCollection } from '../models';
import { InlineResponse4XX222 } from '../models';
import { InlineResponse4XX224 } from '../models';
import { InlineResponse4XX225 } from '../models';
import { InlineResponse4XX226 } from '../models';
import { WebhooksUuidBody } from '../models';
/**
 * NotificationWebhooksApi - axios parameter creator
 * @export
 */
export const NotificationWebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new webhook destination.
         * @summary Create a webhook
         * @param {DestinationsWebhooksBody} body 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationWebhooksCreateAWebhook: async (body: DestinationsWebhooksBody, identifier: HrcAXqolIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling notificationWebhooksCreateAWebhook.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling notificationWebhooksCreateAWebhook.');
            }
            const localVarPath = `/accounts/{identifier}/alerting/v3/destinations/webhooks`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
        /**
         * Delete a configured webhook destination.
         * @summary Delete a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationWebhooksDeleteAWebhook: async (uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling notificationWebhooksDeleteAWebhook.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling notificationWebhooksDeleteAWebhook.');
            }
            const localVarPath = `/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Get details for a single webhooks destination.
         * @summary Get a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationWebhooksGetAWebhook: async (uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling notificationWebhooksGetAWebhook.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling notificationWebhooksGetAWebhook.');
            }
            const localVarPath = `/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Gets a list of all configured webhook destinations.
         * @summary List webhooks
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationWebhooksListWebhooks: async (identifier: HrcAXqolIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling notificationWebhooksListWebhooks.');
            }
            const localVarPath = `/accounts/{identifier}/alerting/v3/destinations/webhooks`
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Update a webhook destination.
         * @summary Update a webhook
         * @param {WebhooksUuidBody} body 
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        notificationWebhooksUpdateAWebhook: async (body: WebhooksUuidBody, uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling notificationWebhooksUpdateAWebhook.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling notificationWebhooksUpdateAWebhook.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling notificationWebhooksUpdateAWebhook.');
            }
            const localVarPath = `/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
 * NotificationWebhooksApi - functional programming interface
 * @export
 */
export const NotificationWebhooksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new webhook destination.
         * @summary Create a webhook
         * @param {DestinationsWebhooksBody} body 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksCreateAWebhook(body: DestinationsWebhooksBody, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolIdResponse>>> {
            const localVarAxiosArgs = await NotificationWebhooksApiAxiosParamCreator(configuration).notificationWebhooksCreateAWebhook(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a configured webhook destination.
         * @summary Delete a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksDeleteAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolApiResponseCollection>>> {
            const localVarAxiosArgs = await NotificationWebhooksApiAxiosParamCreator(configuration).notificationWebhooksDeleteAWebhook(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get details for a single webhooks destination.
         * @summary Get a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksGetAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolSchemasSingleResponse>>> {
            const localVarAxiosArgs = await NotificationWebhooksApiAxiosParamCreator(configuration).notificationWebhooksGetAWebhook(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of all configured webhook destinations.
         * @summary List webhooks
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksListWebhooks(identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolWebhooksComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await NotificationWebhooksApiAxiosParamCreator(configuration).notificationWebhooksListWebhooks(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a webhook destination.
         * @summary Update a webhook
         * @param {WebhooksUuidBody} body 
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksUpdateAWebhook(body: WebhooksUuidBody, uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolIdResponse>>> {
            const localVarAxiosArgs = await NotificationWebhooksApiAxiosParamCreator(configuration).notificationWebhooksUpdateAWebhook(body, uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NotificationWebhooksApi - factory interface
 * @export
 */
export const NotificationWebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new webhook destination.
         * @summary Create a webhook
         * @param {DestinationsWebhooksBody} body 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksCreateAWebhook(body: DestinationsWebhooksBody, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolIdResponse>> {
            return NotificationWebhooksApiFp(configuration).notificationWebhooksCreateAWebhook(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a configured webhook destination.
         * @summary Delete a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksDeleteAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolApiResponseCollection>> {
            return NotificationWebhooksApiFp(configuration).notificationWebhooksDeleteAWebhook(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details for a single webhooks destination.
         * @summary Get a webhook
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksGetAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolSchemasSingleResponse>> {
            return NotificationWebhooksApiFp(configuration).notificationWebhooksGetAWebhook(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of all configured webhook destinations.
         * @summary List webhooks
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksListWebhooks(identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolWebhooksComponentsSchemasResponseCollection>> {
            return NotificationWebhooksApiFp(configuration).notificationWebhooksListWebhooks(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook destination.
         * @summary Update a webhook
         * @param {WebhooksUuidBody} body 
         * @param {HrcAXqolUuid} uuid 
         * @param {HrcAXqolIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async notificationWebhooksUpdateAWebhook(body: WebhooksUuidBody, uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolIdResponse>> {
            return NotificationWebhooksApiFp(configuration).notificationWebhooksUpdateAWebhook(body, uuid, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotificationWebhooksApi - object-oriented interface
 * @export
 * @class NotificationWebhooksApi
 * @extends {BaseAPI}
 */
export class NotificationWebhooksApi extends BaseAPI {
    /**
     * Creates a new webhook destination.
     * @summary Create a webhook
     * @param {DestinationsWebhooksBody} body 
     * @param {HrcAXqolIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationWebhooksApi
     */
    public async notificationWebhooksCreateAWebhook(body: DestinationsWebhooksBody, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolIdResponse>> {
        return NotificationWebhooksApiFp(this.configuration).notificationWebhooksCreateAWebhook(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a configured webhook destination.
     * @summary Delete a webhook
     * @param {HrcAXqolUuid} uuid 
     * @param {HrcAXqolIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationWebhooksApi
     */
    public async notificationWebhooksDeleteAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolApiResponseCollection>> {
        return NotificationWebhooksApiFp(this.configuration).notificationWebhooksDeleteAWebhook(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get details for a single webhooks destination.
     * @summary Get a webhook
     * @param {HrcAXqolUuid} uuid 
     * @param {HrcAXqolIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationWebhooksApi
     */
    public async notificationWebhooksGetAWebhook(uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolSchemasSingleResponse>> {
        return NotificationWebhooksApiFp(this.configuration).notificationWebhooksGetAWebhook(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of all configured webhook destinations.
     * @summary List webhooks
     * @param {HrcAXqolIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationWebhooksApi
     */
    public async notificationWebhooksListWebhooks(identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolWebhooksComponentsSchemasResponseCollection>> {
        return NotificationWebhooksApiFp(this.configuration).notificationWebhooksListWebhooks(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a webhook destination.
     * @summary Update a webhook
     * @param {WebhooksUuidBody} body 
     * @param {HrcAXqolUuid} uuid 
     * @param {HrcAXqolIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationWebhooksApi
     */
    public async notificationWebhooksUpdateAWebhook(body: WebhooksUuidBody, uuid: HrcAXqolUuid, identifier: HrcAXqolIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolIdResponse>> {
        return NotificationWebhooksApiFp(this.configuration).notificationWebhooksUpdateAWebhook(body, uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}