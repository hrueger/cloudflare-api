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
import { Jds9UiCvBotFightMode } from './jds9-ui-cv-bot-fight-mode';
import { Jds9UiCvDomains } from './jds9-ui-cv-domains';
import { Jds9UiCvMode } from './jds9-ui-cv-mode';
import { Jds9UiCvName } from './jds9-ui-cv-name';
import { Jds9UiCvOfflabel } from './jds9-ui-cv-offlabel';
/**
 * 
 * @export
 * @interface WidgetsSitekeyBody
 */
export interface WidgetsSitekeyBody {
    /**
     * 
     * @type {Jds9UiCvBotFightMode}
     * @memberof WidgetsSitekeyBody
     */
    botFightMode?: Jds9UiCvBotFightMode;
    /**
     * 
     * @type {Jds9UiCvDomains}
     * @memberof WidgetsSitekeyBody
     */
    domains: Jds9UiCvDomains;
    /**
     * 
     * @type {Jds9UiCvMode}
     * @memberof WidgetsSitekeyBody
     */
    mode: Jds9UiCvMode;
    /**
     * 
     * @type {Jds9UiCvName}
     * @memberof WidgetsSitekeyBody
     */
    name: Jds9UiCvName;
    /**
     * 
     * @type {Jds9UiCvOfflabel}
     * @memberof WidgetsSitekeyBody
     */
    offlabel?: Jds9UiCvOfflabel;
}
