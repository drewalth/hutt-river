import heroImage from '../assets/john-huisjen-cover.jpeg'
import eventData from '../event-data/eventData'

const Hero = () => {
  const locationName = eventData.location?.name
    ? ` @ ${eventData.location.name}`
    : ''

  return (
    <div className={'hero'}>
      <img src={heroImage} alt="image" />
      <div className={'card'}>
        <div className={'header'}>
          <h1>{eventData.name}</h1>
          <h4>{`${eventData.formattedDate}${locationName}`}</h4>
        </div>
        <div className={'content'}>
          <a
            className={'button button-primary'}
            href={'https://huttvalleycanoeclub.org.nz/hutt-gorge-race/'}
            rel={'nofollow'}
          >
            Register for the Race 🔗
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
