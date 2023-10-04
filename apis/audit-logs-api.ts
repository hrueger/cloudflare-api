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
import { HrcAXqolAuditLogsResponseCollection } from '../models';
import { HrcAXqolIdentifier } from '../models';
import { InlineResponse4XX65 } from '../models';
/**
 * AuditLogsApi - axios parameter creator
 * @export
 */
export const AuditLogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get account audit logs
         * @param {HrcAXqolIdentifier} accountIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        auditLogsGetAccountAuditLogs: async (accountIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling auditLogsGetAccountAuditLogs.');
            }
            const localVarPath = `/accounts/{account_identifier}/audit_logs`
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (_export !== undefined) {
                localVarQueryParameter['export'] = _export;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['action.type'] = actionType;
            }

            if (actorIp !== undefined) {
                localVarQueryParameter['actor.ip'] = actorIp;
            }

            if (actorEmail !== undefined) {
                localVarQueryParameter['actor.email'] = actorEmail;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
            }

            if (before !== undefined) {
                localVarQueryParameter['before'] = (before as any instanceof Date) ?
                    (before as any).toISOString() :
                    before;
            }

            if (zoneName !== undefined) {
                localVarQueryParameter['zone.name'] = zoneName;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (hideUserLogs !== undefined) {
                localVarQueryParameter['hide_user_logs'] = hideUserLogs;
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
         * Gets a list of audit logs for an organization. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get organization audit logs
         * @param {HrcAXqolIdentifier} organizationIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        auditLogsGetOrganizationAuditLogs: async (organizationIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationIdentifier' is not null or undefined
            if (organizationIdentifier === null || organizationIdentifier === undefined) {
                throw new RequiredError('organizationIdentifier','Required parameter organizationIdentifier was null or undefined when calling auditLogsGetOrganizationAuditLogs.');
            }
            const localVarPath = `/organizations/{organization_identifier}/audit_logs`
                .replace(`{${"organization_identifier"}}`, encodeURIComponent(String(organizationIdentifier)));
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (_export !== undefined) {
                localVarQueryParameter['export'] = _export;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['action.type'] = actionType;
            }

            if (actorIp !== undefined) {
                localVarQueryParameter['actor.ip'] = actorIp;
            }

            if (actorEmail !== undefined) {
                localVarQueryParameter['actor.email'] = actorEmail;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
            }

            if (before !== undefined) {
                localVarQueryParameter['before'] = (before as any instanceof Date) ?
                    (before as any).toISOString() :
                    before;
            }

            if (zoneName !== undefined) {
                localVarQueryParameter['zone.name'] = zoneName;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (hideUserLogs !== undefined) {
                localVarQueryParameter['hide_user_logs'] = hideUserLogs;
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
         * Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get user audit logs
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        auditLogsGetUserAuditLogs: async (id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/audit_logs`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (_export !== undefined) {
                localVarQueryParameter['export'] = _export;
            }

            if (actionType !== undefined) {
                localVarQueryParameter['action.type'] = actionType;
            }

            if (actorIp !== undefined) {
                localVarQueryParameter['actor.ip'] = actorIp;
            }

            if (actorEmail !== undefined) {
                localVarQueryParameter['actor.email'] = actorEmail;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
            }

            if (before !== undefined) {
                localVarQueryParameter['before'] = (before as any instanceof Date) ?
                    (before as any).toISOString() :
                    before;
            }

            if (zoneName !== undefined) {
                localVarQueryParameter['zone.name'] = zoneName;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (hideUserLogs !== undefined) {
                localVarQueryParameter['hide_user_logs'] = hideUserLogs;
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
 * AuditLogsApi - functional programming interface
 * @export
 */
export const AuditLogsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get account audit logs
         * @param {HrcAXqolIdentifier} accountIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetAccountAuditLogs(accountIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>>> {
            const localVarAxiosArgs = await AuditLogsApiAxiosParamCreator(configuration).auditLogsGetAccountAuditLogs(accountIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of audit logs for an organization. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get organization audit logs
         * @param {HrcAXqolIdentifier} organizationIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetOrganizationAuditLogs(organizationIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>>> {
            const localVarAxiosArgs = await AuditLogsApiAxiosParamCreator(configuration).auditLogsGetOrganizationAuditLogs(organizationIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get user audit logs
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetUserAuditLogs(id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>>> {
            const localVarAxiosArgs = await AuditLogsApiAxiosParamCreator(configuration).auditLogsGetUserAuditLogs(id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuditLogsApi - factory interface
 * @export
 */
export const AuditLogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get account audit logs
         * @param {HrcAXqolIdentifier} accountIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetAccountAuditLogs(accountIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
            return AuditLogsApiFp(configuration).auditLogsGetAccountAuditLogs(accountIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of audit logs for an organization. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get organization audit logs
         * @param {HrcAXqolIdentifier} organizationIdentifier 
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetOrganizationAuditLogs(organizationIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
            return AuditLogsApiFp(configuration).auditLogsGetOrganizationAuditLogs(organizationIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
         * @summary Get user audit logs
         * @param {string} [id] 
         * @param {boolean} [_export] 
         * @param {string} [actionType] 
         * @param {string} [actorIp] 
         * @param {string} [actorEmail] 
         * @param {Date} [since] 
         * @param {Date} [before] 
         * @param {string} [zoneName] 
         * @param {string} [direction] 
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {boolean} [hideUserLogs] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auditLogsGetUserAuditLogs(id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
            return AuditLogsApiFp(configuration).auditLogsGetUserAuditLogs(id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuditLogsApi - object-oriented interface
 * @export
 * @class AuditLogsApi
 * @extends {BaseAPI}
 */
export class AuditLogsApi extends BaseAPI {
    /**
     * Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
     * @summary Get account audit logs
     * @param {HrcAXqolIdentifier} accountIdentifier 
     * @param {string} [id] 
     * @param {boolean} [_export] 
     * @param {string} [actionType] 
     * @param {string} [actorIp] 
     * @param {string} [actorEmail] 
     * @param {Date} [since] 
     * @param {Date} [before] 
     * @param {string} [zoneName] 
     * @param {string} [direction] 
     * @param {number} [perPage] 
     * @param {number} [page] 
     * @param {boolean} [hideUserLogs] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogsApi
     */
    public async auditLogsGetAccountAuditLogs(accountIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
        return AuditLogsApiFp(this.configuration).auditLogsGetAccountAuditLogs(accountIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of audit logs for an organization. Can be filtered by who made the change, on which zone, and the timeframe of the change.
     * @summary Get organization audit logs
     * @param {HrcAXqolIdentifier} organizationIdentifier 
     * @param {string} [id] 
     * @param {boolean} [_export] 
     * @param {string} [actionType] 
     * @param {string} [actorIp] 
     * @param {string} [actorEmail] 
     * @param {Date} [since] 
     * @param {Date} [before] 
     * @param {string} [zoneName] 
     * @param {string} [direction] 
     * @param {number} [perPage] 
     * @param {number} [page] 
     * @param {boolean} [hideUserLogs] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogsApi
     */
    public async auditLogsGetOrganizationAuditLogs(organizationIdentifier: HrcAXqolIdentifier, id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
        return AuditLogsApiFp(this.configuration).auditLogsGetOrganizationAuditLogs(organizationIdentifier, id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
     * @summary Get user audit logs
     * @param {string} [id] 
     * @param {boolean} [_export] 
     * @param {string} [actionType] 
     * @param {string} [actorIp] 
     * @param {string} [actorEmail] 
     * @param {Date} [since] 
     * @param {Date} [before] 
     * @param {string} [zoneName] 
     * @param {string} [direction] 
     * @param {number} [perPage] 
     * @param {number} [page] 
     * @param {boolean} [hideUserLogs] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuditLogsApi
     */
    public async auditLogsGetUserAuditLogs(id?: string, _export?: boolean, actionType?: string, actorIp?: string, actorEmail?: string, since?: Date, before?: Date, zoneName?: string, direction?: string, perPage?: number, page?: number, hideUserLogs?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<HrcAXqolAuditLogsResponseCollection>> {
        return AuditLogsApiFp(this.configuration).auditLogsGetUserAuditLogs(id, _export, actionType, actorIp, actorEmail, since, before, zoneName, direction, perPage, page, hideUserLogs, options).then((request) => request(this.axios, this.basePath));
    }
}
