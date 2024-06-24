
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-4 flex w-full items-center justify-between border-t p-4 sm:p-6">
      <div className="text-sm">
        <span >Max Bungay |</span>
        <span className="text-muted-foreground">
          {" "}
          Frontend Developer
        </span>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/max-b10/the-fpl-manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4 cursor-pointer hover:text-primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/max-bungay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-4 w-4 cursor-pointer hover:text-primary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
