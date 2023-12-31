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
import { Model6KaSmMdRCountry } from './model6-ka-sm-md-rcountry';
import { Model6KaSmMdRFirstName } from './model6-ka-sm-md-rfirst-name';
import { Model6KaSmMdRLastName } from './model6-ka-sm-md-rlast-name';
import { Model6KaSmMdRTelephone } from './model6-ka-sm-md-rtelephone';
import { Model6KaSmMdRZipcode } from './model6-ka-sm-md-rzipcode';
/**
 * 
 * @export
 * @interface UserBody
 */
export interface UserBody {
    /**
     * 
     * @type {Model6KaSmMdRCountry}
     * @memberof UserBody
     */
    country?: Model6KaSmMdRCountry;
    /**
     * 
     * @type {Model6KaSmMdRFirstName}
     * @memberof UserBody
     */
    firstName?: Model6KaSmMdRFirstName;
    /**
     * 
     * @type {Model6KaSmMdRLastName}
     * @memberof UserBody
     */
    lastName?: Model6KaSmMdRLastName;
    /**
     * 
     * @type {Model6KaSmMdRTelephone}
     * @memberof UserBody
     */
    telephone?: Model6KaSmMdRTelephone;
    /**
     * 
     * @type {Model6KaSmMdRZipcode}
     * @memberof UserBody
     */
    zipcode?: Model6KaSmMdRZipcode;
}
