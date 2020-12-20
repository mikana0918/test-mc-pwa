import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';


const amplifyConfig = {
    Auth: {
        identityPoolId: 'ap-northeast-1:961bcde4-deb5-4bfe-9080-632e6a4c3d5b',
        region: 'ap-northeast-1'
    }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
    AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: '7717a83f1bbe4e11a8f9d55dfcd0eace',
        // Amazon service region
        region: 'ap-northeast-1',
        mandatorySignIn: false,
    }
}

Analytics.configure(analyticsConfig)

Analytics.updateEndpoint({
    attributes: {
        interests: ['science', 'politics', 'travel'],
        //..
    },
    userId: 'UserIdValue',
    userAttributes: {
        username: 'ilovethecloud'
    }
});
