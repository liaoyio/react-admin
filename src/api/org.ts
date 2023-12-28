import { ORG_LIST } from './_db';
import { Organization } from '#/entity';
// export const getOrgList = () => http.get<Organization[]>({ url: '/org' });

export function getOrgList() {
  const data = new Promise((resolve) =>
    setTimeout(() => resolve({ status: 0, message: '', data: ORG_LIST }), 700),
  );
  return data as Promise<Organization[]>;
}
