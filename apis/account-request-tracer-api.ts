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
import { InlineResponse2008 } from '../models';
import { InlineResponse4XX54 } from '../models';
import { QGjlCv4sIdentifier } from '../models';
import { RequesttracerTraceBody } from '../models';
/**
 * AccountRequestTracerApi - axios parameter creator
 * @export
 */
export const AccountRequestTracerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Request Trace
         * @param {RequesttracerTraceBody} body 
         * @param {QGjlCv4sIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountRequestTracerRequestTrace: async (body: RequesttracerTraceBody, accountIdentifier: QGjlCv4sIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling accountRequestTracerRequestTrace.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling accountRequestTracerRequestTrace.');
            }
            const localVarPath = `/accounts/{account_identifier}/request-tracer/trace`
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
    }
};

/**
 * AccountRequestTracerApi - functional programming interface
 * @export
 */
export const AccountRequestTracerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Request Trace
         * @param {RequesttracerTraceBody} body 
         * @param {QGjlCv4sIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountRequestTracerRequestTrace(body: RequesttracerTraceBody, accountIdentifier: QGjlCv4sIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2008>>> {
            const localVarAxiosArgs = await AccountRequestTracerApiAxiosParamCreator(configuration).accountRequestTracerRequestTrace(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountRequestTracerApi - factory interface
 * @export
 */
export const AccountRequestTracerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Request Trace
         * @param {RequesttracerTraceBody} body 
         * @param {QGjlCv4sIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountRequestTracerRequestTrace(body: RequesttracerTraceBody, accountIdentifier: QGjlCv4sIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2008>> {
            return AccountRequestTracerApiFp(configuration).accountRequestTracerRequestTrace(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountRequestTracerApi - object-oriented interface
 * @export
 * @class AccountRequestTracerApi
 * @extends {BaseAPI}
 */
export class AccountRequestTracerApi extends BaseAPI {
    /**
     * 
     * @summary Request Trace
     * @param {RequesttracerTraceBody} body 
     * @param {QGjlCv4sIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountRequestTracerApi
     */
    public async accountRequestTracerRequestTrace(body: RequesttracerTraceBody, accountIdentifier: QGjlCv4sIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2008>> {
        return AccountRequestTracerApiFp(this.configuration).accountRequestTracerRequestTrace(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
