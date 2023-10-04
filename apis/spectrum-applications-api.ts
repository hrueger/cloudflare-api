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
import { AppsAppIdBody } from '../models';
import { C4f8RoOSAppId } from '../models';
import { C4f8RoOSCommonComponentsSchemasIdentifier } from '../models';
import { C4f8RoOSComponentsSchemasResponseCollection } from '../models';
import { C4f8RoOSResponseSingleOriginDns } from '../models';
import { C4f8RoOSSchemasResponseSingle } from '../models';
import { InlineResponse200160 } from '../models';
import { InlineResponse4xx77 } from '../models';
import { InlineResponse4xx78 } from '../models';
import { InlineResponse4xx79 } from '../models';
import { InlineResponse4xx80 } from '../models';
import { SpectrumAppsBody } from '../models';
/**
 * SpectrumApplicationsApi - axios parameter creator
 * @export
 */
export const SpectrumApplicationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new Spectrum application from a configuration using a name for the origin.
         * @summary Create Spectrum application using a name for the origin
         * @param {SpectrumAppsBody} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin: async (body: SpectrumAppsBody, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin.');
            }
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin.');
            }
            const localVarPath = `/zones/{zone}/spectrum/apps`
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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
         * Deletes a previously existing application.
         * @summary Delete Spectrum application
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumApplicationsDeleteSpectrumApplication: async (appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling spectrumApplicationsDeleteSpectrumApplication.');
            }
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumApplicationsDeleteSpectrumApplication.');
            }
            const localVarPath = `/zones/{zone}/spectrum/apps/{app_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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
         * Gets the application configuration of a specific application inside a zone.
         * @summary Get Spectrum application configuration
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumApplicationsGetSpectrumApplicationConfiguration: async (appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling spectrumApplicationsGetSpectrumApplicationConfiguration.');
            }
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumApplicationsGetSpectrumApplicationConfiguration.');
            }
            const localVarPath = `/zones/{zone}/spectrum/apps/{app_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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
         * Retrieves a list of currently existing Spectrum applications inside a zone.
         * @summary List Spectrum applications
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [direction] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumApplicationsListSpectrumApplications: async (zone: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, perPage?: number, direction?: string, order?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumApplicationsListSpectrumApplications.');
            }
            const localVarPath = `/zones/{zone}/spectrum/apps`
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
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
         * Updates a previously existing application's configuration that uses a name for the origin.
         * @summary Update Spectrum application configuration using a name for the origin
         * @param {AppsAppIdBody} body 
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin: async (body: AppsAppIdBody, appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin.');
            }
            // verify required parameter 'appId' is not null or undefined
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin.');
            }
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin.');
            }
            const localVarPath = `/zones/{zone}/spectrum/apps/{app_id}`
                .replace(`{${"app_id"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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
 * SpectrumApplicationsApi - functional programming interface
 * @export
 */
export const SpectrumApplicationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new Spectrum application from a configuration using a name for the origin.
         * @summary Create Spectrum application using a name for the origin
         * @param {SpectrumAppsBody} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body: SpectrumAppsBody, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>>> {
            const localVarAxiosArgs = await SpectrumApplicationsApiAxiosParamCreator(configuration).spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body, zone, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a previously existing application.
         * @summary Delete Spectrum application
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsDeleteSpectrumApplication(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200160>>> {
            const localVarAxiosArgs = await SpectrumApplicationsApiAxiosParamCreator(configuration).spectrumApplicationsDeleteSpectrumApplication(appId, zone, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets the application configuration of a specific application inside a zone.
         * @summary Get Spectrum application configuration
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsGetSpectrumApplicationConfiguration(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSSchemasResponseSingle>>> {
            const localVarAxiosArgs = await SpectrumApplicationsApiAxiosParamCreator(configuration).spectrumApplicationsGetSpectrumApplicationConfiguration(appId, zone, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a list of currently existing Spectrum applications inside a zone.
         * @summary List Spectrum applications
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [direction] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsListSpectrumApplications(zone: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, perPage?: number, direction?: string, order?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await SpectrumApplicationsApiAxiosParamCreator(configuration).spectrumApplicationsListSpectrumApplications(zone, page, perPage, direction, order, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a previously existing application's configuration that uses a name for the origin.
         * @summary Update Spectrum application configuration using a name for the origin
         * @param {AppsAppIdBody} body 
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body: AppsAppIdBody, appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>>> {
            const localVarAxiosArgs = await SpectrumApplicationsApiAxiosParamCreator(configuration).spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body, appId, zone, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpectrumApplicationsApi - factory interface
 * @export
 */
export const SpectrumApplicationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new Spectrum application from a configuration using a name for the origin.
         * @summary Create Spectrum application using a name for the origin
         * @param {SpectrumAppsBody} body 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body: SpectrumAppsBody, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>> {
            return SpectrumApplicationsApiFp(configuration).spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body, zone, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a previously existing application.
         * @summary Delete Spectrum application
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsDeleteSpectrumApplication(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200160>> {
            return SpectrumApplicationsApiFp(configuration).spectrumApplicationsDeleteSpectrumApplication(appId, zone, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the application configuration of a specific application inside a zone.
         * @summary Get Spectrum application configuration
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsGetSpectrumApplicationConfiguration(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSSchemasResponseSingle>> {
            return SpectrumApplicationsApiFp(configuration).spectrumApplicationsGetSpectrumApplicationConfiguration(appId, zone, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of currently existing Spectrum applications inside a zone.
         * @summary List Spectrum applications
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [direction] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsListSpectrumApplications(zone: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, perPage?: number, direction?: string, order?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSComponentsSchemasResponseCollection>> {
            return SpectrumApplicationsApiFp(configuration).spectrumApplicationsListSpectrumApplications(zone, page, perPage, direction, order, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a previously existing application's configuration that uses a name for the origin.
         * @summary Update Spectrum application configuration using a name for the origin
         * @param {AppsAppIdBody} body 
         * @param {C4f8RoOSAppId} appId 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body: AppsAppIdBody, appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>> {
            return SpectrumApplicationsApiFp(configuration).spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body, appId, zone, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SpectrumApplicationsApi - object-oriented interface
 * @export
 * @class SpectrumApplicationsApi
 * @extends {BaseAPI}
 */
export class SpectrumApplicationsApi extends BaseAPI {
    /**
     * Creates a new Spectrum application from a configuration using a name for the origin.
     * @summary Create Spectrum application using a name for the origin
     * @param {SpectrumAppsBody} body 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumApplicationsApi
     */
    public async spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body: SpectrumAppsBody, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>> {
        return SpectrumApplicationsApiFp(this.configuration).spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin(body, zone, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a previously existing application.
     * @summary Delete Spectrum application
     * @param {C4f8RoOSAppId} appId 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumApplicationsApi
     */
    public async spectrumApplicationsDeleteSpectrumApplication(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200160>> {
        return SpectrumApplicationsApiFp(this.configuration).spectrumApplicationsDeleteSpectrumApplication(appId, zone, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets the application configuration of a specific application inside a zone.
     * @summary Get Spectrum application configuration
     * @param {C4f8RoOSAppId} appId 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumApplicationsApi
     */
    public async spectrumApplicationsGetSpectrumApplicationConfiguration(appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSSchemasResponseSingle>> {
        return SpectrumApplicationsApiFp(this.configuration).spectrumApplicationsGetSpectrumApplicationConfiguration(appId, zone, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a list of currently existing Spectrum applications inside a zone.
     * @summary List Spectrum applications
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {string} [direction] 
     * @param {string} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumApplicationsApi
     */
    public async spectrumApplicationsListSpectrumApplications(zone: C4f8RoOSCommonComponentsSchemasIdentifier, page?: number, perPage?: number, direction?: string, order?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSComponentsSchemasResponseCollection>> {
        return SpectrumApplicationsApiFp(this.configuration).spectrumApplicationsListSpectrumApplications(zone, page, perPage, direction, order, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a previously existing application's configuration that uses a name for the origin.
     * @summary Update Spectrum application configuration using a name for the origin
     * @param {AppsAppIdBody} body 
     * @param {C4f8RoOSAppId} appId 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumApplicationsApi
     */
    public async spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body: AppsAppIdBody, appId: C4f8RoOSAppId, zone: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSResponseSingleOriginDns>> {
        return SpectrumApplicationsApiFp(this.configuration).spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin(body, appId, zone, options).then((request) => request(this.axios, this.basePath));
    }
}
