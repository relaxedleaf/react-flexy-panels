export type OnPreResizeReturnOptions = {
  abort?: boolean;
};

export type OnPreResizeFunction = (sizes: {
  panel1NewSize: number;
  panel2NewSize: number;
}) => OnPreResizeReturnOptions | undefined | void;
