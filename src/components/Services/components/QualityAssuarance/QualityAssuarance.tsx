import React, { Fragment } from 'react';
import { ReactComponent as SectionImage } from '../../../../assets/svgs/section-image-1.svg';
import Cover from '../../../../assets/imgs/cover-image-1.png';
import ImageTitle from '../ImageTitle/ImageTitle';
import WhyWorkSection from '../WhyWorkSection/WhyWorkSection';

const QualityAssuarance = () => {
  const whyPoints = [
    {
      title: 'Guaranteeing better business outcomes',
      desc: 'The Digiratina Quality Engineering ‘Centre of Excellence’ guarantees better business outcomes through a three-principle approach:',
    },
    {
      title: 'Comprehensive staff offering',
      desc: 'Our quality engineering and assurance team is available for varying client requirements. This includes on-demand and long-term retainer services, as well as flexible service and staff offerings.',
    },
    {
      title: 'Transparent QA process governance',
      desc: 'A fundamental principle of our program approach is the value we offer beyond the contract. For our quality assurance and engineering services, we put this into practice through our unique QA process governance method that begins with the QA process tailoring during project inception and ends with an assessment and review of the overall project goals conducted even after the closure of the project to ensure consistent quality, predictable delivery, increased efficiency and controlled costs.',
    },
    {
      title: 'Ensuring security and safety of data, facilities and assets',
      desc: 'Our team at Digiratina is equipped with state of the art infrastructure for the entire operation. Our operating platforms include Windows 8 and ubuntu while our trusted secure cloud platforms are AWS, Microsoft 365, Azure, GitHub and Atlassian. Offline our assets are secured with CCTV monitoring, secured biometric, theft sense siren alarms, active motion sensors and track & trace RFIDs.',
    },
    {
      title: 'Expansive capability matrix',
      desc: 'Our team brings to the table experience, expertise and creativity. Collectively we have brought to life an expansive capability matrix through various software and tools.',
    },
    {
      title: 'An extensive scope of services',
      desc: 'Our team of quality assurance engineers delivers QA test automation, mobile testing, cloud testing and performance testing.',
    },
  ];
  return (
    <Fragment>
      <ImageTitle
        title='Quality Engineering & Assurance'
        subTitle='Ensuring industry-standard testing methods and QA processes.'
        desc='Lorem ipsum dolor sit amet consectetur. Purus nisl vitae in amet. Fringilla tincidunt vel
      eget massa bibendum eu. Et ipsum commodo magna ultricies massa mauris purus dolor. Commodo
      ut diam orci nisi elementum. Neque porttitor mattis posuere tincidunt pellentesque
      dignissim urna morbi. Aliquam arcu quam arcu hendrerit mollis. Sit egestas quis hendrerit
      quisque aliquam nam turpis massa. Arcu nulla vulputate urna aenean neque est et sed.
      Tempus sit viverra placerat dictum lacus et semper quis tortor. Aliquam sed nisl sed nunc
      praesent nam facilisi. Suscipit iaculis tortor integer viverra. Nisi fringilla amet elit
      in nec. Arcu in et vehicula et amet et tincidunt. Duis non elementum tincidunt neque
      posuere leo vestibulum.'
        sectionImage={SectionImage}
      />
      <WhyWorkSection coverImage={Cover} points={whyPoints} />
    </Fragment>
  );
};

export default QualityAssuarance;
