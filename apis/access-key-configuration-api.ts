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
import { AccessKeysBody } from '../models';
import { InlineResponse4XX25 } from '../models';
import { Tm1HTKEcIdentifier } from '../models';
import { Tm1HTKEcKeysComponentsSchemasSingleResponse } from '../models';
/**
 * AccessKeyConfigurationApi - axios parameter creator
 * @export
 */
export const AccessKeyConfigurationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the Access key rotation settings for an account.
         * @summary Get the Access key configuration
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessKeyConfigurationGetTheAccessKeyConfiguration: async (identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessKeyConfigurationGetTheAccessKeyConfiguration.');
            }
            const localVarPath = `/accounts/{identifier}/access/keys`
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
         * Perfoms a key rotation for an account.
         * @summary Rotate Access keys
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessKeyConfigurationRotateAccessKeys: async (identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessKeyConfigurationRotateAccessKeys.');
            }
            const localVarPath = `/accounts/{identifier}/access/keys/rotate`
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
         * Updates the Access key rotation settings for an account.
         * @summary Update the Access key configuration
         * @param {AccessKeysBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessKeyConfigurationUpdateTheAccessKeyConfiguration: async (body: AccessKeysBody, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accessKeyConfigurationUpdateTheAccessKeyConfiguration.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessKeyConfigurationUpdateTheAccessKeyConfiguration.');
            }
            const localVarPath = `/accounts/{identifier}/access/keys`
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
 * AccessKeyConfigurationApi - functional programming interface
 * @export
 */
export const AccessKeyConfigurationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets the Access key rotation settings for an account.
         * @summary Get the Access key configuration
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationGetTheAccessKeyConfiguration(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessKeyConfigurationApiAxiosParamCreator(configuration).accessKeyConfigurationGetTheAccessKeyConfiguration(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Perfoms a key rotation for an account.
         * @summary Rotate Access keys
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationRotateAccessKeys(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessKeyConfigurationApiAxiosParamCreator(configuration).accessKeyConfigurationRotateAccessKeys(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates the Access key rotation settings for an account.
         * @summary Update the Access key configuration
         * @param {AccessKeysBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationUpdateTheAccessKeyConfiguration(body: AccessKeysBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessKeyConfigurationApiAxiosParamCreator(configuration).accessKeyConfigurationUpdateTheAccessKeyConfiguration(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccessKeyConfigurationApi - factory interface
 * @export
 */
export const AccessKeyConfigurationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets the Access key rotation settings for an account.
         * @summary Get the Access key configuration
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationGetTheAccessKeyConfiguration(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
            return AccessKeyConfigurationApiFp(configuration).accessKeyConfigurationGetTheAccessKeyConfiguration(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Perfoms a key rotation for an account.
         * @summary Rotate Access keys
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationRotateAccessKeys(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
            return AccessKeyConfigurationApiFp(configuration).accessKeyConfigurationRotateAccessKeys(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the Access key rotation settings for an account.
         * @summary Update the Access key configuration
         * @param {AccessKeysBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessKeyConfigurationUpdateTheAccessKeyConfiguration(body: AccessKeysBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
            return AccessKeyConfigurationApiFp(configuration).accessKeyConfigurationUpdateTheAccessKeyConfiguration(body, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccessKeyConfigurationApi - object-oriented interface
 * @export
 * @class AccessKeyConfigurationApi
 * @extends {BaseAPI}
 */
export class AccessKeyConfigurationApi extends BaseAPI {
    /**
     * Gets the Access key rotation settings for an account.
     * @summary Get the Access key configuration
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyConfigurationApi
     */
    public async accessKeyConfigurationGetTheAccessKeyConfiguration(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
        return AccessKeyConfigurationApiFp(this.configuration).accessKeyConfigurationGetTheAccessKeyConfiguration(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Perfoms a key rotation for an account.
     * @summary Rotate Access keys
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyConfigurationApi
     */
    public async accessKeyConfigurationRotateAccessKeys(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
        return AccessKeyConfigurationApiFp(this.configuration).accessKeyConfigurationRotateAccessKeys(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates the Access key rotation settings for an account.
     * @summary Update the Access key configuration
     * @param {AccessKeysBody} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessKeyConfigurationApi
     */
    public async accessKeyConfigurationUpdateTheAccessKeyConfiguration(body: AccessKeysBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcKeysComponentsSchemasSingleResponse>> {
        return AccessKeyConfigurationApiFp(this.configuration).accessKeyConfigurationUpdateTheAccessKeyConfiguration(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}