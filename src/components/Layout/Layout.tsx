import styles from "./Layout.module.css";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={styles.main}>
      <div className={styles.container}>
          {children}
      </div>
      </main>
    </>
  );
};

export default Layout;
