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
import { AccessServiceTokensBody } from '../models';
import { InlineResponse4XX33 } from '../models';
import { InlineResponse4XX34 } from '../models';
import { InlineResponse4XX35 } from '../models';
import { ServiceTokensUuidBody } from '../models';
import { Tm1HTKEcComponentsSchemasResponseCollection } from '../models';
import { Tm1HTKEcCreateResponse } from '../models';
import { Tm1HTKEcSchemasIdentifier } from '../models';
import { Tm1HTKEcServiceTokensComponentsSchemasSingleResponse } from '../models';
import { Tm1HTKEcUuid } from '../models';
/**
 * AccessServiceTokensApi - axios parameter creator
 * @export
 */
export const AccessServiceTokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
         * @summary Create a service token
         * @param {AccessServiceTokensBody} body 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensCreateAServiceToken: async (body: AccessServiceTokensBody, identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accessServiceTokensCreateAServiceToken.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensCreateAServiceToken.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens`
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
         * Deletes a service token.
         * @summary Delete a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensDeleteAServiceToken: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessServiceTokensDeleteAServiceToken.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensDeleteAServiceToken.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens/{uuid}`
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
         * Lists all service tokens.
         * @summary List service tokens
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensListServiceTokens: async (identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensListServiceTokens.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens`
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
         * Refreshes the expiration of a service token.
         * @summary Refresh a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensRefreshAServiceToken: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessServiceTokensRefreshAServiceToken.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensRefreshAServiceToken.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens/{uuid}/refresh`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
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
         * Generates a new Client Secret for a service token and revokes the old one.
         * @summary Rotate a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensRotateAServiceToken: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessServiceTokensRotateAServiceToken.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensRotateAServiceToken.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens/{uuid}/rotate`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
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
         * Updates a configured service token.
         * @summary Update a service token
         * @param {ServiceTokensUuidBody} body 
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessServiceTokensUpdateAServiceToken: async (body: ServiceTokensUuidBody, uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accessServiceTokensUpdateAServiceToken.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessServiceTokensUpdateAServiceToken.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessServiceTokensUpdateAServiceToken.');
            }
            const localVarPath = `/accounts/{identifier}/access/service_tokens/{uuid}`
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
    }
};

/**
 * AccessServiceTokensApi - functional programming interface
 * @export
 */
export const AccessServiceTokensApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
         * @summary Create a service token
         * @param {AccessServiceTokensBody} body 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensCreateAServiceToken(body: AccessServiceTokensBody, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcCreateResponse>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensCreateAServiceToken(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a service token.
         * @summary Delete a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensDeleteAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensDeleteAServiceToken(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all service tokens.
         * @summary List service tokens
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensListServiceTokens(identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensListServiceTokens(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Refreshes the expiration of a service token.
         * @summary Refresh a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensRefreshAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensRefreshAServiceToken(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Generates a new Client Secret for a service token and revokes the old one.
         * @summary Rotate a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensRotateAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcCreateResponse>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensRotateAServiceToken(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a configured service token.
         * @summary Update a service token
         * @param {ServiceTokensUuidBody} body 
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensUpdateAServiceToken(body: ServiceTokensUuidBody, uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessServiceTokensApiAxiosParamCreator(configuration).accessServiceTokensUpdateAServiceToken(body, uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccessServiceTokensApi - factory interface
 * @export
 */
export const AccessServiceTokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
         * @summary Create a service token
         * @param {AccessServiceTokensBody} body 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensCreateAServiceToken(body: AccessServiceTokensBody, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcCreateResponse>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensCreateAServiceToken(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a service token.
         * @summary Delete a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensDeleteAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensDeleteAServiceToken(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all service tokens.
         * @summary List service tokens
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensListServiceTokens(identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcComponentsSchemasResponseCollection>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensListServiceTokens(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Refreshes the expiration of a service token.
         * @summary Refresh a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensRefreshAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensRefreshAServiceToken(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a new Client Secret for a service token and revokes the old one.
         * @summary Rotate a service token
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensRotateAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcCreateResponse>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensRotateAServiceToken(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a configured service token.
         * @summary Update a service token
         * @param {ServiceTokensUuidBody} body 
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcSchemasIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessServiceTokensUpdateAServiceToken(body: ServiceTokensUuidBody, uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
            return AccessServiceTokensApiFp(configuration).accessServiceTokensUpdateAServiceToken(body, uuid, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccessServiceTokensApi - object-oriented interface
 * @export
 * @class AccessServiceTokensApi
 * @extends {BaseAPI}
 */
export class AccessServiceTokensApi extends BaseAPI {
    /**
     * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
     * @summary Create a service token
     * @param {AccessServiceTokensBody} body 
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensCreateAServiceToken(body: AccessServiceTokensBody, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcCreateResponse>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensCreateAServiceToken(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a service token.
     * @summary Delete a service token
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensDeleteAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensDeleteAServiceToken(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists all service tokens.
     * @summary List service tokens
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensListServiceTokens(identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcComponentsSchemasResponseCollection>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensListServiceTokens(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Refreshes the expiration of a service token.
     * @summary Refresh a service token
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensRefreshAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensRefreshAServiceToken(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generates a new Client Secret for a service token and revokes the old one.
     * @summary Rotate a service token
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensRotateAServiceToken(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcCreateResponse>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensRotateAServiceToken(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a configured service token.
     * @summary Update a service token
     * @param {ServiceTokensUuidBody} body 
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcSchemasIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessServiceTokensApi
     */
    public async accessServiceTokensUpdateAServiceToken(body: ServiceTokensUuidBody, uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcServiceTokensComponentsSchemasSingleResponse>> {
        return AccessServiceTokensApiFp(this.configuration).accessServiceTokensUpdateAServiceToken(body, uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
