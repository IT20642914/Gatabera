import React, { Fragment } from 'react';
import { ReactComponent as SectionImage } from '../../../../assets/svgs/section-image-1.svg';
import Cover from '../../../../assets/imgs/cover-image-1.png';
import ImageTitle from '../ImageTitle/ImageTitle';
import WhyWorkSection from '../WhyWorkSection/WhyWorkSection';

const ProductEngineering = () => {
  const whyPoints = [
    {
      title: 'A track record of creating outstanding software product',
      desc: 'With software at its core, Digiratina’s product experts can deploy software products that are innovative and groundbreaking.',
    },
    {
      title: 'From the drawing board to functional software products',
      desc: 'The product engineering lifecycle starts with planning with the idea and concept, to designing and developing, testing, launching, and in time, maintenance when required. Our product experts become an integral part of the lifecycle at an exceedingly early stage and contribute to every phase of it.',
    },
    {
      title: 'Strategising software product engineering through innovation',
      desc: 'Our product experts are trained and highly skilled when it comes not just to software product engineering, but also empowered with sound business acumen. From collecting data at the initial stages to conducting feasibility studies to ensure the outcome is functional and serviceable, product engineering sees through all facets of the lifecycle.',
    },
    {
      title: 'Focus on achieving your business development goals',
      desc: 'Work with our product engineering team to free up your time to focus on business goals achievement, marketing, and overall implementing your business strategy successfully.',
    },
  ];
  return (
    <Fragment>
      <ImageTitle
        title='Product Engineering'
        subTitle='Innovating, Designing, Developing, Testing and Deploying software products'
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

export default ProductEngineering;
