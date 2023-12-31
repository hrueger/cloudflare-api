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
import { InlineResponse4XX358 } from '../models';
import { Tm1HTKEcIdentifier } from '../models';
import { Tm1HTKEcSeat } from '../models';
import { Tm1HTKEcSeatsComponentsSchemasResponseCollection } from '../models';
/**
 * ZeroTrustSeatsApi - axios parameter creator
 * @export
 */
export const ZeroTrustSeatsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
         * @summary Update a user seat
         * @param {Array<Tm1HTKEcSeat>} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zeroTrustSeatsUpdateAUserSeat: async (body: Array<Tm1HTKEcSeat>, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling zeroTrustSeatsUpdateAUserSeat.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling zeroTrustSeatsUpdateAUserSeat.');
            }
            const localVarPath = `/accounts/{identifier}/access/seats`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
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
 * ZeroTrustSeatsApi - functional programming interface
 * @export
 */
export const ZeroTrustSeatsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
         * @summary Update a user seat
         * @param {Array<Tm1HTKEcSeat>} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustSeatsUpdateAUserSeat(body: Array<Tm1HTKEcSeat>, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcSeatsComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await ZeroTrustSeatsApiAxiosParamCreator(configuration).zeroTrustSeatsUpdateAUserSeat(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZeroTrustSeatsApi - factory interface
 * @export
 */
export const ZeroTrustSeatsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
         * @summary Update a user seat
         * @param {Array<Tm1HTKEcSeat>} body 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zeroTrustSeatsUpdateAUserSeat(body: Array<Tm1HTKEcSeat>, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcSeatsComponentsSchemasResponseCollection>> {
            return ZeroTrustSeatsApiFp(configuration).zeroTrustSeatsUpdateAUserSeat(body, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZeroTrustSeatsApi - object-oriented interface
 * @export
 * @class ZeroTrustSeatsApi
 * @extends {BaseAPI}
 */
export class ZeroTrustSeatsApi extends BaseAPI {
    /**
     * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
     * @summary Update a user seat
     * @param {Array<Tm1HTKEcSeat>} body 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZeroTrustSeatsApi
     */
    public async zeroTrustSeatsUpdateAUserSeat(body: Array<Tm1HTKEcSeat>, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcSeatsComponentsSchemasResponseCollection>> {
        return ZeroTrustSeatsApiFp(this.configuration).zeroTrustSeatsUpdateAUserSeat(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
