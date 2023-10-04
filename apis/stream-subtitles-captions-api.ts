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
import { InlineResponse200161 } from '../models';
import { JOh1h9zQApiResponseCommonFailure } from '../models';
import { JOh1h9zQIdentifier } from '../models';
import { JOh1h9zQLanguage } from '../models';
import { JOh1h9zQLanguageResponseCollection } from '../models';
import { JOh1h9zQLanguageResponseSingle } from '../models';
import { JOh1h9zQSchemasIdentifier } from '../models';
/**
 * StreamSubtitlesCaptionsApi - axios parameter creator
 * @export
 */
export const StreamSubtitlesCaptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Removes the captions or subtitles from a video.
         * @summary Delete captions or subtitles
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSubtitlesCaptionsDeleteCaptionsOrSubtitles: async (language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'language' is not null or undefined
            if (language === null || language === undefined) {
                throw new RequiredError('language','Required parameter language was null or undefined when calling streamSubtitlesCaptionsDeleteCaptionsOrSubtitles.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling streamSubtitlesCaptionsDeleteCaptionsOrSubtitles.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling streamSubtitlesCaptionsDeleteCaptionsOrSubtitles.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/captions/{language}`
                .replace(`{${"language"}}`, encodeURIComponent(String(language)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
         * Lists the available captions or subtitles for a specific video.
         * @summary List captions or subtitles
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSubtitlesCaptionsListCaptionsOrSubtitles: async (identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling streamSubtitlesCaptionsListCaptionsOrSubtitles.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling streamSubtitlesCaptionsListCaptionsOrSubtitles.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/captions`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
         * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
         * @summary Upload captions or subtitles
         * @param {string} file 
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm: async (file: string, language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm.');
            }
            // verify required parameter 'language' is not null or undefined
            if (language === null || language === undefined) {
                throw new RequiredError('language','Required parameter language was null or undefined when calling streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/captions/{language}`
                .replace(`{${"language"}}`, encodeURIComponent(String(language)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
            const localVarFormParams = new FormData();

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


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StreamSubtitlesCaptionsApi - functional programming interface
 * @export
 */
export const StreamSubtitlesCaptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Removes the captions or subtitles from a video.
         * @summary Delete captions or subtitles
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200161>>> {
            const localVarAxiosArgs = await StreamSubtitlesCaptionsApiAxiosParamCreator(configuration).streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language, identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists the available captions or subtitles for a specific video.
         * @summary List captions or subtitles
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQLanguageResponseCollection>>> {
            const localVarAxiosArgs = await StreamSubtitlesCaptionsApiAxiosParamCreator(configuration).streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
         * @summary Upload captions or subtitles
         * @param {string} file 
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file: string, language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQLanguageResponseSingle>>> {
            const localVarAxiosArgs = await StreamSubtitlesCaptionsApiAxiosParamCreator(configuration).streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file, language, identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StreamSubtitlesCaptionsApi - factory interface
 * @export
 */
export const StreamSubtitlesCaptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Removes the captions or subtitles from a video.
         * @summary Delete captions or subtitles
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200161>> {
            return StreamSubtitlesCaptionsApiFp(configuration).streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language, identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists the available captions or subtitles for a specific video.
         * @summary List captions or subtitles
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQLanguageResponseCollection>> {
            return StreamSubtitlesCaptionsApiFp(configuration).streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
         * @summary Upload captions or subtitles
         * @param {string} file 
         * @param {JOh1h9zQLanguage} language 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file: string, language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQLanguageResponseSingle>> {
            return StreamSubtitlesCaptionsApiFp(configuration).streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file, language, identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StreamSubtitlesCaptionsApi - object-oriented interface
 * @export
 * @class StreamSubtitlesCaptionsApi
 * @extends {BaseAPI}
 */
export class StreamSubtitlesCaptionsApi extends BaseAPI {
    /**
     * Removes the captions or subtitles from a video.
     * @summary Delete captions or subtitles
     * @param {JOh1h9zQLanguage} language 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSubtitlesCaptionsApi
     */
    public async streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200161>> {
        return StreamSubtitlesCaptionsApiFp(this.configuration).streamSubtitlesCaptionsDeleteCaptionsOrSubtitles(language, identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists the available captions or subtitles for a specific video.
     * @summary List captions or subtitles
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSubtitlesCaptionsApi
     */
    public async streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQLanguageResponseCollection>> {
        return StreamSubtitlesCaptionsApiFp(this.configuration).streamSubtitlesCaptionsListCaptionsOrSubtitles(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
     * @summary Upload captions or subtitles
     * @param {string} file 
     * @param {JOh1h9zQLanguage} language 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {JOh1h9zQSchemasIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamSubtitlesCaptionsApi
     */
    public async streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file: string, language: JOh1h9zQLanguage, identifier: JOh1h9zQIdentifier, accountIdentifier: JOh1h9zQSchemasIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQLanguageResponseSingle>> {
        return StreamSubtitlesCaptionsApiFp(this.configuration).streamSubtitlesCaptionsUploadCaptionsOrSubtitlesForm(file, language, identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}