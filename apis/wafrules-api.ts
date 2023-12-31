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
import { InlineResponse200180 } from '../models';
import { InlineResponse4XX312 } from '../models';
import { InlineResponse4XX313 } from '../models';
import { InlineResponse4XX314 } from '../models';
import { RulesIdentifierBody3 } from '../models';
import { XhHksmrTComponentsSchemasIdentifier } from '../models';
import { XhHksmrTIdentifier } from '../models';
import { XhHksmrTRuleResponseCollection } from '../models';
import { XhHksmrTRuleResponseSingle } from '../models';
import { XhHksmrTSchemasIdentifier } from '../models';
/**
 * WAFRulesApi - axios parameter creator
 * @export
 */
export const WAFRulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches the details of a WAF rule in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Get a WAF rule
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wafRulesGetAWafRule: async (identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling wafRulesGetAWafRule.');
            }
            // verify required parameter 'packageId' is not null or undefined
            if (packageId === null || packageId === undefined) {
                throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling wafRulesGetAWafRule.');
            }
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling wafRulesGetAWafRule.');
            }
            const localVarPath = `/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId)))
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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
         * Fetches WAF rules in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary List WAF rules
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {string} [mode] 
         * @param {XhHksmrTComponentsSchemasIdentifier} [groupId] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {string} [match] 
         * @param {string} [description] 
         * @param {string} [priority] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wafRulesListWafRules: async (packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, mode?: string, groupId?: XhHksmrTComponentsSchemasIdentifier, page?: number, perPage?: number, order?: string, direction?: string, match?: string, description?: string, priority?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            if (packageId === null || packageId === undefined) {
                throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling wafRulesListWafRules.');
            }
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling wafRulesListWafRules.');
            }
            const localVarPath = `/zones/{zone_id}/firewall/waf/packages/{package_id}/rules`
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId)))
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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

            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (match !== undefined) {
                localVarQueryParameter['match'] = match;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
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
         * Updates a WAF rule. You can only update the mode/action of the rule.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Update a WAF rule
         * @param {RulesIdentifierBody3} body 
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wafRulesUpdateAWafRule: async (body: RulesIdentifierBody3, identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling wafRulesUpdateAWafRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling wafRulesUpdateAWafRule.');
            }
            // verify required parameter 'packageId' is not null or undefined
            if (packageId === null || packageId === undefined) {
                throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling wafRulesUpdateAWafRule.');
            }
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling wafRulesUpdateAWafRule.');
            }
            const localVarPath = `/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"package_id"}}`, encodeURIComponent(String(packageId)))
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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
 * WAFRulesApi - functional programming interface
 * @export
 */
export const WAFRulesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Fetches the details of a WAF rule in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Get a WAF rule
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesGetAWafRule(identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<XhHksmrTRuleResponseSingle>>> {
            const localVarAxiosArgs = await WAFRulesApiAxiosParamCreator(configuration).wafRulesGetAWafRule(identifier, packageId, zoneId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches WAF rules in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary List WAF rules
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {string} [mode] 
         * @param {XhHksmrTComponentsSchemasIdentifier} [groupId] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {string} [match] 
         * @param {string} [description] 
         * @param {string} [priority] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesListWafRules(packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, mode?: string, groupId?: XhHksmrTComponentsSchemasIdentifier, page?: number, perPage?: number, order?: string, direction?: string, match?: string, description?: string, priority?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<XhHksmrTRuleResponseCollection>>> {
            const localVarAxiosArgs = await WAFRulesApiAxiosParamCreator(configuration).wafRulesListWafRules(packageId, zoneId, mode, groupId, page, perPage, order, direction, match, description, priority, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a WAF rule. You can only update the mode/action of the rule.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Update a WAF rule
         * @param {RulesIdentifierBody3} body 
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesUpdateAWafRule(body: RulesIdentifierBody3, identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200180>>> {
            const localVarAxiosArgs = await WAFRulesApiAxiosParamCreator(configuration).wafRulesUpdateAWafRule(body, identifier, packageId, zoneId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WAFRulesApi - factory interface
 * @export
 */
export const WAFRulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Fetches the details of a WAF rule in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Get a WAF rule
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesGetAWafRule(identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<XhHksmrTRuleResponseSingle>> {
            return WAFRulesApiFp(configuration).wafRulesGetAWafRule(identifier, packageId, zoneId, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches WAF rules in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary List WAF rules
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {string} [mode] 
         * @param {XhHksmrTComponentsSchemasIdentifier} [groupId] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {string} [match] 
         * @param {string} [description] 
         * @param {string} [priority] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesListWafRules(packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, mode?: string, groupId?: XhHksmrTComponentsSchemasIdentifier, page?: number, perPage?: number, order?: string, direction?: string, match?: string, description?: string, priority?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<XhHksmrTRuleResponseCollection>> {
            return WAFRulesApiFp(configuration).wafRulesListWafRules(packageId, zoneId, mode, groupId, page, perPage, order, direction, match, description, priority, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a WAF rule. You can only update the mode/action of the rule.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
         * @summary Update a WAF rule
         * @param {RulesIdentifierBody3} body 
         * @param {XhHksmrTIdentifier} identifier 
         * @param {XhHksmrTIdentifier} packageId 
         * @param {XhHksmrTSchemasIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wafRulesUpdateAWafRule(body: RulesIdentifierBody3, identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200180>> {
            return WAFRulesApiFp(configuration).wafRulesUpdateAWafRule(body, identifier, packageId, zoneId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WAFRulesApi - object-oriented interface
 * @export
 * @class WAFRulesApi
 * @extends {BaseAPI}
 */
export class WAFRulesApi extends BaseAPI {
    /**
     * Fetches the details of a WAF rule in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
     * @summary Get a WAF rule
     * @param {XhHksmrTIdentifier} identifier 
     * @param {XhHksmrTIdentifier} packageId 
     * @param {XhHksmrTSchemasIdentifier} zoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WAFRulesApi
     */
    public async wafRulesGetAWafRule(identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<XhHksmrTRuleResponseSingle>> {
        return WAFRulesApiFp(this.configuration).wafRulesGetAWafRule(identifier, packageId, zoneId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches WAF rules in a WAF package.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
     * @summary List WAF rules
     * @param {XhHksmrTIdentifier} packageId 
     * @param {XhHksmrTSchemasIdentifier} zoneId 
     * @param {string} [mode] 
     * @param {XhHksmrTComponentsSchemasIdentifier} [groupId] 
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {string} [order] 
     * @param {string} [direction] 
     * @param {string} [match] 
     * @param {string} [description] 
     * @param {string} [priority] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WAFRulesApi
     */
    public async wafRulesListWafRules(packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, mode?: string, groupId?: XhHksmrTComponentsSchemasIdentifier, page?: number, perPage?: number, order?: string, direction?: string, match?: string, description?: string, priority?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<XhHksmrTRuleResponseCollection>> {
        return WAFRulesApiFp(this.configuration).wafRulesListWafRules(packageId, zoneId, mode, groupId, page, perPage, order, direction, match, description, priority, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a WAF rule. You can only update the mode/action of the rule.  **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
     * @summary Update a WAF rule
     * @param {RulesIdentifierBody3} body 
     * @param {XhHksmrTIdentifier} identifier 
     * @param {XhHksmrTIdentifier} packageId 
     * @param {XhHksmrTSchemasIdentifier} zoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WAFRulesApi
     */
    public async wafRulesUpdateAWafRule(body: RulesIdentifierBody3, identifier: XhHksmrTIdentifier, packageId: XhHksmrTIdentifier, zoneId: XhHksmrTSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200180>> {
        return WAFRulesApiFp(this.configuration).wafRulesUpdateAWafRule(body, identifier, packageId, zoneId, options).then((request) => request(this.axios, this.basePath));
    }
}
