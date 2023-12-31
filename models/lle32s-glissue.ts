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
import { LLE32sGLIssueClass } from './lle32s-glissue-class';
import { LLE32sGLIssueType } from './lle32s-glissue-type';
/**
 * 
 * @export
 * @interface LLE32sGLIssue
 */
export interface LLE32sGLIssue {
    /**
     * 
     * @type {boolean}
     * @memberof LLE32sGLIssue
     */
    dismissed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LLE32sGLIssue
     */
    id?: string;
    /**
     * 
     * @type {LLE32sGLIssueClass}
     * @memberof LLE32sGLIssue
     */
    issueClass?: LLE32sGLIssueClass;
    /**
     * 
     * @type {LLE32sGLIssueType}
     * @memberof LLE32sGLIssue
     */
    issueType?: LLE32sGLIssueType;
    /**
     * 
     * @type {any}
     * @memberof LLE32sGLIssue
     */
    payload?: any;
    /**
     * 
     * @type {string}
     * @memberof LLE32sGLIssue
     */
    resolveLink?: string;
    /**
     * 
     * @type {string}
     * @memberof LLE32sGLIssue
     */
    resolveText?: string;
    /**
     * 
     * @type {string}
     * @memberof LLE32sGLIssue
     */
    severity?: LLE32sGLIssueSeverityEnum;
    /**
     * 
     * @type {Date}
     * @memberof LLE32sGLIssue
     */
    since?: Date;
    /**
     * 
     * @type {string}
     * @memberof LLE32sGLIssue
     */
    subject?: string;
    /**
     * 
     * @type {Date}
     * @memberof LLE32sGLIssue
     */
    timestamp?: Date;
}

/**
    * @export
    * @enum {string}
    */
export enum LLE32sGLIssueSeverityEnum {
    Low = 'Low',
    Moderate = 'Moderate',
    Critical = 'Critical'
}

