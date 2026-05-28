import React from 'react';
import { Users, GraduationCap, Building2, BookCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 'stat-students',
      icon: Users,
      value: '1,500+',
      label: 'Students Guided',
      description: 'Achieved outstanding scores in Karnataka exams'
    },
    {
      id: 'stat-teachers',
      icon: GraduationCap,
      value: '280+',
      label: 'Teachers & Officers placed',
      description: 'Secured state government appointments'
    },
    {
      id: 'stat-experience',
      icon: Building2,
      value: '100%',
      label: 'Concept Focused Teaching',
      description: 'Classrooms with smart project visualizers'
    },
    {
      id: 'stat-tests',
      icon: BookCheck,
      value: '150+',
      label: 'Tests & Mock Papers',
      description: 'Consistent preparation and simulation program'
    }
  ];

  return (
    <section className="bg-slate-50 py-12 border-b-4 border-indigo-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x-2 divide-indigo-950/20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                id={stat.id}
                className="pt-6 sm:pt-0 lg:px-6 first:pt-0 first:lg:pl-0 flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className="bg-orange-500 text-indigo-950 p-3 border-2 border-indigo-950 shadow-[2px_2px_0px_0px_#1e1b4b] mb-4 transition-all duration-300">
                  <Icon className="w-6 h-6 font-black" />
                </div>
                <h4 className="text-4xl font-display-title font-black text-indigo-900 tracking-tighter">
                  {stat.value}
                </h4>
                <p className="text-xs uppercase font-black text-indigo-950 tracking-wider mt-1.5">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-600 mt-1.5 max-w-[200px] font-semibold leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
