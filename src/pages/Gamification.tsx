
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Award, Target, Gift, Crown, Zap, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Gamification = () => {
  const [userXP, setUserXP] = useState(2450);
  const [dailyChallengeCompleted, setDailyChallengeCompleted] = useState(false);
  const { toast } = useToast();

  const nextLevelXP = 3000;
  const progressPercentage = (userXP / nextLevelXP) * 100;

  const badges = [
    { id: 1, name: 'First Course', icon: BookOpen, unlocked: true, description: 'Complete your first course' },
    { id: 2, name: 'Week Streak', icon: Zap, unlocked: true, description: '7 days learning streak' },
    { id: 3, name: 'Quick Learner', icon: Target, unlocked: true, description: 'Complete 5 lessons in one day' },
    { id: 4, name: 'Knowledge Seeker', icon: Star, unlocked: false, description: 'Complete 10 courses' },
    { id: 5, name: 'Master', icon: Crown, unlocked: false, description: 'Reach level 50' },
    { id: 6, name: 'Champion', icon: Trophy, unlocked: false, description: 'Top 10 in leaderboard' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', xp: 15420, avatar: '👨‍💻' },
    { rank: 2, name: 'Sarah Kim', xp: 12850, avatar: '👩‍🎓' },
    { rank: 3, name: 'Mike Johnson', xp: 11240, avatar: '👨‍🔬' },
    { rank: 4, name: 'You', xp: userXP, avatar: '🎯' },
    { rank: 5, name: 'Emma Davis', xp: 2100, avatar: '👩‍💼' },
  ];

  const handleClaimReward = () => {
    setDailyChallengeCompleted(true);
    setUserXP(prev => prev + 100);
    
    toast({
      title: "🎉 Reward Claimed!",
      description: "You earned 100 XP! Keep up the great work!",
    });

    // Simulate confetti animation
    setTimeout(() => {
      toast({
        title: "✨ Streak Bonus!",
        description: "You're on fire! Come back tomorrow for more rewards.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-josefin font-bold beam-gradient-text">
            Your Learning Journey
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your progress, earn badges, and compete with other learners
          </p>
        </div>

        {/* XP Progress Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-beam-primary" />
              Experience Points
            </CardTitle>
            <CardDescription>Level 12 - Keep learning to reach Level 13!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>{userXP} XP</span>
                <span>{nextLevelXP} XP</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <p className="text-center text-sm text-muted-foreground">
                {nextLevelXP - userXP} XP until next level
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Badges Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-beam-secondary" />
                Achievement Badges
              </CardTitle>
              <CardDescription>Unlock badges by completing challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`relative p-4 rounded-lg border text-center transition-all hover:scale-105 ${
                      badge.unlocked
                        ? 'bg-gradient-to-br from-beam-primary/10 to-beam-secondary/10 border-beam-primary/20'
                        : 'bg-muted/50 border-muted opacity-60'
                    }`}
                  >
                    <badge.icon 
                      className={`w-8 h-8 mx-auto mb-2 ${
                        badge.unlocked ? 'text-beam-primary' : 'text-muted-foreground'
                      }`} 
                    />
                    <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    {badge.unlocked && (
                      <Badge className="absolute -top-2 -right-2 text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Challenge */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-beam-accent" />
                Daily Challenge
              </CardTitle>
              <CardDescription>Complete today's challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-beam-accent/10 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-beam-accent" />
                </div>
                <h4 className="font-semibold mb-2">
                  {dailyChallengeCompleted ? "Challenge Complete!" : "Read 3 Lessons"}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {dailyChallengeCompleted 
                    ? "Great job! Come back tomorrow for a new challenge." 
                    : "Complete 3 lessons today to earn bonus XP"
                  }
                </p>
                <Button
                  onClick={handleClaimReward}
                  disabled={dailyChallengeCompleted}
                  className={dailyChallengeCompleted ? "bg-green-500" : "beam-gradient"}
                >
                  {dailyChallengeCompleted ? "Claimed! ✨" : "Claim Reward"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Global Leaderboard
            </CardTitle>
            <CardDescription>See how you rank against other learners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.name === 'You' 
                      ? 'bg-beam-primary/10 border border-beam-primary/20' 
                      : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {user.rank <= 3 ? <Crown className="w-4 h-4" /> : user.rank}
                    </div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.xp.toLocaleString()} XP</p>
                    </div>
                  </div>
                  {user.rank <= 3 && (
                    <Badge variant={user.rank === 1 ? "default" : "secondary"}>
                      #{user.rank}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gamification;
