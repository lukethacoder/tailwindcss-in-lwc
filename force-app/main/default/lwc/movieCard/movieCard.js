import { LightningElement, api } from 'lwc'

export default class MovieCard extends LightningElement {
  /**
   * @type {string}
   */
  @api title

  /**
   * @type {number}
   */
  @api year

  /**
   * @type {string}
   */
  @api img

  /**
   * @type {string}
   */
  @api link
}
