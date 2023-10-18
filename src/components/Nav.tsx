import { A } from "solid-start";
import Button from "./Button";

export const MainNav = () => {
  return (
    <>
      <div class="bg-slate-700 text-white py-4 px-6 rounded-md shadow-sm mb-6">
        <div class="flex justify-between items-center">
          <div>
            <h5 class="text-lg font-semibold tracking-wide">Ninja Shop</h5>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <A href="/" class="inline-block p-3 transition-all hover:font-bold">
              Home
            </A>
            <A
              href="/about"
              class="inline-block p-3 transition-all hover:font-bold"
            >
              About
            </A>
            <A
              href="/app"
              class="inline-block p-3 transition-all hover:font-bold"
            >
              App
            </A>
            <Button>
              <span>Element</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
