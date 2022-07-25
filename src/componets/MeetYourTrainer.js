import hannah from '../assets/hannah.jpg'

import { FaTiktok } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'


const content = {
    title: `Meet Your Trainer`,
    text: `Hello!  It's me, the trainer behind the workouts. My  name is Hannah Prine. I am an ISSA Certified Personal
    Trainer and have been immersed in the "Fitness Industry" world since 2015 when I decided that it was time for
    my weight loss journey to begin. I had always been unhapy with my body, picked on for it through my childhood/teenage
    years, and I was finally serious about making a change when I entered my freshman year of college. I went all
    in with the classic hours of cardio, bodyweight movements, underfueling my body and being obsessed with the scale dropping.
    I didn't know when to stop. I found myself knees-deep in anorexia, orthorexia and then a binge-eatting disorder. I had to
    get ahold of my life, unless I wanted to end up in the hosipital. I had enough of the restriction and commited
    myself to recovery. I had to shift my entire perspective on fitness, since i continued to have such a passion for it.`
  }

  export default function MeetYourTrainer() {
    return (
      <div className="bg-no-repeat bg-cover w-full mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-10 bg-white" >
          <div className="bg-black/70  shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-center text-2xl text-yellow-300 font-bold">{content.title}</h1>
            </div>
          </div>
        <div className='flex gap-10 flex-col md:flex-row'>
        <div className='flex flex-col gap-10 justify-center items-center'>
            <div className="bg-black/70 rounded-lg p-6 mb-auto drop-shadow-xl flex justify-center max-w-sm">
                <img src={hannah} alt="Hannah Marie Prine" class="h-72 rounded" />
            </div>
            <div className="flex justify-center items-center gap-10 p-4 bg-black/70 rounded-xl drop-shadow-xl max-w-sm">
                <a href="#"><FaTwitterSquare className="text-yellow-300 hover:text-white text-4xl" /></a>
                <a href="#"><FaInstagram className="text-yellow-300 hover:text-white text-4xl" /></a>
                <a href="#"><FaTiktok className="text-yellow-300 hover:text-white text-4xl" /></a>
            </div>
        </div>


          <div className="bg-black/70 overflow-hidden shadow rounded-lg max-w-xl text-center flex items-center">
            <div className="px-4 py-5 sm:p-6">
                <p className='text-yellow-300 indent-5 mb-2 text-base'>{content.text}</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    )
  }
  
  