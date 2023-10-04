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
/**
 * For specifying result metrics.
 * @export
 * @interface C4f8RoOSQuery
 */
export interface C4f8RoOSQuery {
    /**
     * Can be used to break down the data by given attributes.
     * @type {Array<string>}
     * @memberof C4f8RoOSQuery
     */
    dimensions?: Array<string>;
    /**
     * Used to filter rows by one or more dimensions. Filters can be combined using OR and AND boolean logic. AND takes precedence over OR in all the expressions. The OR operator is defined using a comma (,) or OR keyword surrounded by whitespace. The AND operator is defined using a semicolon (;) or AND keyword surrounded by whitespace. Note that the semicolon is a reserved character in URLs (rfc1738) and needs to be percent-encoded as %3B. Comparison options are:   Operator                  | Name                            | URL Encoded --------------------------|---------------------------------|-------------------------- ==                        | Equals                          | %3D%3D !=                        | Does not equals                 | !%3D >                        | Greater Than                    | %3E <                         | Less Than                       | %3C >=                       | Greater than or equal to        | %3E%3D <=                        | Less than or equal to           | %3C%3D     .
     * @type {string}
     * @memberof C4f8RoOSQuery
     */
    filters?: string;
    /**
     * Limit number of returned metrics.
     * @type {number}
     * @memberof C4f8RoOSQuery
     */
    limit?: number;
    /**
     * One or more metrics to compute.
     * @type {Array<string>}
     * @memberof C4f8RoOSQuery
     */
    metrics?: Array<string>;
    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     * @type {Date}
     * @memberof C4f8RoOSQuery
     */
    since?: Date;
    /**
     * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed by - (descending) or + (ascending).
     * @type {Array<any>}
     * @memberof C4f8RoOSQuery
     */
    sort?: Array<any>;
    /**
     * End of time interval to query, defaults to current time.
     * @type {Date}
     * @memberof C4f8RoOSQuery
     */
    until?: Date;
}
