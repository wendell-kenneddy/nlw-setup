import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay({ amount, completed }: HabitDayProps) {
  const progressPercentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10  rounded-lg', {
          'bg-zinc-900 border-2 border-zinc-800': progressPercentage === 0,
          'bg-violet-900 border-2 border-violet-700':
            progressPercentage > 0 && progressPercentage < 20,
          'bg-violet-800 border-2 border-violet-600':
            progressPercentage >= 20 && progressPercentage < 40,
          'bg-violet-700 border-2 border-violet-500':
            progressPercentage >= 40 && progressPercentage < 60,
          'bg-violet-600 border-2 border-violet-500':
            progressPercentage >= 60 && progressPercentage < 80,
          'bg-violet-500 border-2 border-violet-400': progressPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">quinta-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            19/01
          </span>

          <ProgressBar progress={progressPercentage} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
