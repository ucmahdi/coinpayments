import { Agent } from 'http';
import CoinpaymentsError from '../error';

export type CoinpaymentsReturnCallback<T> = (
  err?: CoinpaymentsError,
  result?: T,
) => any;

export interface CoinpaymentsCredentials {
  key: string;
  secret: string;
  agent?: Agent | undefined;
}

export type isCoinpaymentsError = 'ok' | string | undefined;

export interface CoinpaymentsInternalRequestOps {
  protocol: string;
  method: string;
  host: string;
  path: string;
  headers: { [x: string]: string };
  agent?: Agent | undefined;
}

export interface CoinpaymentsRequest {
  cmd: string;
  [x: string]: any;
}

export interface CoinpaymentsInternalResponse<ExpectedResponse> {
  error?: isCoinpaymentsError;
  result?: ExpectedResponse;
}
