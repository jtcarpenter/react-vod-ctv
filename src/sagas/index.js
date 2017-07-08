import {watchLoad as watchLoadHome} from './homeSaga'
import {watchLoad as watchLoadItem} from './playerSaga'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
  yield [
    watchLoadHome(),
    watchLoadItem()
  ]
}