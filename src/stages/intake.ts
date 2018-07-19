import { MessageData } from '../types'
import { Dispatch, Store } from 'redux'
import { setMessageData }  from '../actions'
import { NlpResult } from '../types'

/**
 * Intake Stage (S1):
 * 
 * Takes in user generated NlpResult object and creates messageData object, stored to state.
 * 
 * @param nlpResult user generated NLP Object
 * 
 * @returns void
 */
export default function intake({dispatch}: Store, nlpResult: NlpResult): void {
  // MessageData derived from user nlpResult
  const messageData: MessageData = {
    rawText: nlpResult.message,
    intent: nlpResult.intent,
    entities: nlpResult.entities
  }

  // Write messageData object to state
  dispatch(setMessageData(messageData))
} 