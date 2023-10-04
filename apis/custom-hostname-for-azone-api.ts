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
import { CustomHostnamesIdentifierBody } from '../models';
import { InlineResponse20014 } from '../models';
import { InlineResponse4XX92 } from '../models';
import { InlineResponse4XX93 } from '../models';
import { InlineResponse4XX94 } from '../models';
import { KNYM3FIhCustomHostnameResponseCollection } from '../models';
import { KNYM3FIhCustomHostnameResponseSingle } from '../models';
import { KNYM3FIhIdentifier } from '../models';
import { ZoneIdentifierCustomHostnamesBody } from '../models';
/**
 * CustomHostnameForAZoneApi - axios parameter creator
 * @export
 */
export const CustomHostnameForAZoneApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).
         * @summary Create Custom Hostname
         * @param {ZoneIdentifierCustomHostnamesBody} body 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customHostnameForAZoneCreateCustomHostname: async (body: ZoneIdentifierCustomHostnamesBody, zoneIdentifier: KNYM3FIhIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling customHostnameForAZoneCreateCustomHostname.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customHostnameForAZoneCreateCustomHostname.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_hostnames`
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * 
         * @summary Custom Hostname Details
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customHostnameForAZoneCustomHostnameDetails: async (identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling customHostnameForAZoneCustomHostnameDetails.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customHostnameForAZoneCustomHostnameDetails.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_hostnames/{identifier}`
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
         * 
         * @summary Delete Custom Hostname (and any issued SSL certificates)
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates: async (identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_hostnames/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'.
         * @summary Edit Custom Hostname
         * @param {CustomHostnamesIdentifierBody} body 
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customHostnameForAZoneEditCustomHostname: async (body: CustomHostnamesIdentifierBody, identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling customHostnameForAZoneEditCustomHostname.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling customHostnameForAZoneEditCustomHostname.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customHostnameForAZoneEditCustomHostname.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_hostnames/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
        /**
         * List, search, sort, and filter all of your custom hostnames.
         * @summary List Custom Hostnames
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {string} [hostname] 
         * @param {string} [id] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {number} [ssl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        customHostnameForAZoneListCustomHostnames: async (zoneIdentifier: KNYM3FIhIdentifier, hostname?: string, id?: string, page?: number, perPage?: number, order?: string, direction?: string, ssl?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling customHostnameForAZoneListCustomHostnames.');
            }
            const localVarPath = `/zones/{zone_identifier}/custom_hostnames`
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

            if (hostname !== undefined) {
                localVarQueryParameter['hostname'] = hostname;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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

            if (ssl !== undefined) {
                localVarQueryParameter['ssl'] = ssl;
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
 * CustomHostnameForAZoneApi - functional programming interface
 * @export
 */
export const CustomHostnameForAZoneApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).
         * @summary Create Custom Hostname
         * @param {ZoneIdentifierCustomHostnamesBody} body 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneCreateCustomHostname(body: ZoneIdentifierCustomHostnamesBody, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>>> {
            const localVarAxiosArgs = await CustomHostnameForAZoneApiAxiosParamCreator(configuration).customHostnameForAZoneCreateCustomHostname(body, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Custom Hostname Details
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneCustomHostnameDetails(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>>> {
            const localVarAxiosArgs = await CustomHostnameForAZoneApiAxiosParamCreator(configuration).customHostnameForAZoneCustomHostnameDetails(identifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete Custom Hostname (and any issued SSL certificates)
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20014>>> {
            const localVarAxiosArgs = await CustomHostnameForAZoneApiAxiosParamCreator(configuration).customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'.
         * @summary Edit Custom Hostname
         * @param {CustomHostnamesIdentifierBody} body 
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneEditCustomHostname(body: CustomHostnamesIdentifierBody, identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>>> {
            const localVarAxiosArgs = await CustomHostnameForAZoneApiAxiosParamCreator(configuration).customHostnameForAZoneEditCustomHostname(body, identifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List, search, sort, and filter all of your custom hostnames.
         * @summary List Custom Hostnames
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {string} [hostname] 
         * @param {string} [id] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {number} [ssl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneListCustomHostnames(zoneIdentifier: KNYM3FIhIdentifier, hostname?: string, id?: string, page?: number, perPage?: number, order?: string, direction?: string, ssl?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseCollection>>> {
            const localVarAxiosArgs = await CustomHostnameForAZoneApiAxiosParamCreator(configuration).customHostnameForAZoneListCustomHostnames(zoneIdentifier, hostname, id, page, perPage, order, direction, ssl, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CustomHostnameForAZoneApi - factory interface
 * @export
 */
export const CustomHostnameForAZoneApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).
         * @summary Create Custom Hostname
         * @param {ZoneIdentifierCustomHostnamesBody} body 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneCreateCustomHostname(body: ZoneIdentifierCustomHostnamesBody, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
            return CustomHostnameForAZoneApiFp(configuration).customHostnameForAZoneCreateCustomHostname(body, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Custom Hostname Details
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneCustomHostnameDetails(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
            return CustomHostnameForAZoneApiFp(configuration).customHostnameForAZoneCustomHostnameDetails(identifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Custom Hostname (and any issued SSL certificates)
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20014>> {
            return CustomHostnameForAZoneApiFp(configuration).customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'.
         * @summary Edit Custom Hostname
         * @param {CustomHostnamesIdentifierBody} body 
         * @param {KNYM3FIhIdentifier} identifier 
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneEditCustomHostname(body: CustomHostnamesIdentifierBody, identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
            return CustomHostnameForAZoneApiFp(configuration).customHostnameForAZoneEditCustomHostname(body, identifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * List, search, sort, and filter all of your custom hostnames.
         * @summary List Custom Hostnames
         * @param {KNYM3FIhIdentifier} zoneIdentifier 
         * @param {string} [hostname] 
         * @param {string} [id] 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {string} [order] 
         * @param {string} [direction] 
         * @param {number} [ssl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async customHostnameForAZoneListCustomHostnames(zoneIdentifier: KNYM3FIhIdentifier, hostname?: string, id?: string, page?: number, perPage?: number, order?: string, direction?: string, ssl?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseCollection>> {
            return CustomHostnameForAZoneApiFp(configuration).customHostnameForAZoneListCustomHostnames(zoneIdentifier, hostname, id, page, perPage, order, direction, ssl, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomHostnameForAZoneApi - object-oriented interface
 * @export
 * @class CustomHostnameForAZoneApi
 * @extends {BaseAPI}
 */
export class CustomHostnameForAZoneApi extends BaseAPI {
    /**
     * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).
     * @summary Create Custom Hostname
     * @param {ZoneIdentifierCustomHostnamesBody} body 
     * @param {KNYM3FIhIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomHostnameForAZoneApi
     */
    public async customHostnameForAZoneCreateCustomHostname(body: ZoneIdentifierCustomHostnamesBody, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
        return CustomHostnameForAZoneApiFp(this.configuration).customHostnameForAZoneCreateCustomHostname(body, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Custom Hostname Details
     * @param {KNYM3FIhIdentifier} identifier 
     * @param {KNYM3FIhIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomHostnameForAZoneApi
     */
    public async customHostnameForAZoneCustomHostnameDetails(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
        return CustomHostnameForAZoneApiFp(this.configuration).customHostnameForAZoneCustomHostnameDetails(identifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete Custom Hostname (and any issued SSL certificates)
     * @param {KNYM3FIhIdentifier} identifier 
     * @param {KNYM3FIhIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomHostnameForAZoneApi
     */
    public async customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20014>> {
        return CustomHostnameForAZoneApiFp(this.configuration).customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates(identifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'.
     * @summary Edit Custom Hostname
     * @param {CustomHostnamesIdentifierBody} body 
     * @param {KNYM3FIhIdentifier} identifier 
     * @param {KNYM3FIhIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomHostnameForAZoneApi
     */
    public async customHostnameForAZoneEditCustomHostname(body: CustomHostnamesIdentifierBody, identifier: KNYM3FIhIdentifier, zoneIdentifier: KNYM3FIhIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseSingle>> {
        return CustomHostnameForAZoneApiFp(this.configuration).customHostnameForAZoneEditCustomHostname(body, identifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List, search, sort, and filter all of your custom hostnames.
     * @summary List Custom Hostnames
     * @param {KNYM3FIhIdentifier} zoneIdentifier 
     * @param {string} [hostname] 
     * @param {string} [id] 
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {string} [order] 
     * @param {string} [direction] 
     * @param {number} [ssl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomHostnameForAZoneApi
     */
    public async customHostnameForAZoneListCustomHostnames(zoneIdentifier: KNYM3FIhIdentifier, hostname?: string, id?: string, page?: number, perPage?: number, order?: string, direction?: string, ssl?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<KNYM3FIhCustomHostnameResponseCollection>> {
        return CustomHostnameForAZoneApiFp(this.configuration).customHostnameForAZoneListCustomHostnames(zoneIdentifier, hostname, id, page, perPage, order, direction, ssl, options).then((request) => request(this.axios, this.basePath));
    }
}
