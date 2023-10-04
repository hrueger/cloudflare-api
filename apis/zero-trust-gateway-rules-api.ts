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
import { GatewayRulesBody } from '../models';
import { InlineResponse4XX344 } from '../models';
import { InlineResponse4XX347 } from '../models';
import { InlineResponse4XX348 } from '../models';
import { Ir4bTFI2ComponentsSchemasResponseCollection } from '../models';
import { Ir4bTFI2ComponentsSchemasSingleResponse } from '../models';
import { Ir4bTFI2ComponentsSchemasUuid } from '../models';
import { Ir4bTFI2EmptyResponse } from '../models';
import { Ir4bTFI2Identifier } from '../models';
import { RulesUuidBody } from '../models';
/**
 * ZeroTrustGatewayRulesApi - axios parameter creator
 * @export
 */
export const ZeroTrustGatewayRulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Zero Trust Gateway rule.
         * @summary Create a Zero Trust Gateway rule
         * @param {GatewayRulesBody} body 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustGatewayRulesCreateZeroTrustGatewayRule: async (body: GatewayRulesBody, identifier: Ir4bTFI2Identifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustGatewayRulesCreateZeroTrustGatewayRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustGatewayRulesCreateZeroTrustGatewayRule.');
            }
            const localVarPath = `/accounts/{identifier}/gateway/rules`
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
         * Deletes a Zero Trust Gateway rule.
         * @summary Delete a Zero Trust Gateway rule
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustGatewayRulesDeleteZeroTrustGatewayRule: async (uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling zeroTrustGatewayRulesDeleteZeroTrustGatewayRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustGatewayRulesDeleteZeroTrustGatewayRule.');
            }
            const localVarPath = `/accounts/{identifier}/gateway/rules/{uuid}`
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
         * Fetches the Zero Trust Gateway rules for an account.
         * @summary List Zero Trust Gateway rules
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustGatewayRulesListZeroTrustGatewayRules: async (identifier: Ir4bTFI2Identifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustGatewayRulesListZeroTrustGatewayRules.');
            }
            const localVarPath = `/accounts/{identifier}/gateway/rules`
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
         * Updates a configured Zero Trust Gateway rule.
         * @summary Update a Zero Trust Gateway rule
         * @param {RulesUuidBody} body 
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustGatewayRulesUpdateZeroTrustGatewayRule: async (body: RulesUuidBody, uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustGatewayRulesUpdateZeroTrustGatewayRule.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling zeroTrustGatewayRulesUpdateZeroTrustGatewayRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustGatewayRulesUpdateZeroTrustGatewayRule.');
            }
            const localVarPath = `/accounts/{identifier}/gateway/rules/{uuid}`
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
         * Fetches a single Zero Trust Gateway rule.
         * @summary Get Zero Trust Gateway rule details
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustGatewayRulesZeroTrustGatewayRuleDetails: async (uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling zeroTrustGatewayRulesZeroTrustGatewayRuleDetails.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustGatewayRulesZeroTrustGatewayRuleDetails.');
            }
            const localVarPath = `/accounts/{identifier}/gateway/rules/{uuid}`
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
    }
};

/**
 * ZeroTrustGatewayRulesApi - functional programming interface
 * @export
 */
export const ZeroTrustGatewayRulesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new Zero Trust Gateway rule.
         * @summary Create a Zero Trust Gateway rule
         * @param {GatewayRulesBody} body 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body: GatewayRulesBody, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustGatewayRulesApiAxiosParamCreator(configuration).zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a Zero Trust Gateway rule.
         * @summary Delete a Zero Trust Gateway rule
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Ir4bTFI2EmptyResponse>>> {
            const localVarAxiosArgs = await ZeroTrustGatewayRulesApiAxiosParamCreator(configuration).zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches the Zero Trust Gateway rules for an account.
         * @summary List Zero Trust Gateway rules
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await ZeroTrustGatewayRulesApiAxiosParamCreator(configuration).zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a configured Zero Trust Gateway rule.
         * @summary Update a Zero Trust Gateway rule
         * @param {RulesUuidBody} body 
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body: RulesUuidBody, uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustGatewayRulesApiAxiosParamCreator(configuration).zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body, uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches a single Zero Trust Gateway rule.
         * @summary Get Zero Trust Gateway rule details
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustGatewayRulesApiAxiosParamCreator(configuration).zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZeroTrustGatewayRulesApi - factory interface
 * @export
 */
export const ZeroTrustGatewayRulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new Zero Trust Gateway rule.
         * @summary Create a Zero Trust Gateway rule
         * @param {GatewayRulesBody} body 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body: GatewayRulesBody, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
            return ZeroTrustGatewayRulesApiFp(configuration).zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a Zero Trust Gateway rule.
         * @summary Delete a Zero Trust Gateway rule
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Ir4bTFI2EmptyResponse>> {
            return ZeroTrustGatewayRulesApiFp(configuration).zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches the Zero Trust Gateway rules for an account.
         * @summary List Zero Trust Gateway rules
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasResponseCollection>> {
            return ZeroTrustGatewayRulesApiFp(configuration).zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a configured Zero Trust Gateway rule.
         * @summary Update a Zero Trust Gateway rule
         * @param {RulesUuidBody} body 
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body: RulesUuidBody, uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
            return ZeroTrustGatewayRulesApiFp(configuration).zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body, uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a single Zero Trust Gateway rule.
         * @summary Get Zero Trust Gateway rule details
         * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
         * @param {Ir4bTFI2Identifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
            return ZeroTrustGatewayRulesApiFp(configuration).zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZeroTrustGatewayRulesApi - object-oriented interface
 * @export
 * @class ZeroTrustGatewayRulesApi
 * @extends {BaseAPI}
 */
export class ZeroTrustGatewayRulesApi extends BaseAPI {
    /**
     * Creates a new Zero Trust Gateway rule.
     * @summary Create a Zero Trust Gateway rule
     * @param {GatewayRulesBody} body 
     * @param {Ir4bTFI2Identifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustGatewayRulesApi
     */
    public async zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body: GatewayRulesBody, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
        return ZeroTrustGatewayRulesApiFp(this.configuration).zeroTrustGatewayRulesCreateZeroTrustGatewayRule(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a Zero Trust Gateway rule.
     * @summary Delete a Zero Trust Gateway rule
     * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
     * @param {Ir4bTFI2Identifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustGatewayRulesApi
     */
    public async zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Ir4bTFI2EmptyResponse>> {
        return ZeroTrustGatewayRulesApiFp(this.configuration).zeroTrustGatewayRulesDeleteZeroTrustGatewayRule(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches the Zero Trust Gateway rules for an account.
     * @summary List Zero Trust Gateway rules
     * @param {Ir4bTFI2Identifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustGatewayRulesApi
     */
    public async zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasResponseCollection>> {
        return ZeroTrustGatewayRulesApiFp(this.configuration).zeroTrustGatewayRulesListZeroTrustGatewayRules(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a configured Zero Trust Gateway rule.
     * @summary Update a Zero Trust Gateway rule
     * @param {RulesUuidBody} body 
     * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
     * @param {Ir4bTFI2Identifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustGatewayRulesApi
     */
    public async zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body: RulesUuidBody, uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
        return ZeroTrustGatewayRulesApiFp(this.configuration).zeroTrustGatewayRulesUpdateZeroTrustGatewayRule(body, uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches a single Zero Trust Gateway rule.
     * @summary Get Zero Trust Gateway rule details
     * @param {Ir4bTFI2ComponentsSchemasUuid} uuid 
     * @param {Ir4bTFI2Identifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustGatewayRulesApi
     */
    public async zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid: Ir4bTFI2ComponentsSchemasUuid, identifier: Ir4bTFI2Identifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Ir4bTFI2ComponentsSchemasSingleResponse>> {
        return ZeroTrustGatewayRulesApiFp(this.configuration).zeroTrustGatewayRulesZeroTrustGatewayRuleDetails(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
