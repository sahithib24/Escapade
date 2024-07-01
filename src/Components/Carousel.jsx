import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FormInput from './FormInput';
import { Inputs } from './Data1';
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import im from "../Images/pic5.jpeg"

const variants = {
  initial: direction => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [values, setValues] = useState({
    name: "",
    college: "",
    number: "",
    email: "",
  });

  const nextStep = () => {
    setDirection(1);
    if (index === Inputs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(Inputs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Saved: ${values[Inputs[index].name]}`);
  };

  return (
    <div className="p-0 m-0 box-border">
    <div className="flex h-screen justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${im})` }}>
      <div className="m-auto sm:w-full md:w-3/4 lg:w-1/2 max-w-screen-lg aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg bg-opacity-50 bg-black p-4">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={Inputs[index].id}
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            custom={direction}
            className='align-center justify-center  flex'
          >
            <form onSubmit={handleSave}>
              <FormInput
                {...Inputs[index]}
                value={values[Inputs[index].name]}
                onChange={onChange}
              />
              <button type="submit" className="w-full h-[50px] p-[10px] text-white rounded-lg font-bold text-[18px] cursor-pointer mt-[15px] p-4 min-w-[64px] rounded-full bg-purple-900 hover:bg-purple-800 focus:outline-none text-white flex items-center justify-center">Save</button>
            </form>
          </motion.div>
        </AnimatePresence>
        <button class="p-4 min-w-[64px] rounded-full bg-purple-900 hover:bg-purple-800 focus:outline-none text-white flex items-center justify-center absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevStep}><LuChevronLeftCircle size={32}/></button>
        <button class="p-4 min-w-[64px] rounded-full bg-purple-900 hover:bg-purple-800 focus:outline-none text-white flex items-center justify-center absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextStep}><LuChevronRightCircle size={32}/></button>
      </div>
    </div>
    </div>
  );
}

export default Carousel;
