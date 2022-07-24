const ourMissionContent = {
  title: `OUR MISSION`,
  text1: `As a personal training service, we strive to differentiate ourselves, think outside the box, and prove to our clients that change is possible our bodies are designed to thrive via movement.`,
  text2: `Focusing on the fundamentals, learning proper form and techique along with using progressive overload will deliver you the results you're striving for. `,
  text3: `This is not a quick fix, this is not a "Get abs in 21 days" program, this is reality. This program combined with a bit of determination can take you far. Show yourself what you're capable of.`,
  
}
export default function Example() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-screen flex justify-center items-center">
      <div className="bg-black/70 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-center text-2xl text-yellow-300 font-bold">{ourMissionContent.title}</h1>
        </div>
      </div>
    </div>
  )
}

