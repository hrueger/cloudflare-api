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
import { CustomPagesIdentifierBody } from '../models';
import { InlineResponse4xx15 } from '../models';
import { InlineResponse4xx16 } from '../models';
import { Nxb9VcMkCustomPagesResponseCollection } from '../models';
import { Nxb9VcMkCustomPagesResponseSingle } from '../models';
import { Nxb9VcMkIdentifier } from '../models';
/**
 * CustomPagesForAZoneApi - axios parameter creator
 * @export
 */
export const CustomPagesForAZoneApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches the details of a custom page.
         * @summary Get a custom page
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customPagesForAZoneGetACustomPage: async (identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling customPagesForAZoneGetACustomPage.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customPagesForAZoneGetACustomPage.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_pages/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
         * Fetches all the custom pages at the zone level.
         * @summary List custom pages
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customPagesForAZoneListCustomPages: async (zoneIdentifier: Nxb9VcMkIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customPagesForAZoneListCustomPages.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_pages`
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
         * Updates the configuration of an existing custom page.
         * @summary Update a custom page
         * @param {CustomPagesIdentifierBody} body 
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customPagesForAZoneUpdateACustomPage: async (body: CustomPagesIdentifierBody, identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling customPagesForAZoneUpdateACustomPage.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling customPagesForAZoneUpdateACustomPage.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customPagesForAZoneUpdateACustomPage.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_pages/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
 * CustomPagesForAZoneApi - functional programming interface
 * @export
 */
export const CustomPagesForAZoneApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Fetches the details of a custom page.
         * @summary Get a custom page
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneGetACustomPage(identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>>> {
            const localVarAxiosArgs = await CustomPagesForAZoneApiAxiosParamCreator(configuration).customPagesForAZoneGetACustomPage(identifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches all the custom pages at the zone level.
         * @summary List custom pages
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneListCustomPages(zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseCollection>>> {
            const localVarAxiosArgs = await CustomPagesForAZoneApiAxiosParamCreator(configuration).customPagesForAZoneListCustomPages(zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates the configuration of an existing custom page.
         * @summary Update a custom page
         * @param {CustomPagesIdentifierBody} body 
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneUpdateACustomPage(body: CustomPagesIdentifierBody, identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>>> {
            const localVarAxiosArgs = await CustomPagesForAZoneApiAxiosParamCreator(configuration).customPagesForAZoneUpdateACustomPage(body, identifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CustomPagesForAZoneApi - factory interface
 * @export
 */
export const CustomPagesForAZoneApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Fetches the details of a custom page.
         * @summary Get a custom page
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneGetACustomPage(identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>> {
            return CustomPagesForAZoneApiFp(configuration).customPagesForAZoneGetACustomPage(identifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches all the custom pages at the zone level.
         * @summary List custom pages
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneListCustomPages(zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseCollection>> {
            return CustomPagesForAZoneApiFp(configuration).customPagesForAZoneListCustomPages(zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration of an existing custom page.
         * @summary Update a custom page
         * @param {CustomPagesIdentifierBody} body 
         * @param {Nxb9VcMkIdentifier} identifier 
         * @param {Nxb9VcMkIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customPagesForAZoneUpdateACustomPage(body: CustomPagesIdentifierBody, identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>> {
            return CustomPagesForAZoneApiFp(configuration).customPagesForAZoneUpdateACustomPage(body, identifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomPagesForAZoneApi - object-oriented interface
 * @export
 * @class CustomPagesForAZoneApi
 * @extends {BaseAPI}
 */
export class CustomPagesForAZoneApi extends BaseAPI {
    /**
     * Fetches the details of a custom page.
     * @summary Get a custom page
     * @param {Nxb9VcMkIdentifier} identifier 
     * @param {Nxb9VcMkIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomPagesForAZoneApi
     */
    public async customPagesForAZoneGetACustomPage(identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>> {
        return CustomPagesForAZoneApiFp(this.configuration).customPagesForAZoneGetACustomPage(identifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches all the custom pages at the zone level.
     * @summary List custom pages
     * @param {Nxb9VcMkIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomPagesForAZoneApi
     */
    public async customPagesForAZoneListCustomPages(zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseCollection>> {
        return CustomPagesForAZoneApiFp(this.configuration).customPagesForAZoneListCustomPages(zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates the configuration of an existing custom page.
     * @summary Update a custom page
     * @param {CustomPagesIdentifierBody} body 
     * @param {Nxb9VcMkIdentifier} identifier 
     * @param {Nxb9VcMkIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomPagesForAZoneApi
     */
    public async customPagesForAZoneUpdateACustomPage(body: CustomPagesIdentifierBody, identifier: Nxb9VcMkIdentifier, zoneIdentifier: Nxb9VcMkIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Nxb9VcMkCustomPagesResponseSingle>> {
        return CustomPagesForAZoneApiFp(this.configuration).customPagesForAZoneUpdateACustomPage(body, identifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
