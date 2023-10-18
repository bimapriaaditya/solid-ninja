import Card from "~/components/Card";
import MyBanner from "../assets/banner.png";
import { MainNav } from "~/components/Nav";

export const App = () => {
  return (
    <>
      <section class="container mx-auto">
        <div class="p-12">
          <MainNav />

          <img src={MyBanner} alt="myBannerImage" class="block mb-8" />

          <div class="flex w-full gap-4 justify-center">
            <Card class="bg-red-100 w-1/4" />
            <Card class="bg-blue-300 w-1/4" />
            <Card class="bg-green-300 w-1/4" />
            <Card class="bg-pink-300 w-1/4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
