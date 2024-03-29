import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'
import navda_img from '../../../static/img/card-navda.png'
import website_img from '../../../static/img/card-website.png'
const ReposList = [
  {
    title: 'Official Website',
    description:
      'All the new Updates and Information about AvdanOS and Support.',
    imageUrl: website_img,
    githubUrl: 'https://github.com/Avdan-OS/Website',
    docUrl: '/website/website-overview',
  },
  {
    title: 'Wayland Compositor',
    description: 'Meet Navda, the official Wayland Compositor for AvdanOS.',
    imageUrl: navda_img,
    githubUrl: 'https://github.com/Avdan-OS/Compositor',
    docUrl: '/navda/navda-intro',
  },
]

const RepoCard = ({ title, description, imageUrl, githubUrl, docUrl }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={imageUrl} alt={title} />
      <div className={styles.repo_desc}>
        <h4>{title}</h4>
        <h5>{description}</h5>

        <a href={githubUrl} style={{ display: 'block' }} target="_blank">
          Link To GitHub
        </a>
        <a href={docUrl}>See Docs</a>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.repo_list}>
          {ReposList.map((props, idx) => (
            <RepoCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
