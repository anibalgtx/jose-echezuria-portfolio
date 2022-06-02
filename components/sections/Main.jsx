const Main = ({ children }) => {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-400 to-purple-300 relative min-h-[600px]">
      <div className="md:container md:mx-auto mx-6">
      {children}
      </div>
    </section>
  );
};

export default Main;
