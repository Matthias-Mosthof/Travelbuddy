import { Notify } from 'quasar';

export function notifyUser(message: string, type: string) {
  Notify.create({
    message,
    type,
  });
}
