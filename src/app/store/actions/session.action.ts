import { Action } from '@ngrx/store';

export enum SessionActionTypes {
  LOAD_SESSION = '[SESSION] Load PUT SESSION',
  LOAD_SESSION_SUCCESS = '[SESSION] Load PUT SESSION Success',
  LOAD_SESSION_FAILURE = '[SESSION] Load  PUT SESSION Failure'
}
export class LoadSessionAction implements Action {
  readonly type = SessionActionTypes.LOAD_SESSION
}

export class LoadSessionSuccessAction implements Action {
    readonly type = SessionActionTypes.LOAD_SESSION_SUCCESS

    constructor(public payload: any) {}
}
export class LoadSessionFailureAction implements Action {
    readonly type = SessionActionTypes.LOAD_SESSION_FAILURE

    constructor(public payload: Error) {}
}

export type SessionAction =
    LoadSessionAction |
    LoadSessionSuccessAction |
    LoadSessionFailureAction
