import {
  AccountCircle,
  AirIcon,
  Grade,
  HelpOutline,
  HistoryIcon,
  HistorySearch,
  ImageSearchLogo,
  Interests,
  MoonIcon,
  MusicLogo,
  SafetyCheck,
  SettingsIcon,
  StudyLogo,
  TranslateLogo,
  VpnKey,
} from '../../assets/icons';
import { COLORS } from '../../theme';

export const CategoryData = [
  {
    id: 1,
    backgroundColor: COLORS.box_light_yellow,
    imageColor: COLORS.box_yellow,

    image: ImageSearchLogo,
  },
  {
    id: 2,
    backgroundColor: COLORS.box_light_blue,
    imageColor: COLORS.box_blue,
    image: TranslateLogo,
  },
  {
    id: 3,
    backgroundColor: COLORS.box_light_green,
    imageColor: COLORS.box_green,
    image: StudyLogo,
  },
  {
    id: 4,
    backgroundColor: COLORS.box_light_pink,
    imageColor: COLORS.box_pink,
    image: MusicLogo,
  },
];

export const InfoData = [
  {
    id: 1,
    title: 'Gurugram',
    description: '30',
    type: 'wather',
  },
  {
    id: 2,
    title: 'Air quality - 101',
    description: '30',
    type: 'air-quality',
  },
  {
    id: 3,
    title: 'Settings',
    description: '30',
    type: 'setting',
  },
];

export const HeadLinesData = [
  {
    id: 1,
    image:
      'https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    publishedBy: 'publisher',
    publishedAt: '10-10-2024',
  },
  {
    id: 2,
    image:
      'https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    publishedBy: 'publisher',
    publishedAt: '10-10-2024',
  },
  {
    id: 3,
    image:
      'https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    publishedBy: 'publisher',
    publishedAt: '10-10-2024',
  },
  {
    id: 4,
    image:
      'https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    publishedBy: 'publisher',
    publishedAt: '10-10-2024',
  },
];

export const renderAccountData = [
  {
    id: 1,
    item: 'Turn on Incognito',
    icon: AirIcon,
    seperator: true
  },
  {
    id: 2,
    item: 'Search history',
    icon: HistorySearch,
    state: 'Saving',
    seperator: true

  },
  {
    id: 3,
    item: 'Delete last 15 mins',
    icon: null,
    seperator: true
  },
  {
    id: 4,
    item: 'Safe Search',
    icon: SafetyCheck,
  },
  {
    id: 5,
    item: 'Interests',
    icon: Interests,
  },
  {
    id: 6,
    item: 'Passwords',
    icon: VpnKey,
  },
  {
    id: 7,
    item: 'Your Profile',
    icon: AccountCircle,
  },
  {
    id: 8,
    item: 'Search personalisation',
    icon: Grade,
    seperator: true
  },
  {
    id: 9,
    item: 'Settings',
    icon: SettingsIcon,
  },
  {
    id: 10,
    item: 'Help and feedback',
    icon: HelpOutline,
    seperator: true

  },




]