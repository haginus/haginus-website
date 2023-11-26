import { OpenInNew } from "@mui/icons-material";
import styles from './Link.module.scss';

interface LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export default function Link({ children, ...anchorProps }: LinkProps) {
  return (
    <a {...anchorProps} className={styles.link}>
      {children}
      <OpenInNew sx={{ fontSize: '0.8em', verticalAlign: 'top' }} />
    </a>
  );
}