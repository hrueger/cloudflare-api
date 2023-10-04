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
import { InlineResponse4XX283 } from '../models';
import { InlineResponse4XX284 } from '../models';
import { InlineResponse4XX285 } from '../models';
import { Model2UOufITZAccountIdentifier } from '../models';
import { Model2UOufITZResponseCollection } from '../models';
import { Model2UOufITZSchemasIdResponse } from '../models';
import { Model2UOufITZSchemasIdentifier } from '../models';
import { Model2UOufITZSingleResponse } from '../models';
import { Model2UOufITZTsig } from '../models';
/**
 * SecondaryDNSTSIGApi - axios parameter creator
 * @export
 */
export const SecondaryDNSTSIGApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create TSIG.
         * @summary Create TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secondaryDnsTsigCreateTsig: async (body: Model2UOufITZTsig, accountIdentifier: Model2UOufITZAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling secondaryDnsTsigCreateTsig.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling secondaryDnsTsigCreateTsig.');
            }
            const localVarPath = `/accounts/{account_identifier}/secondary_dns/tsigs`
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
         * Delete TSIG.
         * @summary Delete TSIG
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secondaryDnsTsigDeleteTsig: async (identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling secondaryDnsTsigDeleteTsig.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling secondaryDnsTsigDeleteTsig.');
            }
            const localVarPath = `/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}`
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
         * List TSIGs.
         * @summary List TSIGs
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secondaryDnsTsigListTsiGs: async (accountIdentifier: Model2UOufITZAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling secondaryDnsTsigListTsiGs.');
            }
            const localVarPath = `/accounts/{account_identifier}/secondary_dns/tsigs`
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
         * Get TSIG.
         * @summary TSIG Details
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secondaryDnsTsigTsigDetails: async (identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling secondaryDnsTsigTsigDetails.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling secondaryDnsTsigTsigDetails.');
            }
            const localVarPath = `/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}`
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
         * Modify TSIG.
         * @summary Update TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        secondaryDnsTsigUpdateTsig: async (body: Model2UOufITZTsig, identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling secondaryDnsTsigUpdateTsig.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling secondaryDnsTsigUpdateTsig.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling secondaryDnsTsigUpdateTsig.');
            }
            const localVarPath = `/accounts/{account_identifier}/secondary_dns/tsigs/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
 * SecondaryDNSTSIGApi - functional programming interface
 * @export
 */
export const SecondaryDNSTSIGApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create TSIG.
         * @summary Create TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigCreateTsig(body: Model2UOufITZTsig, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model2UOufITZSingleResponse>>> {
            const localVarAxiosArgs = await SecondaryDNSTSIGApiAxiosParamCreator(configuration).secondaryDnsTsigCreateTsig(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete TSIG.
         * @summary Delete TSIG
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigDeleteTsig(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model2UOufITZSchemasIdResponse>>> {
            const localVarAxiosArgs = await SecondaryDNSTSIGApiAxiosParamCreator(configuration).secondaryDnsTsigDeleteTsig(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List TSIGs.
         * @summary List TSIGs
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigListTsiGs(accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model2UOufITZResponseCollection>>> {
            const localVarAxiosArgs = await SecondaryDNSTSIGApiAxiosParamCreator(configuration).secondaryDnsTsigListTsiGs(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get TSIG.
         * @summary TSIG Details
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigTsigDetails(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model2UOufITZSingleResponse>>> {
            const localVarAxiosArgs = await SecondaryDNSTSIGApiAxiosParamCreator(configuration).secondaryDnsTsigTsigDetails(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Modify TSIG.
         * @summary Update TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigUpdateTsig(body: Model2UOufITZTsig, identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model2UOufITZSingleResponse>>> {
            const localVarAxiosArgs = await SecondaryDNSTSIGApiAxiosParamCreator(configuration).secondaryDnsTsigUpdateTsig(body, identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SecondaryDNSTSIGApi - factory interface
 * @export
 */
export const SecondaryDNSTSIGApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create TSIG.
         * @summary Create TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigCreateTsig(body: Model2UOufITZTsig, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
            return SecondaryDNSTSIGApiFp(configuration).secondaryDnsTsigCreateTsig(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete TSIG.
         * @summary Delete TSIG
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigDeleteTsig(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model2UOufITZSchemasIdResponse>> {
            return SecondaryDNSTSIGApiFp(configuration).secondaryDnsTsigDeleteTsig(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * List TSIGs.
         * @summary List TSIGs
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigListTsiGs(accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model2UOufITZResponseCollection>> {
            return SecondaryDNSTSIGApiFp(configuration).secondaryDnsTsigListTsiGs(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Get TSIG.
         * @summary TSIG Details
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigTsigDetails(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
            return SecondaryDNSTSIGApiFp(configuration).secondaryDnsTsigTsigDetails(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify TSIG.
         * @summary Update TSIG
         * @param {Model2UOufITZTsig} body 
         * @param {Model2UOufITZSchemasIdentifier} identifier 
         * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async secondaryDnsTsigUpdateTsig(body: Model2UOufITZTsig, identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
            return SecondaryDNSTSIGApiFp(configuration).secondaryDnsTsigUpdateTsig(body, identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecondaryDNSTSIGApi - object-oriented interface
 * @export
 * @class SecondaryDNSTSIGApi
 * @extends {BaseAPI}
 */
export class SecondaryDNSTSIGApi extends BaseAPI {
    /**
     * Create TSIG.
     * @summary Create TSIG
     * @param {Model2UOufITZTsig} body 
     * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecondaryDNSTSIGApi
     */
    public async secondaryDnsTsigCreateTsig(body: Model2UOufITZTsig, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
        return SecondaryDNSTSIGApiFp(this.configuration).secondaryDnsTsigCreateTsig(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete TSIG.
     * @summary Delete TSIG
     * @param {Model2UOufITZSchemasIdentifier} identifier 
     * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecondaryDNSTSIGApi
     */
    public async secondaryDnsTsigDeleteTsig(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model2UOufITZSchemasIdResponse>> {
        return SecondaryDNSTSIGApiFp(this.configuration).secondaryDnsTsigDeleteTsig(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List TSIGs.
     * @summary List TSIGs
     * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecondaryDNSTSIGApi
     */
    public async secondaryDnsTsigListTsiGs(accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model2UOufITZResponseCollection>> {
        return SecondaryDNSTSIGApiFp(this.configuration).secondaryDnsTsigListTsiGs(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get TSIG.
     * @summary TSIG Details
     * @param {Model2UOufITZSchemasIdentifier} identifier 
     * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecondaryDNSTSIGApi
     */
    public async secondaryDnsTsigTsigDetails(identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
        return SecondaryDNSTSIGApiFp(this.configuration).secondaryDnsTsigTsigDetails(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Modify TSIG.
     * @summary Update TSIG
     * @param {Model2UOufITZTsig} body 
     * @param {Model2UOufITZSchemasIdentifier} identifier 
     * @param {Model2UOufITZAccountIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecondaryDNSTSIGApi
     */
    public async secondaryDnsTsigUpdateTsig(body: Model2UOufITZTsig, identifier: Model2UOufITZSchemasIdentifier, accountIdentifier: Model2UOufITZAccountIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model2UOufITZSingleResponse>> {
        return SecondaryDNSTSIGApiFp(this.configuration).secondaryDnsTsigUpdateTsig(body, identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}