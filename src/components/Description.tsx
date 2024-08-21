import eventData from '../event-data/eventData.ts'

const Description = () => {
  return (
    <main>
      <p className={'description'}>{eventData.description}</p>
    </main>
  )
}

export default Description
