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
 * The phase of the ruleset.
 * @export
 * @enum {string}
 */
export enum RTW3sz4nRulesetPhase {
    DdosL4 = 'ddos_l4',
    DdosL7 = 'ddos_l7',
    HttpConfigSettings = 'http_config_settings',
    HttpCustomErrors = 'http_custom_errors',
    HttpLogCustomFields = 'http_log_custom_fields',
    HttpRatelimit = 'http_ratelimit',
    HttpRequestCacheSettings = 'http_request_cache_settings',
    HttpRequestDynamicRedirect = 'http_request_dynamic_redirect',
    HttpRequestFirewallCustom = 'http_request_firewall_custom',
    HttpRequestFirewallManaged = 'http_request_firewall_managed',
    HttpRequestLateTransform = 'http_request_late_transform',
    HttpRequestOrigin = 'http_request_origin',
    HttpRequestRedirect = 'http_request_redirect',
    HttpRequestSanitize = 'http_request_sanitize',
    HttpRequestSbfm = 'http_request_sbfm',
    HttpRequestSelectConfiguration = 'http_request_select_configuration',
    HttpRequestTransform = 'http_request_transform',
    HttpResponseCompression = 'http_response_compression',
    HttpResponseFirewallManaged = 'http_response_firewall_managed',
    HttpResponseHeadersTransform = 'http_response_headers_transform',
    MagicTransit = 'magic_transit',
    MagicTransitIdsManaged = 'magic_transit_ids_managed',
    MagicTransitManaged = 'magic_transit_managed'
}

