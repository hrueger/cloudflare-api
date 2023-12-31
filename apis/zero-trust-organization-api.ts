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
import { AccessOrganizationsBody } from '../models';
import { AccessOrganizationsBody1 } from '../models';
import { InlineResponse4XX357 } from '../models';
import { InlineResponse4xx108 } from '../models';
import { OrganizationsRevokeUserBody } from '../models';
import { Tm1HTKEcEmptyResponse } from '../models';
import { Tm1HTKEcIdentifier } from '../models';
import { Tm1HTKEcSingleResponse } from '../models';
/**
 * ZeroTrustOrganizationApi - axios parameter creator
 * @export
 */
export const ZeroTrustOrganizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustOrganizationCreateYourZeroTrustOrganization: async (body: AccessOrganizationsBody1, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustOrganizationCreateYourZeroTrustOrganization.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustOrganizationCreateYourZeroTrustOrganization.');
            }
            const localVarPath = `/accounts/{identifier}/access/organizations`
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
        zeroTrustOrganizationGetYourZeroTrustOrganization: async (identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustOrganizationGetYourZeroTrustOrganization.');
            }
            const localVarPath = `/accounts/{identifier}/access/organizations`
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
         * @param {OrganizationsRevokeUserBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustOrganizationRevokeAllAccessTokensForAUser: async (body: OrganizationsRevokeUserBody, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustOrganizationRevokeAllAccessTokensForAUser.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustOrganizationRevokeAllAccessTokensForAUser.');
            }
            const localVarPath = `/accounts/{identifier}/access/organizations/revoke_user`
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
         * @param {AccessOrganizationsBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustOrganizationUpdateYourZeroTrustOrganization: async (body: AccessOrganizationsBody, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustOrganizationUpdateYourZeroTrustOrganization.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustOrganizationUpdateYourZeroTrustOrganization.');
            }
            const localVarPath = `/accounts/{identifier}/access/organizations`
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
 * ZeroTrustOrganizationApi - functional programming interface
 * @export
 */
export const ZeroTrustOrganizationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustOrganizationApiAxiosParamCreator(configuration).zeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options);
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
        async zeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustOrganizationApiAxiosParamCreator(configuration).zeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Revokes a user's access across all applications.
         * @summary Revoke all Access tokens for a user
         * @param {OrganizationsRevokeUserBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcEmptyResponse>>> {
            const localVarAxiosArgs = await ZeroTrustOrganizationApiAxiosParamCreator(configuration).zeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates the configuration for your Zero Trust organization.
         * @summary Update your Zero Trust organization
         * @param {AccessOrganizationsBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcSingleResponse>>> {
            const localVarAxiosArgs = await ZeroTrustOrganizationApiAxiosParamCreator(configuration).zeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZeroTrustOrganizationApi - factory interface
 * @export
 */
export const ZeroTrustOrganizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Sets up a Zero Trust organization for your account.
         * @summary Create your Zero Trust organization
         * @param {AccessOrganizationsBody1} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
            return ZeroTrustOrganizationApiFp(configuration).zeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the configuration for your Zero Trust organization.
         * @summary Get your Zero Trust organization
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
            return ZeroTrustOrganizationApiFp(configuration).zeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes a user's access across all applications.
         * @summary Revoke all Access tokens for a user
         * @param {OrganizationsRevokeUserBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcEmptyResponse>> {
            return ZeroTrustOrganizationApiFp(configuration).zeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the configuration for your Zero Trust organization.
         * @summary Update your Zero Trust organization
         * @param {AccessOrganizationsBody} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
            return ZeroTrustOrganizationApiFp(configuration).zeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZeroTrustOrganizationApi - object-oriented interface
 * @export
 * @class ZeroTrustOrganizationApi
 * @extends {BaseAPI}
 */
export class ZeroTrustOrganizationApi extends BaseAPI {
    /**
     * Sets up a Zero Trust organization for your account.
     * @summary Create your Zero Trust organization
     * @param {AccessOrganizationsBody1} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustOrganizationApi
     */
    public async zeroTrustOrganizationCreateYourZeroTrustOrganization(body: AccessOrganizationsBody1, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
        return ZeroTrustOrganizationApiFp(this.configuration).zeroTrustOrganizationCreateYourZeroTrustOrganization(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the configuration for your Zero Trust organization.
     * @summary Get your Zero Trust organization
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustOrganizationApi
     */
    public async zeroTrustOrganizationGetYourZeroTrustOrganization(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
        return ZeroTrustOrganizationApiFp(this.configuration).zeroTrustOrganizationGetYourZeroTrustOrganization(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Revokes a user's access across all applications.
     * @summary Revoke all Access tokens for a user
     * @param {OrganizationsRevokeUserBody} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustOrganizationApi
     */
    public async zeroTrustOrganizationRevokeAllAccessTokensForAUser(body: OrganizationsRevokeUserBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcEmptyResponse>> {
        return ZeroTrustOrganizationApiFp(this.configuration).zeroTrustOrganizationRevokeAllAccessTokensForAUser(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates the configuration for your Zero Trust organization.
     * @summary Update your Zero Trust organization
     * @param {AccessOrganizationsBody} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustOrganizationApi
     */
    public async zeroTrustOrganizationUpdateYourZeroTrustOrganization(body: AccessOrganizationsBody, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcSingleResponse>> {
        return ZeroTrustOrganizationApiFp(this.configuration).zeroTrustOrganizationUpdateYourZeroTrustOrganization(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
