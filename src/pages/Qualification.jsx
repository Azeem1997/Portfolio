import { motion } from 'framer-motion';

const qualifications = [
    {
        title: 'B.E Mechanical Engineering',
        institution: 'SNS College of Technology',
        year: '2015 - 2019',
        Percent: '83%'
    },
    {
        title: 'HSC',
        institution: 'Sri Vijay Vidyalaya, Hosur',
        year: '2013-2015',
        Percent: '89%'
    },
    {
        title: 'SSLC',
        institution: 'Sri Vijay Vidyalaya, Hosur',
        year: '2024',
        Percent: '97%'
    },
];

export default function Qualifications() {
    return (
        <div className='bg-black'>
        <div className='dark:bg-gray-900 shadow-xl rounded-xl ml-10 mr-8 p-6  border border-gray-200 dark:border-gray-700 transition-transform'>
            <h1 className='text-white text-2xl font-bold grid grid-cols-1 pl-9'>Educational Qualification</h1>
            <p className='ml-9 text-white'>
                    Development In-progress
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    display: 'inline-block',
                                    marginLeft: '6px',
                                    animation: 'bounceDot 1s infinite',
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            >
                                .
                            </span>
                        ))}
                        <style>{`
                            @keyframes bounceDot {
                            0%, 100% { transform: translateY(1px); }
                            50% { transform: translateY(-9px); }
                            }
                        `}</style>
                    </p>
            <div className="grid md:grid-cols-3 gap-6 p-8" id="qualification">
                {qualifications.map((qual, idx) => (
                    <motion.div
                        key={idx}
                        //   whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.2 }}
                        className="bg-black shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-transform"
                    >
                        <div className="text-white text-4xl mb-3">{qual.Percent}</div>
                        <h3 className="text-xl font-semibold">{qual.title}</h3>
                        <p className="text-sm text-gray-500">{qual.institution}</p>
                        <p className="text-xs text-gray-400">{qual.year}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        </div>
    );
}
