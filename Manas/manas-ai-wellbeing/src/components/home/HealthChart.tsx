
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the mental health chart
const generateMockData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now.getTime() - (i * 24 * 60 * 60 * 1000));
    const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    // Generate data with an overall upward trend but with some randomness
    const wellnessScore = Math.min(85, Math.max(40, 
      40 + ((30 - i) * 1.5) + (Math.random() * 10 - 5)
    ));
    
    data.push({
      day,
      wellnessScore: Math.round(wellnessScore),
      anxietyLevel: Math.round(100 - wellnessScore + (Math.random() * 10 - 5)),
    });
  }
  
  return data;
};

const HealthChart = () => {
  const [chartData, setChartData] = useState(generateMockData());
  
  // Optional: Add animation by updating data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [...chartData];
      const lastItem = newData[newData.length - 1];
      
      // Slightly adjust the last value
      newData[newData.length - 1] = {
        ...lastItem,
        wellnessScore: Math.min(85, Math.max(40, lastItem.wellnessScore + (Math.random() * 4 - 2))),
      };
      
      setChartData(newData);
    }, 3000); // Update every 3 seconds
    
    return () => clearInterval(interval);
  }, [chartData]);

  return (
    <Card className="w-full shadow-lg card-effect">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Mental Health Improvement</CardTitle>
        <CardDescription>30-day wellness trend analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="day" 
                tick={{ fontSize: 12 }} 
                tickFormatter={(value, index) => index % 5 === 0 ? value : ''} 
              />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '8px',
                  border: '1px solid #eaeaea',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="wellnessScore" 
                name="Wellness Score"
                stroke="#6C63FF" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: '#6C63FF', stroke: 'white', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="anxietyLevel" 
                name="Anxiety Level"
                stroke="#FF6384" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: '#FF6384', stroke: 'white', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthChart;
