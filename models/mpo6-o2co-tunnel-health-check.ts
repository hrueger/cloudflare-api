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
 * 
 * @export
 * @interface Mpo6O2coTunnelHealthCheck
 */
export interface Mpo6O2coTunnelHealthCheck {
    /**
     * Determines whether to run healthchecks for a tunnel.
     * @type {boolean}
     * @memberof Mpo6O2coTunnelHealthCheck
     */
    enabled?: boolean;
    /**
     * How frequent the health check is run. The default value is `mid`.
     * @type {string}
     * @memberof Mpo6O2coTunnelHealthCheck
     */
    rate?: Mpo6O2coTunnelHealthCheckRateEnum;
    /**
     * The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`.
     * @type {string}
     * @memberof Mpo6O2coTunnelHealthCheck
     */
    target?: string;
    /**
     * The type of healthcheck to run, reply or request. The default value is `reply`.
     * @type {string}
     * @memberof Mpo6O2coTunnelHealthCheck
     */
    type?: Mpo6O2coTunnelHealthCheckTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum Mpo6O2coTunnelHealthCheckRateEnum {
    Low = 'low',
    Mid = 'mid',
    High = 'high'
}
/**
    * @export
    * @enum {string}
    */
export enum Mpo6O2coTunnelHealthCheckTypeEnum {
    Reply = 'reply',
    Request = 'request'
}

