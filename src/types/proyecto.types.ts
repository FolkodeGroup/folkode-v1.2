export type ModalSection = {
  key: string;
  title: string;
  description: string;
  images?: string[];
  subsections?: ModalSection[];
};

export type ModalData = {
  title: string;
  sections: ModalSection[];
};
