import { FormControl } from '@angular/forms';

export function MailValidator(control: FormControl) {
  const EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if (control.value) {
    if (control.value.indexOf('@') === -1) {
      return { missingArroba: true };
    }

    if (!EMAIL_REGEX.test(control.value)) {
      return { malformedMail: true };
    }
  }

  return null;
}
