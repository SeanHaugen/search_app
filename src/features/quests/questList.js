import './quest.css';

export const QuestList = ({quests}) => {
    return (
      <div>
        {quests.map((quest) => (
          <div className="card" key={quest.name}>
            <p className="card-name">Quest Name: {quest.name}</p>
            <p className='card-about'>About: {quest.about}</p>
            <p className='card-about'>Reward: {quest.reward}</p>
          </div>
        ))}
      </div>
    );
  }