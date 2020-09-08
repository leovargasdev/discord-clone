/* eslint-disable @typescript-eslint/interface-name-prefix */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;

      gray: string;
      grayLight: string;
      // chatInput: string;
      symbol: string;
      notification: string;
      discord: string;
      // mentionDetail: string;
      // mentionMessage: string;
      link: string;
      // rocketseat: string;
    };
  }
}
