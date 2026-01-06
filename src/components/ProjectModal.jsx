import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 100, scale: 0.95 }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl outline-none custom-scrollbar"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()} // Prevent close on modal click
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/10"
          >
            <X size={20} />
          </button>

          {/* Header Image */}
          <div className="relative w-full h-64 md:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tighter text-white mb-2 leading-none">
                 {project.title}
               </h2>
               <p className="text-xl text-violet-400 font-medium tracking-wide">
                 {project.description}
               </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.details || "Este proyecto representa nuestro compromiso con la excelencia y la innovación digital. Diseñado para skalabilidad y rendimiento, cada detalle ha sido cuidadosamente elaborado para ofrecer una experiencia de usuario superior."}
              </p>
            </div>

            {/* Tags Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {(project.tags || ['React', 'Tailwind', 'Motion']).map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium hover:bg-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-violet-400 hover:text-white transition-all duration-300"
                >
                  Cerrar Proyecto
                </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
