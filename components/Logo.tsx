export const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/icon/dark_96.png"
        alt="Copy as Markdown"
        className="dark:hidden w-6 h-6 md:w-8 md:h-8"
        style={{ imageRendering: "auto" }}
      />
      <img
        src="/icon/light_96.png"
        alt="Copy as Markdown"
        className="hidden dark:block w-6 h-6 md:w-8 md:h-8"
        style={{ imageRendering: "auto" }}
      />
      <span className="font-medium text-slate-900 dark:text-neutral-100 text-base md:text-lg">
        Copy as Markdown
      </span>
    </div>
  );
};
