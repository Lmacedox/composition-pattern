import { Widget } from '@/components/Widget'
import { WidgetSomeProperties } from '@/components/WithoutComposition/WidgetWithSomeProperties'

export default function Home() {
  return (
    <main className="pb-20 pt-5 flex flex-col items-center justify-center ">
      <div className="rounded border mb-5 p-5 border-stone-50">
        <h1 className="text-amber-50 text-2xl mb-[10px]">With Composition</h1>

        <Widget />
      </div>

      <div className="rounded border p-5 border-stone-50">
        <h1 className="text-amber-50 text-2xl mt-[10px]">
          Without Composition
        </h1>
        <WidgetSomeProperties />
      </div>
    </main>
  )
}
