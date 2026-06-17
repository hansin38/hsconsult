export interface ICarouselItem {
  id: number;
  imgSrc: string;
  height: string;
  render: () => JSX.Element;
}

export interface ICarouselProps {
  data: ICarouselItem[];
}
