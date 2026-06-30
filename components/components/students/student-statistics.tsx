interface StatisticsCardProps {
  title: string
  stats: { label: string; value: string | number }[]
}

function StatisticsCard({ title, stats }: StatisticsCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h4 className="text-sm font-bold mb-4">{title}</h4>
      <div className="space-y-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-sm font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StudentStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatisticsCard
        title="Department Distribution"
        stats={[
          { label: 'CSE', value: '156' },
          { label: 'ECE', value: '84' },
          { label: 'ME', value: '32' },
          { label: 'Civil', value: '12' },
        ]}
      />

      <StatisticsCard
        title="CGPA Distribution"
        stats={[
          { label: '8.0 - 10.0', value: '124 (43%)' },
          { label: '7.0 - 7.9', value: '98 (34%)' },
          { label: '6.0 - 6.9', value: '52 (18%)' },
          { label: 'Below 6.0', value: '10 (5%)' },
        ]}
      />

      <StatisticsCard
        title="Placement Status"
        stats={[
          { label: 'Selected', value: '35' },
          { label: 'In Progress', value: '156' },
          { label: 'Rejected', value: '73' },
          { label: 'Not Participated', value: '20' },
        ]}
      />

      <StatisticsCard
        title="Coding Platforms"
        stats={[
          { label: 'LeetCode', value: '78%' },
          { label: 'HackerRank', value: '45%' },
          { label: 'CodeChef', value: '32%' },
          { label: 'GeeksforGeeks', value: '89%' },
        ]}
      />

      <StatisticsCard
        title="Resume Completion"
        stats={[
          { label: 'Completed', value: '268 (94%)' },
          { label: 'In Progress', value: '12 (4%)' },
          { label: 'Not Started', value: '4 (2%)' },
          { label: 'Average Score', value: '8.2/10' },
        ]}
      />

      <StatisticsCard
        title="Interview Performance"
        stats={[
          { label: 'Average Score', value: '72/100' },
          { label: 'Highest Score', value: '96/100' },
          { label: 'Lowest Score', value: '32/100' },
          { label: 'Pass Rate', value: '68%' },
        ]}
      />
    </div>
  )
}
