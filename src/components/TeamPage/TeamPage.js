import './TeamPage.css'

const TeamPage = ({teamName}) => {
  return (
    <section className='team-page'>
      <section className='drivers'>
        <div className='driver'>
          <img 
            src='https://t3.ftcdn.net/jpg/00/88/78/20/360_F_88782064_x9Ow2lKie1fr4ncBYLE88x6InooDKAq7.jpg' 
            className='driver-img' 
            alt='example driver'/>
          <h1 className='driver-name'>Driver 1</h1>
        </div>
        <div className='driver'>          
          <img 
            src='https://t3.ftcdn.net/jpg/00/88/78/20/360_F_88782064_x9Ow2lKie1fr4ncBYLE88x6InooDKAq7.jpg' 
            className='driver-img' 
            alt='example driver'/>
          <h1 className='driver-name'>Driver 2</h1>
        </div>
      </section>
      <div className='team'>
        <div className='team-info'>
          <div className='team-header'>
            <h2>{teamName}</h2>
          </div>
          <ul className='team-stats'>
            <li>Team ranking</li>
            <li>Team win percentage</li>
            <li>Etc etc</li>
          </ul>
        </div>
        <section className='race-result'>Race 1 Result</section>
        <section className='race-result'>Race 2 Result</section>
        <section className='race-result'>Race 3 Result</section>
      </div>
    </section>
  )
}

export default TeamPage;