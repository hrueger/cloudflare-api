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
import { JOh1h9zQAccountIdentifier } from '../models';
import { JOh1h9zQAddAudioTrackResponse } from '../models';
import { JOh1h9zQApiResponseCommonFailure } from '../models';
import { JOh1h9zQAudioIdentifier } from '../models';
import { JOh1h9zQCopyAudioTrack } from '../models';
import { JOh1h9zQDeletedResponse } from '../models';
import { JOh1h9zQEditAudioTrack } from '../models';
import { JOh1h9zQIdentifier } from '../models';
import { JOh1h9zQListAudioTrackResponse } from '../models';
/**
 * StreamAddAudioTracksApi - axios parameter creator
 * @export
 */
export const StreamAddAudioTracksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Adds an additional audio track to a video using the provided audio track URL.
         * @summary Add audio tracks to a video
         * @param {JOh1h9zQCopyAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addAudioTrack: async (body: JOh1h9zQCopyAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addAudioTrack.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling addAudioTrack.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling addAudioTrack.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/audio/copy`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
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
         * Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
         * @summary Delete additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAudioTracks: async (accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling deleteAudioTracks.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deleteAudioTracks.');
            }
            // verify required parameter 'audioIdentifier' is not null or undefined
            if (audioIdentifier === null || audioIdentifier === undefined) {
                throw new RequiredError('audioIdentifier','Required parameter audioIdentifier was null or undefined when calling deleteAudioTracks.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/audio/{audio_identifier}`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"audio_identifier"}}`, encodeURIComponent(String(audioIdentifier)));
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
         * Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
         * @summary Edit additional audio tracks on a video
         * @param {JOh1h9zQEditAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editAudioTracks: async (body: JOh1h9zQEditAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling editAudioTracks.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling editAudioTracks.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling editAudioTracks.');
            }
            // verify required parameter 'audioIdentifier' is not null or undefined
            if (audioIdentifier === null || audioIdentifier === undefined) {
                throw new RequiredError('audioIdentifier','Required parameter audioIdentifier was null or undefined when calling editAudioTracks.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/audio/{audio_identifier}`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"audio_identifier"}}`, encodeURIComponent(String(audioIdentifier)));
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
         * Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.
         * @summary List additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAudioTracks: async (accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling listAudioTracks.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling listAudioTracks.');
            }
            const localVarPath = `/accounts/{account_identifier}/stream/{identifier}/audio`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
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
    }
};

/**
 * StreamAddAudioTracksApi - functional programming interface
 * @export
 */
export const StreamAddAudioTracksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Adds an additional audio track to a video using the provided audio track URL.
         * @summary Add audio tracks to a video
         * @param {JOh1h9zQCopyAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addAudioTrack(body: JOh1h9zQCopyAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>>> {
            const localVarAxiosArgs = await StreamAddAudioTracksApiAxiosParamCreator(configuration).addAudioTrack(body, accountIdentifier, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
         * @summary Delete additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQDeletedResponse>>> {
            const localVarAxiosArgs = await StreamAddAudioTracksApiAxiosParamCreator(configuration).deleteAudioTracks(accountIdentifier, identifier, audioIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
         * @summary Edit additional audio tracks on a video
         * @param {JOh1h9zQEditAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editAudioTracks(body: JOh1h9zQEditAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>>> {
            const localVarAxiosArgs = await StreamAddAudioTracksApiAxiosParamCreator(configuration).editAudioTracks(body, accountIdentifier, identifier, audioIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.
         * @summary List additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<JOh1h9zQListAudioTrackResponse>>> {
            const localVarAxiosArgs = await StreamAddAudioTracksApiAxiosParamCreator(configuration).listAudioTracks(accountIdentifier, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StreamAddAudioTracksApi - factory interface
 * @export
 */
export const StreamAddAudioTracksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Adds an additional audio track to a video using the provided audio track URL.
         * @summary Add audio tracks to a video
         * @param {JOh1h9zQCopyAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addAudioTrack(body: JOh1h9zQCopyAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>> {
            return StreamAddAudioTracksApiFp(configuration).addAudioTrack(body, accountIdentifier, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
         * @summary Delete additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQDeletedResponse>> {
            return StreamAddAudioTracksApiFp(configuration).deleteAudioTracks(accountIdentifier, identifier, audioIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
         * @summary Edit additional audio tracks on a video
         * @param {JOh1h9zQEditAudioTrack} body 
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editAudioTracks(body: JOh1h9zQEditAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>> {
            return StreamAddAudioTracksApiFp(configuration).editAudioTracks(body, accountIdentifier, identifier, audioIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.
         * @summary List additional audio tracks on a video
         * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
         * @param {JOh1h9zQIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<JOh1h9zQListAudioTrackResponse>> {
            return StreamAddAudioTracksApiFp(configuration).listAudioTracks(accountIdentifier, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StreamAddAudioTracksApi - object-oriented interface
 * @export
 * @class StreamAddAudioTracksApi
 * @extends {BaseAPI}
 */
export class StreamAddAudioTracksApi extends BaseAPI {
    /**
     * Adds an additional audio track to a video using the provided audio track URL.
     * @summary Add audio tracks to a video
     * @param {JOh1h9zQCopyAudioTrack} body 
     * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamAddAudioTracksApi
     */
    public async addAudioTrack(body: JOh1h9zQCopyAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>> {
        return StreamAddAudioTracksApiFp(this.configuration).addAudioTrack(body, accountIdentifier, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
     * @summary Delete additional audio tracks on a video
     * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamAddAudioTracksApi
     */
    public async deleteAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQDeletedResponse>> {
        return StreamAddAudioTracksApiFp(this.configuration).deleteAudioTracks(accountIdentifier, identifier, audioIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
     * @summary Edit additional audio tracks on a video
     * @param {JOh1h9zQEditAudioTrack} body 
     * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {JOh1h9zQAudioIdentifier} audioIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamAddAudioTracksApi
     */
    public async editAudioTracks(body: JOh1h9zQEditAudioTrack, accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, audioIdentifier: JOh1h9zQAudioIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQAddAudioTrackResponse>> {
        return StreamAddAudioTracksApiFp(this.configuration).editAudioTracks(body, accountIdentifier, identifier, audioIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.
     * @summary List additional audio tracks on a video
     * @param {JOh1h9zQAccountIdentifier} accountIdentifier 
     * @param {JOh1h9zQIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StreamAddAudioTracksApi
     */
    public async listAudioTracks(accountIdentifier: JOh1h9zQAccountIdentifier, identifier: JOh1h9zQIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<JOh1h9zQListAudioTrackResponse>> {
        return StreamAddAudioTracksApiFp(this.configuration).listAudioTracks(accountIdentifier, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
