import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner';
import goalService from '../features/goals/goalService';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (!userData) {
      navigate('/login');
      return;
    }
    
    setUser(userData);
    fetchGoals(userData.token);
  }, [navigate]);

  const fetchGoals = async (token) => {
    try {
      setIsLoading(true);
      const goalsData = await goalService.getGoals(token);
      setGoals(goalsData);
    } catch (error) {
      toast.error('Failed to fetch goals');
    } finally {
      setIsLoading(false);
    }
  };

  const createGoal = async (goalData) => {
    try {
      setIsLoading(true);
      const newGoal = await goalService.createGoal(goalData, user.token);
      setGoals(prevGoals => [...prevGoals, newGoal]);
      toast.success('Goal created successfully!');
    } catch (error) {
      toast.error('Failed to create goal');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteGoal = async (id) => {
    try {
      setIsLoading(true);
      await goalService.deleteGoal(id, user.token);
      setGoals(prevGoals => prevGoals.filter(goal => goal._id !== id));
      toast.success('Goal deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete goal');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm onSubmit={createGoal} />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} onDelete={deleteGoal} />
            ))}
          </div>
        ) : (
          <h3 style={{ color: 'white' }}>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;