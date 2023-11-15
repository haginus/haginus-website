import { OpenInNew } from "@mui/icons-material";
import './Link.scss';

interface LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export default function Link({ children, ...anchorProps }: LinkProps) {
  return (
    <a {...anchorProps} className="link">
      {children}
      <OpenInNew sx={{ fontSize: '0.8em', verticalAlign: 'top' }} />
    </a>
  );
}