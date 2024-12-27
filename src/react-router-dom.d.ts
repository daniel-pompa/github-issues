import 'react-router-dom';

declare module 'react-router-dom' {
  interface FutureConfig {
    v7_startTransition?: boolean;
  }
}
