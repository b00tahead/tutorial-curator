import Link from 'next/link'
import TutorialBox from './TutorialBox'

export default function FeaturedTutorials() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Featured tutorials</h3>
        <Link
          className="text-sm text-emerald-200 hover:text-emerald-400 hover:underline"
          href="/tutorials"
        >
          View all tutorials
        </Link>
      </div>
      <div className="flex flex-col xs:items-center lg:grid lg:grid-cols-3 lg:gap-4 gap-y-4">
        <TutorialBox
          title="The Python Tutorial"
          description="This tutorial introduces the reader informally to the basic concepts and features of the Python language and system."
          isFree={true}
          language="Python"
          linkToContent="https://docs.python.org/3/tutorial/index.html"
        />
        <TutorialBox
          title="The Local Library website"
          description="An Express (Node) tutorial where users develop a website that might be used to manage the catalog for a local library."
          isFree={true}
          language="JavaScript"
          linkToContent="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website"
        />
        <TutorialBox
          title="Beginner's Guide to C++"
          description="An organized collection of links to topic articles about learning modern, idiomatic C++."
          isFree={false}
          language="C++"
          linkToContent="https://hackingcpp.com/cpp/beginners_guide.html"
        />
      </div>
    </div>
  )
}
