/* begin_sample_code
 gist_id: 2ee628161f12279813340cb3348b593a
 filename: AmityNewsFeedComponent.tsx
 asc_page: https://docs.amity.co/amity-uikit/uikit-v4-beta
 description: AmityNewsFeedComponent
 */
import {
  AmityNewsFeedComponent,
  AmityUiKitProvider,
} from 'amity-react-native-social-ui-kit';
import React from 'react';
import config from '../../uikit.config.json';
<AmityUiKitProvider
  configs={config} //put your customized config json object
  apiKey="API_KEY"
  apiRegion="API_REGION"
  userId="userId"
  displayName="displayName"
  apiEndpoint="https://api.{API_REGION}.amity.co"
>
  <AmityNewsFeedComponent />
</AmityUiKitProvider>;
/* end_sample_code */