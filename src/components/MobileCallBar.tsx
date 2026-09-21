import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./icons";

/** Phone users can always call or book in one tap, wherever they are on the page. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgb(6_38_74/0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-brand font-semibold text-white transition active:scale-[0.97]"
        >
          <Icon name="phone" size={19} />
          Call now
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-navy font-semibold text-white transition active:scale-[0.97]"
        >
          <Icon name="calendar" size={19} />
          Book a ride
        </Link>
      </div>
    </div>
  );
}
