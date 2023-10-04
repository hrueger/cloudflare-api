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
import { ImagesAccountIdentifier } from '../models';
import { ImagesDeletedResponse } from '../models';
import { ImagesImageVariantDefinition } from '../models';
import { ImagesImageVariantIdentifier } from '../models';
import { ImagesImageVariantListResponse } from '../models';
import { ImagesImageVariantPatchRequest } from '../models';
import { ImagesImageVariantSimpleResponse } from '../models';
import { InlineResponse4XX78 } from '../models';
import { InlineResponse4XX83 } from '../models';
import { InlineResponse4XX84 } from '../models';
/**
 * CloudflareImagesVariantsApi - axios parameter creator
 * @export
 */
export const CloudflareImagesVariantsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Specify variants that allow you to resize images for different use cases.
         * @summary Create a variant
         * @param {ImagesImageVariantDefinition} body 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareImagesVariantsCreateAVariant: async (body: ImagesImageVariantDefinition, accountIdentifier: ImagesAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling cloudflareImagesVariantsCreateAVariant.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling cloudflareImagesVariantsCreateAVariant.');
            }
            const localVarPath = `/accounts/{account_identifier}/images/v1/variants`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Deleting a variant purges the cache for all images associated with the variant.
         * @summary Delete a variant
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareImagesVariantsDeleteAVariant: async (identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling cloudflareImagesVariantsDeleteAVariant.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling cloudflareImagesVariantsDeleteAVariant.');
            }
            const localVarPath = `/accounts/{account_identifier}/images/v1/variants/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Lists existing variants.
         * @summary List variants
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareImagesVariantsListVariants: async (accountIdentifier: ImagesAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling cloudflareImagesVariantsListVariants.');
            }
            const localVarPath = `/accounts/{account_identifier}/images/v1/variants`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Updating a variant purges the cache for all images associated with the variant.
         * @summary Update a variant
         * @param {ImagesImageVariantPatchRequest} body 
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareImagesVariantsUpdateAVariant: async (body: ImagesImageVariantPatchRequest, identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling cloudflareImagesVariantsUpdateAVariant.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling cloudflareImagesVariantsUpdateAVariant.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling cloudflareImagesVariantsUpdateAVariant.');
            }
            const localVarPath = `/accounts/{account_identifier}/images/v1/variants/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Fetch details for a single variant.
         * @summary Variant details
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareImagesVariantsVariantDetails: async (identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling cloudflareImagesVariantsVariantDetails.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling cloudflareImagesVariantsVariantDetails.');
            }
            const localVarPath = `/accounts/{account_identifier}/images/v1/variants/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
    }
};

/**
 * CloudflareImagesVariantsApi - functional programming interface
 * @export
 */
export const CloudflareImagesVariantsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Specify variants that allow you to resize images for different use cases.
         * @summary Create a variant
         * @param {ImagesImageVariantDefinition} body 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsCreateAVariant(body: ImagesImageVariantDefinition, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ImagesImageVariantSimpleResponse>>> {
            const localVarAxiosArgs = await CloudflareImagesVariantsApiAxiosParamCreator(configuration).cloudflareImagesVariantsCreateAVariant(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deleting a variant purges the cache for all images associated with the variant.
         * @summary Delete a variant
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsDeleteAVariant(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ImagesDeletedResponse>>> {
            const localVarAxiosArgs = await CloudflareImagesVariantsApiAxiosParamCreator(configuration).cloudflareImagesVariantsDeleteAVariant(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists existing variants.
         * @summary List variants
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsListVariants(accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ImagesImageVariantListResponse>>> {
            const localVarAxiosArgs = await CloudflareImagesVariantsApiAxiosParamCreator(configuration).cloudflareImagesVariantsListVariants(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updating a variant purges the cache for all images associated with the variant.
         * @summary Update a variant
         * @param {ImagesImageVariantPatchRequest} body 
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsUpdateAVariant(body: ImagesImageVariantPatchRequest, identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ImagesImageVariantSimpleResponse>>> {
            const localVarAxiosArgs = await CloudflareImagesVariantsApiAxiosParamCreator(configuration).cloudflareImagesVariantsUpdateAVariant(body, identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch details for a single variant.
         * @summary Variant details
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsVariantDetails(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ImagesImageVariantSimpleResponse>>> {
            const localVarAxiosArgs = await CloudflareImagesVariantsApiAxiosParamCreator(configuration).cloudflareImagesVariantsVariantDetails(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CloudflareImagesVariantsApi - factory interface
 * @export
 */
export const CloudflareImagesVariantsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Specify variants that allow you to resize images for different use cases.
         * @summary Create a variant
         * @param {ImagesImageVariantDefinition} body 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsCreateAVariant(body: ImagesImageVariantDefinition, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
            return CloudflareImagesVariantsApiFp(configuration).cloudflareImagesVariantsCreateAVariant(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deleting a variant purges the cache for all images associated with the variant.
         * @summary Delete a variant
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsDeleteAVariant(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ImagesDeletedResponse>> {
            return CloudflareImagesVariantsApiFp(configuration).cloudflareImagesVariantsDeleteAVariant(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists existing variants.
         * @summary List variants
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsListVariants(accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ImagesImageVariantListResponse>> {
            return CloudflareImagesVariantsApiFp(configuration).cloudflareImagesVariantsListVariants(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updating a variant purges the cache for all images associated with the variant.
         * @summary Update a variant
         * @param {ImagesImageVariantPatchRequest} body 
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsUpdateAVariant(body: ImagesImageVariantPatchRequest, identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
            return CloudflareImagesVariantsApiFp(configuration).cloudflareImagesVariantsUpdateAVariant(body, identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch details for a single variant.
         * @summary Variant details
         * @param {ImagesImageVariantIdentifier} identifier 
         * @param {ImagesAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareImagesVariantsVariantDetails(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
            return CloudflareImagesVariantsApiFp(configuration).cloudflareImagesVariantsVariantDetails(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudflareImagesVariantsApi - object-oriented interface
 * @export
 * @class CloudflareImagesVariantsApi
 * @extends {BaseAPI}
 */
export class CloudflareImagesVariantsApi extends BaseAPI {
    /**
     * Specify variants that allow you to resize images for different use cases.
     * @summary Create a variant
     * @param {ImagesImageVariantDefinition} body 
     * @param {ImagesAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareImagesVariantsApi
     */
    public async cloudflareImagesVariantsCreateAVariant(body: ImagesImageVariantDefinition, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
        return CloudflareImagesVariantsApiFp(this.configuration).cloudflareImagesVariantsCreateAVariant(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deleting a variant purges the cache for all images associated with the variant.
     * @summary Delete a variant
     * @param {ImagesImageVariantIdentifier} identifier 
     * @param {ImagesAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareImagesVariantsApi
     */
    public async cloudflareImagesVariantsDeleteAVariant(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ImagesDeletedResponse>> {
        return CloudflareImagesVariantsApiFp(this.configuration).cloudflareImagesVariantsDeleteAVariant(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists existing variants.
     * @summary List variants
     * @param {ImagesAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareImagesVariantsApi
     */
    public async cloudflareImagesVariantsListVariants(accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ImagesImageVariantListResponse>> {
        return CloudflareImagesVariantsApiFp(this.configuration).cloudflareImagesVariantsListVariants(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updating a variant purges the cache for all images associated with the variant.
     * @summary Update a variant
     * @param {ImagesImageVariantPatchRequest} body 
     * @param {ImagesImageVariantIdentifier} identifier 
     * @param {ImagesAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareImagesVariantsApi
     */
    public async cloudflareImagesVariantsUpdateAVariant(body: ImagesImageVariantPatchRequest, identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
        return CloudflareImagesVariantsApiFp(this.configuration).cloudflareImagesVariantsUpdateAVariant(body, identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch details for a single variant.
     * @summary Variant details
     * @param {ImagesImageVariantIdentifier} identifier 
     * @param {ImagesAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareImagesVariantsApi
     */
    public async cloudflareImagesVariantsVariantDetails(identifier: ImagesImageVariantIdentifier, accountIdentifier: ImagesAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ImagesImageVariantSimpleResponse>> {
        return CloudflareImagesVariantsApiFp(this.configuration).cloudflareImagesVariantsVariantDetails(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
