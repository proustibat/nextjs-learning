import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "../styles/sidebar.module.css";

const ActiveLink = ({
  href,
  activeHref,
  content,
  isBackLink = false,
}: {
  href: string;
  activeHref?: string;
  content: ReactNode;
  isBackLink?: boolean;
}) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <div
        className={clsx({
          [styles.active]: router.pathname === (activeHref || href),
        })}
      >
        {isBackLink ? "← " : ""}
        {content}
      </div>
    </Link>
  );
};

export default ActiveLink;
