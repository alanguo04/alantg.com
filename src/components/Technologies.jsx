// react, nextjs, aws, node, django, linux
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { DiAws } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiLinux } from "react-icons/di";

//import {} from "react-icons/ri"; NOT MONGO
// import {RiReactjsLine} from "react-icons/ri"; NOT DIREDIS
// import {RiReactjsLine} from "react-icons/ri"; NOT FAJNODEJS
// import {TbBrandNextjs} from "react-icons/tb"; NOT POSTGRES
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    inital:{y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiAws className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDjango className="text-7xl text-green-950"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiLinux className="text-7xl" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies