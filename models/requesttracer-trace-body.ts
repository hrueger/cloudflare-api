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
import { AccountsaccountIdentifierrequesttracertraceBody } from './accountsaccount-identifierrequesttracertrace-body';
import { AccountsaccountIdentifierrequesttracertraceContext } from './accountsaccount-identifierrequesttracertrace-context';
/**
 * 
 * @export
 * @interface RequesttracerTraceBody
 */
export interface RequesttracerTraceBody {
    /**
     * 
     * @type {AccountsaccountIdentifierrequesttracertraceBody}
     * @memberof RequesttracerTraceBody
     */
    body?: AccountsaccountIdentifierrequesttracertraceBody;
    /**
     * 
     * @type {AccountsaccountIdentifierrequesttracertraceContext}
     * @memberof RequesttracerTraceBody
     */
    context?: AccountsaccountIdentifierrequesttracertraceContext;
    /**
     * Cookies added to tracing request
     * @type {{ [key: string]: string; }}
     * @memberof RequesttracerTraceBody
     */
    cookies?: { [key: string]: string; };
    /**
     * Headers added to tracing request
     * @type {{ [key: string]: string; }}
     * @memberof RequesttracerTraceBody
     */
    headers?: { [key: string]: string; };
    /**
     * HTTP Method of tracing request
     * @type {string}
     * @memberof RequesttracerTraceBody
     */
    method: string;
    /**
     * HTTP Protocol of tracing request
     * @type {string}
     * @memberof RequesttracerTraceBody
     */
    protocol?: string;
    /**
     * Skip sending the request to the Origin server after all rules evaluation
     * @type {boolean}
     * @memberof RequesttracerTraceBody
     */
    skipResponse?: boolean;
    /**
     * URL to which perform tracing request
     * @type {string}
     * @memberof RequesttracerTraceBody
     */
    url: string;
}