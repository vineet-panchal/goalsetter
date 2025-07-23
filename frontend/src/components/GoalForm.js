import { useState } from 'react';

function GoalForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      return;
    }

    onSubmit({ text });
    setText('');
  };

  return (
    <section className="goal-form">
      <form onSubmit={handleSubmit}>
        <h2>Set a New Goal</h2>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder="Enter your goal"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;