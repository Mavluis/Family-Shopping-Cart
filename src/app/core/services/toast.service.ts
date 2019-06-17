import { Injectable } from '@angular/core';
import { Error } from '../core.models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = [];

  addToast(toastData: ToastData | Error, delay: number = 10000) {
    if ('message' in toastData) {
      this.toasts.unshift(toastData);
    } else {
      this.toasts.unshift({
        title: 'Error',
        message: this.getErrorMessage(toastData),
        variant: 'danger'
      });
    }

    this.delayAndRemove(delay);
  }

  getErrorMessage({ detail, data }: Error): string {
    if (detail) {
      return detail;
    }

    if (data) {
      return `You ${data.label} is empty`;
    }
  }

  isErrorToast(toast: ToastData) {
    if (toast.variant === 'error') {
      return true;
    }
    return false;
  }

  delayAndRemove(milliseconds: number) {
    setTimeout(() => {
      this.toasts.pop();
    }, milliseconds);
  }

  remove(index?: number) {
    if (index) {
      this.toasts.splice(index, 1);
    } else {
      this.toasts.pop();
    }
  }
}

export interface ToastData {
  title: string;
  message: string;
  variant: string;
}
