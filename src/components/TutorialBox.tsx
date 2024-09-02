import { Tutorial } from '@/types/types'
import { LinkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import Topic from './Topic'

export default function TutorialBox({
  title,
  isFree,
  description,
  linkToContent,
  language,
}: Tutorial) {
  return (
    <div className="border w-full p-4 border-dotted border-emerald-50 flex flex-col justify-between">
      <div>
        <h3 className="text-emerald-300 mb-4 flex items-center">
          {title}
          {!isFree ? (
            <span className="text-white ms-4">
              (<span className="text-emerald-400">$</span>)
            </span>
          ) : (
            ''
          )}
        </h3>
        <p className="text-sm mb-4">{description}</p>
      </div>
      <div className="text-sm flex items-center gap-x-4">
        <div>
          <LinkIcon className="size-4" />
        </div>
        <Link
          target="_blank"
          className="text-emerald-200 hover:underline text-ellipsis overflow-hidden"
          href={linkToContent}
        >
          {linkToContent}
        </Link>
      </div>
      <div className="mt-4">
        <Topic topic={language} />
      </div>
    </div>
  )
}
