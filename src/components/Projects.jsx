import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'>Projects
            </motion.h2>
            <div>
                {PROJECTS.map((proj, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img src={proj.image} height={150} width={150}
                                alt={proj.title}
                                className='mb-6 rounded'
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{proj.title}</h6>
                            <p className='mb-4 text-neutral-400'>{proj.description}</p>
                            {proj.technologies.map((tech, index1) => (
                                <span key={index1}
                                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;