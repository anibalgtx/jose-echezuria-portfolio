const Main = ({ children }) => {
  return (
    <section className="h-screen relative min-h-[600px]">
      <div className="md:container md:mx-auto mx-6">
      {children}
      </div>
    </section>
  );
};

export default Main;
