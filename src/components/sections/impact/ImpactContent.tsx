import { cn } from '@/lib/utils'
import Image from 'next/image'
const ImpactContent: React.FC = () => (
  <div
    id={'impact-section'}
    className={'flex flex-col items-center justify-center'}
  >
    <p
      id={'impact-section-title'}
      className={cn(
        'text w-full bg-zinc-900 text-center font-[Pridi]',
        'text-xl font-bold text-white underline lg:text-5xl',
      )}
    >
      {'Clean Phangan Impact'}
    </p>

    <div id={'impact-section-items'}>
      {/* item  1*/}
      <div className={'grid place-items-center'}>
        <Image
          src={'/images/impact_1.svg'}
          alt={'impact_1'}
          width={100}
          height={100}
        />
        <p className={'text-center'}>
          <span className={'text-purple-500'}>
            {'205+ Clean-up Operations'}
          </span>
          <span className={'text-white'}>
            {
              ': Clean Phangan are organizing consecutive cleanups every Tuesday demonstrating their unwavering dedication to environmental stewardship.'
            }
          </span>
        </p>
      </div>
      {/* item  2*/}
      <div className={'grid place-items-center'}>
        <Image
          src={'/images/impact_2.svg'}
          alt={'impact_2'}
          width={100}
          height={100}
        />
        <p className={'text-center'}>
          <span className={'text-purple-500'}>
            {'205+ Clean-up Operations'}
          </span>
          <span className={'text-white'}>
            {
              ': Clean Phangan are organizing consecutive cleanups every Tuesday demonstrating their unwavering dedication to environmental stewardship.'
            }
          </span>
        </p>
      </div>
      {/* item  3*/}
      <div className={'grid place-items-center'}>
        <Image
          src={'/images/impact_3.svg'}
          alt={'impact_3'}
          width={100}
          height={100}
        />
        <p className={'text-center'}>
          <span className={'text-purple-500'}>
            {'205+ Clean-up Operations'}
          </span>
          <span className={'text-white'}>
            {
              ': Clean Phangan are organizing consecutive cleanups every Tuesday demonstrating their unwavering dedication to environmental stewardship.'
            }
          </span>
        </p>
      </div>
      {/* item  4*/}
      <div className={'grid place-items-center'}>
        <Image
          src={'/images/impact_4.svg'}
          alt={'impact_4'}
          width={100}
          height={100}
        />
        <p className={'text-center'}>
          <span className={'text-purple-500'}>
            {'205+ Clean-up Operations'}
          </span>
          <span className={'text-white'}>
            {
              ': Clean Phangan are organizing consecutive cleanups every Tuesday demonstrating their unwavering dedication to environmental stewardship.'
            }
          </span>
        </p>
      </div>
    </div>
  </div>
)
export default ImpactContent
