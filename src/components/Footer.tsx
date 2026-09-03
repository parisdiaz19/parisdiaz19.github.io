import { site } from "../content";

export function Footer() {
  return (
    <footer>
      <div>
        © {site.copyrightYear} {site.name}
      </div>
    </footer>
  );
}
