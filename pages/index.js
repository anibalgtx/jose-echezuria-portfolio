import Navbar from "../components/layout/Navbar";
import Main from "../components/sections/Main";
import Title from "../components/common/Title";

export default function Home() {
  return (
    <Main>
      <Navbar />
      <div className="absolute top-1/2 transform -translate-y-1/2 space-y-4 md:space-y-8 mx-6">
        <Title />
        <h1 className="text-white font-grotesk font-bold md:text-[80px] text-5xl">
          UX/UI Designer | Graphic Designer
        </h1>
        <h2 className="font-grotesk font-normal md:text-3xl text-base">
          Glad you a re here today! Let’s work together and make amazing things
        </h2>
        <button className="bg-black text-white rounded-2xl font-medium sm:text-xl text-base px-8 sm:py-4 py-3">
          See my projects{" "}
        </button>
      </div>
    </Main>
  );
}
