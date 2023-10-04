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
import { C4f8RoOSCommonComponentsSchemasIdentifier } from '../models';
import { C4f8RoOSDescriptionSearch } from '../models';
import { C4f8RoOSFirewalluablockResponseCollection } from '../models';
import { C4f8RoOSFirewalluablockResponseSingle } from '../models';
import { C4f8RoOSUaRulesComponentsSchemasId } from '../models';
import { InlineResponse200170 } from '../models';
import { InlineResponse4xx81 } from '../models';
import { InlineResponse4xx82 } from '../models';
import { InlineResponse4xx83 } from '../models';
/**
 * UserAgentBlockingRulesApi - axios parameter creator
 * @export
 */
export const UserAgentBlockingRulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new User Agent Blocking rule in a zone.
         * @summary Create a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAgentBlockingRulesCreateAUserAgentBlockingRule: async (body: any, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userAgentBlockingRulesCreateAUserAgentBlockingRule.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling userAgentBlockingRulesCreateAUserAgentBlockingRule.');
            }
            const localVarPath = `/zones/{zone_identifier}/firewall/ua_rules`
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Deletes an existing User Agent Blocking rule.
         * @summary Delete a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAgentBlockingRulesDeleteAUserAgentBlockingRule: async (id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userAgentBlockingRulesDeleteAUserAgentBlockingRule.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling userAgentBlockingRulesDeleteAUserAgentBlockingRule.');
            }
            const localVarPath = `/zones/{zone_identifier}/firewall/ua_rules/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Fetches the details of a User Agent Blocking rule.
         * @summary Get a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAgentBlockingRulesGetAUserAgentBlockingRule: async (id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userAgentBlockingRulesGetAUserAgentBlockingRule.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling userAgentBlockingRulesGetAUserAgentBlockingRule.');
            }
            const localVarPath = `/zones/{zone_identifier}/firewall/ua_rules/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
         * @summary List User Agent Blocking rules
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {number} [page] 
         * @param {C4f8RoOSDescriptionSearch} [description] 
         * @param {C4f8RoOSDescriptionSearch} [descriptionSearch] 
         * @param {number} [perPage] 
         * @param {string} [uaSearch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAgentBlockingRulesListUserAgentBlockingRules: async (zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, description?: C4f8RoOSDescriptionSearch, descriptionSearch?: C4f8RoOSDescriptionSearch, perPage?: number, uaSearch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling userAgentBlockingRulesListUserAgentBlockingRules.');
            }
            const localVarPath = `/zones/{zone_identifier}/firewall/ua_rules`
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (descriptionSearch !== undefined) {
                localVarQueryParameter['description_search'] = descriptionSearch;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (uaSearch !== undefined) {
                localVarQueryParameter['ua_search'] = uaSearch;
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
         * Updates an existing User Agent Blocking rule.
         * @summary Update a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAgentBlockingRulesUpdateAUserAgentBlockingRule: async (body: any, id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userAgentBlockingRulesUpdateAUserAgentBlockingRule.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userAgentBlockingRulesUpdateAUserAgentBlockingRule.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling userAgentBlockingRulesUpdateAUserAgentBlockingRule.');
            }
            const localVarPath = `/zones/{zone_identifier}/firewall/ua_rules/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
 * UserAgentBlockingRulesApi - functional programming interface
 * @export
 */
export const UserAgentBlockingRulesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new User Agent Blocking rule in a zone.
         * @summary Create a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesCreateAUserAgentBlockingRule(body: any, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>>> {
            const localVarAxiosArgs = await UserAgentBlockingRulesApiAxiosParamCreator(configuration).userAgentBlockingRulesCreateAUserAgentBlockingRule(body, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes an existing User Agent Blocking rule.
         * @summary Delete a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesDeleteAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200170>>> {
            const localVarAxiosArgs = await UserAgentBlockingRulesApiAxiosParamCreator(configuration).userAgentBlockingRulesDeleteAUserAgentBlockingRule(id, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches the details of a User Agent Blocking rule.
         * @summary Get a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesGetAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>>> {
            const localVarAxiosArgs = await UserAgentBlockingRulesApiAxiosParamCreator(configuration).userAgentBlockingRulesGetAUserAgentBlockingRule(id, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
         * @summary List User Agent Blocking rules
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {number} [page] 
         * @param {C4f8RoOSDescriptionSearch} [description] 
         * @param {C4f8RoOSDescriptionSearch} [descriptionSearch] 
         * @param {number} [perPage] 
         * @param {string} [uaSearch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, description?: C4f8RoOSDescriptionSearch, descriptionSearch?: C4f8RoOSDescriptionSearch, perPage?: number, uaSearch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseCollection>>> {
            const localVarAxiosArgs = await UserAgentBlockingRulesApiAxiosParamCreator(configuration).userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier, page, description, descriptionSearch, perPage, uaSearch, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates an existing User Agent Blocking rule.
         * @summary Update a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesUpdateAUserAgentBlockingRule(body: any, id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>>> {
            const localVarAxiosArgs = await UserAgentBlockingRulesApiAxiosParamCreator(configuration).userAgentBlockingRulesUpdateAUserAgentBlockingRule(body, id, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserAgentBlockingRulesApi - factory interface
 * @export
 */
export const UserAgentBlockingRulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new User Agent Blocking rule in a zone.
         * @summary Create a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesCreateAUserAgentBlockingRule(body: any, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
            return UserAgentBlockingRulesApiFp(configuration).userAgentBlockingRulesCreateAUserAgentBlockingRule(body, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing User Agent Blocking rule.
         * @summary Delete a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesDeleteAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200170>> {
            return UserAgentBlockingRulesApiFp(configuration).userAgentBlockingRulesDeleteAUserAgentBlockingRule(id, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the details of a User Agent Blocking rule.
         * @summary Get a User Agent Blocking rule
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesGetAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
            return UserAgentBlockingRulesApiFp(configuration).userAgentBlockingRulesGetAUserAgentBlockingRule(id, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
         * @summary List User Agent Blocking rules
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {number} [page] 
         * @param {C4f8RoOSDescriptionSearch} [description] 
         * @param {C4f8RoOSDescriptionSearch} [descriptionSearch] 
         * @param {number} [perPage] 
         * @param {string} [uaSearch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, description?: C4f8RoOSDescriptionSearch, descriptionSearch?: C4f8RoOSDescriptionSearch, perPage?: number, uaSearch?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseCollection>> {
            return UserAgentBlockingRulesApiFp(configuration).userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier, page, description, descriptionSearch, perPage, uaSearch, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing User Agent Blocking rule.
         * @summary Update a User Agent Blocking rule
         * @param {any} body 
         * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAgentBlockingRulesUpdateAUserAgentBlockingRule(body: any, id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
            return UserAgentBlockingRulesApiFp(configuration).userAgentBlockingRulesUpdateAUserAgentBlockingRule(body, id, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserAgentBlockingRulesApi - object-oriented interface
 * @export
 * @class UserAgentBlockingRulesApi
 * @extends {BaseAPI}
 */
export class UserAgentBlockingRulesApi extends BaseAPI {
    /**
     * Creates a new User Agent Blocking rule in a zone.
     * @summary Create a User Agent Blocking rule
     * @param {any} body 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAgentBlockingRulesApi
     */
    public async userAgentBlockingRulesCreateAUserAgentBlockingRule(body: any, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
        return UserAgentBlockingRulesApiFp(this.configuration).userAgentBlockingRulesCreateAUserAgentBlockingRule(body, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes an existing User Agent Blocking rule.
     * @summary Delete a User Agent Blocking rule
     * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAgentBlockingRulesApi
     */
    public async userAgentBlockingRulesDeleteAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200170>> {
        return UserAgentBlockingRulesApiFp(this.configuration).userAgentBlockingRulesDeleteAUserAgentBlockingRule(id, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches the details of a User Agent Blocking rule.
     * @summary Get a User Agent Blocking rule
     * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAgentBlockingRulesApi
     */
    public async userAgentBlockingRulesGetAUserAgentBlockingRule(id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
        return UserAgentBlockingRulesApiFp(this.configuration).userAgentBlockingRulesGetAUserAgentBlockingRule(id, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
     * @summary List User Agent Blocking rules
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
     * @param {number} [page] 
     * @param {C4f8RoOSDescriptionSearch} [description] 
     * @param {C4f8RoOSDescriptionSearch} [descriptionSearch] 
     * @param {number} [perPage] 
     * @param {string} [uaSearch] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAgentBlockingRulesApi
     */
    public async userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, description?: C4f8RoOSDescriptionSearch, descriptionSearch?: C4f8RoOSDescriptionSearch, perPage?: number, uaSearch?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseCollection>> {
        return UserAgentBlockingRulesApiFp(this.configuration).userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier, page, description, descriptionSearch, perPage, uaSearch, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an existing User Agent Blocking rule.
     * @summary Update a User Agent Blocking rule
     * @param {any} body 
     * @param {C4f8RoOSUaRulesComponentsSchemasId} id 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserAgentBlockingRulesApi
     */
    public async userAgentBlockingRulesUpdateAUserAgentBlockingRule(body: any, id: C4f8RoOSUaRulesComponentsSchemasId, zoneIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSFirewalluablockResponseSingle>> {
        return UserAgentBlockingRulesApiFp(this.configuration).userAgentBlockingRulesUpdateAUserAgentBlockingRule(body, id, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
