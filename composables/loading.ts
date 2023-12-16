import { QSpinnerFacebook } from 'quasar';

export function showLoadingSpinner(message: string) {
  Loading.show({
    delay: 10,
    spinner: QSpinnerFacebook,
    backgroundColor: 'grey-8',
    message,
  });
}
