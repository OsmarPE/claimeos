import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Rows2, Twitch } from "lucide-react";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <article className="bg-[#15151594]/80  backdrop-blur-md p-3 border border-[#262626] rounded-lg">
    <div className="flex items-center  gap-4">
      {/* <img className="rounded-md" width={54} height={54} src="https://s3-alpha-sig.figma.com/img/d44e/feed/d54b0d58d96d6f7b3424c14848281c1e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIkybRmNXi5CN0cjUrvnIVLIGC3bYsmxYKbDXG6E-NiDSCmCMqJbvvTWXOVfy-J28wdWbEOjH~sYetVF4DGsLs2~joUMzTo88~zDJEKP54ZEh703FjhW7iJEI6cMfBQvF2DNXPiNb8ZEU-XouW0L3OuiRKsgG2TbhHgDB9gu8EPP7-nDUyg09bHi3U5k32xe4kAYgnyF0cZluRHPr3UAbBPLSOCqos8teqy5RLQMR2TWKjiXp7yd2edHjSko-TggpwSIAB2YhkbPoSWBiT1Rq-nim4gB8LEUGVfiewkperyL0j2rb6YJGXm5K7lZ4SbuISimnYH6X1OOykrluzrmew__" alt="" /> */}
      <img className="rounded-md object-cover size-[54px]" width={54} height={54} src="https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80" alt="" />
      <div className="">
        <h3 className="text-white text-sm font-medium tracking-wide">JUANSGUARNIZO</h3>
        <div className="text-[#8e8e8e] text-xs ">@juansGuarnizo</div>
      </div>
    </div>
    <Separator className="mt-4" />
    <div className="flex text-sm ">
      <div className="flex-1 p-3">
        <p className="text-[#8e8e8e] text-[10px] font-normal font-['Outfit'] tracking-wider">SEGUIDORES</p>
        <div className="text-primary text-2xl font-medium font-['Outfit']">14.5M</div>
      </div>
      <Separator orientation="vertical" className="min-h-16" />
      <div className="flex-1 p-3 flex items-center gap-3 text-[#8e8e8e]">
        <Link href={'/'}>
          <Twitch width={24} height={24} />
        </Link>
        <Link href={'/'}>
          <Instagram width={24} height={24} />
        </Link>
      </div>
      <Separator orientation="vertical" className="min-h-16" />
      <div className="flex-1 p-3 flex items-center justify-center">
        <Button>
          <Rows2 />
          Detalles
        </Button>
      </div>
    </div>
  </article>
  )
}
