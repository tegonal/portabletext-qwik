import './demo/global.css';
import { DemoPage } from './demo/demo-page';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Rudimentary test page</title>
      </head>
      <body>
        <DemoPage />
      </body>
    </>
  );
};
