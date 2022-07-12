import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Familiar dock, ultimate form',
    Svg: 'dock.svg',
    description: (
      <>
        <Translate>Everyone knows dock/task bar. We got a brand new dock, with more features than ever before.</Translate>
      <hr/>
      </>
    ),
  },
  {
    title: 'Drag & drop made easy',
    Svg: 'drag_drop.svg',
    description: (
      <>
        <Translate>Drag and drop is the easiest way to transfer anything on your computer. We make it intuitive and easy to use.</Translate>
      <hr/>
      </>
    ),
  },
  {
    title: 'New way to manage files',
    Svg: 'files.svg',
    description: (
      <>
        <Translate>This file manager keeps you organized and productive. Find your files the instant you need it.</Translate>
      <hr/>
      </>
    ),
  },
  {
    title: 'More than multitask',
    Svg: 'multitask.svg',
    description: (
      <>
        <Translate>Want to do many tasks at a time? We know you and we got you. It's now not only multitasking, it's organized multitasking.</Translate>
      </>
    ),
  },
  {
    title: 'New context menu',
    Svg: 'context.svg',
    description: (
      <>
        <Translate>Context menu didn't change for multiple decades now. We are tired of a long list of items, and hey why not make it a circle? Don't like it? You can switch it back in settings!</Translate>
      </>
    ),
  },
  {
    title: 'Easily apply layout',
    Svg: 'layout.svg',
    description: (
      <>
        <Translate>With a list of presets determined from you apps, easily get to work with the perfect window layout. Not enough? Change it in the settings.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
