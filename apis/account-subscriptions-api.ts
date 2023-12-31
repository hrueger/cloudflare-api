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
import { BillSubsApiAccountSubscriptionResponseCollection } from '../models';
import { BillSubsApiAccountSubscriptionResponseSingle } from '../models';
import { BillSubsApiIdentifier } from '../models';
import { BillSubsApiSchemasIdentifier } from '../models';
import { BillSubsApiSubscriptionV2 } from '../models';
import { InlineResponse20011 } from '../models';
import { InlineResponse4XX55 } from '../models';
import { InlineResponse4XX56 } from '../models';
import { InlineResponse4XX57 } from '../models';
/**
 * AccountSubscriptionsApi - axios parameter creator
 * @export
 */
export const AccountSubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates an account subscription.
         * @summary Create Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSubscriptionsCreateSubscription: async (body: BillSubsApiSubscriptionV2, accountIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accountSubscriptionsCreateSubscription.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountSubscriptionsCreateSubscription.');
            }
            const localVarPath = `/accounts/{account_identifier}/subscriptions`
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
         * Deletes an account's subscription.
         * @summary Delete Subscription
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSubscriptionsDeleteSubscription: async (subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'subscriptionIdentifier' is not null or undefined
            if (subscriptionIdentifier === null || subscriptionIdentifier === undefined) {
                throw new RequiredError('subscriptionIdentifier','Required parameter subscriptionIdentifier was null or undefined when calling accountSubscriptionsDeleteSubscription.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountSubscriptionsDeleteSubscription.');
            }
            const localVarPath = `/accounts/{account_identifier}/subscriptions/{subscription_identifier}`
                .replace(`{${"subscription_identifier"}}`, encodeURIComponent(String(subscriptionIdentifier)))
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
         * Lists all of an account's subscriptions.
         * @summary List Subscriptions
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSubscriptionsListSubscriptions: async (accountIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountSubscriptionsListSubscriptions.');
            }
            const localVarPath = `/accounts/{account_identifier}/subscriptions`
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
         * Updates an account subscription.
         * @summary Update Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSubscriptionsUpdateSubscription: async (body: BillSubsApiSubscriptionV2, subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accountSubscriptionsUpdateSubscription.');
            }
            // verify required parameter 'subscriptionIdentifier' is not null or undefined
            if (subscriptionIdentifier === null || subscriptionIdentifier === undefined) {
                throw new RequiredError('subscriptionIdentifier','Required parameter subscriptionIdentifier was null or undefined when calling accountSubscriptionsUpdateSubscription.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountSubscriptionsUpdateSubscription.');
            }
            const localVarPath = `/accounts/{account_identifier}/subscriptions/{subscription_identifier}`
                .replace(`{${"subscription_identifier"}}`, encodeURIComponent(String(subscriptionIdentifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
 * AccountSubscriptionsApi - functional programming interface
 * @export
 */
export const AccountSubscriptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates an account subscription.
         * @summary Create Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsCreateSubscription(body: BillSubsApiSubscriptionV2, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>>> {
            const localVarAxiosArgs = await AccountSubscriptionsApiAxiosParamCreator(configuration).accountSubscriptionsCreateSubscription(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes an account's subscription.
         * @summary Delete Subscription
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsDeleteSubscription(subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20011>>> {
            const localVarAxiosArgs = await AccountSubscriptionsApiAxiosParamCreator(configuration).accountSubscriptionsDeleteSubscription(subscriptionIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all of an account's subscriptions.
         * @summary List Subscriptions
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsListSubscriptions(accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseCollection>>> {
            const localVarAxiosArgs = await AccountSubscriptionsApiAxiosParamCreator(configuration).accountSubscriptionsListSubscriptions(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates an account subscription.
         * @summary Update Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsUpdateSubscription(body: BillSubsApiSubscriptionV2, subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>>> {
            const localVarAxiosArgs = await AccountSubscriptionsApiAxiosParamCreator(configuration).accountSubscriptionsUpdateSubscription(body, subscriptionIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountSubscriptionsApi - factory interface
 * @export
 */
export const AccountSubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates an account subscription.
         * @summary Create Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsCreateSubscription(body: BillSubsApiSubscriptionV2, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>> {
            return AccountSubscriptionsApiFp(configuration).accountSubscriptionsCreateSubscription(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an account's subscription.
         * @summary Delete Subscription
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsDeleteSubscription(subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20011>> {
            return AccountSubscriptionsApiFp(configuration).accountSubscriptionsDeleteSubscription(subscriptionIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all of an account's subscriptions.
         * @summary List Subscriptions
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsListSubscriptions(accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseCollection>> {
            return AccountSubscriptionsApiFp(configuration).accountSubscriptionsListSubscriptions(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an account subscription.
         * @summary Update Subscription
         * @param {BillSubsApiSubscriptionV2} body 
         * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
         * @param {BillSubsApiIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSubscriptionsUpdateSubscription(body: BillSubsApiSubscriptionV2, subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>> {
            return AccountSubscriptionsApiFp(configuration).accountSubscriptionsUpdateSubscription(body, subscriptionIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountSubscriptionsApi - object-oriented interface
 * @export
 * @class AccountSubscriptionsApi
 * @extends {BaseAPI}
 */
export class AccountSubscriptionsApi extends BaseAPI {
    /**
     * Creates an account subscription.
     * @summary Create Subscription
     * @param {BillSubsApiSubscriptionV2} body 
     * @param {BillSubsApiIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSubscriptionsApi
     */
    public async accountSubscriptionsCreateSubscription(body: BillSubsApiSubscriptionV2, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>> {
        return AccountSubscriptionsApiFp(this.configuration).accountSubscriptionsCreateSubscription(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes an account's subscription.
     * @summary Delete Subscription
     * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
     * @param {BillSubsApiIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSubscriptionsApi
     */
    public async accountSubscriptionsDeleteSubscription(subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20011>> {
        return AccountSubscriptionsApiFp(this.configuration).accountSubscriptionsDeleteSubscription(subscriptionIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists all of an account's subscriptions.
     * @summary List Subscriptions
     * @param {BillSubsApiIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSubscriptionsApi
     */
    public async accountSubscriptionsListSubscriptions(accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseCollection>> {
        return AccountSubscriptionsApiFp(this.configuration).accountSubscriptionsListSubscriptions(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an account subscription.
     * @summary Update Subscription
     * @param {BillSubsApiSubscriptionV2} body 
     * @param {BillSubsApiSchemasIdentifier} subscriptionIdentifier 
     * @param {BillSubsApiIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSubscriptionsApi
     */
    public async accountSubscriptionsUpdateSubscription(body: BillSubsApiSubscriptionV2, subscriptionIdentifier: BillSubsApiSchemasIdentifier, accountIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<BillSubsApiAccountSubscriptionResponseSingle>> {
        return AccountSubscriptionsApiFp(this.configuration).accountSubscriptionsUpdateSubscription(body, subscriptionIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
