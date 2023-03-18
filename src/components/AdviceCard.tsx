import { useState, useEffect, useCallback } from 'react';
import Dice from '@/assets/images/icon-dice.svg';
import DesktopDivider from '@/assets/images/pattern-divider-desktop.svg';
import MobileDivider from '@/assets/images/pattern-divider-mobile.svg';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// advice slip api: https://api.adviceslip.com/advice
type Slip = {
  id: string;
  advice: string;
};

type SlipResponse = {
  slip: Slip;
};

export default function AdviceCard() {
  const [slip, setSlip] = useState<Slip>();

  // https://stackoverflow.com/questions/49263559/using-javascript-axios-fetch-can-you-disable-browser-cache
  const fetchSlip = useCallback(async () => {
    const toastId = toast.loading('loading...');
    try {
      const { data } = await axios.get<SlipResponse>(
        'https://api.adviceslip.com/advice',
        {
          // set a random param to prevent browser caching
          params: {
            t: new Date().getTime(),
          },
          headers: {
            Accept: 'application/json',
          },
        }
      );
      setSlip(data.slip);
      toast.success('success', { id: toastId });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message, { id: toastId });
      } else {
        toast.error('An unexpected error occurred', { id: toastId });
      }
    }
  }, []);

  useEffect(() => {
    fetchSlip();
  }, [fetchSlip]);

  return (
    <div className="max-w-sm md:max-w-lg bg-dark-grayish-blue-500 px-8 py-10 rounded-lg shadow relative flex flex-col items-center gap-6">
      <h1 className="text-neon-green-500 text-xs uppercase tracking-[3px]">
        advice # {slip?.id}
      </h1>
      {/* https://css-tricks.com/almanac/properties/q/quotes/ */}
      <p className="text-center font-extrabold before:content-[open-quote] after:content-[close-quote] before:font-medium after:font-medium tracking-[1px]">
        {slip?.advice}
      </p>
      <picture>
        <source srcSet={DesktopDivider} media="(min-width: 768px)" />
        <img srcSet={MobileDivider} alt="divider"></img>
      </picture>
      <button
        className="absolute bottom-0 translate-y-1/2 w-10 h-10 overflow-hidden rounded-full flex justify-center items-center bg-neon-green-500 hover:shadow-[0_0_25px] hover:shadow-neon-green-500 transition-shadow duration-300 ease-in-out"
        type="button"
        onClick={fetchSlip}
      >
        <img className="scale-75" src={Dice} alt="dice" />
      </button>
    </div>
  );
}
