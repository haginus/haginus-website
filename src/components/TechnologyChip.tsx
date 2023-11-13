import { Chip, ChipProps } from "@mui/material";
import { technologies } from "../lib/technologies";

interface TechnologyChipProps extends ChipProps {
  technology: keyof typeof technologies;
}


export default function TechnologyChip({ technology, ...props }: TechnologyChipProps) {
  const technologyObject = technologies[technology];
  return (
    <Chip 
      {...props} 
      icon={
        <div className="nsl" style={{ width: 24, height: 24 }}>
          <img src={technologyObject.icon} width={24} height={24} /> 
        </div>
      }
      label={technologyObject.name}
      variant="outlined"
    />
  )
}