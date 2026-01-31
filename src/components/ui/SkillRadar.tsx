"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const data = [
    { subject: 'Coding', A: 120, fullMark: 150 },
    { subject: 'Hiking', A: 140, fullMark: 150 },
    { subject: 'Coffee', A: 150, fullMark: 150 },
    { subject: 'Photo', A: 90, fullMark: 150 },
    { subject: 'Sleep', A: 60, fullMark: 150 },
    { subject: 'Gaming', A: 100, fullMark: 150 },
];

export default function SkillRadar() {
    return (
        <div className="h-64 w-full flex items-center justify-center font-mono text-xs">
            {/* Recharts responsive container needs a defined height parent */}
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="#e5e5e5" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A5D4E', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                        name="Stefan"
                        dataKey="A"
                        stroke="#4A5D4E"
                        strokeWidth={2}
                        fill="#4A5D4E"
                        fillOpacity={0.2}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
