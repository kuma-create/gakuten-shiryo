import dynamic from "next/dynamic"

const WhitepaperComponent = dynamic(() => import("./enhanced-whitepaper"), {
  ssr: false,
})

export default function Component() {
  return <WhitepaperComponent />
}
