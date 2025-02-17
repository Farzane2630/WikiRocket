import Image from "next/image"
import Link from "next/link"

type Props = {
   result: Result
}

export default function Item({ result }: Props) {
   const itemTextCol = (
      <div className="flex flex-col justify-center">
         <h2>
            <Link href={`http://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
               className="text-xl font-bold underline">
               {result.title}
            </Link>
         </h2>
         <p>{result.extract}</p>
      </div>
   )

   const content = result?.thumbnail?.source
      ? (
         <article className="m-4 max-w-lg">
            <div className="flex gap-4">
               <div className="flex flex-col justify-center">
                  <Image
                     src={result.thumbnail.source}
                     alt={result.title}
                     width={result.thumbnail.width}
                     height={result.thumbnail.height}
                     loading="lazy"
                  />
               </div>
               {itemTextCol}
            </div>
         </article>
      )
      : (
         <article className="m-4 max-w-lg">
            {itemTextCol}
         </article>
      )
   return content
}