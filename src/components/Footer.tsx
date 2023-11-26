import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className='muted'>
        Made with Next.js and Material UI. Hosted on Cloud Run (Google Cloud Platform).
      </span>
    </footer>
  )
}