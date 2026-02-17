import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import savingsGoalShape from '../assets/savings-goal-shape.svg';

const SavingsGoal = () => {
    const [goals, setGoals] = useState(() => {
        const savedGoals = localStorage.getItem('savingsGoals');
        if (savedGoals) return JSON.parse(savedGoals);
        const oldGoal = localStorage.getItem('savingsGoal');
        if (oldGoal) {
            const parsed = JSON.parse(oldGoal);
            localStorage.removeItem('savingsGoal');
            return [parsed];
        }
        return [];
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({ name: '', target: '' });
    const [addAmount, setAddAmount] = useState('');

    useEffect(() => {
        localStorage.setItem('savingsGoals', JSON.stringify(goals));
    }, [goals]);

    useEffect(() => {
        if (activeIndex >= goals.length && goals.length > 0) {
            setActiveIndex(goals.length - 1);
        }
    }, [goals.length, activeIndex]);

    const activeGoal = goals[activeIndex];

    const handleCreateGoal = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.target) return;
        const newGoal = {
            id: Date.now(),
            name: formData.name,
            target: parseFloat(formData.target),
            current: 0
        };
        setGoals([...goals, newGoal]);
        setActiveIndex(goals.length);
        setIsAdding(false);
        setFormData({ name: '', target: '' });
    };

    const handleDeleteGoal = () => {
        if (window.confirm('Are you sure you want to delete this goal?')) {
            const newGoals = goals.filter((_, i) => i !== activeIndex);
            setGoals(newGoals);
        }
    };

    const handleAddSavings = (e) => {
        e.preventDefault();
        const amount = parseFloat(addAmount);
        if (isNaN(amount) || amount <= 0) return;
        const updatedGoals = [...goals];
        const goal = { ...updatedGoals[activeIndex] };
        goal.current = Math.min(goal.current + amount, goal.target);
        updatedGoals[activeIndex] = goal;
        setGoals(updatedGoals);
        setAddAmount('');
    };

    const progress = activeGoal ? Math.min((activeGoal.current / activeGoal.target) * 100, 100) : 0;

    return (
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', minHeight: '500px' }}>
            <div style={{ flex: 1, height: '100%' }}>
                <Card className="glass-panel" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>
                            {isAdding ? 'Create New Goal' : (goals.length > 0 ? `Goal ${activeIndex + 1} of ${goals.length}` : 'Dream Goal Tracker')}
                        </h3>
                        {!isAdding && goals.length > 0 && (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Button variant="ghost" size="sm" disabled={activeIndex === 0} onClick={() => setActiveIndex(i => i - 1)}>←</Button>
                                <Button variant="ghost" size="sm" disabled={activeIndex === goals.length - 1} onClick={() => setActiveIndex(i => i + 1)}>→</Button>
                                <Button variant="secondary" size="sm" onClick={() => setIsAdding(true)}>+</Button>
                            </div>
                        )}
                    </div>

                    {isAdding || goals.length === 0 ? (
                        <form onSubmit={handleCreateGoal} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1, justifyContent: 'center' }}>
                            <Input label="What are you saving for?" placeholder="e.g. New Laptop, Vacation" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            <Input label="Target Amount ($)" type="number" placeholder="5000" value={formData.target} onChange={(e) => setFormData({ ...formData, target: e.target.value })} required />
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <Button type="submit" style={{ flex: 1, justifyContent: 'center' }}>Start Saving</Button>
                                {goals.length > 0 && <Button variant="ghost" onClick={() => setIsAdding(false)} style={{ flex: 1, justifyContent: 'center' }}>Cancel</Button>}
                            </div>
                        </form>
                    ) : (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>{activeGoal.name}</h4>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>${activeGoal.current.toLocaleString()}</span>
                                    <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>saved of ${activeGoal.target.toLocaleString()}</span>
                                </div>
                            </div>
                            <form onSubmit={handleAddSavings} style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '450px', marginBottom: '1.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <Input placeholder="Amount to save..." type="number" value={addAmount} onChange={(e) => setAddAmount(e.target.value)} style={{ marginBottom: 0 }} />
                                </div>
                                <Button type="submit" variant="primary" size="lg" style={{ borderRadius: '14px', whiteSpace: 'nowrap' }}>Add Savings</Button>
                            </form>
                            <Button variant="ghost" onClick={handleDeleteGoal} style={{ alignSelf: 'flex-start', color: '#ef4444', padding: 0 }}>Delete this goal</Button>
                        </div>
                    )}
                </Card>
            </div>

            <div style={{ flex: '0 0 450px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'var(--gradient-sunset)', filter: 'blur(100px)', opacity: 0.15, zIndex: -1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                {activeGoal && (
                    <div style={{ position: 'relative', width: '380px', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    WebkitMaskImage: `url(${savingsGoalShape})`,
                                    maskImage: `url(${savingsGoalShape})`,
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskPosition: 'center',
                                    WebkitMaskSize: 'contain',
                                    maskSize: 'contain',
                                    background: 'white',
                                    transform: 'scale(1.01)',
                                    transformOrigin: 'center'
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    WebkitMaskImage: `url(${savingsGoalShape})`,
                                    maskImage: `url(${savingsGoalShape})`,
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskPosition: 'center',
                                    WebkitMaskSize: 'contain',
                                    maskSize: 'contain',
                                    background: `linear-gradient(to top, #f43f5e 0%, #f43f5e ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
                                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
                                }}
                            />
                        </div>
                        <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '4.5rem', fontWeight: '900', color: progress > 50 ? 'white' : 'var(--text-main)', textShadow: progress > 50 ? '0 4px 20px rgba(0,0,0,0.2)' : 'none', transition: 'all 0.5s ease' }}>{Math.round(progress)}%</div>
                        <div style={{ marginTop: '1rem', padding: '10px 24px', background: 'white', color: 'var(--primary)', borderRadius: '24px', fontWeight: '800', fontSize: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', letterSpacing: '1px', textTransform: 'uppercase' }}>Current Progress</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavingsGoal;


