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
import { BillSubsApiBillingResponseSingle } from '../models';
import { InlineResponse4XX41 } from '../models';
/**
 * UserBillingProfileApi - axios parameter creator
 * @export
 */
export const UserBillingProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Accesses your billing profile object.
         * @summary Billing Profile Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userBillingProfileDeprecatedBillingProfileDetails: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/billing/profile`;
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
    }
};

/**
 * UserBillingProfileApi - functional programming interface
 * @export
 */
export const UserBillingProfileApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Accesses your billing profile object.
         * @summary Billing Profile Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userBillingProfileDeprecatedBillingProfileDetails(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BillSubsApiBillingResponseSingle>>> {
            const localVarAxiosArgs = await UserBillingProfileApiAxiosParamCreator(configuration).userBillingProfileDeprecatedBillingProfileDetails(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserBillingProfileApi - factory interface
 * @export
 */
export const UserBillingProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Accesses your billing profile object.
         * @summary Billing Profile Details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userBillingProfileDeprecatedBillingProfileDetails(options?: AxiosRequestConfig): Promise<AxiosResponse<BillSubsApiBillingResponseSingle>> {
            return UserBillingProfileApiFp(configuration).userBillingProfileDeprecatedBillingProfileDetails(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserBillingProfileApi - object-oriented interface
 * @export
 * @class UserBillingProfileApi
 * @extends {BaseAPI}
 */
export class UserBillingProfileApi extends BaseAPI {
    /**
     * Accesses your billing profile object.
     * @summary Billing Profile Details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserBillingProfileApi
     */
    public async userBillingProfileDeprecatedBillingProfileDetails(options?: AxiosRequestConfig) : Promise<AxiosResponse<BillSubsApiBillingResponseSingle>> {
        return UserBillingProfileApiFp(this.configuration).userBillingProfileDeprecatedBillingProfileDetails(options).then((request) => request(this.axios, this.basePath));
    }
}