import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { isValidMonthString } from '../../month/helpers/month.helper';

export const monthGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  if (isValidMonthString(route.params['month'])) {
    return true;
  } else {
    const month = formatDate(new Date(), 'yyyy-MM', 'en');
    return router.parseUrl(`month/${month}`);
  }
};
