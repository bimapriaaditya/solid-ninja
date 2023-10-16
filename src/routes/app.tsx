import Card from "~/components/Card";
import MyBanner from "../assets/banner.png";

export const App = () => {
  return (
    <>
      <img src={MyBanner} alt="myBannerImage" class="block mb-8" />

      <div class="p-4 flex gap-4 flex-col">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
