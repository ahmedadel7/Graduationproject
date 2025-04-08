import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col justify-center items-center p-10">
        {props.children}
      </main>
      <footer>
    <Footer />
      </footer>
    </>
  );
};

export default Layout;
