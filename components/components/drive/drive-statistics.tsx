'use client'

interface DriveStatisticsProps {}

export function DriveStatistics({}: DriveStatisticsProps) {
  const stats = [
    { label: 'Applications', value: 284, unit: '' },
    { label: 'Attendance Rate', value: 92, unit: '%' },
    { label: 'Avg Assessment Score', value: 78, unit: '/100' },
    { label: 'Interview Rate', value: 68, unit: '%' },
    { label: 'Selection Ratio', value: 12.3, unit: '%' },
    { label: 'Offer Acceptance', value: 94, unit: '%' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {/* Key Statistics */}
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">{stat.label}</p>
          <p className="text-2xl font-bold text-foreground">
            {stat.value}
            <span className="text-lg ml-1">{stat.unit}</span>
          </p>
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${Math.min(stat.value, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Department Distribution */}
      <div className="bg-card border border-border rounded-lg p-4">
        <p className="text-xs font-medium text-muted-foreground mb-4">Department Distribution</p>
        <div className="space-y-2">
          {[
            { name: 'CSE', count: 89 },
            { name: 'ECE', count: 56 },
            { name: 'IT', count: 72 },
            { name: 'ME', count: 67 },
          ].map((dept) => (
            <div key={dept.name} className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{dept.name}</span>
              <span className="text-xs font-semibold text-foreground">{dept.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CGPA Distribution */}
      <div className="bg-card border border-border rounded-lg p-4">
        <p className="text-xs font-medium text-muted-foreground mb-4">CGPA Distribution</p>
        <div className="space-y-2">
          {[
            { range: '9.0 - 10.0', count: 45 },
            { range: '8.0 - 8.9', count: 98 },
            { range: '7.0 - 7.9', count: 112 },
            { range: '< 7.0', count: 29 },
          ].map((cgpa) => (
            <div key={cgpa.range} className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{cgpa.range}</span>
              <span className="text-xs font-semibold text-foreground">{cgpa.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Funnel Chart */}
      <div className="bg-card border border-border rounded-lg p-4">
        <p className="text-xs font-medium text-muted-foreground mb-4">Application Funnel</p>
        <div className="space-y-3">
          {[
            { label: 'Applied', value: 284 },
            { label: 'Shortlisted', value: 156 },
            { label: 'Interviewed', value: 108 },
            { label: 'Offered', value: 35 },
          ].map((item, index) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-foreground">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.value}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${(item.value / 284) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
