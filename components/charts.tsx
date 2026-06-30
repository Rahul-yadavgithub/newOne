'use client'

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Placement Trend Chart */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Monthly Placement Trend
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Jan</span>
              <span className="font-semibold text-foreground">42</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                style={{ width: '42%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Feb</span>
              <span className="font-semibold text-foreground">58</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                style={{ width: '58%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Mar</span>
              <span className="font-semibold text-foreground">72</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                style={{ width: '72%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Apr</span>
              <span className="font-semibold text-foreground">65</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">May</span>
              <span className="font-semibold text-foreground">87</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                style={{ width: '87%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Distribution */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Department Placement Distribution
        </h3>
        <div className="space-y-4">
          {[
            { name: 'CSE', count: 89, percent: 85, color: 'from-primary to-secondary' },
            { name: 'ECE', count: 56, percent: 78, color: 'from-secondary to-accent' },
            { name: 'Mechanical', count: 42, percent: 72, color: 'from-accent to-primary' },
            { name: 'Civil', count: 38, percent: 65, color: 'from-purple-500 to-pink-500' },
          ].map((dept) => (
            <div key={dept.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground font-medium">{dept.name}</span>
                <span className="font-semibold text-foreground">{dept.count}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${dept.color} h-full rounded-full`}
                  style={{ width: `${dept.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Distribution */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Salary Distribution
        </h3>
        <div className="space-y-3">
          {[
            { range: '5-10 LPA', count: 28, percent: 8 },
            { range: '10-15 LPA', count: 89, percent: 27 },
            { range: '15-20 LPA', count: 134, percent: 41 },
            { range: '20-25 LPA', count: 54, percent: 17 },
            { range: '25+ LPA', count: 19, percent: 6 },
          ].map((salary) => (
            <div key={salary.range} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground w-20">{salary.range}</span>
              <div className="flex-1 mx-4 bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
                  style={{ width: `${salary.percent}%` }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-foreground w-12 text-right">
                {salary.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Drive Timeline */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
        <h3 className="text-lg font-semibold text-foreground mb-4">Drive Timeline</h3>
        <div className="space-y-4">
          {[
            { company: 'Google', date: 'Dec 15-20', status: 'Completed', color: 'bg-emerald-100' },
            {
              company: 'Microsoft',
              date: 'Dec 22-25',
              status: 'In Progress',
              color: 'bg-blue-100',
            },
            {
              company: 'Amazon',
              date: 'Dec 28-Jan 2',
              status: 'Upcoming',
              color: 'bg-orange-100',
            },
            {
              company: 'Meta',
              date: 'Jan 5-10',
              status: 'Planned',
              color: 'bg-purple-100',
            },
          ].map((drive, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${drive.color}`}></div>
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{drive.company}</p>
                <p className="text-xs text-muted-foreground">{drive.date}</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                {drive.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
