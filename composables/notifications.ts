import { Notify } from 'quasar';

export function notificateUser(message: string, type: string) {
  Notify.create({
    message,
    type,
  });
}
