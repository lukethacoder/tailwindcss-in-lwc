import { LightningElement, wire } from 'lwc'

import apex_getMovies from '@salesforce/apex/MovieController.getMovies'

export default class MovieList extends LightningElement {
  data = []

  @wire(apex_getMovies, { limit: 10 })
  getMovies({ data, error }) {
    console.log('{ data, error } ', { data, error })
    if (error) {
    } else if (data) {
      console.log('data ', data)
      this.data = data
    }
  }
}
