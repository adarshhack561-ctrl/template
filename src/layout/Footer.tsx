import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer 
      className="py-4 text-center text-sm border-t"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
        color: 'var(--text)',
        boxShadow: `0 -1px 3px var(--shadow)`,
      }}
    >
      © 2025 My Application • All Rights Reserved
    </footer>
  );
};
export default Footer;
