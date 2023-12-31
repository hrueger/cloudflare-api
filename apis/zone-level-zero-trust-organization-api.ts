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
import { AccessOrganizationsBody2 } from '../models';
import { AccessOrganizationsBody3 } from '../models';
import { InlineResponse4XX383 } from '../models';
import { InlineResponse4xx108 } from '../models';
import { OrganizationsRevokeUserBody1 } from '../models';
import { Tm1HTKEcEmptyResponse } from '../models';
import { Tm1HTKEcIdentifier } from '../models';
import { Tm1HTKEcOrganizationsComponentsSchemasSingleResponse } from '../models';
/**
 * ZoneLevelZeroTrustOrganizationApi - axios parameter creator
 * @export
 */
export const ZoneLevelZeroTrustOrganizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody3} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization: async (body: AccessOrganizationsBody3, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization.');
            }
            const localVarPath = `/zones/{identifier}/access/organizations`
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
         * Returns the configuration for your Zero Trust organization.
         * @summary Get your Zero Trust organization
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization: async (identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization.');
            }
            const localVarPath = `/zones/{identifier}/access/organizations`
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
         * Revokes a user's access across all applications.
         * @summary Revoke all Access tokens for a user
         * @param {OrganizationsRevokeUserBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser: async (body: OrganizationsRevokeUserBody1, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser.');
            }
            const localVarPath = `/zones/{identifier}/access/organizations/revoke_user`
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
         * Updates the configuration for your Zero Trust organization.
         * @summary Update your Zero Trust organization
         * @param {AccessOrganizationsBody2} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization: async (body: AccessOrganizationsBody2, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization.');
            }
            const localVarPath = `/zones/{identifier}/access/organizations`
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
 * ZoneLevelZeroTrustOrganizationApi - functional programming interface
 * @export
 */
export const ZoneLevelZeroTrustOrganizationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody3} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody3, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZoneLevelZeroTrustOrganizationApiAxiosParamCreator(configuration).zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns the configuration for your Zero Trust organization.
         * @summary Get your Zero Trust organization
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZoneLevelZeroTrustOrganizationApiAxiosParamCreator(configuration).zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Revokes a user's access across all applications.
         * @summary Revoke all Access tokens for a user
         * @param {OrganizationsRevokeUserBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcEmptyResponse>>> {
            const localVarAxiosArgs = await ZoneLevelZeroTrustOrganizationApiAxiosParamCreator(configuration).zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates the configuration for your Zero Trust organization.
         * @summary Update your Zero Trust organization
         * @param {AccessOrganizationsBody2} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody2, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await ZoneLevelZeroTrustOrganizationApiAxiosParamCreator(configuration).zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZoneLevelZeroTrustOrganizationApi - factory interface
 * @export
 */
export const ZoneLevelZeroTrustOrganizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody3} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody3, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
            return ZoneLevelZeroTrustOrganizationApiFp(configuration).zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the configuration for your Zero Trust organization.
         * @summary Get your Zero Trust organization
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
            return ZoneLevelZeroTrustOrganizationApiFp(configuration).zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes a user's access across all applications.
         * @summary Revoke all Access tokens for a user
         * @param {OrganizationsRevokeUserBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcEmptyResponse>> {
            return ZoneLevelZeroTrustOrganizationApiFp(configuration).zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration for your Zero Trust organization.
         * @summary Update your Zero Trust organization
         * @param {AccessOrganizationsBody2} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody2, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
            return ZoneLevelZeroTrustOrganizationApiFp(configuration).zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZoneLevelZeroTrustOrganizationApi - object-oriented interface
 * @export
 * @class ZoneLevelZeroTrustOrganizationApi
 * @extends {BaseAPI}
 */
export class ZoneLevelZeroTrustOrganizationApi extends BaseAPI {
    /**
     * Sets up a Zero Trust organization for your account.
     * @summary Create your Zero Trust organization
     * @param {AccessOrganizationsBody3} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneLevelZeroTrustOrganizationApi
     */
    public async zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody3, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
        return ZoneLevelZeroTrustOrganizationApiFp(this.configuration).zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the configuration for your Zero Trust organization.
     * @summary Get your Zero Trust organization
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneLevelZeroTrustOrganizationApi
     */
    public async zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
        return ZoneLevelZeroTrustOrganizationApiFp(this.configuration).zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Revokes a user's access across all applications.
     * @summary Revoke all Access tokens for a user
     * @param {OrganizationsRevokeUserBody1} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneLevelZeroTrustOrganizationApi
     */
    public async zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcEmptyResponse>> {
        return ZoneLevelZeroTrustOrganizationApiFp(this.configuration).zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates the configuration for your Zero Trust organization.
     * @summary Update your Zero Trust organization
     * @param {AccessOrganizationsBody2} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneLevelZeroTrustOrganizationApi
     */
    public async zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody2, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcOrganizationsComponentsSchemasSingleResponse>> {
        return ZoneLevelZeroTrustOrganizationApiFp(this.configuration).zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
