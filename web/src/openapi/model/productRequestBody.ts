/**
 * Ecommerce API
 * Documentation of Ecommerce API
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface ProductRequestBody {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  stockQuantity?: number;
  dateCreated?: number;
  lastUpdated?: number;
  orders?: Array<string>;
}
