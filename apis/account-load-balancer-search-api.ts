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
import { InlineResponse2007 } from '../models';
import { InlineResponse4XX53 } from '../models';
import { VXFDQCwXComponentsSchemasIdentifier } from '../models';
import { VXFDQCwXSearchParams } from '../models';
/**
 * AccountLoadBalancerSearchApi - axios parameter creator
 * @export
 */
export const AccountLoadBalancerSearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for Load Balancing resources.
         * @summary Search Resources
         * @param {VXFDQCwXComponentsSchemasIdentifier} accountIdentifier 
         * @param {VXFDQCwXSearchParams} [searchParams] 
         * @param {any} [page] 
         * @param {any} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountLoadBalancerSearchSearchResources: async (accountIdentifier: VXFDQCwXComponentsSchemasIdentifier, searchParams?: VXFDQCwXSearchParams, page?: any, perPage?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountLoadBalancerSearchSearchResources.');
            }
            const localVarPath = `/accounts/{account_identifier}/load_balancers/search`
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

            if (searchParams !== undefined) {
                localVarQueryParameter['search_params'] = searchParams;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
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
 * AccountLoadBalancerSearchApi - functional programming interface
 * @export
 */
export const AccountLoadBalancerSearchApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for Load Balancing resources.
         * @summary Search Resources
         * @param {VXFDQCwXComponentsSchemasIdentifier} accountIdentifier 
         * @param {VXFDQCwXSearchParams} [searchParams] 
         * @param {any} [page] 
         * @param {any} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountLoadBalancerSearchSearchResources(accountIdentifier: VXFDQCwXComponentsSchemasIdentifier, searchParams?: VXFDQCwXSearchParams, page?: any, perPage?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2007>>> {
            const localVarAxiosArgs = await AccountLoadBalancerSearchApiAxiosParamCreator(configuration).accountLoadBalancerSearchSearchResources(accountIdentifier, searchParams, page, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountLoadBalancerSearchApi - factory interface
 * @export
 */
export const AccountLoadBalancerSearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for Load Balancing resources.
         * @summary Search Resources
         * @param {VXFDQCwXComponentsSchemasIdentifier} accountIdentifier 
         * @param {VXFDQCwXSearchParams} [searchParams] 
         * @param {any} [page] 
         * @param {any} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountLoadBalancerSearchSearchResources(accountIdentifier: VXFDQCwXComponentsSchemasIdentifier, searchParams?: VXFDQCwXSearchParams, page?: any, perPage?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2007>> {
            return AccountLoadBalancerSearchApiFp(configuration).accountLoadBalancerSearchSearchResources(accountIdentifier, searchParams, page, perPage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountLoadBalancerSearchApi - object-oriented interface
 * @export
 * @class AccountLoadBalancerSearchApi
 * @extends {BaseAPI}
 */
export class AccountLoadBalancerSearchApi extends BaseAPI {
    /**
     * Search for Load Balancing resources.
     * @summary Search Resources
     * @param {VXFDQCwXComponentsSchemasIdentifier} accountIdentifier 
     * @param {VXFDQCwXSearchParams} [searchParams] 
     * @param {any} [page] 
     * @param {any} [perPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountLoadBalancerSearchApi
     */
    public async accountLoadBalancerSearchSearchResources(accountIdentifier: VXFDQCwXComponentsSchemasIdentifier, searchParams?: VXFDQCwXSearchParams, page?: any, perPage?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2007>> {
        return AccountLoadBalancerSearchApiFp(this.configuration).accountLoadBalancerSearchSearchResources(accountIdentifier, searchParams, page, perPage, options).then((request) => request(this.axios, this.basePath));
    }
}