import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';

import type { ServiceIssueStored } from '~/services/data-api';

import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForIssuesImpl } from '~/services/data-axios/UserServiceForIssuesImpl';

import { routeToServiceUserIssuesAccessViewPage } from '~/routes';

export const openIssuePage = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const userServiceForIssuesImpl = useMemo(() => new UserServiceForIssuesImpl(judoAxiosProvider), []);

  return async function (row: ServiceIssueStored, isDraft?: boolean) {
    closeAllDialogs();

    const id = row!.__identifier;
    const entityType = row!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    // Retrieve signedIdentifier from access
    const res = await userServiceForIssuesImpl.list(undefined, processQueryCustomizer(idAccessFilterCustomizer));
    // Open view page in access
    navigate(routeToServiceUserIssuesAccessViewPage(res.data[0].__signedIdentifier));
  };
};
