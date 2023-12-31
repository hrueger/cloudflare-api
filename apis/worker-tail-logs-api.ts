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
import { C4f8RoOSApiResponseCommon } from '../models';
import { C4f8RoOSCommonComponentsSchemasIdentifier } from '../models';
import { C4f8RoOSSchemasId } from '../models';
import { C4f8RoOSScriptName } from '../models';
import { C4f8RoOSTailResponse } from '../models';
import { InlineResponse4xx106 } from '../models';
import { InlineResponse4xx107 } from '../models';
/**
 * WorkerTailLogsApi - axios parameter creator
 * @export
 */
export const WorkerTailLogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a tail from a Worker.
         * @summary Delete Tail
         * @param {C4f8RoOSSchemasId} id 
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workerTailLogsDeleteTail: async (id: C4f8RoOSSchemasId, scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling workerTailLogsDeleteTail.');
            }
            // verify required parameter 'scriptName' is not null or undefined
            if (scriptName === null || scriptName === undefined) {
                throw new RequiredError('scriptName','Required parameter scriptName was null or undefined when calling workerTailLogsDeleteTail.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling workerTailLogsDeleteTail.');
            }
            const localVarPath = `/accounts/{account_identifier}/workers/scripts/{script_name}/tails/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"script_name"}}`, encodeURIComponent(String(scriptName)))
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
         * Get list of tails currently deployed on a worker.
         * @summary List Tails
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workerTailLogsListTails: async (scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scriptName' is not null or undefined
            if (scriptName === null || scriptName === undefined) {
                throw new RequiredError('scriptName','Required parameter scriptName was null or undefined when calling workerTailLogsListTails.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling workerTailLogsListTails.');
            }
            const localVarPath = `/accounts/{account_identifier}/workers/scripts/{script_name}/tails`
                .replace(`{${"script_name"}}`, encodeURIComponent(String(scriptName)))
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
         * Starts a tail that receives logs and exception from a Worker.
         * @summary Start Tail
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workerTailLogsStartTail: async (scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scriptName' is not null or undefined
            if (scriptName === null || scriptName === undefined) {
                throw new RequiredError('scriptName','Required parameter scriptName was null or undefined when calling workerTailLogsStartTail.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling workerTailLogsStartTail.');
            }
            const localVarPath = `/accounts/{account_identifier}/workers/scripts/{script_name}/tails`
                .replace(`{${"script_name"}}`, encodeURIComponent(String(scriptName)))
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
 * WorkerTailLogsApi - functional programming interface
 * @export
 */
export const WorkerTailLogsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a tail from a Worker.
         * @summary Delete Tail
         * @param {C4f8RoOSSchemasId} id 
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsDeleteTail(id: C4f8RoOSSchemasId, scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSApiResponseCommon>>> {
            const localVarAxiosArgs = await WorkerTailLogsApiAxiosParamCreator(configuration).workerTailLogsDeleteTail(id, scriptName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get list of tails currently deployed on a worker.
         * @summary List Tails
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsListTails(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSTailResponse>>> {
            const localVarAxiosArgs = await WorkerTailLogsApiAxiosParamCreator(configuration).workerTailLogsListTails(scriptName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Starts a tail that receives logs and exception from a Worker.
         * @summary Start Tail
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsStartTail(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSTailResponse>>> {
            const localVarAxiosArgs = await WorkerTailLogsApiAxiosParamCreator(configuration).workerTailLogsStartTail(scriptName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WorkerTailLogsApi - factory interface
 * @export
 */
export const WorkerTailLogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a tail from a Worker.
         * @summary Delete Tail
         * @param {C4f8RoOSSchemasId} id 
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsDeleteTail(id: C4f8RoOSSchemasId, scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSApiResponseCommon>> {
            return WorkerTailLogsApiFp(configuration).workerTailLogsDeleteTail(id, scriptName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Get list of tails currently deployed on a worker.
         * @summary List Tails
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsListTails(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSTailResponse>> {
            return WorkerTailLogsApiFp(configuration).workerTailLogsListTails(scriptName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Starts a tail that receives logs and exception from a Worker.
         * @summary Start Tail
         * @param {C4f8RoOSScriptName} scriptName 
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workerTailLogsStartTail(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSTailResponse>> {
            return WorkerTailLogsApiFp(configuration).workerTailLogsStartTail(scriptName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkerTailLogsApi - object-oriented interface
 * @export
 * @class WorkerTailLogsApi
 * @extends {BaseAPI}
 */
export class WorkerTailLogsApi extends BaseAPI {
    /**
     * Deletes a tail from a Worker.
     * @summary Delete Tail
     * @param {C4f8RoOSSchemasId} id 
     * @param {C4f8RoOSScriptName} scriptName 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerTailLogsApi
     */
    public async workerTailLogsDeleteTail(id: C4f8RoOSSchemasId, scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSApiResponseCommon>> {
        return WorkerTailLogsApiFp(this.configuration).workerTailLogsDeleteTail(id, scriptName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get list of tails currently deployed on a worker.
     * @summary List Tails
     * @param {C4f8RoOSScriptName} scriptName 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerTailLogsApi
     */
    public async workerTailLogsListTails(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSTailResponse>> {
        return WorkerTailLogsApiFp(this.configuration).workerTailLogsListTails(scriptName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Starts a tail that receives logs and exception from a Worker.
     * @summary Start Tail
     * @param {C4f8RoOSScriptName} scriptName 
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkerTailLogsApi
     */
    public async workerTailLogsStartTail(scriptName: C4f8RoOSScriptName, accountIdentifier: C4f8RoOSCommonComponentsSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSTailResponse>> {
        return WorkerTailLogsApiFp(this.configuration).workerTailLogsStartTail(scriptName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
