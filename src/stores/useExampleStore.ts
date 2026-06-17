import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

interface IExampleStore {
  example: string;
  setExample: (props) => void;
}

export const useExampleStore = createWithEqualityFn<IExampleStore>()((set) => ({
  example: '',
  setExample: (props: string) => set(() => ({ example: props })),
}), shallow);
