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
import { E88zkNsDIdentifier } from '../models';
import { InlineResponse20012 } from '../models';
import { InlineResponse4XX73 } from '../models';
/**
 * ClientApi - axios parameter creator
 * @export
 */
export const ClientApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.
         * @summary Rerun the Activation Check
         * @param {E88zkNsDIdentifier} zoneId Zone ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putZonesZoneIdActivationCheck: async (zoneId: E88zkNsDIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling putZonesZoneIdActivationCheck.');
            }
            const localVarPath = `/zones/{zone_id}/activation_check`
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
 * ClientApi - functional programming interface
 * @export
 */
export const ClientApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.
         * @summary Rerun the Activation Check
         * @param {E88zkNsDIdentifier} zoneId Zone ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putZonesZoneIdActivationCheck(zoneId: E88zkNsDIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20012>>> {
            const localVarAxiosArgs = await ClientApiAxiosParamCreator(configuration).putZonesZoneIdActivationCheck(zoneId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ClientApi - factory interface
 * @export
 */
export const ClientApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.
         * @summary Rerun the Activation Check
         * @param {E88zkNsDIdentifier} zoneId Zone ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putZonesZoneIdActivationCheck(zoneId: E88zkNsDIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20012>> {
            return ClientApiFp(configuration).putZonesZoneIdActivationCheck(zoneId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientApi - object-oriented interface
 * @export
 * @class ClientApi
 * @extends {BaseAPI}
 */
export class ClientApi extends BaseAPI {
    /**
     * Triggeres a new activation check for a PENDING Zone. This can be triggered every 5 min for paygo/ent customers, every hour for FREE Zones.
     * @summary Rerun the Activation Check
     * @param {E88zkNsDIdentifier} zoneId Zone ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public async putZonesZoneIdActivationCheck(zoneId: E88zkNsDIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20012>> {
        return ClientApiFp(this.configuration).putZonesZoneIdActivationCheck(zoneId, options).then((request) => request(this.axios, this.basePath));
    }
}
