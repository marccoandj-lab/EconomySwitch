import { motion } from 'framer-motion';

export function AboutUsPage() {
  const teamMembers = [
    { id: 1, name: 'Đorđe Janković', role: 'CEO', image: '/Djole.jpg' },
    { id: 2, name: 'Tamara Rajić', role: 'CFO', image: '/Tamara.jpg' },
    { id: 3, name: 'Dunja Antić', role: 'Project Manager', image: '/Dunja.jpg' },
    { id: 4, name: 'Vladimir Gašić', role: 'HR', image: '/Gasic.jpg' },
    { id: 5, name: 'Marija Urošević', role: 'Mentor', image: '/Marija.png' },
    { id: 6, name: 'Dušan Jovanović', role: 'CFO', image: '/Dusan.jpg' },
    { id: 7, name: 'Jana Pavlović', role: 'Project Manager', image: '/Jana.jpg' },
    { id: 8, name: 'Maša Vukojević', role: 'Marketing Manager', image: '/Masa.jpg' },
    { id: 9, name: 'Marko Anđelković', role: 'Developer', image: '/Marko.jpg' }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Upoznajte tim koji stoji iza EconomySwitch projekta.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="mb-24"
        >
          <div className="aspect-video w-full lg:w-3/4 xl:w-2/3 max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-sm rounded-[2rem] border border-slate-700/50 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
            <video 
              controls 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[2rem]"
              src="/copy_CF1D07D5-41C3-4D20-A998-56B6177A012E.MP4"
            >
              Vaš pretraživač ne podržava video tag.
            </video>
          </div>
        </motion.div>

        {/* Large Team Image Placeholder */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="mb-24"
        >
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-slate-100 mb-4 tracking-wide">Naš Tim</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
          </div>
          <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto aspect-[16/9] md:aspect-[21/9] bg-slate-800/80 backdrop-blur-sm rounded-[2rem] border border-slate-700/50 overflow-hidden flex flex-col items-center justify-center shadow-2xl transition-all hover:border-blue-500/30">
              <img src="/Tim.jpg" alt="EconomySwitch Timska Slika" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* 9 Individual Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
             <motion.div 
               key={member.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-[2rem] overflow-hidden hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300 p-8 flex flex-col items-center text-center group hover:-translate-y-2 shadow-lg"
             >
                {/* Individual Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-slate-900 rounded-full mb-6 border-4 border-slate-800 group-hover:border-emerald-500/50 transition-colors flex items-center justify-center overflow-hidden shadow-inner relative flex-shrink-0">
                   <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                   {member.image ? (
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="text-slate-500 text-sm font-medium relative z-10">Mentor</span>
                   )}
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">{member.name}</h3>
                
                {/* Role */}
                <p className="text-emerald-500/80 font-medium uppercase tracking-wider text-sm">{member.role}</p>
             </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
