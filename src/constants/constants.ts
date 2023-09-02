import { ReactComponent as Product } from '../assets/svgs/product-engineering.svg';
import { ReactComponent as Application } from '../assets/svgs/application-services.svg';
import { ReactComponent as Business } from '../assets/svgs/business-consulting.svg';
import { ReactComponent as Digital } from '../assets/svgs/digital-transformation.svg';
import { ReactComponent as Enterprise } from '../assets/svgs/enterprise-planning.svg';
import { ReactComponent as IOT } from '../assets/svgs/internet-of-things.svg';
import { ReactComponent as Mobile } from '../assets/svgs/mobile-application.svg';
import { ReactComponent as QA } from '../assets/svgs/quality-assuarance.svg';
import { ReactComponent as Software } from '../assets/svgs/software-development.svg';
import { ReactComponent as Telco } from '../assets/svgs/telco-industry.svg';
import { ReactComponent as Data } from '../assets/svgs/data-analytics.svg';
import { ReactComponent as Hex1 } from '../assets/svgs/techhex_1.svg';
import { ReactComponent as Hex2 } from '../assets/svgs/techhex_2.svg';
import { ReactComponent as Hex3 } from '../assets/svgs/techhex_3.svg';
import { ReactComponent as Hex4 } from '../assets/svgs/techhex_4.svg';
import { ReactComponent as Hex5 } from '../assets/svgs/techhex_5.svg';
import { ReactComponent as Hex6 } from '../assets/svgs/techhex_6.svg';
import { ReactComponent as Hex7 } from '../assets/svgs/techhex_7.svg';
import { ReactComponent as HexHighlight1 } from '../assets/svgs/techhex_highligh1.svg';
import { ReactComponent as HexHighlight2 } from '../assets/svgs/techhex_highligh2.svg';
import { ReactComponent as HexHighlight3 } from '../assets/svgs/techhex_highligh3.svg';
import { ReactComponent as HexHighlight4 } from '../assets/svgs/techhex_highligh4.svg';
import { ReactComponent as HexHighlight5 } from '../assets/svgs/techhex_highligh5.svg';
import { ReactComponent as HexHighlight6 } from '../assets/svgs/techhex_highligh6.svg';
import { ReactComponent as HexHighlight7 } from '../assets/svgs/techhex_highligh7.svg';
import { ReactComponent as SLarmy } from '../assets/svgs/SLarmy.svg';
import { ReactComponent as policelogo } from '../assets/svgs/policelogo.svg';
import { ReactComponent as Youth } from '../assets/svgs/youth.svg';
import { ReactComponent as Culture } from '../assets/svgs/Culture.svg';
import { ReactComponent as educ } from '../assets/svgs/educ.svg';
import { ReactComponent as Sass } from '../assets/svgs/sass.svg';
import { ReactComponent as Vue } from '../assets/svgs/vuejs.svg';
import { ReactComponent as Less } from '../assets/svgs/less.svg';
import { ReactComponent as JQuery } from '../assets/svgs/jquery.svg';
import { ReactComponent as Webpack } from '../assets/svgs/webpack.svg';
import { ReactComponent as IOS } from '../assets/svgs/app_store.svg';
import { ReactComponent as React } from '../assets/svgs/react.svg';
import { ReactComponent as Android } from '../assets/svgs/android.svg';
import { ReactComponent as Flutter } from '../assets/svgs/flutter.svg';
import { ReactComponent as MicroSoft } from '../assets/svgs/microsoft.svg';
import { ReactComponent as Appium } from '../assets/svgs/appium.svg';
import { ReactComponent as Typescript } from '../assets/svgs/typescript.svg';
import { ReactComponent as PgAdmin } from '../assets/svgs/pgadmin.svg';
import { ReactComponent as DynamoDb } from '../assets/svgs/dynamodb.svg';
import { ReactComponent as Oracle } from '../assets/svgs/oracle.svg';
import { ReactComponent as MySql } from '../assets/svgs/mysql.svg';
import { ReactComponent as MongoDb } from '../assets/svgs/mongo.svg';
import { ReactComponent as Cassandra } from '../assets/svgs/cassandra.svg';
import { ReactComponent as GoogleCloud } from '../assets/svgs/google_cloud.svg';
import { ReactComponent as AWS } from '../assets/svgs/aws.svg';
import { ReactComponent as Azure } from '../assets/svgs/azure.svg';
import { ReactComponent as Jmeter } from '../assets/svgs/jmeter.svg';
import { ReactComponent as Selenium } from '../assets/svgs/selenium.svg';
import { ReactComponent as Laravel } from '../assets/svgs/laravel.svg';
import { ReactComponent as Php } from '../assets/svgs/php.svg';
import { ReactComponent as Python } from '../assets/svgs/python.svg';
import { ReactComponent as Nodejs } from '../assets/svgs/nodejs.svg';
import { ReactComponent as Unknown } from '../assets/svgs/unknown.svg';
import { ReactComponent as Globe } from '../assets/svgs/globe.svg';
import { ReactComponent as Phone } from '../assets/svgs/phone.svg';
import { ReactComponent as Email } from '../assets/svgs/email.svg';
import GridImg1 from '../assets/imgs/grid-img-1.png';
import GridImg2 from '../assets/imgs/grid-img-2.png';
import GridImg3 from '../assets/imgs/grid-img-3.png';
import GridImg4 from '../assets/imgs/grid-img-4.png';
import GridImg5 from '../assets/imgs/grid-img-5.png';
import GridImg6 from '../assets/imgs/grid-img-6.png';

import armylogo from '../assets/imgs/army-logo.png';
import cul from '../assets/imgs/cul.png';
import edu from '../assets/imgs/edu.png';
import police from '../assets/imgs/police.png';
import youth from '../assets/imgs/youth.png';

export const headerNavigations = [
  {
    key: 1,
    name: 'Home',
    path: '/',
    selected: true,
  },
  { key: 2, name: 'About Us', path: '/about', selected: false },
  { key: 3, name: 'Gallery', path: '/gallary', selected: false },
  { key: 4, name: 'Blog', path: '/blog', selected: false },
  { key: 6, name: 'Contact Us', path: '/contact', selected: false },
];

export const services = [
  {
    key: 1,
    name: 'Product Engineering',
    description: 'Innovating, Designing, Developing, Testing and Deploying software products',
    icon: Product,
  },
  {
    key: 2,
    name: 'Software Development',
    description: 'Encompassing the entire software development life cycle, end-to-end',
    icon: Software,
  },
  {
    key: 3,
    name: 'Quality Engineering & Assurance',
    description: 'Ensuring industry-standard testing methods and QA processes',
    icon: QA,
  },
  {
    key: 4,
    name: 'Data Analytics',
    description: 'Transforming information to insights',
    icon: Data,
  },
  {
    key: 5,
    name: 'Application Services',
    description: 'Driving efficiency and effectiveness in the long run',
    icon: Application,
  },
  {
    key: 6,
    name: 'Digital Transformation',
    description:
      'Increasing business agility and integrating technology to deliver value through continuous innovation',
    icon: Digital,
  },
  {
    key: 7,
    name: 'Internet of Things',
    description: 'Customized IoT applications to maximize customer value',
    icon: IOT,
  },
  {
    key: 8,
    name: 'Mobile Applications',
    description:
      'User-friendly mobile applications equipped with the latest technology, methodology and development frameworks.',
    icon: Mobile,
  },
  {
    key: 9,
    name: 'Business Consulting',
    description: 'Delivering human-centric, digital solutions to transform businesses.',
    icon: Business,
  },
  {
    key: 10,
    name: 'Enterprise Resource Planning',
    description: 'Strengthening the core of enterprise IT structure.',
    icon: Enterprise,
  },
  {
    key: 11,
    name: 'Service for Telco Industry',
    description:
      'Addressing opportunities through innovative solutions, deep domain expertise and integrated solutions and services.',
    icon: Telco,
  },
];

export const slides = [
  {
    key: 1,
    title: 'Tham mattama',
    description:
      'Tham mattama is a village in Sultanpur Lodhi tehsil in Kapurthala district of Punjab, India. It is located 10 kilometres (6.2 mi) from the city of Sultanpur Lodhi, 30 kilometres (19 mi) away from district headquarter Kapurthala. The village is administrated by a Sarpanch who is an elected representative of village as per the constitution of India and Panchayati raj (India.',
    img: GridImg6,
    nextClass: 'next-swiper-button',
    prevClass: 'prev-swiper-button',
  },
  {
    key: 2,
    title: 'Bera',
    description:
      'Tham mattama is a village in Sultanpur Lodhi tehsil in Kapurthala district of Punjab, India. It is located 10 kilometres (6.2 mi) from the city of Sultanpur Lodhi, 30 kilometres (19 mi) away from district headquarter Kapurthala. The village is administrated by a Sarpanch who is an elected representative of village as per the constitution of India and Panchayati raj (India.',
    img: GridImg3,
    nextClass: 'next-swiper-button',
    prevClass: 'prev-swiper-button',
  },
  {
    key: 3,
    title: 'Bera',
    description:
      'Tham mattama is a village in Sultanpur Lodhi tehsil in Kapurthala district of Punjab, India. It is located 10 kilometres (6.2 mi) from the city of Sultanpur Lodhi, 30 kilometres (19 mi) away from district headquarter Kapurthala. The village is administrated by a Sarpanch who is an elected representative of village as per the constitution of India and Panchayati raj (India.',

    img: GridImg3,
    nextClass: 'next-swiper-button',
    prevClass: 'prev-swiper-button',
  },
  {
    key: 4,
    title: 'Bera',
    description:
      'Developed Bera system that allows travel agents around the globe to provide hotel bookings, flights & transfers to our end customers – the Umrah pilgrims.',
    img: GridImg4,
    nextClass: 'next-swiper-button',
    prevClass: 'prev-swiper-button',
  },
  
];

export const toolsTechs = [
  {
    key: 1,
    q: -1,
    r: -1,
    icon: Hex1,
    highlightIcon: HexHighlight1,
  },
  {
    key: 2,
    q: 0,
    r: -1,
    icon: Hex2,
    highlightIcon: HexHighlight2,
  },
  {
    key: 3,
    q: 0,
    r: 0,
    icon: Hex3,
    highlightIcon: HexHighlight3,
  },
  {
    key: 4,
    q: -1,
    r: 1,
    icon: Hex4,
    highlightIcon: HexHighlight4,
  },
  {
    key: 5,
    q: -2,
    r: 1,
    icon: Hex5,
    highlightIcon: HexHighlight5,
  },
  {
    key: 6,
    q: -2,
    r: 0,
    icon: Hex6,
    highlightIcon: HexHighlight6,
  },
  {
    key: 7,
    q: -1,
    r: 0,
    icon: Hex7,
    highlightIcon: HexHighlight7,
  },
];

export const feTechs = [SLarmy, policelogo, Culture, Youth, educ];
export const ClientsArry = [
  {
    key: 1,
    img: armylogo,
  },
  {
    key: 2,
    img: edu,
  },

  {
    key: 3,
    img: police,
  },

  {
    key: 4,
    img: youth,
  },
  {
    key: 5,
    img: cul,
  },
];

// export const mobileTechs = [React, Android, Flutter, IOS];
// export const microsoftTechs = [MicroSoft, Appium, Typescript];
// export const databases = [PgAdmin, DynamoDb, Oracle, MySql, MongoDb, Cassandra];
// export const cloud = [GoogleCloud, AWS, Azure];
// export const qualityAssuarance = [Jmeter, Selenium];
// export const java = [Laravel, Php, Python, Nodejs, Unknown];

export const gallery = [
  GridImg1,
  GridImg2,
  GridImg3,
  GridImg4,
  GridImg5,
  GridImg6,
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  GridImg1,
  GridImg2,
  GridImg3,
  GridImg4,
  GridImg5,
  GridImg6,
];

export const contactIconsList = [
  {
    title: 'PHONE',
    subTitle: '011 273 53 74',
    icon: Phone,
  },
  {
    title: 'WEBSITE',
    subTitle: 'www.digiratina.com',
    icon: Globe,
  },
  {
    title: 'EMAIL',
    subTitle: 'info@digiratina.com',
    icon: Email,
  },
];
