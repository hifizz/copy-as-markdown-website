import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center space-x-3">
              <Image
                src="/icon/dark_32.png"
                alt="Copy as Markdown"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/icon/light_32.png"
                alt="Copy as Markdown"
                width={24}
                height={24}
                className="hidden dark:block"
              />
              <span className="font-medium text-slate-900 dark:text-neutral-100">
                Copy as Markdown
              </span>
            </div>
    )
}