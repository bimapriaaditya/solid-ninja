// @refresh reload
import {
  useLocation,
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import App from "./routes/app";
import "./styles/root.css";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <App />
        <Scripts />
      </Body>
    </Html>
  );
}
