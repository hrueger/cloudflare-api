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
import { ImagesImageFilename } from './images-image-filename';
import { ImagesImageIdentifier } from './images-image-identifier';
import { ImagesImageMetadata } from './images-image-metadata';
import { ImagesImageRequireSignedURLs } from './images-image-require-signed-urls';
import { ImagesImageUploaded } from './images-image-uploaded';
import { ImagesImageVariants } from './images-image-variants';
/**
 * 
 * @export
 * @interface ImagesImage
 */
export interface ImagesImage {
    /**
     * 
     * @type {ImagesImageFilename}
     * @memberof ImagesImage
     */
    filename?: ImagesImageFilename;
    /**
     * 
     * @type {ImagesImageIdentifier}
     * @memberof ImagesImage
     */
    id?: ImagesImageIdentifier;
    /**
     * 
     * @type {ImagesImageMetadata}
     * @memberof ImagesImage
     */
    meta?: ImagesImageMetadata;
    /**
     * 
     * @type {ImagesImageRequireSignedURLs}
     * @memberof ImagesImage
     */
    requireSignedURLs?: ImagesImageRequireSignedURLs;
    /**
     * 
     * @type {ImagesImageUploaded}
     * @memberof ImagesImage
     */
    uploaded?: ImagesImageUploaded;
    /**
     * 
     * @type {ImagesImageVariants}
     * @memberof ImagesImage
     */
    variants?: ImagesImageVariants;
}
