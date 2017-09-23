import {watchLoad as watchLoadHome} from 'sagas/homeSaga'
import {watchLoad as watchLoadItem} from 'sagas/playerSaga'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
  yield [
    watchLoadHome(),
    watchLoadItem()
  ]
}