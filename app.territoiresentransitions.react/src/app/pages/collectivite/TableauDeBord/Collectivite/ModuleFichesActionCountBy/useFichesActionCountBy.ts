import { RouterInput, trpc } from '@/api/utils/trpc/client';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';

type CountByFilter = RouterInput['plans']['fiches']['countBy']['filter'];
type CountByProperty =
  RouterInput['plans']['fiches']['countBy']['countByProperty'];

export const useFichesActionCountBy = (
  countByProperty: CountByProperty,
  params: CountByFilter
) => {
  const collectiviteId = useCollectiviteId()!;

  return trpc.plans.fiches.countBy.useQuery({
    countByProperty,
    collectiviteId,
    filter: params,
  });
};
