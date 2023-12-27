import { faker } from '@faker-js/faker';
import { Iconify } from '@/components/icon';
import { ProTag } from '@/components/antd-ui';

export interface DataType {
  key: string;
  avatar: string;
  name: string;
  date: string;
  leader: string;
  team: string[];
  status: number;
}

export const connectionsItems = [
  {
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    connections: `${faker.number.int(100)} Connections`,
    connected: faker.datatype.boolean(),
  },

  {
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    connections: `${faker.number.int(100)} Connections`,
    connected: faker.datatype.boolean(),
  },

  {
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    connections: `${faker.number.int(100)} Connections`,
    connected: faker.datatype.boolean(),
  },

  {
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    connections: `${faker.number.int(100)} Connections`,
    connected: faker.datatype.boolean(),
  },

  {
    avatar: faker.image.avatarLegacy(),
    name: faker.person.fullName(),
    connections: `${faker.number.int(100)} Connections`,
    connected: faker.datatype.boolean(),
  },
];

export const teamItems = [
  {
    avatar: <Iconify icon="devicon:react" size={36} />,
    name: 'React Developers',
    members: `${faker.number.int(100)} Members`,
    tag: <ProTag color="warning">Developer</ProTag>,
  },
  {
    avatar: <Iconify icon="devicon:figma" size={36} />,
    name: 'UI Designer',
    members: `${faker.number.int(100)} Members`,
    tag: <ProTag color="cyan">Designer</ProTag>,
  },
  {
    avatar: <Iconify icon="logos:jest" size={36} />,
    name: 'Test Team',
    members: `${faker.number.int(100)} Members`,
    tag: <ProTag color="success">Test</ProTag>,
  },
  {
    avatar: <Iconify icon="logos:nestjs" size={36} />,
    name: 'Nest.js Developers',
    members: `${faker.number.int(100)} Members`,
    tag: <ProTag color="warning">Developer</ProTag>,
  },

  {
    avatar: <Iconify icon="logos:twitter" size={36} />,
    name: 'Digital Marketing',
    members: `${faker.number.int(100)} Members`,
    tag: <ProTag>Marketing</ProTag>,
  },
];

export const fakeAvatars = (count: number) => {
  const result = [];
  for (let index = 0; index < count; index += 1) {
    result.push(faker.image.avatarLegacy());
  }
  return result;
};

export const AboutItems = (username?: string) => {
  return [
    { icon: <Iconify icon="fa-solid:user" size={18} />, label: 'Full Name', val: username ?? '' },
    { icon: <Iconify icon="eos-icons:role-binding" size={18} />, label: 'Role', val: 'Developer' },
    { icon: <Iconify icon="tabler:location-filled" size={18} />, label: 'Country', val: 'USA' },
    { icon: <Iconify icon="ion:language" size={18} />, label: 'Language', val: 'English' },
    { icon: <Iconify icon="ph:phone-fill" size={18} />, label: 'Contact', val: '(123)456-7890' },
    { icon: <Iconify icon="ic:baseline-email" size={18} />, label: 'Email', val: username ?? '' },
  ];
};

export const fakeProjectItems = () => {
  const arr: DataType[] = [];
  for (let i = 0; i <= 25; i += 1) {
    arr.push({
      key: faker.string.uuid(),
      avatar: faker.image.urlPicsumPhotos(),
      name: faker.company.buzzPhrase(),
      date: faker.date.past().toDateString(),
      leader: faker.person.fullName(),
      team: fakeAvatars(faker.number.int({ min: 2, max: 5 })),
      status: faker.number.int({ min: 50, max: 99 }),
    });
  }
  return arr;
};
