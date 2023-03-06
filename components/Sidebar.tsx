import styles from '../styles/sidebar.module.css';
import ActiveLink from './ActiveLink';

export enum SIDEBAR_TYPE {
  MAIN = 'main',
  PAGES_DATA_FETCHING = 'pages & data fetching',
  AMP = 'amp',
  TAILWIND = 'tailwind',
}

export type SidebarProps = {
  type: SIDEBAR_TYPE;
};
const Sidebar = ({ type }: SidebarProps) => {
  const getContent = () => {
    let content = null;
    switch (type) {
      case SIDEBAR_TYPE.PAGES_DATA_FETCHING:
        content = (
          <>
            <ActiveLink
              href={'/pages-data-fetching'}
              content="Pages & data fetching"
            />
            <ActiveLink
              href={'/pages-data-fetching/ssg-no-data'}
              content="Static Generation, no data"
            />
            <ActiveLink
              href={'/pages-data-fetching/ssg-external-content'}
              content="SSG"
            />
            <ActiveLink
              href="/pages-data-fetching/top-stories/stories/35037723"
              activeHref="/pages-data-fetching/top-stories/stories/[id]"
              content="SSG + pre-rendering"
            />
            <ActiveLink href={'/pages-data-fetching/ssr'} content="SSR" />
            <ActiveLink href={'/pages-data-fetching/isr'} content="ISR" />
            <ActiveLink href={'/pages-data-fetching/csr'} content="Csr" />
          </>
        );
        break;
      case SIDEBAR_TYPE.AMP:
        content = (
          <>
            <ActiveLink href={'/amp'} content="AMP" />
            <ActiveLink href={'/amp/enabled'} content="Amp-first page" />
            <ActiveLink href={'/amp/hybrid'} content="Hybrid page" />
          </>
        );
        break;
      case SIDEBAR_TYPE.TAILWIND:
        content = null;
        break;
      case SIDEBAR_TYPE.MAIN:
      default:
        content = (
          <>
            <ActiveLink
              href="/pages-data-fetching"
              content="Pages & data fetching"
            />
            <ActiveLink href="/amp" content="AMP" />
            <ActiveLink href="/tailwind" content="Styling using Tailwind" />
          </>
        );
        break;
    }
    return (
      <>
        <ActiveLink
          href={'/'}
          content="Home"
          isBackLink={type !== SIDEBAR_TYPE.MAIN}
        />
        {content}
      </>
    );
  };

  return <nav className={styles.nav}>{getContent()}</nav>;
};

export default Sidebar;
