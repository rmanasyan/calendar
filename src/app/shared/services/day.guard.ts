import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { isValidDayString } from '../../day/helpers/day.helper';

export const dayGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  if (isValidDayString(route.params['day'])) {
    return true;
  } else {
    const day = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    return router.parseUrl(`day/${day}`);
  }
};
