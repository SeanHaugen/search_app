import { useState } from 'react'

export const QuestForm = ({addQuest}) => {

    const [questInfo, setQuestInfo] = useState({
        name: "",
        about: "",
        reward: "",
      });

      const handleChange = (event) => {
        setQuestInfo({ ...questInfo, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addQuest(questInfo);
        setQuestInfo({ name: "", about: "", reward: "" });
      };
    
      return (
        <div className="form-container">
          <form onSubmit={handleSubmit}> 
            <div>
              <h3>Quest Form</h3>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={questInfo.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="about"
                placeholder="about"
                value={questInfo.about}
                onChange={handleChange}
    
              />
            </div>
            <div>
              <input
                type="text"
                name="reward"
                placeholder="reward"
                value={questInfo.reward}
                onChange={handleChange}
    
              />
            </div>
            <div>
              <button>Submit Quest</button>
            </div>
          </form>
        </div>
      )
}