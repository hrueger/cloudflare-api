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
import { InlineResponse4XX249 } from '../models';
import { InlineResponse4XX253 } from '../models';
import { InlineResponse4XX254 } from '../models';
import { InlineResponse4XX255 } from '../models';
import { WAy69x7MIdentifier } from '../models';
import { WAy69x7MNewProjectResponse } from '../models';
import { WAy69x7MProjectName } from '../models';
import { WAy69x7MProjectResponse } from '../models';
import { WAy69x7MProjects } from '../models';
import { WAy69x7MProjectsResponse } from '../models';
/**
 * PagesProjectApi - axios parameter creator
 * @export
 */
export const PagesProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new project.
         * @summary Create project
         * @param {WAy69x7MProjects} body 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesProjectCreateProject: async (body: WAy69x7MProjects, accountIdentifier: WAy69x7MIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling pagesProjectCreateProject.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling pagesProjectCreateProject.');
            }
            const localVarPath = `/accounts/{account_identifier}/pages/projects`
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
         * Delete a project by name.
         * @summary Delete project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesProjectDeleteProject: async (projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectName' is not null or undefined
            if (projectName === null || projectName === undefined) {
                throw new RequiredError('projectName','Required parameter projectName was null or undefined when calling pagesProjectDeleteProject.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling pagesProjectDeleteProject.');
            }
            const localVarPath = `/accounts/{account_identifier}/pages/projects/{project_name}`
                .replace(`{${"project_name"}}`, encodeURIComponent(String(projectName)))
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
         * Fetch a project by name.
         * @summary Get project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesProjectGetProject: async (projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectName' is not null or undefined
            if (projectName === null || projectName === undefined) {
                throw new RequiredError('projectName','Required parameter projectName was null or undefined when calling pagesProjectGetProject.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling pagesProjectGetProject.');
            }
            const localVarPath = `/accounts/{account_identifier}/pages/projects/{project_name}`
                .replace(`{${"project_name"}}`, encodeURIComponent(String(projectName)))
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
         * Fetch a list of all user projects.
         * @summary Get projects
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesProjectGetProjects: async (accountIdentifier: WAy69x7MIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling pagesProjectGetProjects.');
            }
            const localVarPath = `/accounts/{account_identifier}/pages/projects`
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
         * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
         * @summary Update project
         * @param {any} body 
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesProjectUpdateProject: async (body: any, projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling pagesProjectUpdateProject.');
            }
            // verify required parameter 'projectName' is not null or undefined
            if (projectName === null || projectName === undefined) {
                throw new RequiredError('projectName','Required parameter projectName was null or undefined when calling pagesProjectUpdateProject.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling pagesProjectUpdateProject.');
            }
            const localVarPath = `/accounts/{account_identifier}/pages/projects/{project_name}`
                .replace(`{${"project_name"}}`, encodeURIComponent(String(projectName)))
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
 * PagesProjectApi - functional programming interface
 * @export
 */
export const PagesProjectApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new project.
         * @summary Create project
         * @param {WAy69x7MProjects} body 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectCreateProject(body: WAy69x7MProjects, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WAy69x7MNewProjectResponse>>> {
            const localVarAxiosArgs = await PagesProjectApiAxiosParamCreator(configuration).pagesProjectCreateProject(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a project by name.
         * @summary Delete project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectDeleteProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await PagesProjectApiAxiosParamCreator(configuration).pagesProjectDeleteProject(projectName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch a project by name.
         * @summary Get project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectGetProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WAy69x7MProjectResponse>>> {
            const localVarAxiosArgs = await PagesProjectApiAxiosParamCreator(configuration).pagesProjectGetProject(projectName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch a list of all user projects.
         * @summary Get projects
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectGetProjects(accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WAy69x7MProjectsResponse>>> {
            const localVarAxiosArgs = await PagesProjectApiAxiosParamCreator(configuration).pagesProjectGetProjects(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
         * @summary Update project
         * @param {any} body 
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectUpdateProject(body: any, projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WAy69x7MNewProjectResponse>>> {
            const localVarAxiosArgs = await PagesProjectApiAxiosParamCreator(configuration).pagesProjectUpdateProject(body, projectName, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PagesProjectApi - factory interface
 * @export
 */
export const PagesProjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new project.
         * @summary Create project
         * @param {WAy69x7MProjects} body 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectCreateProject(body: WAy69x7MProjects, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<WAy69x7MNewProjectResponse>> {
            return PagesProjectApiFp(configuration).pagesProjectCreateProject(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a project by name.
         * @summary Delete project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectDeleteProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return PagesProjectApiFp(configuration).pagesProjectDeleteProject(projectName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a project by name.
         * @summary Get project
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectGetProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<WAy69x7MProjectResponse>> {
            return PagesProjectApiFp(configuration).pagesProjectGetProject(projectName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a list of all user projects.
         * @summary Get projects
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectGetProjects(accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<WAy69x7MProjectsResponse>> {
            return PagesProjectApiFp(configuration).pagesProjectGetProjects(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
         * @summary Update project
         * @param {any} body 
         * @param {WAy69x7MProjectName} projectName 
         * @param {WAy69x7MIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pagesProjectUpdateProject(body: any, projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<WAy69x7MNewProjectResponse>> {
            return PagesProjectApiFp(configuration).pagesProjectUpdateProject(body, projectName, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PagesProjectApi - object-oriented interface
 * @export
 * @class PagesProjectApi
 * @extends {BaseAPI}
 */
export class PagesProjectApi extends BaseAPI {
    /**
     * Create a new project.
     * @summary Create project
     * @param {WAy69x7MProjects} body 
     * @param {WAy69x7MIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesProjectApi
     */
    public async pagesProjectCreateProject(body: WAy69x7MProjects, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<WAy69x7MNewProjectResponse>> {
        return PagesProjectApiFp(this.configuration).pagesProjectCreateProject(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a project by name.
     * @summary Delete project
     * @param {WAy69x7MProjectName} projectName 
     * @param {WAy69x7MIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesProjectApi
     */
    public async pagesProjectDeleteProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return PagesProjectApiFp(this.configuration).pagesProjectDeleteProject(projectName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch a project by name.
     * @summary Get project
     * @param {WAy69x7MProjectName} projectName 
     * @param {WAy69x7MIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesProjectApi
     */
    public async pagesProjectGetProject(projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<WAy69x7MProjectResponse>> {
        return PagesProjectApiFp(this.configuration).pagesProjectGetProject(projectName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch a list of all user projects.
     * @summary Get projects
     * @param {WAy69x7MIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesProjectApi
     */
    public async pagesProjectGetProjects(accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<WAy69x7MProjectsResponse>> {
        return PagesProjectApiFp(this.configuration).pagesProjectGetProjects(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
     * @summary Update project
     * @param {any} body 
     * @param {WAy69x7MProjectName} projectName 
     * @param {WAy69x7MIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesProjectApi
     */
    public async pagesProjectUpdateProject(body: any, projectName: WAy69x7MProjectName, accountIdentifier: WAy69x7MIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<WAy69x7MNewProjectResponse>> {
        return PagesProjectApiFp(this.configuration).pagesProjectUpdateProject(body, projectName, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
